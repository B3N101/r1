import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

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
		<div className={clsx("mb-22 container mx-auto pt-3")}>
			{/* Put text into right grid column */}
			<div className={clsx("grid grid-cols-1 md:grid-cols-2")}>
				<Link href={`posts/${url}`}>
					<h1 className={clsx("mb-4 text-4xl font-bold")}>{title}</h1>
					<h2 className={clsx("text-2xl font-bold")}>{subtitle}</h2>
					<p className={clsx("text-gray-500", "dark:text-gray-300")}>{date}</p>
					<p className={clsx("text-gray-500", "dark:text-gray-300")}>
						{author}
					</p>
				</Link>
				<Image src={image} alt={title} width={500} height={500} />
			</div>
		</div>
	);
}
