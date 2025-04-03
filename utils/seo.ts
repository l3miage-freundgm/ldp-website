import type { Metadata } from "next"

type SeoProps = {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
}

export function generateMetadata({
  title = "Lucía Díaz Psicóloga",
  description = "Psicóloga especializada en terapia individual, talleres y recursos para tu bienestar mental.",
  keywords = ["psicóloga", "terapia", "bienestar mental", "Costa Rica", "psicología"],
  image = "/images/og-image.jpg",
  url = "https://luciadiazpsicologa.com",
  type = "website",
}: SeoProps): Metadata {
  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: "Lucía Díaz Psicóloga",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "es_CR",
      type: type,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [image],
    },
  }
}

