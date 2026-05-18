"use client"

import { motion } from "framer-motion"

type Props = {
  item: any
  index: number
}

export default function SkillCard({
  item,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* GLOW */}
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative">
        <h3 className="text-2xl font-semibold text-white">
          {item.category}
        </h3>

        <p className="mt-4 leading-relaxed text-slate-400">
          {item.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {item.skills.map((skill: string) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}