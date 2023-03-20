"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import React from "react";
import cn from "@lib/utils";
import Link from "next/link";

export default function Navbar() {
	return (
		<NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
			<NavigationMenu.List className="center m-0 flex list-none rounded-[6px] p-1">
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-[#212121] dark:focus:bg-[#212121]">
						Categories
						<CaretDownIcon
							className="duration-[250] relative top-[1px] transition-transform ease-in group-data-[state=open]:-rotate-180"
							aria-hidden
						/>
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full bg-white dark:bg-[#212121] sm:w-auto">
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<ListItem href="/news" title="News" />
							<ListItem href="/opinions" title="Opinions" />
							<ListItem href="/ae" title="Arts & Entertainment" />
							<ListItem href="/sports" title="Sports" />
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-[#212121] dark:focus:bg-[#212121]">
						About
						<CaretDownIcon
							className="duration-[250] relative top-[1px] transition-transform ease-in group-data-[state=open]:-rotate-180"
							aria-hidden
						/>
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full bg-white dark:bg-[#212121] sm:w-auto">
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
							<ListItem href="/about" title="About" />
							<ListItem href="/maskhead" title="Maskhead" />
							<ListItem href="/contact" title="Contact" />
							<ListItem href="/privacy" title="Privacy Policy" />
							<div className="lg:col-span-2">
								<ListItem className="bg-red-700"href="/subscribe" title="Subscribe" />
							</div>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
					<div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px]" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
				<NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
			</div>
		</NavigationMenu.Root>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<typeof Link>,
	React.ComponentPropsWithoutRef<typeof Link>
	// eslint-disable-next-line react/prop-types, @typescript-eslint/no-unused-vars
>(({ className, title, children, href, ...props }, ref) => {
	return (
		<li className="mx-auto border-[3px] text-center rounded-lg">
			<Link href={href} passHref legacyBehavior {...props}>
				<NavigationMenu.Link
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
						className,
					)}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="text-sm leading-snug line-clamp-2">{children}</p>
				</NavigationMenu.Link>
			</Link>
		</li>
	);
});
ListItem.displayName = "ListItem";
