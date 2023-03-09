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
import cn from "@lib/utils";
import React from "react";

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
			<nav className="flex justify-center">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="h-9">
								Categories
							</NavigationMenuTrigger>
							<NavigationMenuContent className="items-center">
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<ListItem href="/news" title="News" />
									<ListItem href="/opinions" title="Opinions" />
									<ListItem href="/ae" title="Arts & Entertainment" />
									<ListItem href="/sports" title="Sports" />
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="h-9">
								About
							</NavigationMenuTrigger>
							<NavigationMenuContent className="items-center">
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<ListItem href="/about" title="About" />
									<ListItem href="/maskhead" title="Maskhead" />
									<ListItem href="/privacy" title="Privacy Policy" />
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
			<header
				className={clsx(
					"flex items-center justify-between border-b-4",
					"border-current",
					"dark:brightness-[1.15]",
				)}>
				<nav className={clsx("mx-auto flex justify-center px-20")}>
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

const ListItem = React.forwardRef<
	React.ElementRef<typeof Link>,
	React.ComponentPropsWithoutRef<typeof Link>
	// eslint-disable-next-line react/prop-types, @typescript-eslint/no-unused-vars
>(({ className, title, children, href, ...props }, ref) => {
	return (
		<li>
			<Link href={href} passHref legacyBehavior {...props}>
				<NavigationMenuLink
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
						className,
					)}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="text-sm leading-snug text-slate-500 line-clamp-2 dark:text-slate-400">
						{children}
					</p>
				</NavigationMenuLink>
			</Link>
		</li>
	);
});
ListItem.displayName = "ListItem";
