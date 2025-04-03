import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Mí | Lucía Díaz Psicóloga",
  description:
    "Conoce más sobre mi historia personal, formación académica y enfoque terapéutico como psicóloga en Costa Rica.",
}

export default function AboutMe() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-sage-700 mb-8 text-center">Sobre Mí</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Image
            src="/placeholder.svg?height=500&width=500"
            alt="Lucía Díaz Psicóloga"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-sage-600 mb-4">Mi Historia Personal</h2>
          <p className="text-gray-700 mb-6">
            Soy Lucía Díaz, psicóloga clínica con más de 10 años de experiencia ayudando a personas a encontrar su
            bienestar emocional y mental. Mi pasión por la psicología comenzó cuando descubrí el impacto profundo que
            tiene nuestra salud mental en todas las áreas de nuestra vida.
          </p>
          <p className="text-gray-700 mb-6">
            Nacida y criada en Costa Rica, entiendo las particularidades culturales que influyen en nuestra forma de ver
            y manejar la salud mental. Mi enfoque terapéutico combina técnicas basadas en evidencia con un profundo
            respeto por la individualidad de cada persona.
          </p>
          <p className="text-gray-700">
            Además de mi práctica clínica, me apasiona divulgar conocimientos sobre psicología a través de mi podcast,
            canal de YouTube y blog, haciendo que la información valiosa sea accesible para todos.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-sage-700 mb-8 text-center">Formación y Credenciales</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium text-sage-600 mb-2">Educación</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Licenciatura en Psicología, Universidad de Costa Rica</li>
                <li>Maestría en Psicología Clínica, Universidad XYZ</li>
                <li>Especialización en Terapia Cognitivo-Conductual</li>
                <li>Certificación en Mindfulness y Bienestar</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium text-sage-600 mb-2">Experiencia</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>10+ años de práctica clínica</li>
                <li>Psicóloga en Hospital Nacional de Costa Rica (5 años)</li>
                <li>Consultora para programas de bienestar corporativo</li>
                <li>Facilitadora de talleres y grupos terapéuticos</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium text-sage-600 mb-2">Afiliaciones</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Colegio de Profesionales en Psicología de Costa Rica</li>
                <li>Asociación Latinoamericana de Psicología de la Salud</li>
                <li>Red Internacional de Psicólogos Clínicos</li>
                <li>Miembro de la Sociedad de Terapia Cognitiva</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-sage-700 mb-8 text-center">Mi Enfoque Terapéutico</h2>

        <div className="bg-sage-50 rounded-lg p-8 shadow-md">
          <p className="text-gray-700 mb-6">
            Mi enfoque terapéutico se basa en la creencia de que cada persona es única y merece un tratamiento
            personalizado. Integro diversas técnicas y metodologías, adaptándolas a las necesidades específicas de cada
            cliente.
          </p>

          <p className="text-gray-700 mb-6">
            Trabajo principalmente desde la terapia cognitivo-conductual, complementada con elementos de mindfulness,
            terapia centrada en soluciones y técnicas de regulación emocional. Este enfoque integrador permite abordar
            tanto los síntomas actuales como las causas subyacentes de los problemas.
          </p>

          <p className="text-gray-700 mb-6">
            Creo firmemente en la importancia de la relación terapéutica como base para el cambio. Mi objetivo es crear
            un espacio seguro, libre de juicios, donde puedas explorar tus pensamientos y emociones con total confianza.
          </p>

          <p className="text-gray-700">
            Te acompaño en tu proceso de autoconocimiento y crecimiento personal, proporcionándote herramientas
            prácticas que puedas aplicar en tu día a día para mejorar tu bienestar emocional y mental.
          </p>
        </div>
      </div>
    </div>
  )
}

