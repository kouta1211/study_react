export function Header() {
	return (
		<header className="border-b py-6 text-center font-semibold text-sm text-zinc-500">
			<a href="/" className="px-6 text-xl hover:text-blue-600">
				Index
			</a>
			<a href="/about" className="px-6 text-xl hover:text-blue-600">
				About
			</a>
			<a href="/original" className="px-6 text-xl hover:text-blue-600">
				Original
			</a>
		</header>
	);
}
