import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { format, parseISO } from "date-fns";


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
		<div className={clsx("mb-22 container")}>
			{/* Put text into right grid column */}
			<div
				className={clsx(
					"grid grid-cols-1 justify-center gap-2 md:grid-cols-2",
					"sm:gap-8",
				)}>
				{/* dim or darken background color on hover */}
				<Link href={`posts/${url}`}>
					<div
						className={clsx(
							"h-full w-full hover:bg-neutral-50 hover:dark:bg-neutral-900",
						)}>
						<h1
							className={clsx(
								"mb-4 font-bold hover:underline md:text-3xl",
								"text-2xl",
								"text-center",
								"md:text-left",
							)}>
							{title}
						</h1>
						{/* Dissapears on mobile */}
						<div className={clsx("hidden md:block")}>
							<p className={clsx("text-base font-bold")}>{subtitle}</p>
							<p className={clsx("text-gray-500", "dark:text-gray-300")}>
								{author}
							</p>
							<p className={clsx("text-gray-500", "dark:text-gray-300")}>
								{format(parseISO(date), "LLLL d, yyyy")}
							</p>
						</div>
					</div>
				</Link>
				{/* Center Image on mobile */}
				<div className={clsx("flex justify-center")}>
					<Image src={image} alt={title} width={400} height={400} />
				</div>
			</div>
		</div>
	);
}
