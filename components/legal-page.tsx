import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"

type LegalPageProps = {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#d2ebeb]">
      <header className="border-b border-[#69c3c3]/40 bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase text-[#321478] transition-colors hover:text-[#6450b4]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            href="/"
            className="font-sans text-lg font-black uppercase tracking-tight text-[#321478]"
          >
            Paw Matcher
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
        <article className="rounded-3xl bg-white p-8 md:p-12">
          <h1 className="mb-2 font-sans text-4xl font-black uppercase text-[#321478] md:text-5xl">
            {title}
          </h1>
          <p className="mb-10 font-sans text-sm font-semibold text-[#6450b4]">
            Last updated: {lastUpdated}
          </p>
          <div className="space-y-4 font-sans text-base font-medium leading-relaxed text-[#321478]/90 [&_a]:font-semibold [&_a]:text-[#6450b4] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#321478] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </article>
      </main>
    </div>
  )
}

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 font-sans text-xl font-black uppercase text-[#321478]">{title}</h2>
      <div className="space-y-3 font-sans text-base font-medium leading-relaxed text-[#321478]/90">
        {children}
      </div>
    </section>
  )
}
