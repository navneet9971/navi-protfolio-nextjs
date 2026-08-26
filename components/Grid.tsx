"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import SectionHeader from "@/components/ui/SectionHeader";
import { email } from "@/data";
import { useState } from "react";

const highlights = [
  {
    label: "04+",
    title: "Years building",
    copy: "Shipping production UIs for CRM, ops, and recycling platforms.",
  },
  {
    label: "04",
    title: "Companies",
    copy: "Eikomp, AiCansell, Ads Enviro, and Recytronics — intern to full-time, then product and ops UIs.",
  },
  {
    label: "IST",
    title: "Based in Delhi",
    copy: "Easy overlap with teams across India, Europe, and the US.",
  },
];

const stack = [
  "React Native",
  "Next.js",
  "TypeScript",
  "Node",
  "MongoDB",
  "Cursor",
  "Gemini",
  "ChatGPT",
  "Claude",
  "Apify",
  "Hugging Face",
];

const Grid = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="section-shell">
        <SectionHeader
          index="01"
          kicker="About"
          title="A frontend partner who sweats the details."
          copy="Transparent communication, sharp interfaces, and products that feel considered — not templated."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              data-cursor="hover"
              className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-lime/50"
            >
              <p className="font-display text-5xl font-bold text-lime">{item.label}</p>
              <h3 className="mt-6 text-lg font-semibold text-cream">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <article className="rounded-2xl border border-cream/10 bg-panel p-6 md:p-8">
            <p className="kicker">Currently</p>
            <p className="mt-4 max-w-2xl text-xl leading-relaxed text-cream md:text-2xl">
              Building digital products at Recytronics — pickup flows, dashboards, and web experiences that make e-waste recycling easier.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cream/10 px-3 py-1 text-xs text-mute transition hover:border-lime hover:text-lime"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-cream/10 bg-lime p-6 text-ink md:p-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em]">
                Start a project
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight">
                Want to build together?
              </h3>
              <p className="mt-3 text-sm text-ink/70">{email}</p>
            </div>
            <MagneticButton
              onClick={handleCopy}
              className="mt-8 !bg-ink !text-cream hover:!bg-cream hover:!text-ink"
            >
              {copied ? "Email copied" : "Copy email"}
            </MagneticButton>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Grid;
