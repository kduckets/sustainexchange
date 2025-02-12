"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
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
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/about" onClick={handleLinkClick} className="block py-2 text-lg">
            About
          </Link>
          <Link href="/expert-login" onClick={handleLinkClick} className="block py-2 text-lg">
            Expert Log in
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

