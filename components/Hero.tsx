"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  const handleResume = () => {
    try {
      const loaderToast = toast.loading("Downloading...");
      const link = document.createElement("a");
      link.href =
        "https://drive.google.com/uc?export=download&id=14TjMwXeawmbIJl0fumhbVYy5jN1KBIjt";
      link.setAttribute("download", "Navneet Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        toast.update(loaderToast, {
          render: "Download done",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        setTimeout(() => {
          window.open(
            "https://drive.google.com/file/d/14TjMwXeawmbIJl0fumhbVYy5jN1KBIjt/view?usp=sharing",
            "_blank"
          );
        }, 1000);
      }, 1000);
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while downloading the resume");
    }
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-8 pt-28"
      onMouseMove={(event) => {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        target.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx, 70%) var(--my, 20%), rgba(214,255,75,0.12), transparent 45%)",
        }}
      />

      <div className="section-shell relative z-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/10 bg-panel px-3 py-1 text-xs text-cream">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            Available for work
          </span>
          <p className="hidden text-sm text-mute md:block">Delhi, India · IST</p>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[16vw] font-extrabold leading-[0.85] tracking-tight text-cream sm:text-[12vw] lg:text-[9.5rem]"
        >
          Navneet
          <br />
          Kumar<span className="text-lime">.</span>
        </motion.h1>

        <div className="mt-10 flex flex-col gap-8 border-t border-cream/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="kicker">Frontend developer</p>
            <p className="mt-4 text-lg leading-relaxed text-mute md:text-xl">
              I turn product ideas into fast, tactile interfaces — React, Next.js,
              and motion that feels alive.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <MagneticButton href="#projects">View work</MagneticButton>
            <MagneticButton variant="ghost" onClick={handleResume}>
              Resume
              <FaDownload className="text-xs" />
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 overflow-hidden border-y border-cream/10">
        <div className="flex w-max animate-marquee gap-10 py-4 hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="flex gap-10">
              {[
                "React Native",
                "Next.js",
                "Node",
                "MongoDB",
                "Cursor",
                "Gemini",
                "ChatGPT",
                "Claude",
                "Apify",
                "Hugging Face",
              ].map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="font-display text-sm uppercase tracking-[0.35em] text-mute"
                >
                  {item} <span className="text-lime">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
