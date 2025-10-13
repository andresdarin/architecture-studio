import Link from "next/link";

const navItems = [
    { label: 'home', href: '/Home' },
    { label: 'pages', href: '/Pages' },
    { label: 'portfolio', href: '/Portfolio' },
    { label: 'shop', href: '/Shop' },
    { label: 'blog', href: '/Blog' },
    { label: 'landing', href: '/Landing' },
];

export const NavLinks = () => {
    return (
        <nav className="flex flex-col p-4">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="text-xl text-[var(--color3)] hover:text-[var(--color4)] transition-colors px-4 py-2 no-underline"
                >
                    {item.label.toUpperCase()}
                </Link>
            ))}
        </nav>
    )
}

export default NavLinks;