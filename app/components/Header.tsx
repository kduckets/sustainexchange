import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "./MobileMenu"
import { Search } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container-wide py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <Link href="/" className="block">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">SE</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">SustainExchange</h1>
                  <p className="text-xs text-gray-500">Connecting sustainability experts & seekers</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Contact
              </Button>
            </Link>
            <Button className="bg-primary text-white hover:bg-primary/90">Expert Log in</Button>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

