import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] h-16 px-[5%] md:px-[6%] flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-navy/90 backdrop-blur-xl border-b border-white/[0.08]" : "bg-transparent"
      }`}
    >
      <a href="#hero" className="font-display font-bold text-lg text-teal flex items-center gap-2 tracking-tight">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
        </span>
        DH.
      </a>

      <ul className="hidden md:flex gap-1.5 list-none">
        {nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-muted hover:text-ink hover:bg-white/[0.04] text-[0.78rem] font-medium uppercase tracking-wider px-3 py-1.5 rounded-md transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${profile.email}`}
        className="hidden md:inline-block bg-teal text-navy px-5 py-2 rounded-lg text-[0.78rem] font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(0,229,176,0.2)] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(0,229,176,0.35)] transition-all"
      >
        Hire Me
      </a>

      <button
        className="md:hidden text-ink p-2"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Tutup menu" : "Buka menu"}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-navydeep/95 backdrop-blur-xl border-b border-white/[0.08] flex flex-col p-4 gap-1"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-muted hover:text-ink hover:bg-white/[0.04] text-sm font-medium uppercase tracking-wider px-4 py-3 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
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
