import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import { Noto_Sans_TC, Inter } from 'next/font/google'; // Import fonts
import './globals.css';
import ThemeTransitionWrapper from '@/components/ThemeTransitionWrapper'; // Import the new wrapper

// Initialize fonts
const notoSansTC = Noto_Sans_TC({
  subsets: ['latin', 'latin-ext'], // Add 'latin-ext' for more complete CJK character coverage if needed
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-tc',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '麻將選位神器 | Mahjong Pick Seat',
  description: '一個簡單好用的線上麻將選位、風位決定工具，支援PWA離線使用。',
  manifest: '/manifest.json',
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: '/icons/icon-192x192.png',
    shortcut: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png', // Standard Apple touch icon
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F7FA' },
    { media: '(prefers-color-scheme: dark)', color: '#1E1E2F' },
  ],
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='zh-Hant'
      suppressHydrationWarning
      className={`${notoSansTC.variable} ${inter.variable} font-sans`}
    >
      <head>
        <meta name='mobile-web-app-capable' content='yes' />
      </head>
      <body className='antialiased bg-theme-light-bg text-theme-light-text dark:bg-theme-dark-bg dark:text-theme-dark-text'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ThemeTransitionWrapper>{children}</ThemeTransitionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
