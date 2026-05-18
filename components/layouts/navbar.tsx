"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
          <Link
            href="/"
            className="text-lg font-semibold tracking-wide text-white"
          >
            Varsha.
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-xl bg-violet-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-violet-400"
            >
              Let&apos;s Talk
            </a>
          </div>

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <Menu className="h-6 w-6 text-white" />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="border-white/10 bg-[#050816]"
              >
                <div className="mt-10 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-lg text-slate-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}