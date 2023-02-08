"use client";

import "./globals.css";
import { clsx } from "clsx";
import { ThemeProvider } from "next-themes";
//import { ThemeProvider as tp } from "@/components/theme-provider";
import { Inter } from "@next/font/google";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: "variable",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			{/*
			<body
				className={clsx(
					inter.className,
					"flex flex-col justify-between",
					"bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50",
					"min-h-screen antialiased",
				)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Navbar />
					<main
						className={clsx(
							"mb-auto",
							"bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50 min-h-screen font-sans antialiased",
						)}>
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>*/}
			<head />
			<body
				className={clsx(
					inter.className,
					"flex flex-col justify-between",
					"bg-white text-slate-900 dark:bg-stone-900 dark:text-slate-50",
					"min-h-screen antialiased",
				)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div
						className={clsx(
							"flex min-h-screen flex-col",
							"bg-white dark:bg-stone-900",
						)}>
						<Navbar />
						<main className="container m-6 flex-1">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
