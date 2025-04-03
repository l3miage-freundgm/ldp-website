import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      title: "Terapia Individual",
      description: "Sesiones personalizadas para abordar tus necesidades específicas",
      features: [
        "Evaluación psicológica completa",
        "Plan de tratamiento personalizado",
        "Seguimiento continuo de tu progreso",
        "Herramientas prácticas para aplicar en tu día a día",
      ],
      price: "₡35,000 por sesión",
      cta: "Agenda tu cita",
    },
    {
      title: "Terapia Online",
      description: "Atención psicológica desde la comodidad de tu hogar",
      features: [
        "Misma calidad que las sesiones presenciales",
        "Flexibilidad de horarios",
        "Ahorro de tiempo en desplazamientos",
        "Plataforma segura y confidencial",
      ],
      price: "₡30,000 por sesión",
      cta: "Reserva tu espacio",
    },
    {
      title: "Talleres Grupales",
      description: "Experiencias de aprendizaje compartido en temas específicos",
      features: [
        "Grupos reducidos (máximo 10 personas)",
        "Material didáctico incluido",
        "Ejercicios prácticos y dinámicas",
        "Certificado de participación",
      ],
      price: "Desde ₡25,000 por persona",
      cta: "Ver próximos talleres",
    },
    {
      title: "Asesoría para Empresas",
      description: "Programas de bienestar emocional para tu equipo de trabajo",
      features: [
        "Evaluación de necesidades organizacionales",
        "Talleres adaptados a tu empresa",
        "Seguimiento y medición de resultados",
        "Atención personalizada para colaboradores",
      ],
      price: "Cotización personalizada",
      cta: "Solicitar información",
    },
  ]

  const workshops = [
    {
      title: "Manejo del Estrés",
      date: "15 de Junio, 2023",
      time: "9:00 AM - 12:00 PM",
      location: "Online vía Zoom",
      price: "₡25,000",
      spots: "8 cupos disponibles",
    },
    {
      title: "Inteligencia Emocional",
      date: "22 de Junio, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Centro Empresarial La Sabana",
      price: "₡30,000",
      spots: "5 cupos disponibles",
    },
    {
      title: "Comunicación Asertiva",
      date: "8 de Julio, 2023",
      time: "9:00 AM - 12:00 PM",
      location: "Online vía Zoom",
      price: "₡25,000",
      spots: "10 cupos disponibles",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-sage-700 mb-4 text-center">Servicios</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Ofrezco diversos servicios psicológicos adaptados a tus necesidades específicas, con el objetivo de promover tu
        bienestar emocional y mental.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col h-full bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-sage-600">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <p className="text-lg font-semibold text-gray-800 mb-4">{service.price}</p>
              <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                <Link href="/contacto">{service.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-semibold text-sage-700 mb-8 text-center">Próximos Talleres</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {workshops.map((workshop, index) => (
          <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-sage-600">{workshop.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-medium">Fecha:</span> {workshop.date}
                </p>
                <p>
                  <span className="font-medium">Hora:</span> {workshop.time}
                </p>
                <p>
                  <span className="font-medium">Lugar:</span> {workshop.location}
                </p>
                <p>
                  <span className="font-medium">Precio:</span> {workshop.price}
                </p>
                <p className="text-sage-600 font-medium">{workshop.spots}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                <Link href="/contacto">Reservar mi lugar</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-sage-50 rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-sage-700 mb-4 text-center">¿No encuentras lo que buscas?</h2>
        <p className="text-gray-700 text-center mb-6">
          Si necesitas un servicio personalizado o tienes alguna consulta específica, no dudes en contactarme. Estoy
          aquí para ayudarte a encontrar la mejor solución para ti.
        </p>
        <div className="flex justify-center">
          <Button asChild className="bg-sage-600 hover:bg-sage-700">
            <Link href="/contacto">Contáctame</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

