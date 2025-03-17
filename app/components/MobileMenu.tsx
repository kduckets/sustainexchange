"use client"

import { useState } from "react"
import { Menu, X, Search, ClipboardCheck, Wrench, Calculator, FileText, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  const menuItems = [
    { href: "/providers", icon: <Search className="w-5 h-5 mr-2" />, label: "Find Providers" },
    {
      href: "/providers?expertise=Strategy%20%26%20Planning",
      icon: <ClipboardCheck className="w-5 h-5 mr-2" />,
      label: "Strategy & Planning",
    },
    {
      href: "/providers?expertise=Technical%20Support",
      icon: <Wrench className="w-5 h-5 mr-2" />,
      label: "Technical Support",
    },
    {
      href: "/providers?expertise=Auditing%2C%20Testing%20%26%20Verification",
      icon: <Calculator className="w-5 h-5 mr-2" />,
      label: "Auditing & Verification",
    },
    {
      href: "/providers?expertise=PR%20%26%20Communications",
      icon: <FileText className="w-5 h-5 mr-2" />,
      label: "PR & Communications",
    },
    { href: "/rfx-hub", icon: <FileText className="w-5 h-5 mr-2" />, label: "RFX Hub" },
    { href: "/about", icon: null, label: "About" },
    { href: "/insights", icon: null, label: "Insights" },
    { href: "/contact", icon: null, label: "Contact" },
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
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={handleLinkClick}
              className="flex items-center py-2 text-lg hover:text-primary transition-colors"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6">
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
      </SheetContent>
    </Sheet>
  )
}

