import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-sky-400 transition-colors hover:text-sky-300"
        >
          CinePedia
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-sky-400/10 text-sky-400"
                  : "text-gray-300 hover:bg-white/10 hover:text-sky-400"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-yellow-400/10 text-yellow-400"
                  : "text-gray-300 hover:bg-white/10 hover:text-yellow-400"
              }`
            }
          >
            Watchlist
          </NavLink>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-yellow-400/10 text-yellow-400"
                  : "text-gray-300 hover:bg-white/10 hover:text-yellow-400"
              }`
            }
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
