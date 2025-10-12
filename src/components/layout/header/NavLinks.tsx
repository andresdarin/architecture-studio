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
        <nav className="hidden md:flex md:flex-row md:space-x-6">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="text-xl font-thin text-[var(--color3)] hover:text-[var(--color4)] transition-colors"
                >
                    {item.label.toUpperCase()}
                </Link>
            ))}
        </nav>
    )
}

export default NavLinks;