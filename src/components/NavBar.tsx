import Link from "next/link";

const links = [
  { href: "/client", label: "Client" },
  { href: "/drinks", label: "Drinks" },
  { href: "/prisma", label: "Prisma" },
  { href: "/tasks", label: "Tasks" },
];

const NavBar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link
          href="/"
          className="btn btn-primary"
        >
          Awesome Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map(({ href, label }) => (
            <li key={`${label}`}>
              <Link
                href={href}
                className="capitalize"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
