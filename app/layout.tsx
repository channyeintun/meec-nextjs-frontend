import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./tailwindcss.css";
import "./globals.css";

const sans = IBM_Plex_Sans({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
})

export const metadata: Metadata = {
  title: "MEEC",
  description: "Myanmar Earthquake Engineering Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{
      backgroundColor: 'var(--background)'
    }}>
      <body
        style={{
          minHeight: '100dvh',
          backgroundColor: 'var(--background)'
        }}
        className={`${sans.variable} antialiased content-auto`}
      >
        {children}
      </body>
    </html>
  );
}
