"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const skillNames = [
  "React.js",
  "Next.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Framer Motion",
  "Node",
  "MongoDB",
  "Git",
  "Postman",
  "AWS",
  "Figma",
  "REST APIs",
];

const aiTools = [
  "Cursor",
  "Gemini",
  "ChatGPT",
  "Claude",
  "Apify",
  "Hugging Face",
];

const rowA = [...skillNames.slice(0, 8), ...aiTools.slice(0, 3)];
const rowB = [...skillNames.slice(7), ...aiTools.slice(3)];

const Skills = () => {
  return (
    <section id="myskills" className="scroll-mt-24 py-24 md:py-32">
      <div className="section-shell">
        <SectionHeader
          index="03"
          kicker="Capabilities"
          title="Tools I reach for."
          copy="Product stack plus the AI tools I ship with every day — Cursor, Gemini, ChatGPT, Claude, Apify, and Hugging Face."
        />
      </div>

      <div className="overflow-hidden border-y border-cream/10">
        <div className="flex w-max animate-marquee gap-3 py-3 hover:[animation-play-state:paused]">
          {[...rowA, ...rowA].map((skill, index) => (
            <span
              key={`a-${skill}-${index}`}
              className="rounded-full border border-cream/10 bg-panel px-5 py-2 text-sm text-mute"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex w-max animate-marquee-reverse gap-3 border-t border-cream/10 py-3 hover:[animation-play-state:paused]">
          {[...rowB, ...rowB].map((skill, index) => (
            <span
              key={`b-${skill}-${index}`}
              className="rounded-full border border-cream/10 bg-panel px-5 py-2 text-sm text-mute"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="section-shell mt-12">
        <p className="kicker mb-6">Stack</p>
        <div className="flex flex-wrap gap-x-6 gap-y-4 md:gap-x-10">
          {skillNames.map((skill, index) => (
            <motion.button
              key={skill}
              type="button"
              data-cursor="hover"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="font-display text-3xl font-semibold text-cream/20 transition duration-300 hover:text-lime md:text-5xl"
            >
              {skill}
            </motion.button>
          ))}
        </div>

        <p className="kicker mb-6 mt-14">AI tools</p>
        <div className="flex flex-wrap gap-x-6 gap-y-4 md:gap-x-10">
          {aiTools.map((tool, index) => (
            <motion.button
              key={tool}
              type="button"
              data-cursor="hover"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="font-display text-3xl font-semibold text-cream/20 transition duration-300 hover:text-lime md:text-5xl"
            >
              {tool}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
