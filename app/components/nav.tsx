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
    <aside className="relative z-20 mb-8 tracking-tight sm:mb-16">
      <div className="lg:sticky lg:top-20">
        <nav
          aria-label="Primary navigation"
          className="relative flex w-full rounded-full border border-white/70 bg-white/70 p-1.5 shadow-lg shadow-indigo-100/50 backdrop-blur-xl sm:inline-flex sm:w-auto dark:border-white/10 dark:bg-neutral-950/70 dark:shadow-indigo-950/20"
          id="nav"
        >
          <div className="flex w-full min-w-0 items-center justify-between gap-0.5 sm:w-auto sm:justify-start sm:gap-1">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="relative flex min-h-9 items-center whitespace-nowrap rounded-full px-2 text-xs font-medium text-neutral-600 transition-all hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-500 hover:text-white hover:shadow-md min-[380px]:px-2.5 min-[380px]:text-sm sm:px-4 dark:text-neutral-300"
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
