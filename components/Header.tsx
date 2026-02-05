import Link from "next/link";

const ITEMS = [
	{
		href: "/",
		title: "Index",
	},
	{
		href: "/about",
		title: "About",
	},
	{
		href: "/original",
		title: "Original",
	},
];

export function Header() {
	return (
		<header className="border-b py-6 text-center font-semibold text-sm text-zinc-500">
			{ITEMS.map((item) => {
				return (
					<Link
						key={item.href}
						href={item.href}
						className="px-6 text-xl hover:text-blue-600"
					>
						{item.title}
					</Link>
				);
			})}
		</header>
	);
}
