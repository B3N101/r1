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

enum Date {
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
			<div id="postHeading" className="flex justify-evenly">
				<div>
					<h1>{title}</h1>
					<h2>{subTitle}</h2>
					<h2>
						{Date[date.getMonth()] +
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
				<div className="m-4">
					<div className="flex justify-center">
						<Image
							src={image.imgUrl}
							alt={image.caption}
							height={1000}
							width={1000}
							className="md:w-fit sm:w-screen"
						/>
					</div>
					<p className="flex justify-center pb-8">{image.caption}</p>
				</div>
			)}
			<div>
				<p className="p-6">{content}</p>
			</div>
		</div>
	);
}
