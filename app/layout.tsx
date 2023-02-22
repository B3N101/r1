import "./globals.css";
import { clsx } from "clsx";
import { Inter } from "@next/font/google";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Analytics } from "@components/analytics";
import { ThemeProvider } from "@components/theme-provider";

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
			<body
				className={clsx(
					inter.className,
					"flex flex-col justify-between",
					"bg-white text-slate-900 dark:bg-stone-900 dark:text-slate-50",
					"min-h-screen",
				)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div
						className={clsx(
							"flex min-h-screen flex-col",
							"bg-white dark:bg-stone-900",
						)}>
						<Navbar />
						<main className="container mx-auto">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
