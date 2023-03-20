"use client";
import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

export default function CookieConsent() {
	const [showConsent, setShowConsent] = useState(true);

	useEffect(() => {
		setShowConsent(hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "true", {});
	};

	if (showConsent) {
		return null;
	}

	return (
		<div className="fixed inset-0">
			<div className="fixed bottom-0 left-0 right-0 flex items-center justify-between bg-gray-100 px-4 py-8 dark:bg-slate-600">
				<span className="text-dark mr-16 text-base">
					This website uses cookies to improve user experience. By using our
					website you consent to all cookies in accordance with our{" "}
					<Link href="/privacy-policy" className="underline text-blue-500 dark:text-blue-400"> Cookie Policy.</Link>
				</span>
				<button
					className="rounded bg-green-500 py-2 px-8"
					onClick={() => acceptCookie()}>
					Accept
				</button>
			</div>
		</div>
	);
}
