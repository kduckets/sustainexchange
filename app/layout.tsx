import "./globals.css"
import { Inter, Raleway } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })
const raleway = Raleway({ weight: ["600", "700"], subsets: ["latin"] })

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
    <html lang="en" className={inter.className}>
      <body>
        <div className={raleway.className}>{children}</div>
      </body>
    </html>
  )
}

