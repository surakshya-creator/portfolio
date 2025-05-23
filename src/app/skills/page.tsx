import { Code, Server, Database, Palette, Globe, Terminal, Cpu, BookOpen } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Code className="category-icon" />,
      description: "Creating responsive, accessible, and performant user interfaces",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "CSS", level: 90 },
        { name: "Framer Motion", level: 80 },
        { name: "Redux", level: 85 },
        { name: "Responsive Design", level: 95 },
      ],
    },
    {
      name: "Backend Development",
      icon: <Server className="category-icon" />,
      description: "Building robust server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Django", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Authentication", level: 85 },
        { name: "Serverless Functions", level: 80 },
      ],
    },
    {
      name: "Database",
      icon: <Database className="category-icon" />,
      description: "Designing and optimizing database structures",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "Redis", level: 70 },
        { name: "Database Design", level: 80 },
        { name: "ORM (Mongoose, Prisma)", level: 85 },
      ],
    },
    {
      name: "UI/UX Design",
      icon: <Palette className="category-icon" />,
      description: "Creating intuitive and visually appealing user experiences",
      skills: [
        { name: "UI Design", level: 80 },
        { name: "UX Principles", level: 85 },
        { name: "Wireframing", level: 85 },
        { name: "Prototyping", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Adobe XD", level: 70 },
        { name: "Accessibility", level: 85 },
      ],
    },
    {
      name: "DevOps & Deployment",
      icon: <Globe className="category-icon" />,
      description: "Deploying and maintaining applications in production",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub Actions", level: 80 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Vercel", level: 90 },
        { name: "Netlify", level: 85 },
        { name: "AWS (S3, EC2, Lambda)", level: 75 },
      ],
    },
    {
      name: "Tools & Utilities",
      icon: <Terminal className="category-icon" />,
      description: "Using various tools to improve development workflow",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "npm/yarn", level: 90 },
        { name: "Webpack", level: 80 },
        { name: "Vite", level: 85 },
        { name: "ESLint", level: 85 },
        { name: "Prettier", level: 90 },
        { name: "Chrome DevTools", level: 90 },
      ],
    },
    {
      name: "Testing",
      icon: <Cpu className="category-icon" />,
      description: "Ensuring code quality and reliability",
      skills: [
        { name: "Jest", level: 80 },
        { name: "React Testing Library", level: 85 },
        { name: "Cypress", level: 75 },
        { name: "Unit Testing", level: 85 },
        { name: "Integration Testing", level: 80 },
        { name: "E2E Testing", level: 75 },
      ],
    },
    {
      name: "Soft Skills",
      icon: <BookOpen className="category-icon" />,
      description: "Professional skills beyond technical abilities",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Teamwork", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Adaptability", level: 90 },
        { name: "Leadership", level: 80 },
      ],
    },
  ]

  return (
    <div className="skills-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">My Skills</h1>
          <p className="page-subtitle">Technologies and tools I work with</p>
        </div>
      </section>

      <section className="section skills-overview">
        <div className="container">
          <p className="section-intro">
            As a full-stack developer, I&apos;ve cultivated a diverse set of skills across various technologies and domains.
            I&apos;m constantly learning and expanding my skill set to stay current with the latest industry trends and best
            practices.
          </p>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <div className="category-header">
                  <div className="icon-container">{category.icon}</div>
                  <h2 className="category-name">{category.name}</h2>
                </div>
                <p className="category-description">{category.description}</p>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-container">
                        <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section learning-section">
        <div className="container">
          <h2 className="section-title">Currently Learning</h2>
          <div className="learning-grid">
            {[
              { name: "Three.js", description: "Creating 3D experiences for the web" },
              { name: "WebAssembly", description: "High-performance code execution in the browser" },
              { name: "Rust", description: "Systems programming language focused on safety and performance" },
              { name: "Machine Learning", description: "Building intelligent applications with TensorFlow.js" },
            ].map((item, index) => (
              <div key={index} className="learning-item">
                <h3 className="learning-name">{item.name}</h3>
                <p className="learning-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {[
              {
                name: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                date: "2022",
                description: "Expertise in developing and maintaining applications on the AWS platform",
              },
              {
                name: "Professional Web Developer",
                issuer: "FreeCodeCamp",
                date: "2021",
                description: "Comprehensive web development curriculum covering frontend and backend technologies",
              },
              {
                name: "React Developer",
                issuer: "Meta (formerly Facebook)",
                date: "2020",
                description: "Advanced React concepts, patterns, and best practices",
              },
            ].map((cert, index) => (
              <div key={index} className="certification-item">
                <h3 className="certification-name">{cert.name}</h3>
                <div className="certification-meta">
                  <span className="certification-issuer">{cert.issuer}</span>
                  <span className="certification-date">{cert.date}</span>
                </div>
                <p className="certification-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
