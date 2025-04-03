import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function YouTube() {
  const videos = [
    {
      id: "video1",
      title: "5 Técnicas para Manejar la Ansiedad",
      description:
        "En este video te comparto 5 técnicas efectivas y respaldadas por la ciencia para manejar la ansiedad en momentos difíciles.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      views: "15,432",
      date: "15 de Mayo, 2023",
      duration: "12:45",
    },
    {
      id: "video2",
      title: "Cómo Establecer Límites Saludables",
      description:
        "Aprende a establecer límites claros en tus relaciones personales y profesionales para proteger tu bienestar emocional.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      views: "12,876",
      date: "1 de Mayo, 2023",
      duration: "15:20",
    },
    {
      id: "video3",
      title: "Mindfulness para Principiantes",
      description: "Una guía práctica para comenzar a practicar mindfulness y reducir el estrés en tu vida diaria.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      views: "18,543",
      date: "15 de Abril, 2023",
      duration: "10:15",
    },
    {
      id: "video4",
      title: "Superando el Perfeccionismo",
      description:
        "Estrategias para liberarte de las exigencias del perfeccionismo y encontrar un equilibrio más saludable.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      views: "9,876",
      date: "1 de Abril, 2023",
      duration: "14:30",
    },
    {
      id: "video5",
      title: "Comunicación Efectiva en Pareja",
      description:
        "Herramientas prácticas para mejorar la comunicación con tu pareja y resolver conflictos de manera constructiva.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      views: "21,432",
      date: "15 de Marzo, 2023",
      duration: "18:10",
    },
    {
      id: "video6",
      title: "Cómo Manejar el Estrés Laboral",
      description:
        "Consejos prácticos para gestionar el estrés en el trabajo y mantener un equilibrio saludable entre vida laboral y personal.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      views: "14,765",
      date: "1 de Marzo, 2023",
      duration: "13:25",
    },
  ]

  const playlists = [
    {
      id: "playlist1",
      title: "Manejo de la Ansiedad",
      videos: 12,
      thumbnail: "/placeholder.svg?height=150&width=250",
    },
    {
      id: "playlist2",
      title: "Mindfulness y Meditación",
      videos: 8,
      thumbnail: "/placeholder.svg?height=150&width=250",
    },
    {
      id: "playlist3",
      title: "Relaciones Saludables",
      videos: 10,
      thumbnail: "/placeholder.svg?height=150&width=250",
    },
    {
      id: "playlist4",
      title: "Desarrollo Personal",
      videos: 15,
      thumbnail: "/placeholder.svg?height=150&width=250",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-sage-700 mb-4 text-center">Canal de YouTube</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Contenido educativo sobre psicología, bienestar emocional y desarrollo personal para ayudarte a vivir una vida
        más plena y consciente.
      </p>

      <div className="bg-sage-50 rounded-lg p-8 shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-sage-700 mb-6 text-center">Video Destacado</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 relative aspect-video">
            <Image
              src="/placeholder.svg?height=400&width=700"
              alt="Video destacado"
              fill
              className="object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="rounded-full w-16 h-16 bg-sage-600 hover:bg-sage-700">
                <Play className="h-8 w-8" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-xl font-medium text-gray-800 mb-2">5 Técnicas para Manejar la Ansiedad</h3>
            <p className="text-gray-700 mb-6">
              En este video te comparto 5 técnicas efectivas y respaldadas por la ciencia para manejar la ansiedad en
              momentos difíciles. Aprenderás herramientas prácticas que puedes aplicar inmediatamente.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-sage-600 hover:bg-sage-700">
                <Play className="mr-2 h-4 w-4" /> Ver ahora
              </Button>
              <Button variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50">
                <ExternalLink className="mr-2 h-4 w-4" /> Ver en YouTube
              </Button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-sage-700 mb-8 text-center">Videos Recientes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {videos.map((video) => (
          <Card key={video.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-full aspect-video relative mb-4">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover rounded-md"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                  {video.duration}
                </div>
              </div>
              <CardTitle className="text-sage-600 text-lg">{video.title}</CardTitle>
              <CardDescription className="flex justify-between text-gray-600">
                <span>{video.date}</span>
                <span>{video.views} vistas</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">{video.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-sage-600 hover:bg-sage-700">
                <Play className="mr-2 h-4 w-4" /> Ver video
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-semibold text-sage-700 mb-8 text-center">Listas de Reproducción</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {playlists.map((playlist) => (
          <Card key={playlist.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-full aspect-video relative mb-4">
                <Image
                  src={playlist.thumbnail || "/placeholder.svg"}
                  alt={playlist.title}
                  fill
                  className="object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardTitle className="text-sage-600 text-lg">{playlist.title}</CardTitle>
              <CardDescription className="text-gray-600">{playlist.videos} videos</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full bg-sage-600 hover:bg-sage-700">Ver lista</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-sage-700 mb-4">Suscríbete a mi Canal</h2>
        <p className="text-gray-700 mb-6 text-center max-w-2xl">
          No te pierdas ningún video nuevo. Suscríbete a mi canal de YouTube y activa las notificaciones para recibir
          alertas cuando publique nuevo contenido.
        </p>
        <Button asChild className="bg-sage-600 hover:bg-sage-700">
          <Link href="https://youtube.com" target="_blank">
            Suscribirme en YouTube
          </Link>
        </Button>
      </div>
    </div>
  )
}

