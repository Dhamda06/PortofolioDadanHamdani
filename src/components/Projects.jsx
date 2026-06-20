import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { projectsIntro, featuredProjects, smallProjects } from "../data/content";

const badgeColors = {
  competition: "bg-amber/[0.12] text-amber",
  internship: "bg-violet/[0.12] text-violet",
  research: "bg-[#34D399]/[0.12] text-[#34D399]",
};

function FeaturedProject({ project }) {
  const TextBlock = (
    <div>
      <div className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] text-teal tracking-[1.5px] uppercase bg-teal/[0.12] border border-teal/20 px-3 py-1 rounded mb-4">
        {project.label}
      </div>
      <h3 className="font-display text-[1.3rem] sm:text-[1.4rem] font-bold text-ink leading-[1.25] mb-3 tracking-tight">
        {project.title}
      </h3>
      <p className="text-muted text-[0.88rem] leading-[1.8] mb-5">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-white/[0.04] border border-white/[0.08] text-muted px-2.5 py-1 rounded-md text-[0.71rem] font-mono transition-colors hover:text-teal hover:border-teal/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  const HighlightsBlock = (
    <div className="flex flex-col gap-3">
      {project.highlights.map((h) => (
        <div key={h.title} className="flex items-start gap-3 p-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl">
          <div className="w-8 h-8 bg-teal/[0.12] rounded-lg flex items-center justify-center text-sm shrink-0">
            {h.icon}
          </div>
          <div>
            <strong className="block text-[0.8rem] text-ink mb-0.5 font-semibold">{h.title}</strong>
            <span className="text-[0.75rem] text-muted leading-[1.5]">{h.text}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Reveal>
      <motion.div
        whileHover={{ y: -2 }}
        className="relative bg-cardlight border border-white/[0.08] rounded-[20px] p-7 sm:p-9 mb-5 grid md:grid-cols-2 gap-8 md:gap-10 items-center overflow-hidden transition-shadow hover:border-teal/25 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
      >
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,229,176,.22), transparent 70%)" }}
          aria-hidden="true"
        />
        {project.reverse ? (
          <>
            <div className="order-2 md:order-1">{HighlightsBlock}</div>
            <div className="order-1 md:order-2">{TextBlock}</div>
          </>
        ) : (
          <>
            {TextBlock}
            {HighlightsBlock}
          </>
        )}
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-navy py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="flex justify-between items-end mb-12 flex-wrap gap-5">
            <div>
              <div className="font-mono text-[0.7rem] text-teal tracking-[2.5px] uppercase mb-3.5 flex items-center gap-2.5">
                <span className="w-6 h-px bg-teal inline-block" />
                {projectsIntro.eyebrow}
              </div>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[1.15] tracking-tight">
                {projectsIntro.title}
              </h2>
            </div>
            <p className="text-muted text-[0.95rem] leading-[1.75] sm:text-right max-w-[300px]">
              {projectsIntro.sub}
            </p>
          </div>
        </Reveal>

        {featuredProjects.map((p) => (
          <FeaturedProject key={p.title} project={p} />
        ))}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {smallProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-card border border-white/[0.08] rounded-2xl p-6 h-full overflow-hidden transition-colors hover:border-teal/20 hover:shadow-[0_14px_36px_rgba(0,0,0,0.4)]"
              >
                <div className="flex justify-between items-start mb-3.5">
                  <div className="w-11 h-11 bg-teal/[0.12] rounded-xl flex items-center justify-center text-xl">
                    {p.icon}
                  </div>
                  <span
                    className={`text-[0.65rem] font-bold px-2 py-1 rounded uppercase tracking-wide ${badgeColors[p.badge]}`}
                  >
                    {p.badgeLabel}
                  </span>
                </div>
                <h3 className="font-display text-[0.92rem] font-semibold text-ink mb-2 leading-[1.4]">{p.title}</h3>
                <p className="text-muted text-[0.8rem] leading-[1.7] mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="bg-white/[0.04] border border-white/[0.06] text-muted2 px-2 py-0.5 rounded text-[0.68rem] font-mono">
                      {tag}
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
