"use client"

import { useState } from "react"
import { Menu, X, Search, FileText, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Menu</h3>
        </div>

        <nav className="flex flex-col space-y-6">
          {/* Main navigation */}
          <div className="space-y-4">
            <Link
              href="/providers"
              onClick={handleLinkClick}
              className="flex items-center py-2 text-lg hover:text-primary transition-colors"
            >
              <Search className="w-5 h-5 mr-3" />
              Find Experts
            </Link>
            <Link
              href="/rfx-hub"
              onClick={handleLinkClick}
              className="flex items-center py-2 text-lg hover:text-primary transition-colors"
            >
              <FileText className="w-5 h-5 mr-3" />
              RFP Hub
            </Link>
          </div>

          {/* Secondary navigation */}
          <div className="space-y-3 pt-3 border-t border-gray-100">
            <Link href="/about" onClick={handleLinkClick} className="block py-2 hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href="/insights"
              onClick={handleLinkClick}
              className="block py-2 hover:text-primary transition-colors"
            >
              Insights
            </Link>
            <Link href="/contact" onClick={handleLinkClick} className="block py-2 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Login button */}
          <div className="pt-4 mt-auto">
            <Button
              className="w-full bg-primary text-white hover:bg-primary/90"
              onClick={() => {
                handleLinkClick()
                // Add any additional login logic here
              }}
            >
              <User className="mr-2 h-4 w-4" />
              Expert Log in
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

