"use client"

import profile from "@/data/profile.json"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { BiLogoLinkedin } from "react-icons/bi";
import { SiRefinedgithub } from "react-icons/si";
import FadeUp from "../animations/fade-up"
import TypographyAnimation from "../animations/typography"
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-5"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center mt-22 md:mt-5 ">
          <FadeUp>
            <span className="mb-2 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              Full Stack Frontend Focused Engineer • Real-Time Systems
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
              {profile.name}
            </h1>
          </FadeUp>

          <TypographyAnimation
            text={profile.title}
            className="mt-4 text-xl font-medium text-violet-300 md:text-xl"
            delay={0.2}
          />

          <FadeUp delay={0.3}>
            <div className="max-w-4xl space-y-5 mt-5">
              {[
                "Frontend-focused Full Stack Engineer, with 3+ years of experience building scalable web applications.",
                "Worked across gaming, healthcare, enterprise, and interactive platforms for multiple companies and clients.",
                "Specialized in real-time systems, WebRTC, WebSockets, deployment workflows, performance optimization, scalable frontend architecture, and production debugging.",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.8)]" />

                  <p className="text-base leading-relaxed text-slate-400 md:text-[15px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* BUTTONS */}
          <FadeUp delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.contact}`}
                className="group flex items-center gap-2 rounded-2xl bg-violet-500 px-6 py-3 text-white transition hover:bg-violet-400"
              >
                Hire Me
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href={profile.resume}
                target="_blank"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                Download Resume
              </a>
            </div>
          </FadeUp>

          {/* SOCIALS */}
          <FadeUp delay={0.5}>
            <div className="mt-10 flex items-center gap-5">
              <a
                href={profile.socials.github}
                target="_blank"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <SiRefinedgithub className="h-5 w-5" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <BiLogoLinkedin className="h-5 w-5" />
              </a>
            </div>
          </FadeUp>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden items-center justify-center lg:flex"
        >
          <div className="relative h-[500px] w-[500px] rounded-full border border-white/10 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 backdrop-blur-3xl">
            <div className="absolute inset-2 rounded-full ">
              <Image height={480} width={480} src={profile?.profilePicture} alt="pp" className="z-[100] border border-white/10  h-[480px] w-[480px] rounded-full   object-cover overflow-hidden" />
            </div>

            {/* FLOATING BADGES */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-2 top-12 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
            >
              Next.js
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-10 bottom-30 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
            >
              React.js
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-50 -bottom-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
            >
              Node.js
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-10 bottom-24 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
            >
              WebRTC
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute right-10 top-10 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
            >
              TypeScript
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}