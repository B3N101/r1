import cn from "@lib/utils";
import Balancer from "react-wrap-balancer";
// import Link from "next/link";
import { AnvilStaff } from "@/config";

export default function Page() {
	return (
		<div id="wrapper" className={cn("text-center")}>
			<Balancer>
				<h1 className={cn("mt-4 text-4xl")}>
					Anvil <i>Staff</i>
				</h1>
				<h1 className={cn("mb-8 text-2xl italic")}>{AnvilStaff.year}</h1>
				{/* 2 columns for large screens, 1 column for small screens */}
				<h1 className={cn("text-2xl")}>EDITORS-IN-CHIEF</h1>
				<div className={cn("grid grid-cols-1 gap-1 md:grid-cols-2")}>
					{AnvilStaff.editors_in_chiefs.map((editor_in_chief) => (
						<div key={editor_in_chief} className={cn("text-base")}>
							{editor_in_chief}
						</div>
					))}
				</div>
				<div className={cn("grid sm:grid-cols-2")}>
					<div>
						<h1 className={cn("mt-8 text-2xl italic")}>News</h1>
						<div className={cn("text-base")}>{AnvilStaff.news}</div>
					</div>
					<div>
						<h1 className={cn("mt-8 text-2xl italic")}>Opinions</h1>
						<div className={cn("text-base")}>{AnvilStaff.opinions}</div>
					</div>
					<div>
						<h1 className={cn("mt-8 text-2xl italic")}>Sports</h1>
						<div className={cn("text-base")}>{AnvilStaff.sports}</div>
					</div>
					<div>
						<h1 className={cn("mt-8 text-2xl italic")}>Arts & Entertainment</h1>
						<div className={cn("text-base")}>{AnvilStaff.news}</div>
					</div>
					<div>
						<h1 className={cn("mt-8 text-2xl italic")}>Facualty Advisor</h1>
						<div className={cn("text-base")}>{AnvilStaff.facaulty_advisor}</div>
					</div>
					<div>
						<h1 className={cn("mt-8 text-2xl italic")}>Business Manager</h1>
						<div className={cn("text-base")}>{AnvilStaff.business_manager}</div>
					</div>
					<div>
						<h1 className={cn("mt-8 text-2xl italic")}>Web Manager</h1>
						<div className={cn("text-base")}>{AnvilStaff.web_manager}</div>
					</div>
					<div>
						<h1 className={cn("mt-8 text-2xl italic")}>Chief Photographer</h1>
						<div className={cn("text-base")}>
							{AnvilStaff.chief_photographer}
						</div>
					</div>
				</div>

				<h1 className={cn("mt-8 text-2xl italic")}>Cheif Writers</h1>
				<div className={cn("grid grid-cols-1 gap-1 md:grid-cols-3")}>
					{AnvilStaff.chief_writers.map((staff) => (
						<div key={staff} className={cn("text-base")}>
							{staff}
						</div>
					))}
				</div>

				<h1 className={cn("mt-8 text-2xl italic")}>Staff Photographers</h1>
				<div className={cn("grid grid-cols-1 gap-1 md:grid-cols-3")}>
					{AnvilStaff.staff_photographers.map((staff) => (
						<div key={staff} className={cn("text-base")}>
							{staff}
						</div>
					))}
				</div>

				<h1 className={cn("mt-8 text-2xl italic")}>Chief Illustrator</h1>
				<div className={cn("grid grid-cols-1 gap-1 md:grid-cols-3")}>
					{AnvilStaff.staff_illustrators.map((staff) => (
						<div key={staff} className={cn("text-base")}>
							{staff}
						</div>
					))}
				</div>
			</Balancer>
		</div>
	);
}
