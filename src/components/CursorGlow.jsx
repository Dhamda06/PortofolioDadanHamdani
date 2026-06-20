import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    // Sembunyikan di perangkat sentuh (tidak ada konsep hover cursor)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const el = ref.current;
    function handleMove(e) {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block"
      style={{
        background: "radial-gradient(circle, rgba(0,229,176,.06), transparent 70%)",
        transition: "left 0.1s ease, top 0.1s ease",
      }}
    />
  );
}
