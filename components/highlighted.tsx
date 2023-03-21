import Image from "next/image";
import Link from "next/link";
import cn from "@lib/utils";
import { format, parseISO } from "date-fns";
import removeWhitespace from "@lib/whitespace";

export default function Highlighted({
	image,
	title,
	subtitle,
	url,
	author,
	date,
}: {
	image: string;
	title: string;
	subtitle: string;
	url: string;
	author: string;
	date: string;
}) {
	return (
		<div className={cn("mb-22 container")}>
			{/* Put text into right grid column */}
			<div
				className={cn(
					"grid grid-cols-1 justify-center gap-2 md:grid-cols-2",
					"sm:gap-4",
				)}>
				{/* dim or darken background color on hover */}
				<Link href={`posts/${url}`}>
					<div
						className={cn(
							"h-full w-full hover:bg-neutral-50 hover:dark:bg-neutral-900",
						)}>
						<h1
							className={cn(
								"mb-3 font-bold hover:underline",
								"text-xl",
								"md:text-left",
							)}>
							{title}
						</h1>
						{/* Dissapears on mobile */}
						<div className={cn("")}>
							<p className={cn("text-base font-normal")}>{subtitle}</p>
							<Link
								href={`writers/${removeWhitespace(author)}`}
								className={cn(
									"text-gray-500",
									"dark:text-gray-300",
									"hover:text-blue-500",
									"dark:hover:text-blue-500",
								)}>
								{author}
							</Link>
							<p className={cn("text-gray-500", "dark:text-gray-300")}>
								{format(parseISO(date), "LLLL d, yyyy")}
							</p>
						</div>
					</div>
				</Link>
				{/* Center Image on mobile */}
				<div className={cn("flex justify-center")}>
					<Image src={image} alt={title} width={400} height={400} />
				</div>
			</div>
		</div>
	);
}
