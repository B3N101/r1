"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import { Merriweather } from "@next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./error";

const chomsky = localFont({
	src: "/fonts/Chomsky.woff2",
	variable: "--font-chomsky",
});
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
    <html lang="en" className={inter.className + 'h-screen'}>
      <head />
      <body className="bg-white dark:bg-neutral-700 flex flex-col justify-between">
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="mb-auto">
          {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}