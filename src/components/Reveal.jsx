import { motion } from "framer-motion";

/**
 * Membungkus konten dengan animasi reveal halus saat discroll ke viewport.
 * direction: "up" | "left" | "right" | "none"
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as: Component = motion.div,
  amount = 0.15,
  once = true,
}) {
  const offsets = {
    up: { y: 28, x: 0 },
    left: { y: 0, x: -28 },
    right: { y: 0, x: 28 },
    none: { y: 0, x: 0 },
  };
  const { x, y } = offsets[direction] ?? offsets.up;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
