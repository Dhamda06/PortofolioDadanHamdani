import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { experienceIntro, experience } from "../data/content";

export default function Experience() {
  const [active, setActive] = useState(0);
  const current = experience[active];

  return (
    <section id="experience" className="bg-navydeep py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.7rem] text-teal tracking-[2.5px] uppercase mb-3.5 flex items-center gap-2.5">
            <span className="w-6 h-px bg-teal inline-block" />
            {experienceIntro.eyebrow}
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[1.15] tracking-tight mb-3">
            {experienceIntro.title}
          </h2>
          <p className="text-muted text-[0.95rem] leading-[1.75] max-w-[480px]">{experienceIntro.sub}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 mt-12">
            {/* Tabs — scrollable di mobile */}
            <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1">
              {experience.map((exp, i) => (
                <button
                  key={exp.tabTitle}
                  onClick={() => setActive(i)}
                  className={`shrink-0 lg:shrink text-left px-4 py-3.5 rounded-xl border transition-all whitespace-nowrap lg:whitespace-normal ${
                    active === i
                      ? "bg-cardlight border-teal/25 lg:border-l-[3px] lg:border-l-teal"
                      : "border-transparent hover:bg-card hover:border-white/[0.08]"
                  }`}
                >
                  <span className={`block text-[0.85rem] font-semibold mb-0.5 transition-colors ${active === i ? "text-ink" : "text-muted"}`}>
                    {exp.tabTitle}
                  </span>
                  <span className={`block text-[0.72rem] font-mono ${active === i ? "text-teal" : "text-muted2"}`}>
                    {exp.tabSub}
                  </span>
                </button>
              ))}
            </div>

            {/* Panel */}
            <div className="min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="font-mono text-[0.72rem] text-teal tracking-wide mb-2.5 flex items-center gap-2">
                    {current.period}
                    <span className="flex-1 h-px bg-teal/[0.15]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink mb-1 tracking-tight">{current.title}</h3>
                  <div className="text-teal text-[0.88rem] font-medium mb-[1.15rem]">{current.org}</div>
                  <p className="text-muted text-[0.88rem] leading-[1.85] mb-[1.15rem]">{current.desc}</p>
                  <ul className="flex flex-col gap-2.5 list-none">
                    {current.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-muted text-[0.88rem] leading-[1.65]">
                        <span className="text-teal shrink-0 mt-0.5 text-[0.8rem]">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {current.skills.map((s) => (
                      <span key={s} className="bg-teal/[0.12] border border-teal/20 text-teal px-3 py-1 rounded-md text-[0.73rem] font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
