import { Mail, MessageCircle, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section className="bg-[#d2ebeb] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center font-sans text-4xl font-black uppercase text-[#321478] md:text-5xl">
          {"Get in Touch"}
        </h2>
        <p className="mb-12 text-center text-xl font-semibold text-[#6450b4]">
          {"Questions? We'd love to hear from you"}
        </p>

        <div className="mx-auto max-w-2xl space-y-6">
          {/* Email */}
          <div className="flex items-center justify-center gap-4 rounded-3xl bg-white p-6">
            <Mail className="h-8 w-8 text-[#321478]" />
            <a
              href="mailto:info@pawmatchers.app"
              className="font-sans text-xl font-bold text-[#321478] transition-colors hover:text-[#6450b4]"
            >
              {"info@pawmatchers.app"}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-center gap-4 rounded-3xl bg-white p-6">
            <MessageCircle className="h-8 w-8 text-[#69c3c3]" />
            <span className="font-sans text-xl font-bold text-[#321478]">{"WhatsApp: Available Soon"}</span>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <p className="mb-4 font-sans text-lg font-bold uppercase text-[#321478]">{"Follow Our Journey"}</p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-full bg-[#321478] px-6 py-6 font-bold uppercase text-white transition-all hover:scale-110 hover:bg-[#6450b4]"
              >
                <Instagram className="h-5 w-5" />
                {"Instagram"}
              </Button>
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-full bg-[#69c3c3] px-6 py-6 font-bold uppercase text-white transition-all hover:scale-110 hover:bg-[#321478]"
                asChild
              >
                <a href="https://www.linkedin.com/company/109995891" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  {"LinkedIn"}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="font-sans text-sm font-semibold text-[#6450b4]">
            {"© 2025 Paw Matcher. All rights reserved. Made with 💜 for dogs everywhere."}
          </p>
        </div>
      </div>
    </section>
  )
}
