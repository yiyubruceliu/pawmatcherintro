import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import Product from "@/components/product"
import { CallToAction } from "@/components/call-to-action"
import { Contact } from "@/components/contact"

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
