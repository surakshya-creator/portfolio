import Link from "next/link"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Let &aposms discuss your project</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="info-title">Contact Information</h2>
              <p className="info-subtitle">
                Feel free to reach out to me through any of these channels. I&aposmm always open to discussing new projects,
                creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <Mail className="icon" />
                  </div>
                  <div className="info-content">
                    <h3 className="item-title">Email</h3>
                    <p className="item-value">your.email@example.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Phone className="icon" />
                  </div>
                  <div className="info-content">
                    <h3 className="item-title">Phone</h3>
                    <p className="item-value">+977 9812345678</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MapPin className="icon" />
                  </div>
                  <div className="info-content">
                    <h3 className="item-title">Location</h3>
                    <p className="item-value">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3 className="social-title">Connect with me</h3>
                <div className="social-icons">
                  <Link href="https://github.com/yourusername" target="_blank" className="social-icon">
                    <Github className="icon" />
                  </Link>
                  <Link href="https://linkedin.com/in/yourusername" target="_blank" className="social-icon">
                    <Linkedin className="icon" />
                  </Link>
                  <Link href="https://twitter.com/yourusername" target="_blank" className="social-icon">
                    <Twitter className="icon" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2 className="form-title">Send Me a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Hello, I&aposmd like to talk about..."
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {[
              {
                question: "What is your typical project process?",
                answer:
                  "My process typically involves an initial consultation, requirements gathering, design mockups, development, testing, and deployment. I maintain clear communication throughout to ensure your vision is realized.",
              },
              {
                question: "How long does it take to complete a project?",
                answer:
                  "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. I&aposmll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you offer maintenance services after project completion?",
                answer:
                  "Yes, I offer maintenance packages to keep your website or application running smoothly. This includes regular updates, security patches, and technical support.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "I offer both project-based and hourly pricing depending on your needs. Project-based pricing is determined after understanding your requirements, while my hourly rate is competitive for the industry.",
              },
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
