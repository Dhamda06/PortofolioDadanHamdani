import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Menginisialisasi Lenis untuk smooth-scroll di seluruh halaman, dan
 * mencegat klik pada tautan anchor (#about, #projects, dst) supaya
 * transisi perpindahan section terasa mulus dengan easing custom,
 * bukan jump kasar seperti scroll bawaan browser.
 */
export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4), // ease-out kuat, terasa "premium" dan tidak terlalu lambat
      smoothWheel: true,
      touchMultiplier: 1.1,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // Cegat semua klik pada anchor link (#hero, #about, dst) di seluruh halaman
    function handleAnchorClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -64, duration: 1.3 });
    }
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children;
}