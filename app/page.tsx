import text from "./components/text/text";
import italic from "./components/text/italic";
import { Crimson_Pro } from "@next/font/google";
const crimsonPro = Crimson_Pro({
	subsets: ["latin"],
	variable: "--font-crimson",
});


export default function Page() {
  return (
		<div className="container mx-auto mb-22 pt-3">
			<p className="font-proxima-nova italic font-extrabold text-3xl">
				The quick brown fox jumps over the lazy dog
			</p>
			<p className="font-serif italic font-extrabold text-3xl">
				asdfasfasfddas
			</p>
			
			<text className={crimsonPro.className}>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
		</div>
	);
}

/*
<nav className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>

        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </nav>

*/