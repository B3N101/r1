"use client";
export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div>
			<p>An error occured: {error.message}</p>
			<button onClick={() => reset()}>Reset error boundary</button>
		</div>
	);
}
