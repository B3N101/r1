import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useMDXComponent } from "next-contentlayer/hooks";

type Props = {
	code: string;
};

export default function Mdx({ code }: Props) {
	const MDXContent = useMDXComponent(code);
	return (
		<section className={clsx("prose", "dark:prose-invert")}>
			<MDXContent components={{Link, Image}} />
		</section>
	);
}
