"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Play, ExternalLink } from "lucide-react"
import { useRef } from "react"

type Props = {
  item: {
    image: any
    video?: any
    type?: string
    // type?: "image" | "video"
  }
}

export default function GalleryItem({ item }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleMouseEnter = async () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      className="group relative break-inside-avoid overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* MEDIA */}
      <div className="relative overflow-hidden">
        {/* IMAGE */}
        <Image
          src={item?.image || "/placeholder.png"}
          alt={""}
          width={200}
          height={300}
          className="h-fit w-fit object-cover transition duration-700 group-hover:scale-105"
        />

        {/* VIDEO HOVER PREVIEW */}
        {item?.type === "video" && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
          >
            <source src={item.video || "/placeholder.mp4"} type="image/gif" />
            <source src={item.video || "/placeholder.mp4"} type="video/mp4" />
          </video>
        )}


      </div>

      {/* CONTENT */}


      {/* BORDER LIGHT */}
      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/5" />
    </motion.div>
  )
}