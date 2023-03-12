import clsx from "clsx";
import Link from "next/link";
import { format, parseISO } from "date-fns";


export default function PostCard({
	title,
	subtitle,
	author,
	date,
	url,
}: {
	title: string;
	subtitle: string;
	author: string;
	date: string;
	url: string;
}) {
	return (
		<Link href={`posts/${url}`}>
			<div className={clsx("container mx-auto")}>
				<div
					className={clsx(
						"grid grid-cols-1 justify-center gap-8 md:grid-cols-2",
					)}>
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
				</div>
			</div>
		</Link>
	);
}
