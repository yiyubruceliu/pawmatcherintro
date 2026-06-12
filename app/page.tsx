import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import Product from "@/components/product"
import { CallToAction } from "@/components/call-to-action"
import { Contact } from "@/components/contact"
import { siteDescription, siteTitle } from "@/lib/site"

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    title: siteTitle,
    description: siteDescription,
  },
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <About />
      <Product />
      <CallToAction />
      <Contact />
    </main>
  )
}
