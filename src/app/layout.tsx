import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const sans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const serif = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const metadata: Metadata = {
    title: "AURUM | Private Wealth & Lifestyle",
    description: "A digital sanctuary for those who operate above the ordinary.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn(sans.variable, serif.variable)}>
            <body className="bg-obsidian text-platinum antialiased overflow-x-hidden">
                <div className="noise" />
                {children}
            </body>
        </html>
    );
}
