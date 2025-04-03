"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "María Rodríguez",
      role: "Profesora",
      content:
        "Las sesiones con Lucía han sido transformadoras. Su enfoque cálido y profesional me ha ayudado a superar mi ansiedad y a desarrollar herramientas para manejar el estrés diario. Recomiendo totalmente sus servicios.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Carlos Jiménez",
      role: "Empresario",
      content:
        "Gracias a la terapia con Lucía, he podido mejorar significativamente mi relación de pareja. Su guía me ha permitido desarrollar una comunicación más efectiva y entender mejor mis emociones. Es una excelente profesional.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Laura Méndez",
      role: "Estudiante universitaria",
      content:
        "Encontrar a Lucía fue lo mejor que me pudo pasar. Sus técnicas de mindfulness y su apoyo constante me han ayudado a manejar la presión académica y a encontrar un mejor equilibrio en mi vida. La recomiendo 100%.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "Roberto Vargas",
      role: "Gerente de Recursos Humanos",
      content:
        "Contratamos a Lucía para realizar talleres de manejo del estrés en nuestra empresa y los resultados han sido excelentes. El equipo está más motivado y ha mejorado notablemente el ambiente laboral. Su profesionalismo es admirable.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-rose-700 mb-4">Lo Que Dicen Mis Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estas son algunas experiencias de personas que han trabajado conmigo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <Quote className="h-12 w-12 text-rose-200 mb-6" />
              <p className="text-xl text-gray-700 mb-8 italic">{testimonials[currentIndex].content}</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-rose-600" : "bg-gray-300"}`}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoplay(false)
                }}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-rose-600 hover:bg-rose-50 hidden md:flex"
            onClick={() => {
              prevTestimonial()
              setAutoplay(false)
            }}
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-rose-600 hover:bg-rose-50 hidden md:flex"
            onClick={() => {
              nextTestimonial()
              setAutoplay(false)
            }}
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </div>
  )
}

