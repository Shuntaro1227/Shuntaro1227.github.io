import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

function stripHtmlTags(html: string): string {
  let text = html.replace(/<\\?\s*a\s+[^>]*>([^<]*)<\\?\s*\/\s*a\s*>/gi, '$1');
  text = text.replace(/<[^>]*>/g, '');
  text = text.replace(/\n/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

const cleanDescription = customMetadata.description || (aboutMe.description ? stripHtmlTags(aboutMe.description) : undefined);

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: cleanDescription,
  openGraph: {
    title: customMetadata.title || aboutMe.name,
    description: cleanDescription,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: customMetadata.title || aboutMe.name,
    description: cleanDescription,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <main className="">{children}</main>
      </body>
    </html>
  );
}
