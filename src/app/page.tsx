import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import ImageGallery from "./components/image-gallery"

export default function HomePage() {
  // Sample project images
  const projectImages = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=300&width=500&text=E-commerce+Platform",
      tags: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and CSS.",
      image: "/placeholder.svg?height=300&width=500&text=Portfolio+Website",
      tags: ["Next.js", "CSS", "Framer Motion"],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500&text=Task+Management+App",
      tags: ["React", "Firebase", "Material UI"],
    },
  ]

  // Sample gallery images
  const galleryImages = [
    { src: "/placeholder.svg?height=200&width=300&text=Work+Sample+1", alt: "Work Sample 1", width: 300, height: 200 },
    { src: "/placeholder.svg?height=200&width=300&text=Work+Sample+2", alt: "Work Sample 2", width: 300, height: 200 },
    { src: "/placeholder.svg?height=200&width=300&text=Work+Sample+3", alt: "Work Sample 3", width: 300, height: 200 },
    { src: "/placeholder.svg?height=200&width=300&text=Work+Sample+4", alt: "Work Sample 4", width: 300, height: 200 },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hey, I&aposmm <span className="gradient-text">Suraksha Regmi</span>
              </h1>
              <p className="hero-subtitle">Computer Engineer</p>
              <p className="hero-description">
                I create beautiful, functional, and user-friendly web applications using modern technologies.
                Specializing in Next.js, and Node.js to build seamless digital experiences.
              </p>
              <div className="hero-buttons">
                <Link href="/contact" className="btn btn-primary">
                  Get in Touch <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link href="/projects" className="btn btn-outline">
                  View My Work
                </Link>
              </div>
              <div className="hero-social">
                <Link href="https://github.com/yourusername" target="_blank" className="social-icon">
                  <Github size={20} />
                </Link>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" className="social-icon">
                  <Linkedin size={20} />
                </Link>
                <Link href="mailto:your.email@example.com" className="social-icon">
                  <Mail size={20} />
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
              <Image src="/images/profile.svg" alt="Profile" width={500} height={500} />

                <div className="image-decoration"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-background">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section featured-projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </div>
          <div className="projects-grid">
            {projectImages.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} width={500} height={300} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <Link href="/projects" className="btn btn-outline">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Work Samples Gallery */}
      <section className="section work-samples">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Work Samples</h2>
            <p className="section-subtitle">Visual examples of my projects</p>
          </div>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="section skills-overview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="skills-grid">
            {[
              {
                category: "Frontend",
                skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "CSS"],
                image: "/placeholder.svg?height=80&width=80&text=Frontend",
              },
              {
                category: "Backend",
                skills: ["Node.js", "Express", "Django", "RESTful APIs", "GraphQL"],
                image: "/placeholder.svg?height=80&width=80&text=Backend",
              },
              {
                category: "Database",
                skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
                image: "/placeholder.svg?height=80&width=80&text=Database",
              },
              {
                category: "Tools & Others",
                skills: ["Git", "Docker", "AWS", "CI/CD", "Figma", "Adobe XD"],
                image: "/placeholder.svg?height=80&width=80&text=Tools",
              },
            ].map((category, index) => (
              <div key={index} className="skill-category">
                <div className="skill-category-icon">
                  <Image src={category.image || "/placeholder.svg"} alt={category.category} width={80} height={80} />
                </div>
                <h3 className="category-title">{category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <Link href="/skills" className="btn btn-outline">
              View All Skills <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <Image
                src="/placeholder.svg?height=400&width=400&text=About+Me"
                alt="About Me"
                width={400}
                height={400}
                className="rounded-image"
              />
            </div>
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <p className="about-description">
                I&aposmm a passionate full-stack developer with over 5 years of experience in building web applications. I
                specialize in creating responsive, accessible, and performant web applications that provide an excellent
                user experience.
              </p>
              <p className="about-description">
                My journey in web development began when I was studying Computer Science, and since then, I&aposmve been
                constantly learning and adapting to new technologies and methodologies.
              </p>
              <div className="about-buttons">
                <Link href="/about" className="btn btn-outline">
                  Learn More About Me <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Let&aposms Work Together</h2>
            <p className="cta-description">
              Have a project in mind? I&aposmd love to hear about it. Let&aposms discuss how we can work together to bring your
              ideas to life.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get in Touch <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
