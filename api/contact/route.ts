import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    if (!body.email || !body.nombre || !body.mensaje) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Save the contact form to a database
    // 2. Send an email notification
    // 3. Possibly integrate with a CRM

    console.log("Contact form submission:", body)

    // For demonstration purposes, we'll just return a success response
    return NextResponse.json({ success: true, message: "Mensaje enviado correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Error al procesar el formulario" }, { status: 500 })
  }
}

