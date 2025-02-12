"use client"

import { useState } from "react"
import { Menu, X, ClipboardCheck, Wrench, Calculator, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  const menuItems = [
    { href: "/strategy-planning", icon: <ClipboardCheck className="w-5 h-5 mr-2" />, label: "Strategy & Planning" },
    { href: "#", icon: <Wrench className="w-5 h-5 mr-2" />, label: "Technical Support" },
    { href: "#", icon: <Calculator className="w-5 h-5 mr-2" />, label: "Auditing & M&V" },
    { href: "#", icon: <FileText className="w-5 h-5 mr-2" />, label: "Reporting & Communications" },
    { href: "/", icon: null, label: "RFX Hub" },
    { href: "/", icon: null, label: "About" },
    { href: "/", icon: null, label: "Expert Log in" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={handleLinkClick}
              className="flex items-center py-2 text-lg hover:text-blue-600 transition-colors"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

