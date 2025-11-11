import type React from "react"
import type { Metadata } from "next"
import { Barlow_Condensed } from "next/font/google"
import "./globals.css"

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Paw Matcher - Love at First Swipe",
  description: "Helping shelter dogs find their forever homes through smart matching technology",
  generator: "v0.app",
  icons: {
    icon: "/PawMatcher-Logo4.svg",
    shortcut: "/PawMatcher-Logo4.svg",
    apple: "/PawMatcher-Logo4.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${barlowCondensed.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
