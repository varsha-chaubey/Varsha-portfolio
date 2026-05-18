"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SiRefinedgithub } from "react-icons/si";
type Props = {
  project: any
  index: number
}

export default function ProjectCard({
  project,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl h-[500px]"
    >
      {/* IMAGE */}
      <div className="relative h-[250px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-black/20 to-transparent" />

        {/* GLOW */}
        <div className="absolute inset-0 bg-violet-500/0 transition duration-500 group-hover:bg-violet-500/10" />
      </div>

      {/* CONTENT */}
      <div className="relative p-6 ">
        <div className="flex items-start justify-between gap-5">

          <h3 className="text-2xl font-semibold text-white">
            {project.title}
          </h3>

          <div className="flex items-center gap-3">
            {/* <a
              href={project.github}
              target="_blank"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <SiRefinedgithub className="h-4 w-4" />
            </a> */}

            <a
              href={project.live}
              target="_blank"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>


          </div>


        </div>
        <div className="">
          <p className="mt-2 leading-relaxed text-slate-400">
            {project.description}
          </p>
        </div>
      
      </div>
    </motion.div>
  )
}