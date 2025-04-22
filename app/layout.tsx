import { NextIntlClientProvider } from 'next-intl';
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./tailwindcss.css";
import "./colors.css";
import "./typography.css";
import "./spacing.css";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const sans = IBM_Plex_Sans({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
})

export const metadata: Metadata = {
  title: "MEEC",
  description: "Myanmar Earthquake Engineering Community",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  return (
    <html lang={locale} style={{
      backgroundColor: 'var(--background)'
    }}>
      <body
        style={{
          minHeight: '100dvh',
          backgroundColor: 'var(--background)'
        }}
        className={`${sans.variable} antialiased content-auto`}
      >
        <NextIntlClientProvider>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
