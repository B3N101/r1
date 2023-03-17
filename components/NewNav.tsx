"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function NewNav() {

	return (
		<nav className="mx-auto flex">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger className="flex items-center m-4 rounded border">
					<button>Trigger</button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content className="mt-2 rounded-md px-3 py-2">
					<DropdownMenu.Item className="block px-4 py-2">
						<a href="#">Link 1</a>
					</DropdownMenu.Item>
					<DropdownMenu.Item className="block px-4 py-2">
						<a href="#">Link 2</a>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger className="flex items-center m-4 rounded border">
					<button>Trigger</button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content className="mt-2 rounded-md px-3 py-2">
					<DropdownMenu.Item className="block px-4 py-2">
						<a href="#">Link 1</a>
					</DropdownMenu.Item>
					<DropdownMenu.Item className="block px-4 py-2">
						<a href="#">Link 2</a>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</nav>
	);
}
