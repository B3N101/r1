import cn from "@lib/utils";

export default function PrivacyPolicy() {
	return (
		<div className={cn("p-6 text-center")}>
			<h1 className={cn("text-5xl underline underline-offset-4")}>The Anvil's privacy Policy</h1>
			<h2 className={cn("text-2xl")}>
				We don't collect <strong>Any</strong> data... PERIOD
			</h2>
		</div>
	);
}
