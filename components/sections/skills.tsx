"use client"

import skills from "@/data/skills.json"

import SkillCard from "../shared/skill-card"
import SectionHeading from "../shared/section-heading"

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-4 mt-10"
    >
      {/* BACKGROUND */}
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="container-width relative">
        <SectionHeading
          title="Engineering expertise across scalable frontend and real-time systems."
          subtitle="Skills & Expertise"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {skills.map((item, index) => (
            <SkillCard
              key={item.category}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}