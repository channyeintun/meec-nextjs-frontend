
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MEEC",
    description: "Myanmar Earthquake Engineering Community",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>{children}</>
    );
}
