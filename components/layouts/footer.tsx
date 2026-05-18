"use client"

import profile from "@/data/profile.json"

import {  ArrowUpRight } from "lucide-react"
import { BiLogoLinkedin } from "react-icons/bi";
import { SiRefinedgithub } from "react-icons/si";
const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "About", href: "#about" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
  },

  {
    title: "Services",
    links: [
      { name: "Website Development", href: "#" },
      { name: "Real-Time Systems", href: "#" },
      { name: "Architecture Consulting", href: "#" },
      { name: "Freelance Projects", href: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-4 py-20">
      {/* GLOW */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="container-width relative">
        <div className="grid gap-16 lg:grid-cols-4">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Varsha.
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-slate-400">
              Frontend focused Full Stack Engineer
              building scalable architecture-driven
              web experiences, real-time systems,
              and premium digital products.
            </p>

            {/* SOCIALS */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <SiRefinedgithub  className="h-5 w-5" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <BiLogoLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* LINKS */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                {section.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-400 transition hover:text-violet-300"
                  >
                    {link.name}

                    <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Varsha Chaubey. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Available for Freelance & Remote Projects
          </p>
        </div>
      </div>
    </footer>
  )
}