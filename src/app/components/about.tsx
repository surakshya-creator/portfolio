import Image from "next/image"
import Link from "next/link"
import { Github, Mail, Linkedin, Download } from "lucide-react"

export default function About() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-4">
            <div className="aspect-square relative rounded-xl overflow-hidden border shadow-md">
              <Image src="/placeholder.svg?height=400&width=400" alt="Profile picture" fill className="object-cover" />
            </div>

            <div className="flex justify-center gap-4 py-2">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>

              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>

              <Link
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>

            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">About Me</h1>
            <div className="prose max-w-none">
              <p>
                Hello! I'm <strong>Er. Suraksha Regmi</strong>, a passionate full-stack developer with a focus on creating
                beautiful, functional, and user-friendly web applications. With over X years of experience in web
                development, I've had the opportunity to work on a variety of projects ranging from small business
                websites to complex enterprise applications.
              </p>
              <p>
                My journey in web development began when I was studying Computer Science at University Name. Since then,
                I've been constantly learning and adapting to new technologies and methodologies to stay at the
                forefront of the industry.
              </p>
              <p>
                I specialize in modern JavaScript frameworks like React and Next.js, and I have extensive experience
                with backend technologies including Node.js and Django. I'm passionate about creating responsive,
                accessible, and performant web applications that provide an excellent user experience across all
                devices.
              </p>
              <p>
                When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting
                with new recipes in the kitchen.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/50 pl-4">
                <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                <p className="text-muted-foreground">Company Name • 2021 - Present</p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground">
                  <li>Led the development of the company's flagship product using Next.js and TypeScript</li>
                  <li>Implemented responsive designs and improved performance by 40%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary/50 pl-4">
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <p className="text-muted-foreground">Previous Company • 2018 - 2021</p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground">
                  <li>Developed and maintained multiple client websites using React and Node.js</li>
                  <li>Collaborated with designers to implement pixel-perfect UI components</li>
                  <li>Optimized database queries and API endpoints for improved performance</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Education</h2>
            <div className="border-l-2 border-primary/50 pl-4">
              <h3 className="text-xl font-semibold">BSc in Computer Science</h3>
              <p className="text-muted-foreground">University Name • 2014 - 2018</p>
              <p className="mt-2 text-muted-foreground">
                Graduated with honors. Specialized in web development and software engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
