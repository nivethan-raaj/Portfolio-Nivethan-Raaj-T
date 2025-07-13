"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, Send, User, MessageSquare, Calendar } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    meetingType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Create mailto link with form data
    const mailtoLink = `mailto:nivethanraajt@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMeeting Type: ${formData.meetingType}\n\nMessage:\n${formData.message}`,
    )}`

    window.open(mailtoLink, "_blank")
    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      meetingType: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Contact Information */}
      <div className="space-y-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-emerald-400 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
              <Mail className="h-5 w-5 text-emerald-400" />
              <div>
                <p className="font-medium text-slate-200">Email</p>
                <a href="mailto:nivethanraajt@gmail.com" className="text-slate-400 hover:text-emerald-400">
                  nivethanraajt@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
              <Phone className="h-5 w-5 text-emerald-400" />
              <div>
                <p className="font-medium text-slate-200">Phone</p>
                <a href="tel:+917708409636" className="text-slate-400 hover:text-emerald-400">
                  +91 7708409636
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
              <MapPin className="h-5 w-5 text-emerald-400 mt-1" />
              <div>
                <p className="font-medium text-slate-200">Address</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  405, Tirumalai Colony, 5th St
                  <br />
                  P.P. Chavadi, Madurai
                  <br />
                  Tamil Nadu, India - 625016
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
              <Linkedin className="h-5 w-5 text-emerald-400" />
              <div>
                <p className="font-medium text-slate-200">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/nivethan-raaj-t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400"
                >
                  linkedin.com/in/nivethan-raaj-t
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
              <Github className="h-5 w-5 text-emerald-400" />
              <div>
                <p className="font-medium text-slate-200">GitHub</p>
                <a
                  href="https://github.com/nivethan-raaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400"
                >
                  github.com/nivethan-raaj
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-emerald-400">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-emerald-400">9.09</div>
                <div className="text-sm text-slate-400">CGPA</div>
              </div>
              <div className="text-center p-3 bg-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-emerald-400">2026</div>
                <div className="text-sm text-slate-400">Graduating</div>
              </div>
              <div className="text-center p-3 bg-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-emerald-400">10+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="text-center p-3 bg-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-emerald-400">2</div>
                <div className="text-sm text-slate-400">Internships</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-emerald-400 flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Get In Touch
          </CardTitle>
          <p className="text-slate-400">
            Let's discuss opportunities, collaborations, or just have a chat about technology!
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  <User className="h-4 w-4 inline mr-1" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  <Mail className="h-4 w-4 inline mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="meetingType" className="block text-sm font-medium text-slate-300 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Meeting Type
              </label>
              <select
                id="meetingType"
                name="meetingType"
                value={formData.meetingType}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              >
                <option value="">Select meeting type</option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Internship">Internship</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Freelance Project">Freelance Project</option>
                <option value="Mentorship">Mentorship</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                placeholder="Brief subject line"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none"
                placeholder="Tell me about your project, opportunity, or just say hello!"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-sm text-slate-400 text-center">
              Prefer direct contact? Email me at{" "}
              <a href="mailto:nivethanraajt@gmail.com" className="text-emerald-400 hover:underline">
                nivethanraajt@gmail.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
