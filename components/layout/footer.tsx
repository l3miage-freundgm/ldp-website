import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
  return (
    <footer className="bg-sage-50 border-t border-gray-200">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/lucialogo-14.png?height=40&width=120"
                alt="Logo"
                width={240}
                height={40}
              />
            </Link>
            <p className="text-gray-600 mb-6">
              Psicóloga especializada en terapia individual, talleres y recursos para tu bienestar mental.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-gray-500 hover:text-sage-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="text-gray-500 hover:text-sage-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://spotify.com"
                target="_blank"
                className="text-gray-500 hover:text-sage-600 transition-colors"
              >
                <FontAwesomeIcon icon={faSpotify} className="h-5 w-5" />
                <span className="sr-only">Spotify</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="text-gray-600 hover:text-sage-600 transition-colors">
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Servicios</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/servicios" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Terapia Individual
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Terapia Online
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Talleres Grupales
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Asesoría para Empresas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-sage-600 mr-2 shrink-0" />
                <span className="text-gray-600">+506 8888-8888</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-sage-600 mr-2 shrink-0" />
                <span className="text-gray-600">info@luciadiazpsicologa.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sage-600 mr-2 shrink-0" />
                <span className="text-gray-600">Centro Empresarial La Sabana, San José, Costa Rica</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Lucía Díaz Psicóloga. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacidad" className="text-gray-500 hover:text-sage-600 text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-500 hover:text-sage-600 text-sm transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

