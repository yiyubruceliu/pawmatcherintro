import Link from "next/link"
import { contactEmail } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="mt-16 text-center">
      <nav
        aria-label="Legal"
        className="mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-sm font-bold uppercase"
      >
        <Link href="/privacy" className="text-[#321478] transition-colors hover:text-[#6450b4]">
          Privacy Policy
        </Link>
        <span className="text-[#69c3c3]" aria-hidden="true">
          ·
        </span>
        <Link href="/terms" className="text-[#321478] transition-colors hover:text-[#6450b4]">
          Terms of Use
        </Link>
        <span className="text-[#69c3c3]" aria-hidden="true">
          ·
        </span>
        <a
          href={`mailto:${contactEmail}`}
          className="text-[#321478] transition-colors hover:text-[#6450b4]"
        >
          Contact
        </a>
      </nav>
      <p className="font-sans text-sm font-semibold text-[#6450b4]">
        © 2026 Paw Matcher. All rights reserved. Made with 💜 for dogs everywhere.
      </p>
    </footer>
  )
}
