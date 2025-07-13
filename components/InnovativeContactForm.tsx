"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  User,
  MessageSquare,
  Calendar,
  Star,
  Zap,
  Heart,
  Coffee,
  Code2,
  Sparkles,
} from "lucide-react"

export function InnovativeContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    meetingType: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState("")
  const [messageLength, setMessageLength] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission with animation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Create enhanced mailto link
    const mailtoLink = `mailto:nivethanraajt@gmail.com?subject=${encodeURIComponent(
      `${formData.meetingType ? `[${formData.meetingType}] ` : ""}${formData.subject}`,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMeeting Type: ${formData.meetingType}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}\n\n---\nSent from Nivethan's Portfolio Contact Form`,
    )}`

    window.open(mailtoLink, "_blank")
    setIsSubmitting(false)

    // Reset form with animation
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      meetingType: "",
      timeline: "",
    })
    setMessageLength(0)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (name === "message") {
      setMessageLength(value.length)
    }
  }

  const quickActions = [
    { icon: <Coffee className="h-4 w-4" />, text: "Coffee Chat", value: "Coffee Chat" },
    { icon: <Code2 className="h-4 w-4" />, text: "Project Collab", value: "Collaboration" },
    { icon: <Star className="h-4 w-4" />, text: "Job Opportunity", value: "Job Opportunity" },
    { icon: <Zap className="h-4 w-4" />, text: "Freelance Work", value: "Freelance Project" },
  ]

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Enhanced Contact Information */}
      <div className="lg:col-span-1 space-y-6">
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden">
          <CardHeader className="relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardTitle className="text-emerald-400 flex items-center gap-2 relative z-10">
              <Sparkles className="h-5 w-5" />
              Let's Connect!
            </CardTitle>
            <p className="text-slate-400 relative z-10">Ready to create something amazing together?</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="group flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-600/50 transition-all duration-300 hover:scale-105">
              <div className="p-2 bg-emerald-400/20 rounded-lg group-hover:bg-emerald-400/30 transition-colors">
                <Mail className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="font-medium text-slate-200">Email</p>
                <a
                  href="mailto:nivethanraajt@gmail.com"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  nivethanraajt@gmail.com
                </a>
              </div>
            </div>

            <div className="group flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-600/50 transition-all duration-300 hover:scale-105">
              <div className="p-2 bg-blue-400/20 rounded-lg group-hover:bg-blue-400/30 transition-colors">
                <Phone className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-slate-200">Phone</p>
                <a href="tel:+917708409636" className="text-slate-400 hover:text-blue-400 transition-colors">
                  +91 7708409636
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-3 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-600/50 transition-all duration-300 hover:scale-105">
              <div className="p-2 bg-purple-400/20 rounded-lg group-hover:bg-purple-400/30 transition-colors">
                <MapPin className="h-5 w-5 text-purple-400 mt-1" />
              </div>
              <div>
                <p className="font-medium text-slate-200">Location</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Madurai, Tamil Nadu, India
                  <br />
                  <a
                    href="https://maps.app.goo.gl/ze3888Lc1b21WJCv9?g_st=ipc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline text-xs"
                  >
                    📍 View on Google Maps
                  </a>
                  <br />
                  <span className="text-xs opacity-75">Available for remote work globally</span>
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://linkedin.com/in/nivethan-raaj-t"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-all duration-300 hover:scale-105 text-blue-400 hover:text-blue-300"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/nivethan-raaj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-600/20 hover:bg-slate-600/30 rounded-lg transition-all duration-300 hover:scale-105 text-slate-300 hover:text-white"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats with Animation */}
        <Card className="bg-gradient-to-r from-emerald-600/10 to-blue-600/10 border-emerald-400/30">
          <CardHeader>
            <CardTitle className="text-emerald-400 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Quick Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "9.09", label: "CGPA", icon: "🎓" },
                { value: "2026", label: "Graduating", icon: "📅" },
                { value: "15+", label: "Projects", icon: "💻" },
                { value: "2", label: "Internships", icon: "🏢" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Contact Form */}
      <div className="lg:col-span-2">
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden">
          <CardHeader className="relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full -translate-y-20 translate-x-20"></div>
            <CardTitle className="text-emerald-400 flex items-center gap-2 relative z-10">
              <MessageSquare className="h-5 w-5" />
              Let's Start a Conversation
            </CardTitle>
            <p className="text-slate-400 relative z-10">
              Whether it's a groundbreaking project, career opportunity, or just a friendly chat about tech - I'm all
              ears! ✨
            </p>
          </CardHeader>
          <CardContent className="relative z-10">
            {/* Quick Action Buttons */}
            <div className="mb-6">
              <p className="text-sm font-medium text-slate-300 mb-3">Quick Actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className={`border-slate-600 text-slate-300 hover:bg-emerald-400/10 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 ${
                      formData.meetingType === action.value
                        ? "bg-emerald-400/10 border-emerald-400 text-emerald-400"
                        : ""
                    }`}
                    onClick={() => setFormData((prev) => ({ ...prev, meetingType: action.value }))}
                  >
                    {action.icon}
                    <span className="ml-2">{action.text}</span>
                  </Button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
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
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 ${
                      focusedField === "name" ? "border-emerald-400 bg-slate-700" : "border-slate-600"
                    }`}
                    placeholder="Your awesome name"
                  />
                </div>

                <div className="relative">
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
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 ${
                      focusedField === "email" ? "border-emerald-400 bg-slate-700" : "border-slate-600"
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField("")}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 ${
                      focusedField === "company" ? "border-emerald-400 bg-slate-700" : "border-slate-600"
                    }`}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-slate-300 mb-2">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within a week">Within a week</option>
                    <option value="Within a month">Within a month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none transition-all duration-300 ${
                    focusedField === "message" ? "border-emerald-400 bg-slate-700" : "border-slate-600"
                  }`}
                  placeholder="Tell me about your project, idea, or just say hello! I'd love to hear from you... 🚀"
                />
                <div className="absolute bottom-3 right-3 text-xs text-slate-500">{messageLength}/1000</div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-400/25"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending your message...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-3" />
                    Send Message
                    <Heart className="h-4 w-4 ml-2 text-pink-300" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-700 text-center">
              <p className="text-sm text-slate-400">
                Prefer direct contact? Drop me an email at{" "}
                <a href="mailto:nivethanraajt@gmail.com" className="text-emerald-400 hover:underline font-medium">
                  nivethanraajt@gmail.com
                </a>
              </p>
              <p className="text-xs text-slate-500 mt-2">I typically respond within 24 hours ⚡</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
