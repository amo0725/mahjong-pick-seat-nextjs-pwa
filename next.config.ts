/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  fallbacks: {
    document: '/offline.html', // Fallback for document/page requests
    // image: '/img/fallback-image.png',  // Example: if you have a fallback image
    // font: '/font/fallback-font.woff2', // Example: if you have a fallback font
  },
});

const nextConfig = {
  // Your Next.js config options here (e.g. reactStrictMode, images, etc.)
  reactStrictMode: true,
  // If you have other configurations, they merge with withPWA
};

module.exports = withPWA(nextConfig);
