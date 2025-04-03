/**
 * API utilities for fetching data
 */

export async function fetchPosts(page = 1, limit = 10) {
  // This would be replaced with an actual API call
  // Example: return fetch(`${process.env.API_URL}/posts?page=${page}&limit=${limit}`).then(res => res.json());

  // For now, return mock data
  return {
    posts: Array(limit)
      .fill(0)
      .map((_, i) => ({
        id: `post${i + 1 + (page - 1) * limit}`,
        title: `Artículo de ejemplo ${i + 1 + (page - 1) * limit}`,
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
        date: new Date(Date.now() - i * 86400000).toISOString(),
        readTime: `${Math.floor(Math.random() * 10) + 5} min de lectura`,
        author: "Lucía Díaz",
        category: ["Ansiedad", "Mindfulness", "Relaciones", "Autoestima"][Math.floor(Math.random() * 4)],
        image: "/placeholder.svg?height=200&width=400",
      })),
    total: 50,
    page,
    limit,
  }
}

export async function fetchPostById(id: string) {
  // This would be replaced with an actual API call
  // Example: return fetch(`${process.env.API_URL}/posts/${id}`).then(res => res.json());

  // For now, return mock data
  return {
    id,
    title: `Artículo de ejemplo ${id.replace("post", "")}`,
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
    `,
    date: new Date(Date.now() - Number.parseInt(id.replace("post", "")) * 86400000).toISOString(),
    readTime: `${Math.floor(Math.random() * 10) + 5} min de lectura`,
    author: "Lucía Díaz",
    category: ["Ansiedad", "Mindfulness", "Relaciones", "Autoestima"][Math.floor(Math.random() * 4)],
    image: "/placeholder.svg?height=600&width=1200",
  }
}

