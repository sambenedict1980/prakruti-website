import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SOSButton from "@/components/SOSButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prakruti — Nature & Animal Welfare Club | NIT Trichy",
  description:
    "Prakruti is the official Nature and Animal Welfare Club of NIT Trichy, formed by the merger of Incredible NITT and the Animal Welfare Club. Nurturing Nature, Protecting Paws.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <SOSButton />
      </body>
    </html>
  );
}
