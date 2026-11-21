import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/download", label: "Download" },
  { to: "/about", label: "About" },
  { to: "/updates", label: "Updates" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative rounded-md px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200 ${
                  isActive ? "text-fog-100" : "text-fog-500 hover:text-fog-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-px h-px bg-white transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/download"
            className="group inline-flex items-center gap-2 rounded-full bg-fog-100 px-4 py-2 text-[13.5px] font-semibold text-ink-950 transition-all duration-200 hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
          >
            <Download className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
            Get Neo
          </Link>
        </div>

        <button
          className="rounded-md p-2 text-fog-300 transition-colors hover:bg-white/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-ink-950/95 px-5 pb-5 pt-2 backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 text-[15px] font-medium transition-colors ${
                    isActive ? "text-fog-100" : "text-fog-500 hover:text-fog-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/download"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-fog-100 px-4 py-2.5 text-[14px] font-semibold text-ink-950"
            >
              <Download className="h-4 w-4" />
              Get Neo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
