import type { Metadata } from "next";
import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import { Syne } from "next/font/google";
import Navbar from "@/components/navbar";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
})

export const metadata: Metadata = {
  title: "WAsHub",
  description: "Resources for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${syne.variable} antialiased`}
      >
        {/* Navbar */}
        <Navbar />
          {children}
      </body>
    </html>
  );
}
