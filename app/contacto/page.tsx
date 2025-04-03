import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Mail, MapPin, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-sage-700 mb-4 text-center">Contacto</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Estoy aquí para ayudarte. No dudes en contactarme para agendar una cita, hacer una consulta o solicitar más
        información sobre mis servicios.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sage-100 text-sage-600 mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <CardTitle className="text-sage-600">Teléfono</CardTitle>
            <CardDescription>Llámame o escríbeme por WhatsApp</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">+506 8888-8888</p>
            <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 hover:bg-sage-50">
              <Link href="https://wa.me/50688888888" target="_blank">
                Contactar por WhatsApp
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sage-100 text-sage-600 mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <CardTitle className="text-sage-600">Correo Electrónico</CardTitle>
            <CardDescription>Escríbeme un correo electrónico</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">info@luciadiazpsicologa.com</p>
            <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 hover:bg-sage-50">
              <Link href="mailto:info@luciadiazpsicologa.com">Enviar correo</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sage-100 text-sage-600 mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <CardTitle className="text-sage-600">Ubicación</CardTitle>
            <CardDescription>Consulta presencial</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Centro Empresarial La Sabana, San José, Costa Rica</p>
            <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 hover:bg-sage-50">
              <Link href="https://maps.google.com" target="_blank">
                Ver en el mapa
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-sage-700">Formulario de Contacto</CardTitle>
            <CardDescription>Completa el formulario y me pondré en contacto contigo lo antes posible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellido">Apellido</Label>
                  <Input id="apellido" placeholder="Tu apellido" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" placeholder="+506 8888-8888" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>¿Cómo prefieres que te contacte?</Label>
                <RadioGroup defaultValue="email" className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="r1" />
                    <Label htmlFor="r1">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="telefono" id="r2" />
                    <Label htmlFor="r2">Teléfono</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whatsapp" id="r3" />
                    <Label htmlFor="r3">WhatsApp</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="servicio">Servicio de interés</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="terapia-individual">Terapia Individual</SelectItem>
                    <SelectItem value="terapia-online">Terapia Online</SelectItem>
                    <SelectItem value="talleres">Talleres</SelectItem>
                    <SelectItem value="asesoria-empresas">Asesoría para Empresas</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea id="mensaje" placeholder="¿En qué puedo ayudarte?" rows={5} />
              </div>

              <Button type="submit" className="w-full bg-sage-600 hover:bg-sage-700">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-sage-600 mr-2" />
                <CardTitle className="text-2xl font-semibold text-sage-700">Agenda tu Cita</CardTitle>
              </div>
              <CardDescription>Reserva una sesión en el horario que mejor te convenga.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Puedes agendar una cita directamente a través de mi sistema de reservas online. Selecciona el tipo de
                sesión, la fecha y la hora que prefieras.
              </p>
              <Button className="w-full bg-sage-600 hover:bg-sage-700">Ver Disponibilidad y Reservar</Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-sage-600 mr-2" />
                <CardTitle className="text-2xl font-semibold text-sage-700">Preguntas Frecuentes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">¿Cuánto dura una sesión de terapia?</h3>
                  <p className="text-gray-700 text-sm">Las sesiones individuales tienen una duración de 50 minutos.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">¿Cuál es el costo de las sesiones?</h3>
                  <p className="text-gray-700 text-sm">
                    El costo varía según el tipo de servicio. Las sesiones individuales tienen un valor de ₡35,000.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">¿Aceptas seguros médicos?</h3>
                  <p className="text-gray-700 text-sm">
                    Sí, trabajo con las principales aseguradoras. Consulta por tu caso específico.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">¿Cómo se realizan las sesiones online?</h3>
                  <p className="text-gray-700 text-sm">
                    Las sesiones online se realizan a través de una plataforma segura y confidencial. Recibirás un
                    enlace para conectarte.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full border-sage-600 text-sage-600 hover:bg-sage-50">
                  <Link href="/faq">Ver todas las preguntas frecuentes</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-sage-50 rounded-lg p-8 shadow-md text-center">
        <h2 className="text-2xl font-semibold text-sage-700 mb-4">Horario de Atención</h2>
        <p className="text-gray-700 mb-6">
          Lunes a Viernes: 9:00 AM - 6:00 PM
          <br />
          Sábados: 9:00 AM - 1:00 PM
          <br />
          Domingos: Cerrado
        </p>
        <p className="text-gray-700 italic">*Las sesiones online pueden programarse con mayor flexibilidad horaria.</p>
      </div>
    </div>
  )
}

