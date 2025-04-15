"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for resize
    window.addEventListener("resize", checkIfMobile)

    // Track scroll for navbar background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname === path) return true
    return false
  }

  return (
    <header className={`nav ${isScrolled ? "nav-solid" : "nav-transparent"}`}>
      <div className="container nav-container">
        <Link href="/" className="nav-logo gradient-text">
          Portfolio
        </Link>

        {isMobile ? (
          <>
            <button onClick={toggleMenu} className="mobile-menu-button" aria-label="Toggle menu">
              {isMenuOpen ? (
                <X style={{ width: "20px", height: "20px" }} />
              ) : (
                <Menu style={{ width: "20px", height: "20px" }} />
              )}
            </button>

            {isMenuOpen && (
              <div className="mobile-menu">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <nav className="nav-links">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path} className={`nav-link ${isActive(item.path) ? "active" : ""}`}>
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
