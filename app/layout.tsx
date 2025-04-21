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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
