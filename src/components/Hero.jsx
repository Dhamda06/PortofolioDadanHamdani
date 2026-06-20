import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Globe, AtSign } from "lucide-react";
import DataField from "./DataField";
import { profile } from "../data/content";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useTypedText(roles) {
  const [text, setText] = useState(() => (prefersReducedMotion() ? roles[0] : ""));
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let timeout;
    function tick() {
      const current = roles[roleIndex.current];
      if (!deleting.current) {
        charIndex.current++;
        setText(current.slice(0, charIndex.current));
        if (charIndex.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(tick, 2000);
          return;
        }
      } else {
        charIndex.current--;
        setText(current.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }
      timeout = setTimeout(tick, deleting.current ? 35 : 65);
    }
    tick();
    return () => clearTimeout(timeout);
  }, [roles]);

  return text;
}

/**
 * Kartu foto besar di sisi kanan Hero — terinspirasi pola "photo card" populer:
 * foto besar dalam bingkai, nama+role overlay di atas, status bar di bawah.
 * Interaktif: tilt 3D mengikuti kursor/sentuhan + kilau cahaya dinamis.
 */
function PhotoCard() {
  const wrapRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  function handleMove(clientX, clientY) {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width - 0.5;
    const py = (clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 12, y: py * -12 });
  }

  function handleLeave() {
    setHovering(false);
    setTilt({ x: 0, y: 0 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[360px] sm:max-w-[400px] mx-auto"
      style={{ perspective: 1000 }}
    >
      {/* glow di belakang kartu */}
      <div
        className="absolute -inset-4 rounded-[28px] blur-3xl bg-teal/25 transition-opacity duration-300"
        style={{ opacity: hovering ? 0.9 : 0.5 }}
        aria-hidden="true"
      />

      <div
        ref={wrapRef}
        onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleLeave}
        onTouchMove={(e) => e.touches[0] && handleMove(e.touches[0].clientX, e.touches[0].clientY)}
        onTouchEnd={handleLeave}
        className="relative rounded-[28px] overflow-hidden border border-white/[0.08] bg-navydeep cursor-pointer select-none"
        style={{
          aspectRatio: "3/4",
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${hovering ? 1.025 : 1})`,
          transition: hovering ? "transform 0.08s ease-out" : "transform 0.5s ease-out",
          boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
        }}
      >
        {/* foto */}
        <img
          src="/images/profile.jpg"
          alt={`Foto profil ${profile.name}`}
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />
        <div
          className="hidden absolute inset-0 h-full w-full items-center justify-center font-display text-7xl font-bold text-teal bg-navydeeper pointer-events-none"
          style={{ display: "none" }}
        >
          DH
        </div>

        {/* gradient gelap di atas & bawah agar teks overlay terbaca */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-navy/90 via-navy/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy via-navy/80 to-transparent pointer-events-none" />

        {/* highlight kilau mengikuti kursor */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-200"
          style={{
            opacity: hovering ? 1 : 0,
            background: `radial-gradient(circle at ${50 + tilt.x * 2.5}% ${50 - tilt.y * 2.5}%, rgba(255,255,255,0.14), transparent 55%)`,
          }}
          aria-hidden="true"
        />

        {/* nama + role overlay di atas foto */}
        <div className="absolute top-0 left-0 p-5 sm:p-6">
          <h3 className="font-display text-lg sm:text-xl font-bold text-ink leading-tight drop-shadow-md">
            {profile.name}
          </h3>
          <p className="text-teal text-xs sm:text-sm font-medium font-mono mt-0.5">{profile.role}</p>
        </div>

        {/* status bar bawah, ala referensi: status online + tombol contact */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-md border border-white/[0.1] rounded-full pl-1.5 pr-3.5 py-1.5">
            <span className="relative flex h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-gradient-to-br from-teal to-[#00B0FF] items-center justify-center font-display text-[0.65rem] font-bold text-navy shrink-0">
              DH
            </span>
            <div className="leading-tight">
              <span className="block text-[0.7rem] text-ink font-medium">@dadanhamdani</span>
              <span className="flex items-center gap-1 text-[0.62rem] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
                Online
              </span>
            </div>
          </div>
          <a
            href={`mailto:${profile.email}`}
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 bg-teal text-navy text-[0.68rem] font-bold px-3.5 py-2 rounded-full hover:-translate-y-0.5 transition-transform shadow-[0_4px_20px_rgba(0,229,176,0.4)]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const typed = useTypedText(profile.typedRoles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-[6%] pt-28 pb-16"
    >
      {/* lapisan latar */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,176,.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <DataField className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center">
        {/* === Kolom kiri: teks === */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-teal text-xs sm:text-sm tracking-[3px] uppercase mb-4"
          >
            Welcome Portofolio
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="inline-flex items-center gap-2 border border-teal/25 bg-teal/[0.07] px-4 py-1.5 rounded-full text-[0.72rem] font-semibold text-teal uppercase tracking-wide mb-6 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            {profile.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-[1.04] tracking-tight text-[clamp(2.4rem,6vw,4.4rem)] mb-5"
          >
            <span className="block text-ink">{profile.name}</span>
            <span className="block text-gradient-teal text-[0.70em]">{profile.role}</span>
          </motion.h1>

          <div className="font-mono text-muted text-[clamp(0.85rem,2vw,1.05rem)] mb-6 min-h-[1.6em]">
            <span>{typed}</span>
            <span className="inline-block w-[2px] h-[1em] bg-teal ml-0.5 align-middle animate-pulse" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="text-muted text-base max-w-xl mx-auto lg:mx-0 mb-8 leading-[1.8]"
          >
            <strong className="text-ink font-semibold">BNSP-Certified Data Scientist</strong> & Information Systems graduate from Telkom University. 
            Combining analytical thinking, data intelligence, and system design to deliver solutions with real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3 justify-center lg:justify-start flex-wrap mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-teal text-navy px-9 py-3.5 rounded-xl font-bold text-sm shadow-[0_0_32px_rgba(0,229,176,0.25)] hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(0,229,176,0.4)] transition-all"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="border border-white/[0.08] bg-white/[0.04] text-ink px-9 py-3.5 rounded-xl font-medium text-sm backdrop-blur-sm hover:border-teal/35 hover:bg-teal/[0.12] hover:-translate-y-0.5 transition-all"
            >
              Get In Touch
            </a>
          </motion.div>

        </div>

        {/* === Kolom kanan: kartu foto besar === */}
        <PhotoCard />
      </div>
    </section>
  );
}