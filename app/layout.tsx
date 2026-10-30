import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#041126',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'ESSENCE | From Ideas to Impact — Chetana’s',
    template: '%s | ESSENCE — Chetana’s',
  },
  description: siteConfig.description,
  keywords: [
    'ESSENCE',
    'From Ideas to Impact',
    'Chetana CiEL',
    'Chetana R. K. Institute of Management & Research',
    'Institute of Management & Research',
    'student entrepreneurship',
    'startup competition',
    'Grand Fund Pool ₹1.5 Lakh',
  ],
  authors: [{ name: "Chetana's CiEL" }],
  creator: "Chetana's Centre for Innovation & Entrepreneurship Learning",
  publisher: "Chetana's Trust",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: 'ESSENCE — From Ideas to Impact',
    description: siteConfig.description,
    siteName: 'ESSENCE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESSENCE | Chetana’s',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#041126] text-[#F7F4EC] antialiased selection:bg-[#D4AF5A]/30 selection:text-[#F0D99A]">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
