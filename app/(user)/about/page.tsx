"use client";

import { usePathname } from "next/navigation";
import Post from "@app/components/Post";
import Navbar from "@app/components/Navbar";

export default function Page() {
	const pageName = usePathname();
	const givenDate: Date = new Date(2021, 0, 1);

	return (
		<div>
			<p>Page: {pageName} </p>
			<div id="postWrapper" className="m-4">
				<Post
					title="Title"
					subTitle="subTitle"
					views={12}
					date={new Date(2021, 0, 1)}
					published={true}
					authors={["Author[s]", "author2", "author3"]}
					category="category"
					content="orem ipsum dolor sit amet, consectetur adFipiscing elit. Nullam gravida porta sapien. Nulla interdum leo eu urna mattis, at tristique lorem faucibus. Nunc ac diam metus. Vestibulum sagittis elit imperdiet interdum finibus. Curabitur vitae leo quis orci porta venenatis id vel massa. Vestibulum non urna eget tortor sagittis scelerisque. Ut eget nulla nunc. In hac habitasse platea dictumst. Proin lacinia dui pretium urna interdum sodales. Nullam sed sagittis erat. Mauris eu tellus tincidunt, viverra leo a, porta est. Fusce risus ligula, blandit sed justo ut, rutrum ultrices magna. Morbi quam nibh, pulvinar ac elementum ut, blandit et felis. Curabitur lorem neque, congue ut eros bibendum, mollis laoreet leo.

Sed mi arcu, dignissim rhoncus vestibulum nec, tempus sed orci. Sed finibus libero sed sodales sodales. Quisque sodales felis turpis, quis iaculis felis ultrices eget. In nisl velit, iaculis tristique lectus sit amet, molestie ullamcorper metus. Aliquam massa mi, rhoncus at pellentesque id, venenatis vel enim. Duis condimentum gravida ligula, nec euismod mi efficitur quis. Aliquam massa risus, tincidunt aliquet porta id, viverra eget purus. Pellentesque eleifend mauris vitae orci interdum, quis scelerisque ante iaculis. Nulla et felis et nisl scelerisque laoreet. Donec auctor consequat ornare. Phasellus nec nisi metus. Morbi ultrices dui non quam elementum dapibus. Aliquam facilisis non ipsum ut aliquam. Donec fermentum blandit euismod. Etiam finibus ullamcorper nisi, a tempus sapien gravida vel.

Nullam ut turpis at odio gravida rutrum. Pellentesque quam lectus, elementum et dapibus sit amet, ultricies id ex. Pellentesque fermentum leo at diam tempor pulvinar vel sit amet ligula. Curabitur et orci viverra, efficitur lorem nec, ornare mi. Mauris volutpat imperdiet lorem nec faucibus. Curabitur vestibulum nisi ligula, id tincidunt erat finibus eu. Donec ut lacus sapien. Nunc eleifend at lectus ac interdum. Vivamus venenatis mattis mattis.

Maecenas sed augue posuere, auctor ex tristique, feugiat tellus. Duis vitae nisi massa. Aliquam auctor ex ut auctor molestie. Praesent congue mi ipsum, venenatis consequat ipsum accumsan ac. Praesent massa turpis, tempus non rutrum eu, fringilla quis mauris. Nunc volutpat urna sed ornare pharetra. Proin suscipit urna leo, id posuere sapien congue non. Phasellus faucibus leo sed lorem pretium, et consectetur est pulvinar. Nunc lobortis diam eu iaculis vehicula.

Praesent euismod ante lorem, ut posuere ligula suscipit eu. Nunc ultricies dui molestie, condimentum neque sit amet, commodo urna. Nullam eget ligula ut elit finibus sodales nec vel orci. Integer sed venenatis urna, vehicula vulputate enim. Sed non urna bibendum, malesuada metus sit amet, lobortis leo. Nunc risus mauris, rutrum ut eros ac, venenatis fringilla mauris. Pellentesque vel gravida nibh. Ut maximus ipsum magna, eget bibendum ante convallis id. Vivamus vitae auctor arcu. Donec ut arcu molestie lectus iaculis congue non vel sapien. Cras cursus vitae orci eget euismod. Donec quis enim dolor. Sed bibendum felis eget hendrerit egestas. Aenean sollicitudin, tellus et malesuada ultrices, magna lorem faucibus lorem, a ultrices purus urna sit amet risus."
					image={{
						imgUrl: "/volcano.jpg",
						caption: "asdfasdfasf",
					}}></Post>
			</div>
		</div>
	);
}
