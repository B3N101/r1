import Link from "next/link";
import { default as NextImage } from "next/image";
import cn from "@lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";

function Image({
	src,
	alt,
	height,
	width,
}: {
	src: string;
	alt: string;
	height: number;
	width: number;
}) {
	return (
		<NextImage src={src} alt={alt} height={height} width={width} priority />
	);
}

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
		<section className={cn("prose prose-lg", "dark:prose-invert")}>
			<MDXContent components={{ Link, Image, Picture }} />
		</section>
	);
}
