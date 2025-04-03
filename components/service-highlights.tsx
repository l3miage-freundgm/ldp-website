import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServiceHighlights() {
  const services = [
    {
      title: "Terapia Individual",
      description:
        "Sesiones personalizadas para abordar tus necesidades específicas y ayudarte a superar obstáculos emocionales.",
      icon: "👤",
      link: "/servicios",
    },
    {
      title: "Terapia Online",
      description:
        "Atención psicológica desde la comodidad de tu hogar, con la misma calidad que las sesiones presenciales.",
      icon: "💻",
      link: "/servicios",
    },
    {
      title: "Talleres Grupales",
      description:
        "Experiencias de aprendizaje compartido en temas específicos como manejo del estrés o inteligencia emocional.",
      icon: "👥",
      link: "/servicios",
    },
    {
      title: "Asesoría para Empresas",
      description:
        "Programas de bienestar emocional para equipos de trabajo, mejorando el clima laboral y la productividad.",
      icon: "🏢",
      link: "/servicios",
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-rose-700 mb-4">Mis Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrezco diversos servicios psicológicos adaptados a tus necesidades específicas, con el objetivo de promover
            tu bienestar emocional y mental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-rose-600">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start text-rose-600 hover:text-rose-700 hover:bg-rose-50 p-0"
                >
                  <Link href={service.link} className="flex items-center">
                    Saber más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-rose-600 hover:bg-rose-700">
            <Link href="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

