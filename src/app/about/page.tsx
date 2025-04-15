import Image from "next/image"
import Link from "next/link"
import { Download, Github, Linkedin, Mail, MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react"
import ImageGallery from "../components/image-gallery"

export default function AboutPage() {
  // Sample gallery images
  const personalImages = [
    {
      src: "/public/images/profile.jpg",
      alt: "Personal Photo 1",
      width: 300,
      height: 200,
    },
    {
      src: "/placeholder.svg?height=200&width=300&text=Personal+Photo+2",
      alt: "Personal Photo 2",
      width: 300,
      height: 200,
    },
    {
      src: "/placeholder.svg?height=200&width=300&text=Personal+Photo+3",
      alt: "Personal Photo 3",
      width: 300,
      height: 200,
    },
  ]

  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Get to know me better</p>
        </div>
      </section>

      <section className="section profile-section">
        <div className="container">
          <div className="profile-content">
            <div className="profile-image-container">
              <Image
                src="/placeholder.svg?height=500&width=500&text=Professional+Photo"
                alt="Er. Suraksha Regmi"
                width={500}
                height={500}
                className="profile-image"
              />
              <div className="profile-social">
                <Link href="https://github.com/yourusername" target="_blank" className="social-link">
                  <Github size={20} />
                </Link>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" className="social-link">
                  <Linkedin size={20} />
                </Link>
                <Link href="mailto:your.email@example.com" className="social-link">
                  <Mail size={20} />
                </Link>
              </div>
              <Link href="/resume.pdf" target="_blank" className="btn btn-outline btn-download">
                Download Resume <Download size={16} className="ml-2" />
              </Link>
            </div>
            <div className="profile-details">
              <h2 className="profile-name">Er. Suraksha Regmi</h2>
              <p className="profile-role">Full-stack Developer </p>

              <div className="profile-info">
                <div className="info-item">
                  <MapPin size={18} className="info-icon" />
                  <span>Kathmandu, Nepal</span>
                </div>
                <div className="info-item">
                  <Mail size={18} className="info-icon" />
                  <span>surakchya1234@gmail.com</span>
                </div>
                <div className="info-item">
                  <Calendar size={18} className="info-icon" />
                  <span>Available for freelance</span>
                </div>
              </div>

              <div className="profile-bio">
                <p>
                  Hello! I'm Er. Suraksha Regmi, a passionate full-stack developer with a focus on creating beautiful,
                  functional, and user-friendly web applications. With over 5 years of experience in web development,
                  I've had the opportunity to work on a variety of projects ranging from small business websites to
                  complex enterprise applications.
                </p>
                <p>
                  My journey in web development began when I was studying Computer Science at Tribhuvan University.
                  Since then, I've been constantly learning and adapting to new technologies and methodologies to stay
                  at the forefront of the industry.
                </p>
                <p>
                  I specialize in modern JavaScript frameworks like React and Next.js, and I have extensive experience
                  with backend technologies including Node.js and Django. I'm passionate about creating responsive,
                  accessible, and performant web applications that provide an excellent user experience across all
                  devices.
                </p>
                <p>
                  When I'm not coding, you can find me hiking in the mountains, reading science fiction, or
                  experimenting with new recipes in the kitchen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Gallery Section */}
      <section className="section personal-gallery">
        <div className="container">
          <h2 className="section-title">Personal Gallery</h2>
          <p className="section-subtitle">A glimpse into my life outside of coding</p>
          <ImageGallery images={personalImages} className="personal-images" />
        </div>
      </section>

      <section className="section experience-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">Senior Frontend Developer</h3>
                  <span className="timeline-period">2021 - Present</span>
                </div>
                <h4 className="timeline-company">Tech Innovators Inc.</h4>
                <div className="timeline-image">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Company+Logo+1"
                    alt="Tech Innovators Inc."
                    width={400}
                    height={200}
                  />
                </div>
                <ul className="timeline-description">
                  <li>Lead the development of the company's flagship product using Next.js and TypeScript</li>
                  <li>Implement responsive designs and improve performance by 40%</li>
                  <li>Mentor junior developers and conduct code reviews</li>
                  <li>Collaborate with designers and product managers to create intuitive user interfaces</li>
                  <li>Implement CI/CD pipelines and automated testing strategies</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">Full Stack Developer</h3>
                  <span className="timeline-period">2018 - 2021</span>
                </div>
                <h4 className="timeline-company">Digital Solutions Ltd.</h4>
                <div className="timeline-image">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Company+Logo+2"
                    alt="Digital Solutions Ltd."
                    width={400}
                    height={200}
                  />
                </div>
                <ul className="timeline-description">
                  <li>Developed and maintained multiple client websites using React and Node.js</li>
                  <li>Collaborated with designers to implement pixel-perfect UI components</li>
                  <li>Optimized database queries and API endpoints for improved performance</li>
                  <li>Implemented authentication and authorization systems</li>
                  <li>Participated in agile development processes and sprint planning</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">Junior Web Developer</h3>
                  <span className="timeline-period">2016 - 2018</span>
                </div>
                <h4 className="timeline-company">WebCraft Studios</h4>
                <div className="timeline-image">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Company+Logo+3"
                    alt="WebCraft Studios"
                    width={400}
                    height={200}
                  />
                </div>
                <ul className="timeline-description">
                  <li>Built responsive websites using HTML, CSS, and JavaScript</li>
                  <li>Developed WordPress themes and plugins for clients</li>
                  <li>Assisted senior developers with larger projects</li>
                  <li>Maintained and updated existing client websites</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <GraduationCap size={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">BSc in Computer Science</h3>
                  <span className="timeline-period">2012 - 2016</span>
                </div>
                <h4 className="timeline-company">Tribhuvan University</h4>
                <div className="timeline-image">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=University+Logo"
                    alt="Tribhuvan University"
                    width={400}
                    height={200}
                  />
                </div>
                <p className="timeline-description">
                  Graduated with honors. Specialized in web development and software engineering. Participated in
                  various coding competitions and hackathons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
