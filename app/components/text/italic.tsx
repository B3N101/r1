import Balancer from "react-wrap-balancer";
// import italic font
import { Crimson_Pro } from "@next/font/google";
const crimsonPro = Crimson_Pro({
    subsets: ["latin"],
    variable: "--font-crimson-pro",
});

export default function italic({ children }: { children: React.ReactNode }) {
	return (
        <div className={crimsonPro.className}>
        <Balancer>
            {children}
        </Balancer>
        </div>
    );
}
