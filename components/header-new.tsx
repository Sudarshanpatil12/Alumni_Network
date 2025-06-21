"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/context/auth-context"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserCircle, LogOut, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function HeaderNew() {
  const { isAuthenticated, logout } = useAuth()
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    logout()
    setIsDropdownOpen(false)
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/alumni", label: "Alumni Directory" },
    { href: "/events", label: "Events" },
    // { href: "/gallery", label: "Gallery" },
    // { href: "/jobs", label: "Career Opportunities" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="w-full shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#0a4a7a] text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-5 items-center mb-2 md:mb-0 text-white">
            <span className="flex items-center text-sm">
              <Mail className="mr-2 h-4 w-4" />
              alumni@rgpv.ac.in
            </span>
            <span className="flex items-center text-sm">
              <Phone className="mr-2 h-4 w-4" />
              +91 12345 67890
            </span>
          </div>
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <div className="relative" ref={dropdownRef}>
                <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-white hover:bg-[#082e4d] hover:text-white"
                    >
                      <UserCircle className="h-5 w-5" />
                      <span>Profile</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="cursor-pointer">
                        My Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600 focus:text-red-600 cursor-pointer" onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <Button asChild variant="ghost" className="text-white border border-white hover:bg-[#082e4d] hover:text-white">
                  <Link href="/admin/login">Admin Login</Link>
                </Button>
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/add-alumni">Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center justify-center gap-4">
            <div className="relative h-24 w-24">
              <Image src="/images/soit-logo.png" alt="UIT RGPV Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col justify-center text-center">
              <span className="text-sm text-blue-800 dark:text-blue-400 font-medium leading-tight">
                School of Information Technology
              </span>
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-400 leading-tight">RGPV</span>
              <span className="text-xs text-orange-500 dark:text-orange-400 leading-tight">
                State Technological University of Bhopal
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#0a4a7a] text-white">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center">
            {navItems.map((item) => (
              <li key={item.href} className="relative group hover:bg-[#082e4d]">
                <Link
                  href={item.href}
                  className={`block px-5 py-4 font-medium transition-colors relative ${
                    pathname === item.href ? (item.href === '/' ? "bg-[#082e4d]" : "bg-blue-700") : ""
                  } hover:bg-${item.href === '/' ? "[#082e4d]" : "#082e4d"} hover:after:w-3/5`}
                >
                  {item.label}
                  <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-3/5"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
