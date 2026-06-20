import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const navIds = nav.map((item) => item.href);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const active = useActiveSection(navIds);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] h-16 px-[5%] md:px-[6%] flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <a
        href="#hero"
        className="font-display font-bold text-lg text-teal flex items-center gap-2 tracking-tight"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
        </span>

        DH.
      </a>

      {/* MENU DESKTOP */}
      <LayoutGroup id="navbar-active">
        <ul className="hidden md:flex gap-1 list-none relative">
          {nav.map((item) => {
            const isActive = active === item.href;

            return (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  className={
                    "relative z-10 block text-[0.78rem] font-medium uppercase tracking-wider px-3 py-1.5 rounded-md transition-colors " +
                    (isActive
                      ? "text-ink"
                      : "text-muted hover:text-ink")
                  }
                >
                  {item.label}
                </a>

                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-white/[0.06] rounded-md"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </LayoutGroup>

      {/* ACTION DESKTOP */}
      <div className="hidden md:flex items-center gap-3">
        <ThemeToggle />

        <a
          href={`mailto:${profile.email}`}
          className="inline-block bg-teal text-navy px-5 py-2 rounded-lg text-[0.78rem] font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(0,229,176,0.2)] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(0,229,176,0.35)] transition-all"
        >
          Hire Me
        </a>
      </div>

      {/* MOBILE BUTTON */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />

        <button
          className="text-ink p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-navydeep/95 backdrop-blur-xl border-b border-white/[0.08] flex flex-col p-4 gap-1"
          >
            {nav.map((item) => {
              const isActive = active === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    "text-sm font-medium uppercase tracking-wider px-4 py-3 rounded-md transition-colors " +
                    (isActive
                      ? "text-ink bg-white/[0.06]"
                      : "text-muted hover:text-ink hover:bg-white/[0.04]")
                  }
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-teal text-navy px-5 py-3 rounded-lg text-sm font-bold uppercase tracking-wide"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}