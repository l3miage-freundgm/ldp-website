import Hero from "@/components/home/hero"
import MissionStatement from "@/components/home/mission-statement"
import ServiceHighlights from "@/components/home/service-highlights"
import ContentPreviews from "@/components/home/content-previews"
import Testimonials from "@/components/home/testimonials"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lucía Díaz Psicóloga | Inicio",
  description:
    "Psicóloga especializada en terapia individual, talleres y recursos para tu bienestar mental. Encuentra tu bienestar emocional.",
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <MissionStatement />
      <ServiceHighlights />
      <ContentPreviews />
      <Testimonials />
    </div>
  )
}

