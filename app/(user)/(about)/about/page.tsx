import Balancer from "react-wrap-balancer";
import cn from "@lib/utils";
import Link from "next/link";

export default function Page() {
	return (
		<div className={cn("mt-4 text-center")}>
			<Balancer>
				<h1 className={cn("text-4xl italic")}>About The Anvil</h1>
				<p className={cn("mt-4")}>
					The Anvil is a student-run newspaper. We have a staff of more than 40
					students who volunteer their free time to write, take pictures, do
					layout, or handle the business side of things. The Anvil's first
					priority is objective and accurate journalism. We ask our writers to
					search for the truth and explain it while telling both sides of the
					story.
				</p>
				<p className={cn("mt-4")}>
					We appreciate feedback via letters to the{" "}
					<Link href="/contact" className={cn("text-blue-500 hover:underline")}>
						editors
					</Link>
					.
				</p>
				<p className={cn("mt-4")}>
					The views expressed in each article are those of the author's and do
					not necessarily reflect theviews of theeditors, facualty members, or
					Middlesex School. The Editors-in-Chief assume total responsibility for
					the Anvil.
				</p>
			</Balancer>
		</div>
	);
}
