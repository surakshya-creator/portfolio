import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, Calendar } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js and a headless CMS. Features include product listings, cart functionality, user authentication, and payment processing with Stripe integration.",
      longDescription:
        "This project was built to provide small businesses with an affordable, customizable e-commerce solution. It features a responsive design, fast page loads using Next.js, and a headless CMS for easy content management. The checkout process is streamlined with Stripe integration, and the platform includes analytics to help business owners track sales and customer behavior.",
      image: "/placeholder.svg?height=600&width=800&text=E-commerce+Platform",
      screenshots: [
        "/placeholder.svg?height=300&width=500&text=E-commerce+Screenshot+1",
        "/placeholder.svg?height=300&width=500&text=E-commerce+Screenshot+2",
        "/placeholder.svg?height=300&width=500&text=E-commerce+Screenshot+3",
      ],
      tags: ["Next.js", "React", "CSS", "Stripe", "Headless CMS"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
      date: "January 2023",
      featured: true,
    },
    {
      id: 2,
      title: "Personal Blog Platform",
      description:
        "A modern blogging platform with rich text editing, categories, and search functionality. Built with Next.js and a custom backend API.",
      longDescription:
        "This blogging platform was designed to provide writers with a clean, distraction-free writing experience while offering powerful features under the hood. It includes a rich text editor with markdown support, categories and tags for organization, and a powerful search function. The platform is optimized for SEO and includes social sharing capabilities.",
      image: "/placeholder.svg?height=600&width=800&text=Blog+Platform",
      screenshots: [
        "/placeholder.svg?height=300&width=500&text=Blog+Screenshot+1",
        "/placeholder.svg?height=300&width=500&text=Blog+Screenshot+2",
        "/placeholder.svg?height=300&width=500&text=Blog+Screenshot+3",
      ],
      tags: ["Next.js", "React", "Node.js", "MongoDB", "CSS"],
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
      date: "October 2022",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates, task assignments, and progress tracking. Includes a dashboard with analytics.",
      longDescription:
        "This task management application was built to help teams collaborate more effectively. It features real-time updates using WebSockets, task assignments with email notifications, and progress tracking with customizable workflows. The analytics dashboard provides insights into team productivity and project timelines.",
      image: "/placeholder.svg?height=600&width=800&text=Task+Management+App",
      screenshots: [
        "/placeholder.svg?height=300&width=500&text=Task+App+Screenshot+1",
        "/placeholder.svg?height=300&width=500&text=Task+App+Screenshot+2",
        "/placeholder.svg?height=300&width=500&text=Task+App+Screenshot+3",
      ],
      tags: ["React", "Firebase", "CSS", "Chart.js"],
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
      date: "July 2022",
      featured: true,
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current conditions and forecasts for multiple locations. Uses a weather API and includes interactive maps.",
      longDescription:
        "This weather dashboard provides users with detailed weather information for any location. It includes current conditions, hourly forecasts, and 7-day predictions. The interactive map allows users to click on any location to get weather data, and users can save favorite locations for quick access.",
      image: "/placeholder.svg?height=600&width=800&text=Weather+Dashboard",
      screenshots: [
        "/placeholder.svg?height=300&width=500&text=Weather+Screenshot+1",
        "/placeholder.svg?height=300&width=500&text=Weather+Screenshot+2",
      ],
      tags: ["React", "OpenWeather API", "Leaflet", "CSS Modules"],
      github: "https://github.com/yourusername/project4",
      demo: "https://project4-demo.com",
      date: "April 2022",
      featured: false,
    },
    {
      id: 5,
      title: "Recipe Finder",
      description:
        "A recipe finder application that allows users to search for recipes by ingredients, dietary restrictions, and meal types. Includes user accounts and saved recipes.",
      longDescription:
        "This recipe finder helps users discover new meals based on what they have in their kitchen. Users can search by ingredients, filter by dietary restrictions, and browse by meal types. The application includes user accounts where favorite recipes can be saved, and there&aposms a meal planning feature to help users organize their weekly meals.",
      image: "/placeholder.svg?height=600&width=800&text=Recipe+Finder",
      screenshots: [
        "/placeholder.svg?height=300&width=500&text=Recipe+Screenshot+1",
        "/placeholder.svg?height=300&width=500&text=Recipe+Screenshot+2",
      ],
      tags: ["Next.js", "Spoonacular API", "CSS", "NextAuth.js"],
      github: "https://github.com/yourusername/project5",
      demo: "https://project5-demo.com",
      date: "February 2022",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and CSS. Features a responsive design, dark mode, and animations.",
      longDescription:
        "This portfolio website was designed to showcase my work and skills in a clean, professional manner. It features a responsive design that looks great on all devices, a dark mode toggle for user preference, and subtle animations to enhance the user experience without being distracting.",
      image: "/placeholder.svg?height=600&width=800&text=Portfolio+Website",
      screenshots: [
        "/placeholder.svg?height=300&width=500&text=Portfolio+Screenshot+1",
        "/placeholder.svg?height=300&width=500&text=Portfolio+Screenshot+2",
      ],
      tags: ["Next.js", "CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
      date: "December 2021",
      featured: false,
    },
  ]

  return (
    <div className="projects-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">A collection of my recent work</p>
        </div>
      </section>

      <section className="section featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="featured-grid">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div key={project.id} className="featured-project">
                  <div className="project-image">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="image"
                    />
                  </div>
                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-date">
                        <Calendar size={16} className="date-icon" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <p className="project-description">{project.longDescription}</p>

                    {/* Project Screenshots */}
                    <div className="project-screenshots">
                      {project.screenshots.map((screenshot, index) => (
                        <div key={index} className="screenshot-thumbnail">
                          <Image
                            src={screenshot || "/placeholder.svg"}
                            alt={`${project.title} Screenshot ${index + 1}`}
                            width={500}
                            height={300}
                            className="screenshot-image"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.github && (
                        <Link href={project.github} target="_blank" className="project-link">
                          <Github size={18} className="link-icon" />
                          <span>Source Code</span>
                        </Link>
                      )}
                      {project.demo && (
                        <Link href={project.demo} target="_blank" className="project-link">
                          <ExternalLink size={18} className="link-icon" />
                          <span>Live Demo</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="section all-projects">
        <div className="container">
          <h2 className="section-title">All Projects</h2>
          <div className="projects-grid">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <div key={project.id} className="project-card">
                  <div className="card-image">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="image"
                    />
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-title">{project.title}</h3>
                      <div className="card-date">
                        <Calendar size={14} className="date-icon" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <p className="card-description">{project.description}</p>
                    <div className="card-tags">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="card-tag">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && <span className="card-tag">+{project.tags.length - 3}</span>}
                    </div>
                    <div className="card-links">
                      {project.github && (
                        <Link href={project.github} target="_blank" className="card-link">
                          <Github size={16} className="link-icon" />
                        </Link>
                      )}
                      {project.demo && (
                        <Link href={project.demo} target="_blank" className="card-link">
                          <ExternalLink size={16} className="link-icon" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="section contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Interested in working together?</h2>
            <p className="cta-description">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
