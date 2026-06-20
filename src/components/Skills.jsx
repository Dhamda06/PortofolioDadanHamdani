import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="bg-navy py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.7rem] text-teal tracking-[2.5px] uppercase mb-3.5 flex items-center gap-2.5">
            <span className="w-6 h-px bg-teal inline-block" />
            {skills.eyebrow}
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[1.15] tracking-tight mb-3">
            {skills.title}
          </h2>
          <p className="text-muted text-[0.95rem] leading-[1.75] max-w-[480px]">{skills.sub}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="bg-card border border-white/[0.08] rounded-2xl p-6 h-full transition-shadow hover:border-teal/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,229,176,0.08)]"
              >
                <div className="flex items-center gap-3 mb-[1.15rem]">
                  <div className="w-10 h-10 rounded-[10px] bg-teal/[0.12] border border-teal/20 flex items-center justify-center text-[1.1rem]">
                    {group.icon}
                  </div>
                  <h3 className="font-display text-[0.88rem] font-semibold text-ink">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.tags.map((tag) => (
                    <span
                      key={tag.t}
                      className={`px-2.5 py-1 rounded-md text-[0.72rem] font-medium transition-colors cursor-default ${
                        tag.hot
                          ? "bg-teal/[0.12] border border-teal/30 text-teal"
                          : "bg-white/[0.04] border border-white/[0.07] text-muted hover:bg-teal/[0.12] hover:border-teal/30 hover:text-teal"
                      }`}
                    >
                      {tag.t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
