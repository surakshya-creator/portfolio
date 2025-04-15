"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Github, Mail } from "lucide-react"

export default function Homepage() {
  // Refs for animated elements
  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            entry.target.classList.add("fade-in-0")
            entry.target.classList.add("slide-in-from-bottom-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe elements
    if (heroRef.current) observer.observe(heroRef.current)
    if (projectsRef.current) observer.observe(projectsRef.current)
    if (skillsRef.current) observer.observe(skillsRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="space-y-24 py-8">
      {/* Hero Section */}
      <section id="hero" className="py-12 md:py-24">
        <div ref={heroRef} className="container mx-auto px-4 opacity-0 duration-700">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, my name is{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Er. Suraksha Regmi
                </span>
              </h1>

              <p className="text-xl text-muted-foreground">
                Full-stack developer specializing in creating beautiful, functional, and user-friendly applications.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 group"
                >
                  Contact Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  View My Work
                </Link>
              </div>

              <div className="flex gap-4 pt-4">
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>

                <Link
                  href="mailto:your.email@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-square max-w-md mx-auto md:ml-auto rounded-xl overflow-hidden border shadow-lg">
              {/* Replace this with your actual image */}
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Er. Suraksha Regmi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-12 bg-muted/30">
        <div ref={projectsRef} className="container mx-auto px-4 opacity-0 duration-700">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Projects</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Project ${item}`}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Project Title {item}</h3>
                  <p className="text-muted-foreground mt-2">
                    A brief description of this amazing project and the technologies used.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                      Next.js
                    </span>
                    <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section id="skills-preview" className="py-12">
        <div ref={skillsRef} className="container mx-auto px-4 opacity-0 duration-700">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 p-4 rounded-lg border bg-card text-card-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Code className="h-4 w-4" />
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/skills"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              View All Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
