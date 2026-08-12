import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Kombou",
  description: "Software Engineer · Full-Stack · AI & EdTech Builder",
  icons: { icon: "/favicon.png", apple: "/apple-icon.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
