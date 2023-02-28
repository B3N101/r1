"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import Logo from "@public/anvil.svg;
import Logo from "@public/anvilLogo.png";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
	Bars3Icon,
	XMarkIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
	const [dropdownState, changeDropdown] = useState(false);
	/*const { theme, setTheme } = useTheme();
	function toggleTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}*/
	function toggleDropdown() {
		changeDropdown(!dropdownState);
	}
	// router
	const router = useRouter();
	const pathName = usePathname();

	function isDisabled(): boolean {
		if (pathName == "/") return true;
		return false;
	}

	//281,101
	return (
		<>
			{/* Center MX IMAGE */}
			<div className={clsx("flex justify-center p-3")}>
				<button
					disabled={isDisabled()}
					onClick={() => {
						if (pathName != "/") {
							router.push("/");
						}
					}}>
					<Image src={Logo} alt="logo" width={281} height={101} />
				</button>

				{/* THEME BUTTON IN RIGHT CORNER */}
				<div className={clsx("absolute right-0 top-0 m-4")}>
					<ThemeSwitch />
				</div>
			</div>
			<nav>
				<NavigationMenu>
					<NavigationMenuList>
						<Link href="/docs" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Documentation
							</NavigationMenuLink>
						</Link>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>Link</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
			<header
				className={clsx(
					"flex items-center justify-between border-b-4 py-4",
					"border-current",
					"dark:brightness-[1.15]",
				)}>
				<nav className={clsx("mx-auto flex justify-center px-20")}>
					{/* Logo */}
					{/* <button
						className={clsx("ml-4 sm:ml-8")}
						disabled={isDisabled()}
						onClick={() => {
							if (pathName != "/") {
								router.push("/");
							}
						}}>
						<Image src={Logo} alt="logo" width={291} height={101} />
					</button> */}

					{/* Theme Switch
					<div className={clsx("m-4")}>
						<ThemeSwitch />
					</div> */}
					{/* Desktop */}
					<div className={clsx("hidden sm:block")}>
						<div className={clsx("grid grid-cols-5 justify-center gap-4")}>
							<div className={clsx("col-span-1")}>
								<Link href="/">Home</Link>
							</div>
							<div className={clsx("col-span-1")}>
								<Link href="/about">About</Link>
							</div>
							<div className={clsx("col-span-1")}>
								<Link href="/opinions">Opinions</Link>
							</div>
							<div className={clsx("col-span-1")}>
								<Link href="/arts">Arts & Entertainment</Link>
							</div>
							<div className={clsx("col-span-1")}>
								<Link href="/sports">Sports</Link>
							</div>
						</div>
					</div>

					{/* Mobile */}
					<button
						aria-label="Toggle Search Menu"
						type="button"
						className={clsx("ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4")}>
						<MagnifyingGlassIcon className={clsx("block h-6 w-6 sm:hidden")} />
					</button>

					<div className={clsx("block sm:hidden")}>
						{/* Hamburger */}
						<button
							aria-label="Toggle Dark Mode"
							type="button"
							className={clsx("ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4")}
							onClick={toggleDropdown}>
							{dropdownState ? (
								<XMarkIcon className={clsx("h-6 w-6")} />
							) : (
								<Bars3Icon className={clsx("h-6 w-6")} />
							)}
						</button>

						{/* Dropdown */}
						<div
							className={clsx(dropdownState ? "block" : "hidden", "sm:hidden")}>
							<div className={clsx("flex flex-grow justify-end")}>
								<ul className={clsx("flex flex-col items-center")}>
									<li className={clsx("mr-6")}>
										<Link href="/home">Home</Link>
									</li>
									<li className={clsx("mr-6")}>
										<Link href="/about">About</Link>
									</li>
									<li className={clsx("mr-6")}>
										<Link href="/contact">Contact</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className={clsx("hidden")}>
							<div className={clsx("flex flex-grow justify-end")}>
								<ul className={clsx("flex items-center")}>
									<li className={clsx("mr-6")}>
										<Link href="/home">Home</Link>
									</li>
									<li className={clsx("mr-6")}>
										<Link href="/about">About</Link>
									</li>
									<li className={clsx("mr-6")}>
										<Link href="/contact">Contact</Link>
									</li>
								</ul>
							</div>
							<div id="search" className={clsx("flex")}>
								<input type="text" placeholder="Search" />
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
