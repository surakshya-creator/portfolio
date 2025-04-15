import Link from "next/link"
import { Github, Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-copyright">© {new Date().getFullYear()} Er. Suraksha Regmi. All rights reserved.</p>

        <div className="footer-links">
          <Link href="https://github.com/yourusername" target="_blank" className="footer-link" aria-label="GitHub">
            <Github style={{ width: "20px", height: "20px" }} />
          </Link>

          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <Linkedin style={{ width: "20px", height: "20px" }} />
          </Link>

          <Link href="mailto:your.email@example.com" className="footer-link" aria-label="Email">
            <Mail style={{ width: "20px", height: "20px" }} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
