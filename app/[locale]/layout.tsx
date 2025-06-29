import { ApolloClientProvider } from "@/components/ApolloClientProvider";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { QueryProvider } from "@/components/QueryProvider";
import ScrollToTopButton from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from 'next-intl';
import { IBM_Plex_Sans, Noto_Sans_Myanmar } from "next/font/google";
import "../colors.css";
import "../globals.css";
import "../spacing.css";
import "../typography.css";

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

export default async function Layout({
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
          <QueryProvider>
            <ApolloClientProvider>
              <Navbar />
              <main className="flex flex-col min-h-dvh w-full">
                {children}
                <Footer />
                <ScrollToTopButton />
              </main>
            </ApolloClientProvider>
          </QueryProvider>
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
