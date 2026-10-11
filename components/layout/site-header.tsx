"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const preference = window.localStorage.getItem("theme");
    if (preference === "dark" || preference === "light") {
      document.documentElement.dataset.theme = preference;
    }
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const useDark = currentTheme
      ? currentTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = useDark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="David Atakpa home">
          <span className="wordmark-mark" aria-hidden="true">DA</span>
          <span>David Atakpa</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              (item.href === "/projects" && pathname.startsWith("/projects/"));
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`nav-link${active ? " is-active" : ""}`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <button
            aria-label="Toggle light and dark theme"
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            title="Toggle light and dark theme"
            type="button"
          >
            <Moon aria-hidden="true" className="theme-icon-light" size={18} />
            <Sun aria-hidden="true" className="theme-icon-dark" size={18} />
          </button>
          <Link className="button button-small button-dark header-cta" href="/projects">
            View Projects
          </Link>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            ref={menuButtonRef}
            type="button"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        inert={!menuOpen}
      >
        {navigation.map((item) => {
          const active =
            pathname === item.href ||
            (item.href === "/projects" && pathname.startsWith("/projects/"));
          return (
              <Link
              aria-current={active ? "page" : undefined}
              className="mobile-nav-link"
              href={item.href}
                onClick={() => setMenuOpen(false)}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
        <Link className="button button-dark mobile-nav-cta" href="/projects" onClick={() => setMenuOpen(false)}>
          View Projects
        </Link>
      </nav>
    </header>
  );
}