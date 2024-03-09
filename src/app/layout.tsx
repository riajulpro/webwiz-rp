import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";

const fontManrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebWiz",
  description: "Turning Imagination into Innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontManrope.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
