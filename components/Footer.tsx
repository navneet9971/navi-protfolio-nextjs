"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import { email, socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-cream/10 pt-24 pb-10">
      <div className="section-shell">
        <p className="kicker">05 — Contact</p>
        <h2 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-cream md:text-8xl">
          Let’s make
          <br />
          something <span className="text-lime">sharp.</span>
        </h2>
        <p className="mt-6 max-w-lg text-mute">
          Have a product in mind? I design and ship frontend that feels fast, clear, and a little bit alive.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton href={`mailto:${email}`}>
            Email me
            <FaLocationArrow className="text-xs" />
          </MagneticButton>
          <p className="text-sm text-mute">{email}</p>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-cream/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-mute">
            © {new Date().getFullYear()} Navneet Kumar
          </p>
          <div className="flex items-center gap-6">
            {socialMedia.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-mute transition hover:text-lime"
              >
                {item.url.includes("github")
                  ? "GitHub"
                  : item.url.includes("linkedin")
                    ? "LinkedIn"
                    : "X"}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
