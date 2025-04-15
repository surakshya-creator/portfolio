import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import "./styles/globals.css"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="logo">
              Portfolio
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container">
            <p>© 2023 Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
