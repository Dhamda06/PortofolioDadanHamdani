import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { certifications } from "../data/content";

const colorMap = {
  gold: { bar: "from-amber to-[#FF9F1C]", tagBg: "bg-amber/[0.12]", tagText: "text-amber" },
  teal: { bar: "from-teal to-[#00B0FF]", tagBg: "bg-teal/[0.12]", tagText: "text-teal" },
  blue: { bar: "from-[#60A5FA] to-violet", tagBg: "bg-[#60A5FA]/[0.12]", tagText: "text-[#60A5FA]" },
  green: { bar: "from-[#34D399] to-[#059669]", tagBg: "bg-[#34D399]/[0.12]", tagText: "text-[#34D399]" },
  purple: { bar: "from-violet to-[#7C3AED]", tagBg: "bg-violet/[0.12]", tagText: "text-violet" },
};

export default function Certifications() {
  return (
    <section id="certifications" className="bg-navydeep py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.7rem] text-teal tracking-[2.5px] uppercase mb-3.5 flex items-center gap-2.5">
            <span className="w-6 h-px bg-teal inline-block" />
            {certifications.eyebrow}
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[1.15] tracking-tight mb-3">
            {certifications.title}
          </h2>
          <p className="text-muted text-[0.95rem] leading-[1.75] max-w-[480px]">{certifications.sub}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {certifications.items.map((cert, i) => {
            const c = colorMap[cert.color];
            return (
              <Reveal key={cert.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative bg-card border border-white/[0.08] rounded-2xl p-6 overflow-hidden h-full transition-colors hover:border-teal/20"
                >
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${c.bar}`} />
                  <span className="absolute top-5 right-5 font-mono text-[0.68rem] text-muted2">{cert.year}</span>
                  <div
                    className={`inline-flex items-center gap-1.5 text-[0.68rem] font-bold px-2.5 py-1 rounded uppercase tracking-wide mb-3.5 ${c.tagBg} ${c.tagText}`}
                  >
                    {cert.tag}
                  </div>
                  <h3 className="font-display text-[0.97rem] font-semibold text-ink mb-1.5 leading-[1.35]">
                    {cert.title}
                  </h3>
                  <p className="text-muted text-[0.8rem] leading-[1.6]">{cert.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
