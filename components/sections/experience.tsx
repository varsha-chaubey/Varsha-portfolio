"use client"

import experience from "@/data/experience.json"

import FadeUp from "../animations/fade-up"
import SectionHeading from "../shared/section-heading"
import { ArrowUpRight } from "lucide-react"

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-4 mt-10 "
    >
      <div className="container-width">
        <SectionHeading
          title="Professional experience in building scalable production systems."
          subtitle="Experience"
        />

        <div className="relative border-l border-white/10 pl-8 ">
          {experience.map((item, index) => (
            <FadeUp
              key={item.company}
              delay={index * 0.1}
            >
              <div className="relative mb-16">
                {/* TIMELINE DOT */}
                <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-[#050816] bg-violet-500" />

                <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  {/* HEADER */}
                  <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {item.role}
                      </h3>
                      <div className="flex items-end gap-2  ">
                        <p className="mt-2 text-violet-300  text-sm">
                          {item.company}
                        </p>
                        <button onClick={() => window.open(item?.link, "_blank")} className="cursor-pointer text-center text-violet-300">
                          <ArrowUpRight className="h-4 w-4" />
                        </button >
                      </div>
                    </div>

                    <div className="text-sm text-slate-400">
                      <p>{item.duration}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <ul className="mt-8 space-y-4">
                    {item.description.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-slate-400"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-violet-400" />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* TECH STACK */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.tech.map((tech) => (
                      <div
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}