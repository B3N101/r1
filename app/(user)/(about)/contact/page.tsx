import Balancer from "react-wrap-balancer";
import cn from "@lib/utils";
import { ContactInfo } from "@/config";

export default function Page() {
	return (
		<div className={cn("mt-4 text-center")}>
			<Balancer>
				<h1 className={cn("text-4xl italic")}>Contact</h1>
				<p className={cn("mt-4 text-lg")}>
					Questions? <br /> Comments? <br /> Concerns? <br />
					<br /> Email us at{" "}
					<a
						target="_black"
						className={cn("text-blue-500 ")}
						href={`mailto:${ContactInfo.email}`}>
						{ContactInfo.email}
					</a>
					.
				</p>
			</Balancer>
		</div>
	);
}
