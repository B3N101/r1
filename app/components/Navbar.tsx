"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import Logo from "@public/anvil.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import ThemeSwitch from "./icons/ThemeSwitch";

export default function Navbar() {
	const [dropdownState, changeDropdown] = useState(false);
	const { theme, setTheme } = useTheme();
	function toggleTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}
	function toggleDropdown() {
		changeDropdown(!dropdownState);
	}

	//281,101
	return (
		<header className="border-b-4 border-mxRed flex items-center justify-between py-10">
			<nav className="bg-white dark:bg-mxDark flex justify-center">
				{/* Logo */}
				<Image src={Logo} alt="logo" width={291} height={101} />

				{/* Theme Switch */}
				<ThemeSwitch />

				{/* Desktop */}
				<div className="hidden sm:block">
					<div className="flex flex-grow justify-end">
						<ul className="flex items-center">
							<li className="mr-6">
								<Link href="/home">Home</Link>
							</li>
							<li className="mr-6">
								<Link href="/about">About</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Mobile */}
				<div className="block sm:hidden">

					{/* Hamburger */}
					<div className="flex flex-grow justify-end">
						<button
							className="flex items-center px-3 py-2 border rounded text-mxRed dark:text-mxRed border-mxRed dark:border-mxRed hover:text-white hover:border-white"
							onClick={toggleDropdown}
						>
							{dropdownState ? (
								<XMarkIcon className="h-6 w-6" />
							) : (
								<Bars3Icon className="h-6 w-6" />
							)}
						</button>
					</div>

					{/* Dropdown */}
					<div
						className={`${
							dropdownState ? "block" : "hidden"
						} sm:hidden`}
					>
						<div className="flex flex-grow justify-end">
							<ul className="flex flex-col items-center">
								<li className="mr-6">
									<Link href="/home">Home</Link>
								</li>
								<li className="mr-6">
									<Link href="/about">About</Link>
								</li>
								<li className="mr-6">
									<Link href="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="hidden">
						<div className="flex flex-grow justify-end">
							<ul className="flex items-center">
								<li className="mr-6">
									<Link href="/home">Home</Link>
								</li>
								<li className="mr-6">
									<Link href="/about">About</Link>
								</li>
								<li className="mr-6">
									<Link href="/contact">Contact</Link>
								</li>
							</ul>
						</div>
						<div id="search" className="flex">
							<input type="text" placeholder="Search" />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
