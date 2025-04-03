import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const category = searchParams.get("category")

    // Connect to the database
    const db = await connectToDatabase()

    // In a real application, you would fetch posts from the database
    // For now, we'll use the mock data from lib/api.ts
    const { posts, total } = await import("@/lib/api").then((api) => api.fetchPosts(page, limit))

    // Filter by category if provided
    const filteredPosts = category
      ? posts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
      : posts

    return NextResponse.json({
      posts: filteredPosts,
      total: category ? filteredPosts.length : total,
      page,
      limit,
      totalPages: Math.ceil((category ? filteredPosts.length : total) / limit),
    })
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ error: "Error al obtener los artículos del blog" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // This would be an admin-only endpoint to create new blog posts
    // You would need to implement authentication and authorization

    const body = await request.json()

    // Validate the request body
    if (!body.title || !body.content) {
      return NextResponse.json({ error: "El título y el contenido son requeridos" }, { status: 400 })
    }

    // Connect to the database
    const db = await connectToDatabase()

    // In a real application, you would create a new post in the database
    console.log("Creating new blog post:", body)

    return NextResponse.json(
      { success: true, message: "Artículo creado correctamente", id: "new-post-id" },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json({ error: "Error al crear el artículo" }, { status: 500 })
  }
}

