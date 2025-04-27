import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { IBM_Plex_Sans, Noto_Sans_Myanmar } from "next/font/google";
import "./colors.css";
import "./globals.css";
import "./spacing.css";
import "./tailwindcss.css";
import "./typography.css";
import { ApolloClientProvider } from "@/components/ApolloClientProvider";
import { Footer } from "@/components/Footer";

const sans = IBM_Plex_Sans({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
})

const sansMyanmar = Noto_Sans_Myanmar({
  weight: ['400'],
  preload: false,
  variable: '--font-noto-sans-myanmar',
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
        className={`${sans.variable} ${sansMyanmar.variable} antialiased content-auto`}
      >
        <NextIntlClientProvider>
          <ApolloClientProvider>
            <Navbar />
            {children}
            <Footer />
          </ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
