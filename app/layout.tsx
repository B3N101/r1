"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";

import localFont from "@next/font/local";
import { Inter, Merriweather } from "@next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: "variable",
});

const merriweather = Merriweather({
	subsets: ["latin"],
	weight: "700",
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
					<Navbar />
					<main className="mb-auto">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
