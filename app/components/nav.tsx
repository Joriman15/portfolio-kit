import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/#projects": {
    name: "selected work",
  },
  "/practicum": {
    name: "practicum overview",
  },
};

export function Navbar() {
  return (
    <aside className="mb-10 tracking-tight sm:mb-16">
      <div className="lg:sticky lg:top-20">
        <nav
          aria-label="Primary navigation"
          className="relative fade"
          id="nav"
        >
          <div className="flex flex-wrap gap-x-1 gap-y-1">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="relative flex min-h-10 items-center rounded-md px-2 text-sm transition-all hover:bg-neutral-100 hover:text-neutral-800 sm:text-base dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
