import Link from "next/link";

export const NavBar: React.FC = () => (
	<nav className="flex justify-center items-center p-4 font-medium">
		<div className="flex gap-4">
			<Link href="/">Teoria 1</Link>
			<Link href="/teoria-2">Teoria 2</Link>
			<Link href="/teoria-3">Teoria 3</Link>
			<Link href="calc">Cálculo</Link>
		</div>
	</nav>
);
