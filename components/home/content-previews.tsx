import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import { Play, ArrowRight } from "lucide-react"

export default function ContentPreviews() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sage-700 mb-4">Contenido Destacado</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora mi contenido educativo sobre psicología, bienestar emocional y desarrollo personal.
          </p>
        </div>

        <Tabs defaultValue="podcast" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="podcast">Podcast</TabsTrigger>
            <TabsTrigger value="youtube">YouTube</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
          </TabsList>

          <TabsContent value="podcast">
            <Card className="bg-white shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 p-6">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Podcast Mente Plena"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-semibold text-sage-700 mb-2">Podcast "Mente Plena"</h3>
                  <p className="text-gray-700 mb-4">
                    Un espacio donde exploramos temas de psicología, bienestar emocional y crecimiento personal para
                    ayudarte a vivir una vida más consciente y satisfactoria.
                  </p>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Último episodio:</h4>
                  <p className="text-gray-700 mb-6">
                    <strong>Ansiedad en tiempos de incertidumbre</strong> - En este episodio hablamos sobre cómo manejar
                    la ansiedad en momentos de cambio e incertidumbre, con herramientas prácticas para aplicar en tu día
                    a día.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-sage-600 hover:bg-sage-700">
                      <Play className="mr-2 h-4 w-4" /> Escuchar ahora
                    </Button>
                    <Button asChild variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50">
                      <Link href="/podcast">
                        Ver todos los episodios <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="youtube">
            <Card className="bg-white shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 p-6">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Canal de YouTube"
                      fill
                      className="object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button className="rounded-full w-12 h-12 bg-sage-600 hover:bg-sage-700">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-semibold text-sage-700 mb-2">Canal de YouTube</h3>
                  <p className="text-gray-700 mb-4">
                    Contenido educativo sobre psicología, bienestar emocional y desarrollo personal para ayudarte a
                    vivir una vida más plena y consciente.
                  </p>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Video destacado:</h4>
                  <p className="text-gray-700 mb-6">
                    <strong>5 Técnicas para Manejar la Ansiedad</strong> - En este video te comparto 5 técnicas
                    efectivas y respaldadas por la ciencia para manejar la ansiedad en momentos difíciles.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-sage-600 hover:bg-sage-700">
                      <Play className="mr-2 h-4 w-4" /> Ver ahora
                    </Button>
                    <Button asChild variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50">
                      <Link href="/youtube">
                        Ver todos los videos <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="blog">
            <Card className="bg-white shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 p-6">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Blog"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-semibold text-sage-700 mb-2">Blog</h3>
                  <p className="text-gray-700 mb-4">
                    Artículos sobre psicología, bienestar emocional y desarrollo personal para ayudarte en tu camino
                    hacia una vida más plena y consciente.
                  </p>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Artículo destacado:</h4>
                  <p className="text-gray-700 mb-6">
                    <strong>Cómo manejar la ansiedad en tiempos de incertidumbre</strong> - La ansiedad es una respuesta
                    natural ante la incertidumbre, pero cuando se vuelve abrumadora, puede afectar significativamente
                    nuestra calidad de vida. En este artículo, exploramos estrategias efectivas para manejar la
                    ansiedad.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-sage-600 hover:bg-sage-700">
                      <Link href="/blog/post1">Leer artículo</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50">
                      <Link href="/blog">
                        Ver todos los artículos <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

