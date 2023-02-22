import { clsx } from "clsx";
// import Balancer from "react-wrap-balancer";
import { allPosts } from "contentlayer/generated";
// import Link from "next/link";
import Highlighted from "@components/highlighted";
import PostCard from "@components/postCard";

function getLatestPostsByCategory(category) {
	return allPosts
		.filter((post) => post.category.includes(category))
		.sort((a, b) => {
			if (a.date > b.date) {
				return -1;
			} else if (a.date < b.date) {
				return 1;
			} else {
				return 0;
			}
		})
		.slice(0, 5);
}

const latestNews = getLatestPostsByCategory("News");
// const latestOpinions = getLatestPostsByCategory("Opinion");
// const latestSports = getLatestPostsByCategory("Sports");
// const latestArts = getLatestPostsByCategory("Arts & Entertainment");

// const totalPages = Math.ceil(pagesByDate.length / 10);
// const searchParmas = useSearchParams();
// const page = Number(searchParmas.get("page")) || 1;
// const pageSize = 10;

export default function Page() {
	const headline = allPosts.find((post) => post.headline);
	const headlineProps = {
		image: headline.image,
		title: headline.title,
		subtitle: headline.subtitle,
		url: headline.url,
		author: headline.author,
		date: headline.date,
	};

	return (
		<div
			className={clsx("mb-22 container mx-auto mt-5", "lg:px-64", "md:px-4")}>
			<Highlighted
				image={headlineProps.image}
				title={headlineProps.title}
				subtitle={headlineProps.subtitle}
				url={headlineProps.url}
				author={headlineProps.author}
				date={headlineProps.date}
			/>

			<div className={clsx("border-t-2 mt-4")}>
				<h1 className={clsx("mb-4 font-bold", "text-2xl", "text-center")}>
					News:
				</h1>
				<div className={clsx("grid md:grid-cols-2 lg:grid-cols-4")}>
					{latestNews.map((post) => (
						<PostCard
							key={post._id}
							title={post.title}
							subtitle={post.subtitle}
							author={post.author}
							date={post.date}
							url={post.url}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
