import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "./MobileMenu"

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div>
        <Link href="/" className="block">
          <h1 className="text-xl md:text-2xl font-bold">SustainExchange</h1>
          <p className="text-xs md:text-sm italic">Real sustainability experts. Real sustainability solutions.</p>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Button variant="ghost" className="text-gray-700">
          About
        </Button>
        <Button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700">
          Expert Log in
        </Button>
      </div>
      <MobileMenu />
    </header>
  )
}

