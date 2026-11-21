import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { Logo } from "./Logo";
import { product } from "../data/product";

const navLinks = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/download", label: "Download" },
  { to: "/about", label: "About" },
  { to: "/updates", label: "Updates" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[13.5px] leading-relaxed text-fog-600">
              {product.tagline} An intelligent desktop companion, in development.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-fog-600">Product</p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-[13.5px] text-fog-500 transition-colors hover:text-fog-100">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-fog-600">Project</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={product.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13.5px] text-fog-500 transition-colors hover:text-fog-100"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={product.releasesUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13.5px] text-fog-500 transition-colors hover:text-fog-100"
                  >
                    Releases
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="text-[12.5px] text-fog-600">
            © {new Date().getFullYear()} Neo. All rights reserved.
          </p>
          <p className="text-[12.5px] text-fog-600">
            Neo is currently in development. Features shown may not yet be available.
          </p>
        </div>
      </div>
    </footer>
  );
}
