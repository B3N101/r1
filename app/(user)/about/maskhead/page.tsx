import cn from "@lib/utils";
import Image from "next/image";
import face from "@public/template_face.jpg";

export default function Page() {
	return (
		<div
			className={cn(
				"mt-4 grid grid-cols-2 items-center justify-center justify-items-center",
			)}>
			<h1 className={cn("col-span-2 text-center text-4xl")}>
				Editor's in chief
			</h1>
			<div id="maskhead item" className={cn("col-span-1")}>
				<Image
					src={face}
					alt="Face"
					height={500}
					width={500}
					className={cn("h-48 w-48 rounded-full")}
				/>
				<h1 className={cn("text-center text-2xl")}>Maskhead Person 1</h1>
			</div>
			<div id="maskhead item" className={cn("col-span-1")}>
				<Image
					src={face}
					alt="Face"
					height={500}
					width={500}
					className={cn("h-48 w-48 rounded-full")}
				/>
				<h1 className={cn("text-center text-2xl")}>Maskhead Person 2</h1>
			</div>
			<Image
				src={face}
				alt="Face"
				height={500}
				width={500}
				className={cn("h-48 w-48 rounded-full")}
			/>
			<Image
				src={face}
				alt="Face"
				height={500}
				width={500}
				className={cn("h-48 w-48 rounded-full")}
			/>
		</div>
	);
}
