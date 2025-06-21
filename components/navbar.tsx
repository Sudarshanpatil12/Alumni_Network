"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Menu items data
  const menuItems = [
    {
      title: "Home",
      path: "/",
    },

    
    {
      title: "Alumni",
      path: "/alumni",
      dropdown: [
        { title: "Directory", path: "/alumni" },
        { title: "Success Stories", path: "/alumni/stories" },
        { title: "Notable Alumni", path: "/alumni/notable" },
      ],
    },
    {
      title: "Events",
      path: "/events",
      dropdown: [
        { title: "Upcoming Events", path: "/events/upcoming" },
        { title: "Past Events", path: "/events/past" },
        { title: "Event Gallery", path: "/events/gallery" },
      ],
    },
    {
      title: "Resources",
      path: "/resources",
      dropdown: [
        { title: "Career Services", path: "/resources/careers" },
        { title: "Job Portal", path: "/resources/jobs" },
        { title: "Mentorship Program", path: "/resources/mentorship" },
      ],
    },
    {
      title: "About",
      path: "/about",
    },
  
  ]

  return (
    <nav className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-[70px]">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 mr-3">
              <Image src="/images/soit-logo.png" alt="RGPV Alumni Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold leading-tight">SOIT Alumni</h3>
              <p className="text-xs text-orange-400">Connecting Professionals</p>
            </div>
          </Link>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={
            isMenuOpen
              ? "absolute top-[70px] left-0 right-0 flex flex-col bg-blue-900 p-4 shadow-lg z-50"
              : "hidden md:flex md:items-center gap-1"
          }
        >
          {menuItems.map((item, index) => (
            <li key={index} className="relative md:ml-1">
              {item.dropdown ? (
                <>
                  <button
                    className={
                      activeDropdown === item.title
                        ? "flex items-center px-4 py-2 font-medium rounded hover:bg-blue-700 w-full md:w-auto justify-between md:justify-start bg-blue-700"
                        : "flex items-center px-4 py-2 font-medium rounded hover:bg-blue-700 w-full md:w-auto justify-between md:justify-start"
                    }
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                    <ChevronDown
                      className={activeDropdown === item.title ? "ml-1 transition-transform rotate-180" : "ml-1 transition-transform"}
                    />
                  </button>
                  <ul
                    className={
                      activeDropdown === item.title
                        ? "md:absolute md:top-full md:left-0 md:bg-blue-900 md:text-white md:min-w-[200px] md:rounded md:shadow-lg md:py-2 block"
                        : "md:absolute md:top-full md:left-0 md:bg-blue-900 md:text-white md:min-w-[200px] md:rounded md:shadow-lg md:py-2 hidden md:mt-0 mt-1 pl-4 md:pl-0"
                    }
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.path}
                          className="block px-4 py-2 hover:bg-[#082e4d] text-white"
                          onClick={() => {
                            setIsMenuOpen(false)
                            setActiveDropdown(null)
                          }}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.path}
                  className={
                    pathname === item.path
                      ? "block px-4 py-2 font-medium rounded hover:bg-blue-700 bg-blue-700"
                      : "block px-4 py-2 font-medium rounded hover:bg-blue-700"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
          <li className="md:ml-1 mt-2 md:mt-0">
            <Link
              href="/admin/login"
              className="block px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded font-medium text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Alumni Login
            </Link>
          </li>
          <li className="md:ml-1 mt-2 md:mt-0">
            <Link
              href="/events"
              className="text-[#0a4a7a] hover:underline dark:text-[#082e4d] transition-colors flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="mr-1 h-5 w-5" />
              Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
