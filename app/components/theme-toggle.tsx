"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initialTheme: Theme = saved === "dark" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.style.colorScheme = initialTheme;
    setTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <button
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-indigo-600 transition hover:bg-indigo-50 dark:text-cyan-300 dark:hover:bg-white/10"
      onClick={toggleTheme}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      type="button"
    >
      {theme === "dark" ? (
        <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" /></svg>
      ) : (
        <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18"><path d="M20.25 15.18A8.5 8.5 0 0 1 8.82 3.75 8.5 8.5 0 1 0 20.25 15.18Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" /></svg>
      )}
    </button>
  );
}
