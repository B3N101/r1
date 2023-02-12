import clsx from "clsx";
import Image from "next/image";
import face from "@public/template_face.jpg";

export default function Page() {
	return (
		<div
			className={clsx(
				"grid grid-cols-2 justify-center justify-items-center items-center mt-4",
			)}>
			<h1 className={clsx("col-span-2 text-center text-4xl")}>
				Editor's in chief
			</h1>
			<div id="maskhead item" className={clsx("col-span-1")}>
				<Image
					src={face}
					alt="Face"
					height={500}
					width={500}
					className={clsx("h-48 w-48 rounded-full")}
				/>
				<h1 className={clsx("text-center text-2xl")}>Maskhead Person 1</h1>
			</div>
			<div id="maskhead item" className={clsx("col-span-1")}>
				<Image
					src={face}
					alt="Face"
					height={500}
					width={500}
					className={clsx("h-48 w-48 rounded-full")}
				/>
				<h1 className={clsx("text-center text-2xl")}>Maskhead Person 2</h1>
			</div>
			<Image
				src={face}
				alt="Face"
				height={500}
				width={500}
				className={clsx("h-48 w-48 rounded-full")}
			/>
			<Image
				src={face}
				alt="Face"
				height={500}
				width={500}
				className={clsx("h-48 w-48 rounded-full")}
			/>
		</div>
	);
}
