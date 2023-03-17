import "./globals.css";
import cn from "@lib/utils";
import { Inter } from "@next/font/google";
import Footer from "@components/Footer";
import { Analytics } from "@components/analytics";
import { ThemeProvider } from "@components/theme-provider";
import NewNav from "@components/NewNav";
import Header from "@components/Header";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
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
				className={cn(
					inter.className,
					"flex flex-col justify-between",
					"bg-white text-slate-900 dark:bg-neutral-900 dark:text-slate-50",
					"min-h-screen",
				)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div
						className={cn(
							"flex min-h-screen flex-col",
							"bg-white dark:bg-neutral-900",
						)}>
						<Header />
						<NewNav />
						{/* Horizontal line */}
						<div className="mt-3 border-b-2 border-neutral-300 dark:border-neutral-700" />

						<main className="container mx-auto">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
