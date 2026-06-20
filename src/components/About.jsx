import Reveal from "./Reveal";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="bg-navydeep py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="font-mono text-[0.7rem] text-teal tracking-[2.5px] uppercase mb-3.5 flex items-center gap-2.5">
            <span className="w-6 h-px bg-teal inline-block" />
            {about.eyebrow}
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[1.15] tracking-tight mb-3 whitespace-pre-line">
            {about.title}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mt-12">
          <Reveal delay={0.05} direction="left">
            <div>
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-muted text-[0.93rem] leading-[1.9] mb-4">
                  {p.pre}
                  <strong className="text-ink font-semibold">{p.strong}</strong>
                  {p.post}
                </p>
              ))}
              <div className="flex flex-wrap gap-2.5 mt-7">
                {about.chips.map((chip) => (
                  <span
                    key={chip}
                    className="bg-card border border-white/[0.08] px-4 py-1.5 rounded-lg text-[0.78rem] text-muted font-mono transition-colors hover:border-teal/30 hover:text-teal hover:bg-teal/[0.08] cursor-default"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} direction="right">
            <div className="flex flex-col gap-3.5">
              {about.highlights.map((h) => (
                <div
                  key={h.title}
                  className="bg-card border border-white/[0.08] rounded-2xl px-5 py-[1.15rem] flex items-center gap-4 transition-all hover:border-teal/30 hover:translate-x-1.5"
                >
                  <div className="w-11 h-11 rounded-[11px] bg-teal/[0.12] border border-teal/20 flex items-center justify-center text-xl shrink-0">
                    {h.icon}
                  </div>
                  <div>
                    <strong className="block text-ink text-[0.88rem] font-semibold mb-0.5">{h.title}</strong>
                    <span className="text-muted text-[0.77rem]">{h.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
