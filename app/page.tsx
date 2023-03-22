import cn from "@lib/utils";
// import Balancer from "react-wrap-balancer";
import { allPosts } from "contentlayer/generated";
// import Link from "next/link";
// import Highlighted from "@components/highlighted";
// import PostCard from "@components/postCard";
import Image from "next/image";
import Link from "next/link";

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
const latestOpinions = getLatestPostsByCategory("Opinion");
const latestSports = getLatestPostsByCategory("Sports");
const latestArts = getLatestPostsByCategory("Arts & Entertainment");

// const totalPages = Math.ceil(pagesByDate.length / 10);
// const searchParmas = useSearchParams();
// const page = Number(searchParmas.get("page")) || 1;
// const pageSize = 10;

export default function Page() {
	const headline = allPosts.find((post) => post.headline);

	return (
		<div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-2 xl:gap-10">
			<Link
				href={`posts/${headline.url}`}
				className={cn("grid max-w-4xl grid-cols-1 gap-1 md:grid-cols-2")}>
				<div>
					<h1 className={cn("mb-4 font-bold", "text-2xl")}>{headline.title}</h1>
					<h2>{headline.subtitle}</h2>
				</div>
				<Image
					className={cn("mx-auto")}
					src={headline.image}
					alt={headline.title}
					width={400}
					height={500}
					priority
				/>
			</Link>

			<div id="news">
				<h1 className={cn("mb-4 text-2xl font-semibold")}>News:</h1>
				<div className={cn("grid grid-rows-1 gap-3")}>
					{latestNews.map((post) => (
						<Link
							key={post._id}
							href={`posts/${post.url}`}
							className={cn("border-b-[1px]")}>
							<h2
								className={cn(
									"text-base font-medium text-gray-700 dark:text-gray-400",
								)}>
								{post.author}
							</h2>
							<h1 className="text-lg font-medium">{post.title}</h1>
						</Link>
					))}
					<Link
						className="text-base font-medium text-gray-700 underline dark:text-gray-400"
						href="/news">
						All News {"->"}
					</Link>
				</div>
			</div>

			<div id="opinions">
				<h1 className={cn("mb-4 text-2xl font-semibold")}>Opinions:</h1>
				<div className={cn("grid grid-rows-1 gap-3")}>
					{latestOpinions.map((post) => (
						<Link
							key={post._id}
							href={`posts/${post.url}`}
							className={cn("border-b-[1px]")}>
							<h2
								className={cn(
									"text-base font-medium text-gray-700 dark:text-gray-400",
								)}>
								{post.author}
							</h2>
							<h1 className="text-lg font-medium">{post.title}</h1>
						</Link>
					))}
					<Link
						className="text-base font-medium text-gray-700 underline dark:text-gray-400"
						href="/opinions">
						All Opinions {"->"}
					</Link>
				</div>
			</div>

			<div id="sports">
				<h1 className={cn("mb-4 text-2xl font-semibold")}>Sports:</h1>
				<div className={cn("grid grid-rows-1 gap-3")}>
					{latestSports.map((post) => (
						<Link
							key={post._id}
							href={`posts/${post.url}`}
							className={cn("border-b-[1px]")}>
							<h2
								className={cn(
									"text-base font-medium text-gray-700 dark:text-gray-400",
								)}>
								{post.author}
							</h2>
							<h1 className="text-lg font-medium">{post.title}</h1>
						</Link>
					))}
					<Link
						className="text-base font-medium text-gray-700 underline dark:text-gray-400"
						href="/sports">
						All Sports {"->"}
					</Link>
				</div>
			</div>

			<div id="arts">
				<h1 className={cn("mb-4 text-2xl font-semibold")}>
					Arts & Entertainment:
				</h1>
				<div className={cn("grid grid-rows-1 gap-3")}>
					{latestArts.map((post) => (
						<Link
							key={post._id}
							href={`posts/${post.url}`}
							className={cn("border-b-[1px]")}>
							<h2
								className={cn(
									"text-base font-medium text-gray-700 dark:text-gray-400",
								)}>
								{post.author}
							</h2>
							<h1 className="text-lg font-medium">{post.title}</h1>
						</Link>
					))}
					<Link
						className="text-base font-medium text-gray-700 underline dark:text-gray-400"
						href="/ae">
						All Arts & Entertainment {"->"}
					</Link>
				</div>
			</div>
		</div>
	);
}
