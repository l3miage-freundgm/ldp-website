"use client"

import Link from "next/link"
import { Instagram, Youtube, AirplayIcon as Spotify, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function SocialIcons() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div
      className={cn(
        "fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40 transition-all duration-300",
        scrolled ? "opacity-70 hover:opacity-100" : "opacity-100",
      )}
    >
      <Link
        href="https://instagram.com"
        target="_blank"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-sage-600 hover:bg-sage-600 hover:text-white transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </Link>
      <Link
        href="https://youtube.com"
        target="_blank"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-sage-600 hover:bg-sage-600 hover:text-white transition-colors"
        aria-label="YouTube"
      >
        <Youtube className="h-5 w-5" />
      </Link>
      <Link
        href="https://spotify.com"
        target="_blank"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-sage-600 hover:bg-sage-600 hover:text-white transition-colors"
        aria-label="Spotify"
      >
        <Spotify className="h-5 w-5" />
      </Link>
      <Link
        href="https://wa.me/50688888888"
        target="_blank"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-sage-600 hover:bg-sage-600 hover:text-white transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </Link>
    </div>
  )
}

