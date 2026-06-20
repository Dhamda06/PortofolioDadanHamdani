import { motion } from "framer-motion";
import { Mail, Briefcase, MapPin, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { contact, profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-navy overflow-hidden py-24 px-[6%]">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,176,.06), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="max-w-[640px] mx-auto text-center relative z-10">
        <Reveal>
          <div className="font-mono text-[0.7rem] text-teal tracking-[2.5px] uppercase mb-3.5 flex items-center justify-center gap-2.5">
            <span className="w-6 h-px bg-teal inline-block" />
            {contact.eyebrow}
            <span className="w-6 h-px bg-teal inline-block" />
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[1.15] tracking-tight mb-3">
            {contact.title}
          </h2>
          <p className="text-muted text-[0.95rem] leading-[1.75] max-w-[400px] mx-auto mb-10">
            Looking for <strong className="text-ink font-semibold">Data Scientist</strong>,{" "}
            <strong className="text-ink font-semibold">Data Analyst</strong>, or{" "}
            <strong className="text-ink font-semibold">Business Intelligence</strong> roles. Let's build something
            meaningful together.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3 mb-9">
            <motion.a
              whileHover={{ y: -2 }}
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3.5 bg-card border border-white/[0.08] rounded-xl px-5 py-4 text-left transition-colors hover:border-teal/30 hover:bg-cardlight"
            >
              <div className="w-10 h-10 rounded-[10px] bg-teal/[0.12] border border-teal/20 flex items-center justify-center shrink-0">
                <Mail size={16} className="text-teal" />
              </div>
              <div>
                <strong className="block text-ink text-[0.85rem] font-semibold">Email</strong>
                <span className="text-muted text-[0.78rem]">{profile.email}</span>
              </div>
              <ArrowRight size={16} className="ml-auto text-muted2 group-hover:text-teal group-hover:translate-x-1 transition-all" />
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3.5 bg-card border border-white/[0.08] rounded-xl px-5 py-4 text-left transition-colors hover:border-teal/30 hover:bg-cardlight"
            >
              <div className="w-10 h-10 rounded-[10px] bg-teal/[0.12] border border-teal/20 flex items-center justify-center shrink-0">
                <Briefcase size={16} className="text-teal" />
              </div>
              <div>
                <strong className="block text-ink text-[0.85rem] font-semibold">LinkedIn</strong>
                <span className="text-muted text-[0.78rem]">{profile.linkedin}</span>
              </div>
              <ArrowRight size={16} className="ml-auto text-muted2 group-hover:text-teal group-hover:translate-x-1 transition-all" />
            </motion.a>

            <div className="flex items-center gap-3.5 bg-card border border-white/[0.08] rounded-xl px-5 py-4 text-left">
              <div className="w-10 h-10 rounded-[10px] bg-teal/[0.12] border border-teal/20 flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-teal" />
              </div>
              <div>
                <strong className="block text-ink text-[0.85rem] font-semibold">Location</strong>
                <span className="text-muted text-[0.78rem]">{profile.location}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="inline-flex items-center gap-2 bg-teal/[0.08] border border-teal/20 px-5 py-2 rounded-full text-[0.78rem] text-teal font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
            {contact.availability}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
