import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, User, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Blog() {
  const featuredPost = {
    id: "post1",
    title: "Cómo manejar la ansiedad en tiempos de incertidumbre",
    excerpt:
      "La ansiedad es una respuesta natural ante la incertidumbre, pero cuando se vuelve abrumadora, puede afectar significativamente nuestra calidad de vida. En este artículo, exploramos estrategias efectivas para manejar la ansiedad y recuperar la sensación de control.",
    date: "15 de Mayo, 2023",
    readTime: "8 min de lectura",
    author: "Lucía Díaz",
    category: "Ansiedad",
    image: "/placeholder.svg?height=400&width=800",
  }

  const posts = [
    {
      id: "post2",
      title: "El poder de la vulnerabilidad en las relaciones",
      excerpt:
        "Descubre cómo abrazar nuestra vulnerabilidad puede fortalecer nuestras conexiones y permitirnos vivir de manera más auténtica.",
      date: "1 de Mayo, 2023",
      readTime: "6 min de lectura",
      author: "Lucía Díaz",
      category: "Relaciones",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "post3",
      title: "Mindfulness: una práctica para el día a día",
      excerpt:
        "El mindfulness no se trata solo de meditación formal. Aprende cómo incorporar la atención plena en tus actividades cotidianas.",
      date: "15 de Abril, 2023",
      readTime: "5 min de lectura",
      author: "Lucía Díaz",
      category: "Mindfulness",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "post4",
      title: "Estableciendo límites saludables",
      excerpt:
        "Los límites son esenciales para mantener relaciones saludables. Descubre cómo establecerlos sin sentir culpa.",
      date: "1 de Abril, 2023",
      readTime: "7 min de lectura",
      author: "Lucía Díaz",
      category: "Autoestima",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "post5",
      title: "Superando el perfeccionismo",
      excerpt:
        "El perfeccionismo puede ser paralizante. Aprende estrategias para liberarte de sus exigencias y vivir con más paz.",
      date: "15 de Marzo, 2023",
      readTime: "9 min de lectura",
      author: "Lucía Díaz",
      category: "Desarrollo Personal",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "post6",
      title: "La importancia del autocuidado",
      excerpt:
        "El autocuidado no es egoísmo, es una necesidad. Descubre prácticas simples pero efectivas para cuidar de ti mismo/a.",
      date: "1 de Marzo, 2023",
      readTime: "6 min de lectura",
      author: "Lucía Díaz",
      category: "Bienestar",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const categories = [
    "Ansiedad",
    "Depresión",
    "Relaciones",
    "Autoestima",
    "Mindfulness",
    "Desarrollo Personal",
    "Bienestar",
    "Estrés",
  ]

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-sage-700 mb-4 text-center">Blog</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Artículos sobre psicología, bienestar emocional y desarrollo personal para ayudarte en tu camino hacia una vida
        más plena y consciente.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-sage-700 mb-6">Artículo Destacado</h2>
        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-auto">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col">
              <div className="mb-2">
                <span className="inline-block bg-sage-100 text-sage-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {featuredPost.category}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{featuredPost.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">{featuredPost.author}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{featuredPost.date}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{featuredPost.readTime}</span>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">{featuredPost.excerpt}</p>
              <Button asChild className="w-full md:w-auto bg-sage-600 hover:bg-sage-700">
                <Link href={`/blog/${featuredPost.id}`}>Leer artículo completo</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-semibold text-sage-700 mb-6">Artículos Recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="bg-white shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="mb-2">
                    <span className="inline-block bg-sage-100 text-sage-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-sage-600 text-xl">{post.title}</CardTitle>
                  <CardDescription className="flex items-center text-gray-500 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 text-sm">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
                    <Link href={`/blog/${post.id}`}>Leer más</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50">
              Ver más artículos
            </Button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-sage-700 mb-4">Categorías</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/blog/categoria/${category.toLowerCase()}`}
                  className="inline-block bg-sage-50 text-sage-700 hover:bg-sage-100 text-sm px-3 py-1 rounded-full transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-sage-700 mb-4">Suscríbete</h3>
            <p className="text-gray-700 mb-4">Recibe los nuevos artículos directamente en tu correo electrónico.</p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500"
                />
              </div>
              <Button className="w-full bg-sage-600 hover:bg-sage-700">Suscribirme</Button>
            </form>
          </div>

          <div className="bg-sage-50 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-sage-700 mb-4">¿Necesitas ayuda?</h3>
            <p className="text-gray-700 mb-4">
              Si estás pasando por un momento difícil, no dudes en contactarme para una consulta.
            </p>
            <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
              <Link href="/contacto">Agenda tu cita</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

