import "./globals.css"
import { Plus_Jakarta_Sans, Montserrat } from "next/font/google"
import type React from "react"
import Footer from "./components/footer"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata = {
  title: "SustainExchange - Connect with Top Sustainability Experts",
  description:
    "Empowering companies and institutions to achieve their sustainability goals by connecting them with the best service providers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${plusJakartaSans.variable} ${montserrat.variable} font-sans`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}

