"use client";
import Toggle from "@app/components/Toggle";
import { Inter } from "@next/font/google";
import Counter from "./components/counter";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-white dark:bg-neutral-700">
        <ThemeProvider attribute="class">
          <Navbar />
          <Counter />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
