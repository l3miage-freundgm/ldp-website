import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import SocialIcons from "@/components/layout/social-icons"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucía Díaz Psicóloga | Terapia y Bienestar Mental",
  description:
    "Psicóloga especializada en terapia individual, talleres y recursos para tu bienestar mental. Podcast, YouTube y blog con contenido valioso.",
  openGraph: {
    title: "Lucía Díaz Psicóloga | Terapia y Bienestar Mental",
    description: "Psicóloga especializada en terapia individual, talleres y recursos para tu bienestar mental.",
    url: "https://luciadiazpsicologa.com",
    siteName: "Lucía Díaz Psicóloga",
    locale: "es_CR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucía Díaz Psicóloga",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
        <Header />
        <main className="min-h-screen">{children}</main>
        <SocialIcons />
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
