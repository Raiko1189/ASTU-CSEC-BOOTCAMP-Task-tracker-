import { Link, useLocation } from "react-router-dom";
import { useTasks } from "../store/taskContext";

export default function Header() {
  const { darkMode, setDarkMode } = useTasks();
  const location = useLocation();

  const linkStyle = (path) =>
    `relative px-1 transition ${
      location.pathname === path
        ? "text-blue-600 dark:text-blue-400"
        : "text-zinc-600 dark:text-zinc-300 hover:text-blue-500"
    }`;

  return (
    <header className="
      sticky top-0 z-50
      backdrop-blur-xl
      bg-white/75 dark:bg-zinc-900/70
      border-b border-black/5 dark:border-white/10
    ">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="
            text-xl sm:text-2xl font-extrabold tracking-tight
            bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500
            bg-clip-text text-transparent
          ">
            Task Tracker
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Kill the boy, let the man be born
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex gap-8 text-sm font-semibold">
          <Link to="/" className={linkStyle("/")}>
            Home
            {location.pathname === "/" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
            )}
          </Link>

          <Link to="/stats" className={linkStyle("/stats")}>
            Stats
            {location.pathname === "/stats" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
            )}
          </Link>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
            flex items-center gap-2
            px-4 py-2 rounded-full
            bg-zinc-900 text-white
            dark:bg-white dark:text-zinc-900
            text-sm font-semibold
            shadow-md shadow-black/10 dark:shadow-white/10
            hover:scale-105 active:scale-95 transition
          "
        >
          <span className="text-base">
            {darkMode ? "☀️" : "🌙"}
          </span>
          <span className="hidden sm:inline">
            {darkMode ? "Light" : "Dark"}
          </span>
        </button>

      </div>
    </header>
  );
}
