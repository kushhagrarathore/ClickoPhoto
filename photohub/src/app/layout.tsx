import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PhotoHub - Professional Photography Marketplace",
  description: "Find and book professional photographers, studios, and drone services for your next event or project.",
  keywords: ["photography", "photographers", "studio", "drone", "events", "booking"],
  authors: [{ name: "PhotoHub Team" }],
  openGraph: {
    title: "PhotoHub - Professional Photography Marketplace",
    description: "Find and book professional photographers, studios, and drone services for your next event or project.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoHub - Professional Photography Marketplace",
    description: "Find and book professional photographers, studios, and drone services for your next event or project.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} h-full bg-background text-foreground antialiased`}>
        <div className="min-h-full flex flex-col">
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
