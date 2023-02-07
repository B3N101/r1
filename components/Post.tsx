import { clsx } from "clsx";
import Image from "next/image";

type AppProps = {
	title: string;
	subTitle: string;
	views: number;
	published: boolean;
	authors: string[];
	category: string;
	image?: {
		imgUrl: string;
		caption: string;
	};
	content: string;
	date: Date;
};

enum Month {
	January,
	February,
	March,
	April,
	May,
	June,
	July,
	August,
	September,
	October,
	November,
	December,
}

// title, subTitle, views, published, authors, category, image, content

export default function Post({
	title,
	subTitle,
	views,
	published,
	authors,
	category,
	image,
	content,
	date,
}: AppProps) {
	function listAuthors() {
		let authorsList = "";
		for (let i = 0; i < authors.length; i++) {
			authorsList += authors[i];
			if (i != authors.length - 1) {
				authorsList += ", ";
				if (i == authors.length - 2) authorsList += "and ";
			}
		}
		return authorsList;
	}

	return (
		<div id="post">
			<div id="postHeading" className={clsx("flex justify-evenly")}>
				<div>
					<h1>{title}</h1>
					<h2>{subTitle}</h2>
					<h2>
						{Month[date.getMonth()] +
							" " +
							date.getDay() +
							", " +
							date.getFullYear()}
					</h2>
				</div>

				<div>
					<p>{views}</p>
					<p>{published}</p>
					<p>{listAuthors()}</p>
					<p>{category}</p>
				</div>
			</div>
			{image == undefined ? null : (
				<div className={clsx("m-4")}>
					<div className={clsx("flex justify-center")}>
						<Image
							src={image.imgUrl}
							alt={image.caption}
							height={1000}
							width={1000}
							className={clsx("sm:w-screen md:w-fit")}
						/>
					</div>
					<p className={clsx("flex justify-center pb-8")}>{image.caption}</p>
				</div>
			)}
			<div>
				<p className={clsx("p-6")}>{content}</p>
			</div>
		</div>
	);
}
