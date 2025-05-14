import { favicons } from 'favicons';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Determine the correct base path whether the script is run from project root or scripts/
const __filename = fileURLToPath(import.meta.url);
const scriptDir = path.dirname(__filename);
const projectRoot = path.resolve(scriptDir, '..');

const sourceImage = path.join(projectRoot, 'icon-source.png');
const outputDir = path.join(projectRoot, 'public', 'icons');
const publicDir = path.join(projectRoot, 'public');
const manifestPath = path.join(projectRoot, 'public', 'manifest.json');

async function generateAndPlaceIcons() {
  try {
    if (!(await fs.pathExists(sourceImage))) {
      console.error(`Error: Source image not found at ${sourceImage}`);
      console.error(
        "Please ensure you have saved the image as 'icon-source.png' in the project root."
      );
      return;
    }

    console.log('Reading manifest.json for PWA configuration...');
    const manifestData = await fs.readJson(manifestPath);

    const configuration = {
      path: '/icons/', // Path for HTML links, Next.js public folder resolves this
      appName: manifestData.name,
      appShortName: manifestData.short_name,
      appDescription: manifestData.description,
      background: manifestData.background_color,
      theme_color: manifestData.theme_color,
      display: manifestData.display,
      orientation: 'any', // Or "portrait", "landscape"
      start_url: manifestData.start_url, // Used for some PWA hints
      logging: true,
      pixel_art: false,
      icons: {
        android: true, // Trying with purpose directly
        appleIcon: { offset: 10 }, // Create Apple touch icons with offset
        appleStartup: false, // No need for startup images for now
        favicons: true, // Create regular favicons (favicon.ico, favicon-16x16.png, favicon-32x32.png)
        windows: false, // No Windows Metro tiles for now
        yandex: false, // No Yandex browser icon
      },
    };

    console.log(`Generating icons from ${sourceImage}...`);
    const response = await favicons(sourceImage, configuration);

    // Log all generated image names BEFORE saving/renaming
    console.log(
      'Favicons generated image names:',
      response.images.map((img) => img.name)
    );

    console.log(`Ensuring output directory exists: ${outputDir}`);
    await fs.ensureDir(outputDir);
    console.log(`Ensuring public directory exists: ${publicDir}`);
    await fs.ensureDir(publicDir);

    console.log('Saving generated images to public/icons/...');
    await Promise.all(
      response.images.map(async (image) => {
        const filePath = path.join(outputDir, image.name);
        await fs.writeFile(filePath, image.contents);
        console.log(`Saved image: ${filePath}`);
      })
    );

    console.log(
      'Saving specific generated files (e.g., favicon.ico to public/)...'
    );
    await Promise.all(
      response.files.map(async (file) => {
        if (file.name === 'favicon.ico') {
          const faviconDestPath = path.join(publicDir, file.name); // public/favicon.ico
          await fs.writeFile(faviconDestPath, file.contents);
          console.log(`Saved file: ${faviconDestPath}`);
        }
        // Other files (like browserconfig, yandex browser manifest) are ignored for now.
        // We are not saving response.html as Next.js Metadata API handles <head> tags.
      })
    );

    console.log(
      'Renaming files to match manifest.json and layout.tsx references...'
    );
    const renames = [
      { from: 'android-chrome-192x192.png', to: 'icon-192x192.png' },
      { from: 'android-chrome-512x512.png', to: 'icon-512x512.png' },
      {
        from: 'android-chrome-maskable-192x192.png',
        to: 'icon-maskable-192x192.png',
      },
      {
        from: 'android-chrome-maskable-512x512.png',
        to: 'icon-maskable-512x512.png',
      },
      // apple-touch-icon.png is usually generated correctly.
      // favicon.ico is handled above and placed in public/
    ];

    for (const rn of renames) {
      const oldPath = path.join(outputDir, rn.from);
      const newPath = path.join(outputDir, rn.to);
      if (await fs.pathExists(oldPath)) {
        await fs.rename(oldPath, newPath);
        console.log(`Renamed: ${oldPath} -> ${newPath}`);
      } else {
        // It's possible favicons changes its naming, or an icon isn't generated.
        // This isn't critical if the main ones (192, 512) are present.
        console.warn(
          `File not found for renaming (this might be okay): ${oldPath}`
        );
      }
    }

    // Verify apple-touch-icon.png exists
    const appleIconPath = path.join(outputDir, 'apple-touch-icon.png');
    if (await fs.pathExists(appleIconPath)) {
      console.log(`Found: ${appleIconPath}`);
    } else {
      console.warn(
        `Warning: apple-touch-icon.png not found at ${appleIconPath}. Check favicons output if this is required.`
      );
    }

    console.log('\\nIcon generation process complete!');
    console.log('Please check the following locations:');
    console.log(`- Icons directory: ${outputDir}`);
    console.log(`- Favicon: ${path.join(publicDir, 'favicon.ico')}`);
    console.log(
      "\\nEnsure your 'public/manifest.json' and 'src/app/layout.tsx' (metadata.icons) reference these files correctly."
    );
    console.log(
      'The script attempted to name files according to common PWA practices and your existing config.'
    );
  } catch (error) {
    console.error('Error during icon generation:', error);
  }
}

generateAndPlaceIcons();
