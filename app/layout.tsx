import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Trip Me Well",
  description:
    "Trip Me Well is a travel blog that shares travel stories and tips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="flex flex-col mx-[20px] my-10 lg:mx-auto lg:max-w-4xl bg-black text-slate-300 bg-white"
    >
      <body className={`flex flex-col gap-y-10 font-sans ${fontSans.variable}`}>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
