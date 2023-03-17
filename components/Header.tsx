"use client";
import cn from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import Logo from "@/public/anvilLogo.png";
import Image from "next/image";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Header() {
	const router = useRouter();
	const pathName = usePathname();
	function isDisabled(): boolean {
		if (pathName == "/") return true;
		return false;
	}
	return (
		<header className={cn("flex justify-center p-3")}>
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
			<div className={cn("absolute right-0 top-0 m-4")}>
				<ThemeSwitch />
			</div>
		</header>
	);
}
