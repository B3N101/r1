import cn from "@lib/utils";
import { ArrowBigDown } from "lucide-react";

export default function PrivacyPolicy() {
	return (
		<div className={cn("p-6 text-center")}>
			<h1 className={cn("text-5xl underline underline-offset-4")}>The Anvil's privacy Policy <span><ArrowBigDown className="h-8 w-8" /></span> </h1>
			<h2 className={cn("text-2xl")}>
				We don't collect <strong>Any</strong> data... PERIOD
			</h2>
		</div>
	);
}
