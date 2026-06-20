import { useEffect, useRef } from "react";

/**
 * DataField — signature element halaman ini.
 * Sebuah jaringan titik data (node graph) yang merespons gerak kursor dan scroll,
 * merepresentasikan dunia data science: titik data yang saling terhubung membentuk pola/model.
 * Kursor "menarik" node di sekitarnya — efek sentuh/buliran sesuai permintaan.
 */
export default function DataField({ className = "", density = 14000, interactive = true }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W, H, points, raf;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initPoints();
    }

    function initPoints() {
      const n = Math.max(24, Math.floor((W * H) / density));
      points = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        ox: 0,
        oy: 0,
        r: Math.random() * 1.4 + 0.6,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        a: Math.random() * 0.5 + 0.2,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, W, H);
      const m = mouse.current;

      for (const p of points) {
        // gerak ambient
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        // efek "buliran" tarikan kursor — node bergerak halus mendekat lalu kembali
        if (interactive && m.active) {
          const dx = m.x - p.x;
          const dy = m.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 160;
          if (dist < radius) {
            const force = (1 - dist / radius) * 0.6;
            p.ox += dx * force * 0.02;
            p.oy += dy * force * 0.02;
          }
        }
        // pegas kembali ke posisi alami
        p.ox *= 0.92;
        p.oy *= 0.92;

        const drawX = p.x + p.ox;
        const drawY = p.y + p.oy;

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,176,${p.a})`;
        ctx.fill();
        p._dx = drawX;
        p._dy = drawY;
      }

      // garis koneksi antar node berdekatan — graph/network look
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i]._dx - points[j]._dx;
          const dy = points[i]._dy - points[j]._dy;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 95) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,229,176,${0.09 * (1 - d / 95)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(points[i]._dx, points[i]._dy);
            ctx.lineTo(points[j]._dx, points[j]._dy);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    function handleMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    }
    function handleLeave() {
      mouse.current.active = false;
    }
    function handleTouch(e) {
      if (!e.touches || !e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.touches[0].clientX - rect.left;
      mouse.current.y = e.touches[0].clientY - rect.top;
      mouse.current.active = true;
    }

    resize();
    window.addEventListener("resize", resize);
    if (interactive) {
      window.addEventListener("mousemove", handleMove);
      canvas.addEventListener("mouseleave", handleLeave);
      window.addEventListener("touchmove", handleTouch, { passive: true });
    }

    if (prefersReduced) {
      // tetap gambar sekali secara statis, tanpa animasi berjalan
      step();
      cancelAnimationFrame(raf);
    } else {
      step();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMove);
        canvas.removeEventListener("mouseleave", handleLeave);
        window.removeEventListener("touchmove", handleTouch);
      }
    };
  }, [density, interactive]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
