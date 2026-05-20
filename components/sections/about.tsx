"use client"

import about from "@/data/about.json"

import FadeUp from "../animations/fade-up"
import SectionHeading from "../shared/section-heading"

export default function About() {
  return (
    <section
      id="about"
      className="relative px-4 py-10"
    >
      <div className="container-width">
        <SectionHeading
          title="Building scalable frontend systems with modern architecture."
          subtitle="About Me"
        />

        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* LEFT */}
          <FadeUp>
            <div className="space-y-5">
              {[
                // "3+ years of experience building scalable and high-performance web applications.",

                // "Specialized in React.js, Next.js, TypeScript, Node.js and Full Stack Frontend Focused Engineer.",

                // "Hands-on expertise in real-time systems using WebRTC, WebSockets, and streaming technologies.",

                "Experienced in building production-grade scalable UI systems and reusable component architectures.",

                // "Worked across gaming, healthcare, enterprise, and interactive browser platforms.",

                "Strong focus on performance optimization, deployment workflows, and scalable frontend engineering.",

                "Experience in leading projects from scratch including architecture planning and production debugging.",

                "AI-assisted development workflow experience using Cursor AI, ChatGPT, and automation tooling.",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4"
                >
                  {/* BULLET */}
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.8)]" />

                  <p className="text-base leading-relaxed text-slate-400">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5">
              {about.stats.map((item, id) =>  (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <h3 className="text-3xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* RIGHT */}
          <FadeUp delay={0.2}>
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_40%)]" />

              <div className="relative">
                <h3 className="text-2xl font-semibold text-white">
                  Engineering Focus
                </h3>

                <div className="mt-8 flex flex-wrap gap-4">
                  {[
                    "Frontend Architecture",
                    "Real-Time Systems",
                    "WebRTC",
                    "Performance Optimization",
                    "Reusable Components",
                    "Deployment & Release Management",
                    "Scalable UI Systems",
                    "API Design & Integration",
                    "Production Debugging",
                    // "Cross Team Collaboration & Project Ownership"
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur-xl"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                
              </div>
              
            </div>

          </FadeUp>
        </div>
      </div>
    </section>
  )
}