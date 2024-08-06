import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Cell CRCE",
  description: "Fr. Conceicao Rodrigues College of Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar>
        {children}
        </Navbar>
        {/* <Banner/> */}
        </body>
    </html>
  );
}
