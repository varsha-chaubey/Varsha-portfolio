"use client"

import contact from "@/data/contact.json"

import { Mail, MapPin, Phone } from "lucide-react"

import FadeUp from "../animations/fade-up"
import SectionHeading from "../shared/section-heading"

export default function Contact() {
 
  return (
    <section
      id="contact"
      className="relative px-4 pt-10 pb-20"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container-width relative">
        <SectionHeading
          title={contact.title}
          subtitle="Contact"
        />

        <FadeUp>
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-16">
            {/* INNER GLOW */}
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-2">
              {/* LEFT */}
              <div>
                <p className="max-w-xl text-lg leading-relaxed text-slate-400">
                  {contact.description}
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <Mail className="h-5 w-5 text-violet-300" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Email
                      </p>

                      <a
                        href={`mailto:${contact.email}`}
                        className="text-white transition hover:text-violet-300"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <Phone className="h-5 w-5 text-violet-300" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Phone
                      </p>

                      <a
                        href={`tel:${contact.phone}`}
                        className="text-white transition hover:text-violet-300"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <MapPin className="h-5 w-5 text-violet-300" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Location
                      </p>

                      <p className="text-white">
                        {contact.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col justify-center">
                <div className="rounded-[32px] border border-white/10 bg-[#0B1120]/80 p-10">
                  <h3 className="text-3xl font-semibold text-white">
                    Let&apos;s Connect
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    Open to freelance projects, startup
                    collaborations, frontend architecture,
                    scalable UI engineering, real-time
                    systems, and long-term product
                    development partnerships.
                  </p>

                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-8 inline-flex rounded-2xl bg-violet-500 px-6 py-4 font-medium text-white transition hover:bg-violet-400"
                  >
                    Start a Conversation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}