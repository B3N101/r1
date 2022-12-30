"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";

import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import { Merriweather } from "@next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-white dark:bg-neutral-700 flex flex-col justify-between">
        <ThemeProvider attribute="class">
          <div className="sticky z-10 top-0 saturate-200 backdrop-blur-xl">
            <Navbar />
          </div>
          <main className="mb-auto">
          {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}