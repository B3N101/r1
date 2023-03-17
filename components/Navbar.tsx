"use client";
import cn from "@lib/utils";
import { useState } from "react";
import Link from "next/link";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
	Bars3Icon,
	XMarkIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

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

	//281,101
	return (
		<>
			<nav>
				{/* center */}
				<div className={cn("flex justify-center")}>
					<div>
						{/* Dropdown */}
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className={cn("h-9")}>
										<NavigationMenuIndicator />
									</NavigationMenuTrigger>
									<NavigationMenuContent
										className={cn("items-center justify-center")}>
										<ul
											className={cn(
												"grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",
											)}>
											<ListItem href="/news" title="News" />
											<ListItem href="/opinions" title="Opinions" />
											<ListItem href="/ae" title="Arts & Entertainment" />
											<ListItem href="/sports" title="Sports" />
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
			</nav>
			<nav className="flex justify-center">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem className="align-center flex">
							<NavigationMenuTrigger className="h-9">
								Categories
							</NavigationMenuTrigger>
							<NavigationMenuContent className="items-center justify-center">
								<div className="flex flex-col items-center">
									<li>hello</li>
									<li>hello</li>
									<li>hello</li>
								</div>
								<ul className="grid p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
							<NavigationMenuContent className="items-center justify-center">
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
				className={cn(
					"flex items-center justify-between border-b-4",
					"border-current",
					"dark:brightness-[1.15]",
				)}>
				<nav className={cn("mx-auto flex justify-center px-20")}>
					{/* Mobile */}
					<button
						aria-label="Toggle Search Menu"
						type="button"
						className={cn("ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4")}>
						<MagnifyingGlassIcon className={cn("block h-6 w-6 sm:hidden")} />
					</button>

					<div className={cn("block sm:hidden")}>
						{/* Hamburger */}
						<button
							aria-label="Toggle Dark Mode"
							type="button"
							className={cn("ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4")}
							onClick={toggleDropdown}>
							{dropdownState ? (
								<XMarkIcon className={cn("h-6 w-6")} />
							) : (
								<Bars3Icon className={cn("h-6 w-6")} />
							)}
						</button>

						{/* Dropdown */}
						<div
							className={cn(dropdownState ? "block" : "hidden", "sm:hidden")}>
							<div className={cn("flex flex-grow justify-end")}>
								<ul className={cn("flex flex-col items-center")}>
									<li className={cn("mr-6")}>
										<Link href="/home">Home</Link>
									</li>
									<li className={cn("mr-6")}>
										<Link href="/about">About</Link>
									</li>
									<li className={cn("mr-6")}>
										<Link href="/contact">Contact</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className={cn("hidden")}>
							<div className={cn("flex flex-grow justify-end")}>
								<ul className={cn("flex items-center")}>
									<li className={cn("mr-6")}>
										<Link href="/home">Home</Link>
									</li>
									<li className={cn("mr-6")}>
										<Link href="/about">About</Link>
									</li>
									<li className={cn("mr-6")}>
										<Link href="/contact">Contact</Link>
									</li>
								</ul>
							</div>
							<div id="search" className={cn("flex")}>
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
		<li className="mx-auto text-center">
			<Link href={href} passHref legacyBehavior {...props}>
				<NavigationMenuLink
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-black",
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
