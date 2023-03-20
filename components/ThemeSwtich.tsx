"use client";

import { useTheme } from "next-themes";
import cn from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export default function ThemeSwitch() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenuPrimitive.Root>
			<DropdownMenuPrimitive.Trigger asChild>
				<Button variant="ghost" size="sm">
					<Icons.sun className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
					<Icons.moon className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuPrimitive.Trigger>
			<DropdownMenuPrimitive.Content
				align="end"
				className={cn(
					"z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-900 shadow-md animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-[#212121] dark:text-slate-400",
				)}>
				<DropdownMenuPrimitive.Item
					className={cn(
						"relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
					)}
					onClick={() => setTheme("light")}>
					<Icons.sun className="mr-2 h-4 w-4" />
					<span>Light</span>
				</DropdownMenuPrimitive.Item>
				<DropdownMenuPrimitive.Item
					className={cn(
						"relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
					)}
					onClick={() => setTheme("dark")}>
					<Icons.moon className="mr-2 h-4 w-4" />
					<span>Dark</span>
				</DropdownMenuPrimitive.Item>
				<DropdownMenuPrimitive.Item
					className={cn(
						"relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
					)}
					onClick={() => setTheme("system")}>
					<Icons.laptop className="mr-2 h-4 w-4" />
					<span>System</span>
				</DropdownMenuPrimitive.Item>
			</DropdownMenuPrimitive.Content>
		</DropdownMenuPrimitive.Root>
	);
}
