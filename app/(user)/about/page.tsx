"use client";

import { usePathname } from "next/navigation";
import Post from "@app/components/Post";
import Navbar from "@app/components/Navbar";

export default function Page() {
	const pageName = usePathname()
	return (
		<div>
			<p>Page: {pageName} </p>
            <Navbar />
            <Post title="asfs" subTitle="safsaf" views={12} published={true} authors={['string','string']} category="stasf" content="safsfa" image={undefined} ></Post>
		</div>
	);
}
