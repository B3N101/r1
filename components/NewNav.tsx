"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import React from "react";
import cn from "@lib/utils";
import Link from "next/link";

export default function NewNav() {
	return (
		<NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
			<NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
						Learn{" "}
						<CaretDownIcon
							className="text-violet10 duration-[250] relative top-[1px] transition-transform ease-in group-data-[state=open]:-rotate-180"
							aria-hidden
						/>
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
						<ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
							<li className="row-span-3 grid">
								<NavigationMenu.Link asChild>
									<a href="/">
										<p className="text-mauve4 text-[14px] leading-[1.3]">
											Unstyled, accessible components for React.
										</p>
									</a>
								</NavigationMenu.Link>
							</li>

							<ListItem href="https://stitches.dev/" title="Stitches">
								CSS-in-JS with best-in-class developer experience.
							</ListItem>
							<ListItem href="/colors" title="Colors">
								Beautiful, thought-out palettes with auto dark mode.
							</ListItem>
							<ListItem href="https://icons.radix-ui.com/" title="Icons">
								A crisp set of 15x15 icons, balanced and consistent.
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
						Overview{" "}
						<CaretDownIcon
							className="text-violet10 duration-[250] relative top-[1px] transition-transform ease-in group-data-[state=open]:-rotate-180"
							aria-hidden
						/>
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
						<ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
							<ListItem
								title="Introduction"
								href="/docs/primitives/overview/introduction">
								Build high-quality, accessible design systems and web apps.
							</ListItem>
							<ListItem
								title="Getting started"
								href="/docs/primitives/overview/getting-started">
								A quick tutorial to get you up and running with Radix
								Primitives.
							</ListItem>
							<ListItem
								title="Styling"
								href="/docs/primitives/overview/styling">
								Unstyled and compatible with any styling solution.
							</ListItem>
							<ListItem
								title="Animation"
								href="/docs/primitives/overview/animation">
								Use CSS keyframes or any animation library of your choice.
							</ListItem>
							<ListItem
								title="Accessibility"
								href="/docs/primitives/overview/accessibility">
								Tested in a range of browsers and assistive technologies.
							</ListItem>
							<ListItem
								title="Releases"
								href="/docs/primitives/overview/releases">
								Radix Primitives releases and their changelogs.
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link
						className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
						href="https://github.com/radix-ui">
						Github
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
					<div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
				<NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
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
		<li className="mx-auto text-center">
			<Link href={href} passHref legacyBehavior {...props}>
				<NavigationMenu.Link
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-black",
						className,
					)}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="text-sm leading-snug text-slate-500 line-clamp-2 dark:text-slate-400">
						{children}
					</p>
				</NavigationMenu.Link>
			</Link>
		</li>
	);
});
ListItem.displayName = "ListItem";
