import Balancer from "react-wrap-balancer";

export default function text({ children }: { children: React.ReactNode }) {
	return <Balancer>{children}</Balancer>;
}
