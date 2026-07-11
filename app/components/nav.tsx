import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

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
    <aside className="relative z-20 mb-10 tracking-tight sm:mb-16">
      <div className="lg:sticky lg:top-20">
        <nav
          aria-label="Primary navigation"
          className="relative inline-flex rounded-full border border-white/70 bg-white/70 p-1.5 shadow-lg shadow-indigo-100/50 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/70 dark:shadow-indigo-950/20"
          id="nav"
        >
          <div className="flex flex-wrap gap-1">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="relative flex min-h-9 items-center rounded-full px-3 text-sm font-medium text-neutral-600 transition-all hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-500 hover:text-white hover:shadow-md sm:px-4 dark:text-neutral-300"
                >
                  {name}
                </Link>
              );
            })}
            <span aria-hidden="true" className="my-1 w-px bg-indigo-100 dark:bg-white/10" />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
