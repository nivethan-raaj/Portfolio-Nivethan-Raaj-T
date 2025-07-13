"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Menu,
  X,
  ArrowUpRight,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  Code,
  Trophy,
  Users,
  Zap,
  Target,
} from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"
import { StaggeredReveal } from "@/components/StaggeredReveal"
import { MultilingualWelcome } from "@/components/MultilingualWelcome"
import { InnovativeContactForm } from "@/components/InnovativeContactForm"
import { RotatingCard } from "@/components/RotatingCard"

export default function AnimatedPortfolio() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!showWelcome) {
      setIsLoaded(true)

      const handleScroll = () => {
        const sections = ["home", "about", "experience", "projects", "research", "achievements", "contact"]
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [showWelcome])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  if (showWelcome) {
    return <MultilingualWelcome onComplete={() => setShowWelcome(false)} />
  }

  const projects = [
    {
      title: "Amazon Prime Clone with Party Watch",
      description:
        "Built a scalable video platform clone using MERN, SSR, and Socket.io. Developed backend with Node.js, Express, and MongoDB. Integrated real-time messaging and server-side rendering. This is a course project under a company, so source code cannot be shared publicly.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "SSR"],
      github: null,
      demo: null,
      featured: true,
      date: "Fall 2024",
      note: "Course project - Source code confidential",
    },
    {
      title: "AI-Powered Flood Evacuation Route Planner",
      description:
        "AI-powered web app for real-time flood escape routes using Next.js and TypeScript. Implemented pathfinding with elevation and geo-data. Well documented with MIT license. Collaborative project with Vishwakanth Gopalakrishnan (github.com/vish3949).",
      tech: ["Next.js", "TypeScript", "AI/ML", "Maps API", "Pathfinding"],
      github: "https://github.com/nivethan-raaj/flood-management---prediction.git",
      demo: null,
      featured: true,
      date: "Winter 2024",
      note: "MIT License - Well documented",
    },
    {
      title: "AI-based Medical Image Enhancement",
      description:
        "Enhanced medical images using AI-driven generation techniques. Used GANs and diffusion models for image restoration. Frontend part is shared, but the trained agent is proprietary. Contact me to purchase the complete AI agent solution.",
      tech: ["Python", "GANs", "Diffusion Models", "OpenCV", "TensorFlow", "Next.js"],
      github: "https://github.com/vish3949/medical_imaging.git",
      demo: "https://medicalimage-next.netlify.app/",
      featured: true,
      date: "Winter 2024",
      note: "Frontend only - Contact for AI agent purchase",
    },
    {
      title: "Turf Booking and Management System",
      description:
        "Created a website to book and manage turf slots with payment support. Built user and admin panels to book, cancel, and view turf slots. Added online payment integration and prevented double bookings.",
      tech: ["MERN", "Payment Gateway", "Admin Panel", "Booking System"],
      github: "https://github.com/nivethan-raaj/TurfManagement.git",
      demo: null,
      featured: false,
      date: "Summer 2024",
    },
    {
      title: "Real Estate Website Frontend",
      description:
        "Modern real estate platform frontend with property listings, search functionality, and responsive design. Built with modern web technologies for optimal user experience.",
      tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/nivethan-raaj/Real-Estate-Website-FrontEnd.git",
      demo: "https://real-estate-demo.vercel.app",
      featured: false,
      date: "Present",
      certificate: "/graduvation-project-certificate.jpg",
    },
    {
      title: "Real-Time Image and Video Recognition",
      description:
        "Developed a system for real-time image and video recognition to identify objects using OpenCV. Implemented functionality for live analysis and classification of visual data from photos and videos.",
      tech: ["Python", "OpenCV", "Computer Vision", "Real-time Processing"],
      github: null,
      demo: null,
      featured: false,
      date: "2022",
    },
  ]

  const experience = [
    {
      company: "BEEZ Innovation Labs Pvt. Ltd.",
      role: "Cloud Computing Intern",
      duration: "May 2024 – Jul 2024",
      location: "Chennai, India",
      description: [
        "Developed a full-stack e-commerce platform using Node.js (Express) and SAP UI5 Fiori",
        "Implemented and deployed a SAP-based application on SAP BTP Cockpit",
        "Gained hands-on experience with SAP HANA Cloud and cloud computing technologies",
        "Applied enterprise-level development practices and cloud deployment strategies",
      ],
      tech: ["Node.js", "Express", "SAP UI5 Fiori", "SAP BTP", "SAP HANA Cloud"],
    },
    {
      company: "GraduVation",
      role: "MERN Stack Training Intern",
      duration: "Jul 2024 – Oct 2024",
      location: "Remote",
      description: [
        "Completed comprehensive MERN Stack training focused on building a Property Management System",
        "Developed real-time chat application using Socket.io and modern web technologies",
        "Gained practical experience with React, Node.js, Express, MongoDB, and Socket.io",
        "Applied software engineering concepts like modular design, authentication, and deployment",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Authentication"],
    },
  ]

  const skills = {
    "Data Structures & Algorithms": ["Java", "Python", "Problem Solving", "Competitive Programming"],
    "Full Stack Development": ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Next.js"],
    "Programming Languages": [
      "Java (Proficient)",
      "Python (Proficient)",
      "C++ (Moderate)",
      "C (Moderate)",
      "TypeScript",
    ],
    "Cloud & DevOps": ["AWS Cloud Solutions", "SAP BTP Cockpit", "SAP HANA Cloud", "Docker", "CI/CD"],
    "Tools & Technologies": ["Socket.io", "Linux", "IntelliJ IDEA", "Postman", "Eclipse", "Git", "Version Control"],
    "AI/ML & Computer Vision": [
      "TensorFlow",
      "OpenCV",
      "GANs",
      "Diffusion Models",
      "Computer Vision",
      "Image Processing",
    ],
  }

  const certifications = [
    {
      title: "META Front-End Developer Professional Certificate",
      provider: "Coursera",
      date: "Dec 14, 2024",
      courses: [
        "Introduction to Front-End Development",
        "Programming with JavaScript",
        "Version Control",
        "HTML and CSS in depth",
        "React Basics",
        "Advanced React",
        "Principles of UX/UI Design",
        "Front-End Developer Capstone",
        "Coding Interview Preparation",
      ],
      verify: "https://coursera.org/verify/professional-cert/MO1HKXMM0S1U",
    },
    {
      title: "Full Stack Development MERN",
      provider: "GraduVation",
      date: "Jul 21 - Oct 2, 2024",
      description: "Live industrial training in Web Development Full Stack (MERN)",
    },
    {
      title: "Certificate of Projects - Real Estate Website",
      provider: "GraduVation (ISO 9001:2015 Certified)",
      date: "Oct 25, 2024",
      description: "Full Stack MERN development project completion",
    },
    {
      title: "Core Java + REST API with Spring Boot",
      provider: "Udemy",
      date: "2024",
    },
  ]

  const achievements = [
    {
      category: "Academic",
      title: "CGPA>9",
      description: "Maintaining 9.09 CGPA in Computer Science & Engineering",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "text-blue-400",
    },
    {
      category: "Professional",
      title: "Typewriting Excellence",
      description: "English Lower - Distinction, English Higher - 1st Class (TNDTE)",
      icon: <Award className="h-6 w-6" />,
      color: "text-emerald-400",
    },
    {
      category: "Sports",
      title: "State Level Athlete",
      description: "Individual Field Event Athlete (High Jump, Pole Vault) - Tamil Nadu",
      icon: <Trophy className="h-6 w-6" />,
      color: "text-yellow-400",
    },
    {
      category: "Leadership",
      title: "Team Captain",
      description: "District Level Team Event Captain (Kho-Kho) - Madurai",
      icon: <Users className="h-6 w-6" />,
      color: "text-purple-400",
    },
  ]

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="text-emerald-400 font-mono text-lg font-bold">&lt;Nivethan /&gt;</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "projects", "research", "achievements", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-mono text-sm transition-colors duration-300 hover:text-emerald-400 ${
                    activeSection === section ? "text-emerald-400" : "text-slate-300"
                  }`}
                >
                  <span className="text-emerald-400">
                    0
                    {["home", "about", "experience", "projects", "research", "achievements", "contact"].indexOf(
                      section,
                    ) + 1}
                    .
                  </span>{" "}
                  {section}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 bg-transparent"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1iBUzqlq7tIJx_FHwDWaHjJ_EgCEyWBOJ/view?usp=drivesdk",
                    "_blank",
                  )
                }
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-slate-300 hover:text-emerald-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-4">
              {["home", "about", "experience", "projects", "research", "achievements", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block font-mono text-sm text-slate-300 hover:text-emerald-400"
                >
                  <span className="text-emerald-400">
                    0
                    {["home", "about", "experience", "projects", "research", "achievements", "contact"].indexOf(
                      section,
                    ) + 1}
                    .
                  </span>{" "}
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="font-mono text-emerald-400 mb-4 text-lg animate-fade-in-up">Hi, my name is</p>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-200 mb-4 animate-fade-in-up break-words leading-tight"
              style={{ animationDelay: "0.1s" }}
            >
              Nivethan Raaj T.
            </h1>
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-400 mb-6 animate-fade-in-up break-words leading-tight"
              style={{ animationDelay: "0.2s" }}
            >
              I build scalable solutions.
            </h2>
            <p
              className="text-lg sm:text-xl text-slate-400 max-w-3xl mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Passionate about creating innovative digital experiences that solve real-world problems. Final year
              Computer Science student with expertise in full-stack development, cloud computing, and AI/ML. Let's build
              the future together, one line of code at a time.
            </p>

            <div className="flex flex-wrap gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Badge variant="secondary" className="bg-emerald-400/10 text-emerald-400 border-emerald-400/20">
                <GraduationCap className="h-4 w-4 mr-2" />
                9.09 CGPA
              </Badge>
              <Badge variant="secondary" className="bg-blue-400/10 text-blue-400 border-blue-400/20">
                <Calendar className="h-4 w-4 mr-2" />
                Graduating 2026
              </Badge>
              <Badge variant="secondary" className="bg-purple-400/10 text-purple-400 border-purple-400/20">
                <MapPin className="h-4 w-4 mr-2" />
                Madurai, Tamil Nadu
              </Badge>
              <Badge variant="secondary" className="bg-yellow-400/10 text-yellow-400 border-yellow-400/20">
                <Trophy className="h-4 w-4 mr-2" />
                State Level Athlete
              </Badge>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                size="lg"
                className="bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-mono btn-glow"
                onClick={() => scrollToSection("projects")}
              >
                <Code className="h-4 w-4 mr-2" />
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="h-4 w-4 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="https://github.com/nivethan-raaj"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/nivethan-raaj-t"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:nivethanraajt@gmail.com"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-200 font-mono">
                <span className="text-emerald-400">01.</span> About Me
              </h2>
              <div className="ml-8 h-px bg-slate-600 flex-1"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <StaggeredReveal staggerDelay={200}>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    Hello! I'm Nivethan, a passionate final year Computer Science student at VIT Vellore with a strong
                    foundation in full-stack development and cloud technologies. My journey in tech started with
                    curiosity about scalable systems and has evolved into expertise in building distributed
                    applications.
                  </p>
                  <p>
                    I specialize in Java and MERN stack development, with proficiency in data structures and algorithms.
                    My recent internships at BEEZ Innovation Labs and GraduVation have given me hands-on experience with
                    enterprise-level cloud solutions, SAP technologies, and modern web development practices.
                  </p>
                  <p>
                    Beyond coding, I'm a state-level athlete in high jump and pole vault, which has taught me
                    discipline, perseverance, and goal-oriented thinking - qualities I bring to every project I work on.
                  </p>
                </div>
              </StaggeredReveal>

              <ScrollReveal direction="up" delay={600}>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-slate-200 mb-4">Education</h3>
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-emerald-400">
                            B.Tech Computer Science and Engineering
                          </h4>
                          <p className="text-slate-300">Vellore Institute of Technology, Vellore</p>
                        </div>
                        <Badge variant="outline" className="border-emerald-400 text-emerald-400">
                          9.09 CGPA
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400 mb-3">Graduating 2026</p>
                      <div className="text-sm text-slate-400 mb-4">
                        <strong className="text-slate-300">Relevant Coursework:</strong> Theory of Computation, Computer
                        Networks, Operating Systems, Database Management Systems, Compiler Design, Web Technologies,
                        Microprocessor and Microcontroller, Digital System and Design
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                          onClick={() =>
                            window.open(
                              "https://drive.google.com/file/d/1lNPa9vCZzHxnT3sh8VVjRoXyohUBJKuy/view?usp=drivesdk",
                              "_blank",
                            )
                          }
                        >
                          <Award className="h-4 w-4 mr-2" />
                          Grade History
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={800}>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-slate-200 mb-4">Certifications</h3>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <Card
                        key={index}
                        className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300"
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <h4 className="font-semibold text-emerald-400 mb-1">{cert.title}</h4>
                              <p className="text-sm text-slate-300">{cert.provider}</p>
                              <p className="text-xs text-slate-400">{cert.date}</p>
                              {cert.description && <p className="text-sm text-slate-400 mt-1">{cert.description}</p>}
                              {cert.courses && (
                                <div className="mt-2">
                                  <p className="text-xs text-slate-400 mb-1">9 Courses Completed:</p>
                                  <div className="flex flex-wrap gap-1">
                                    {cert.courses.slice(0, 4).map((course, i) => (
                                      <Badge
                                        key={i}
                                        variant="secondary"
                                        className="text-xs bg-slate-700 text-slate-300"
                                      >
                                        {course}
                                      </Badge>
                                    ))}
                                    {cert.courses.length > 4 && (
                                      <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                                        +{cert.courses.length - 4} more
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col gap-2 ml-4">
                              {index === 0 && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent text-xs"
                                  onClick={() =>
                                    window.open(
                                      "https://drive.google.com/file/d/1NWn0q6Qetyv3p26kHG2gkmsQ_m_je6ZM/view?usp=drivesdk",
                                      "_blank",
                                    )
                                  }
                                >
                                  <Award className="h-3 w-3 mr-1" />
                                  View Certificate
                                </Button>
                              )}
                              {cert.verify && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-emerald-600 text-emerald-400 hover:bg-emerald-700 bg-transparent text-xs"
                                  onClick={() => window.open(cert.verify, "_blank")}
                                >
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  Verify Online
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" delay={300}>
              <div className="flex justify-center">
                <RotatingCard />
              </div>
            </ScrollReveal>
          </div>

          {/* Technical Skills */}
          <ScrollReveal direction="up" delay={1000}>
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center">Technical Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <ScrollReveal key={category} direction="up" delay={index * 100}>
                    <Card className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover-lift">
                      <CardHeader>
                        <CardTitle className="text-lg text-emerald-400 flex items-center gap-2">
                          <Code className="h-5 w-5" />
                          {category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-slate-700 text-slate-300 border-slate-600 hover:text-emerald-400 transition-colors duration-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-200 font-mono">
                <span className="text-emerald-400">02.</span> Professional Experience
              </h2>
              <div className="ml-8 h-px bg-slate-600 flex-1"></div>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-200">
                          {exp.role} <span className="text-emerald-400">@ {exp.company}</span>
                        </h3>
                        <p className="text-slate-400 font-mono text-sm">{exp.duration}</p>
                      </div>
                      <div className="text-slate-400 text-sm mt-2 md:mt-0 flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <ScrollReveal key={i} direction="left" delay={i * 100}>
                          <li className="text-slate-400 flex items-start">
                            <span className="text-emerald-400 mr-3 mt-2">▹</span>
                            <span>{item}</span>
                          </li>
                        </ScrollReveal>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <ScrollReveal key={tech} direction="up" delay={i * 50}>
                          <Badge
                            variant="secondary"
                            className="bg-slate-700 text-emerald-400 border-slate-600 hover:bg-emerald-400/10 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        </ScrollReveal>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-700">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                        onClick={() =>
                          window.open(
                            exp.company === "BEEZ Innovation Labs Pvt. Ltd."
                              ? "https://drive.google.com/file/d/10LoWOed0udbZeugolVDBS2mN6p1dtk38/view?usp=drivesdk"
                              : "https://drive.google.com/file/d/1u-_-je7DEuLene8hJef1DuFUtBS7pVCA/view?usp=drivesdk",
                            "_blank",
                          )
                        }
                      >
                        <Award className="h-4 w-4 mr-2" />
                        View Internship Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-200 font-mono">
                <span className="text-emerald-400">03.</span> Featured Projects
              </h2>
              <div className="ml-8 h-px bg-slate-600 flex-1"></div>
            </div>
          </ScrollReveal>

          <div className="space-y-24">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
                  <div className={`grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className={`md:col-span-7 ${index % 2 === 1 ? "md:col-start-6" : ""}`}>
                      <div className="relative group">
                        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover-lift">
                          <div className="absolute inset-0 bg-emerald-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative">
                            <div className="flex items-center gap-2 mb-2">
                              <p className="text-emerald-400 font-mono text-sm">Featured Project</p>
                              <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                                {project.date}
                              </Badge>
                            </div>
                            <h3 className="text-2xl font-semibold text-slate-200 mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`md:col-span-5 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                      <div className="space-y-4">
                        <div
                          className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-start" : "md:justify-end"}`}
                        >
                          {project.tech.map((tech, i) => (
                            <ScrollReveal key={tech} direction="up" delay={i * 50}>
                              <Badge
                                variant="secondary"
                                className="bg-slate-700 text-emerald-400 border-slate-600 font-mono text-xs hover:bg-emerald-400/10 transition-colors duration-300"
                              >
                                {tech}
                              </Badge>
                            </ScrollReveal>
                          ))}
                        </div>

                        <div className={`flex space-x-4 ${index % 2 === 1 ? "md:justify-start" : "md:justify-end"}`}>
                          {project.github && (
                            <a
                              href={project.github}
                              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                        {project.note && (
                          <div className={`mt-2 ${index % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                            <Badge variant="outline" className="text-xs border-yellow-600 text-yellow-400">
                              {project.note}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
          </div>

          {/* Other Projects */}
          <ScrollReveal direction="up" delay={400}>
            <div className="mt-24">
              <h3 className="text-2xl font-semibold text-slate-200 mb-8 text-center">Other Notable Projects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => !p.featured)
                  .map((project, index) => (
                    <ScrollReveal key={index} direction="up" delay={index * 100}>
                      <Card className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 hover:-translate-y-2 transition-all duration-300 group hover-lift h-full">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex justify-between items-start mb-4">
                            <div className="text-emerald-400">
                              <Code className="h-8 w-8" />
                            </div>
                            <div className="flex space-x-2">
                              {project.github && (
                                <a
                                  href={project.github}
                                  className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github className="h-5 w-5" />
                                </a>
                              )}
                              {project.demo && (
                                <a
                                  href={project.demo}
                                  className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ArrowUpRight className="h-5 w-5" />
                                </a>
                              )}
                              {project.certificate && (
                                <a
                                  href={project.certificate}
                                  className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Award className="h-5 w-5" />
                                </a>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            <h4 className="text-xl font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors duration-300">
                              {project.title}
                            </h4>
                            <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                              {project.date}
                            </Badge>
                          </div>

                          <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.slice(0, 3).map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-slate-700 text-slate-300 border-slate-600 font-mono text-xs hover:text-emerald-400 transition-colors duration-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-200 font-mono">
                <span className="text-emerald-400">04.</span> Research & Innovation
              </h2>
              <div className="ml-8 h-px bg-slate-600 flex-1"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <Card className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-emerald-400">
                    Zero-Knowledge Proofs for Identity Verification in Cloud Applications
                  </CardTitle>
                  <Badge variant="outline" className="border-emerald-400 text-emerald-400">
                    2025 (Present)
                  </Badge>
                </div>
                <p className="text-slate-400">
                  <strong>Authors:</strong> Nivethan Raaj T, Vishwakanth G, and Sanjana
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-400 leading-relaxed">
                    Research in progress on privacy-preserving identity verification using Zero-Knowledge Proofs (ZKPs)
                    in cloud-based systems. We are developing a method to help users prove something is true without
                    revealing the actual data. This helps keep information private while still being trustworthy.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-slate-700 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4 text-emerald-400" />
                        Research Objectives
                      </h4>
                      <ul className="text-sm text-slate-400 space-y-1">
                        <li>• Privacy-preserving authentication</li>
                        <li>• Scalable cloud integration</li>
                        <li>• Zero-knowledge verification</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-slate-700 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-emerald-400" />
                        Key Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {["Cryptography", "ZKPs", "Blockchain", "Cloud Security"].map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs bg-slate-600 text-slate-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className="mt-8">
              <Card className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover-lift">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-4">Research Overview & Demo</h4>
                  <p className="text-slate-400 mb-4">
                    Explore our comprehensive research overview and interactive demonstrations
                  </p>
                  <Button
                    variant="outline"
                    className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 bg-transparent"
                    onClick={() => window.open("https://v0-aws-authentication-example.vercel.app/", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Research Overview
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          {/* Hackathon Projects */}
          <ScrollReveal direction="up" delay={400}>
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-slate-200 mb-6">Hackathon & Innovation Projects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-400">
                      Multilingual Subtitle Generation in Tamil
                    </CardTitle>
                    <p className="text-sm text-slate-400">Hackathon on Tamil Computing, VIT Vellore • Dec 19, 2022</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-sm mb-4">
                      Developed a system for generating Tamil subtitles from provided video scripts in any language
                      using the Google Translate API. Utilized the Flask framework for integration and deployment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Flask", "Google Translate API", "Tamil NLP"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-400">Real-Time Image Recognition System</CardTitle>
                    <p className="text-sm text-slate-400">Computer Vision Project</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-sm mb-4">
                      Developed a system for real-time image and video recognition to identify objects using OpenCV.
                      Implemented functionality for live analysis and classification of visual data from photos and
                      videos.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "OpenCV", "Computer Vision", "Real-time Processing"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-200 font-mono">
                <span className="text-emerald-400">05.</span> Achievements & Interests
              </h2>
              <div className="ml-8 h-px bg-slate-600 flex-1"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`${achievement.color} flex-shrink-0`}>{achievement.icon}</div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-slate-200">{achievement.title}</h4>
                          <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                            {achievement.category}
                          </Badge>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Languages & Interests */}
          <ScrollReveal direction="up" delay={600}>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-emerald-400">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Tamil</span>
                      <Badge variant="secondary" className="bg-emerald-400/10 text-emerald-400">
                        Native
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">English</span>
                      <Badge variant="secondary" className="bg-blue-400/10 text-blue-400">
                        Proficient
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-emerald-400">Interests & Hobbies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Athletics", "Badminton", "Music", "Swimming", "Technology", "Open Source"].map((interest) => (
                      <Badge
                        key={interest}
                        variant="secondary"
                        className="bg-slate-700 text-slate-300 border-slate-600 hover:text-emerald-400 transition-colors duration-300"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-200 font-mono">
                <span className="text-emerald-400">06.</span> Get In Touch
              </h2>
              <div className="ml-8 h-px bg-slate-600 flex-1"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-slate-200 mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                I'm currently seeking software engineering opportunities and exciting projects to work on. Whether you
                have a job opportunity, want to collaborate on a project, or just want to connect, I'd love to hear from
                you!
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <InnovativeContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <ScrollReveal direction="up">
        <footer className="py-8 px-4 text-center border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <p className="text-slate-400 font-mono text-sm mb-4">Built with Next.js, TypeScript & Tailwind CSS.</p>
            <p className="text-slate-500 text-xs">© 2024 Nivethan Raaj T. All rights reserved.</p>
          </div>
        </footer>
      </ScrollReveal>
    </div>
  )
}
