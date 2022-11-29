"use client";

import { useState } from "react";
//import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar() {
  const [dropdownState, changeDropdown] = useState(false);
  //const router = useRouter();
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function toggleDropdown() {
    changeDropdown(!dropdownState);
  }

  return (
    <nav className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>

        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </nav>
  );
}
