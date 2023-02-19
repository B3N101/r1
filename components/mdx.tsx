import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useMDXComponent } from "next-contentlayer/hooks";

type Props = {
	code: string;
};

type PictureProps = {
	src: string;
	alt: string;
	height: number;
	width: number;
	caption: string;
};

function Picture({ src, alt, height, width, caption }: PictureProps) {
	return (
		<div>
			<Image src={src} alt={alt} height={height} width={width} />
			<p className="text-center text-sm text-gray-500">{caption}</p>
		</div>
	);
}

export default function Mdx({ code }: Props) {
	const MDXContent = useMDXComponent(code);
	return (
		<section className={clsx("prose", "dark:prose-invert")}>
			<MDXContent components={{ Link, Image, Picture }} />
		</section>
	);
}
