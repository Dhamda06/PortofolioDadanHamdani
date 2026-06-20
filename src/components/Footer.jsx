import { footer } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-navydeep border-t border-white/[0.08] py-5 px-[6%] flex justify-between items-center flex-wrap gap-2.5">
      <p className="text-muted2 text-[0.78rem]">
        © {new Date().getFullYear()} <span className="text-teal">{footer.text}</span>
      </p>
      <span className="font-mono text-[0.72rem] text-muted2">{footer.made}</span>
    </footer>
  );
}
