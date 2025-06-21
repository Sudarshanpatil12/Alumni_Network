"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, you would make an API call here
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 dark:text-blue-400">Contact Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Fill out the form below or reach out to us directly.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-6 pb-2 border-b-2 border-orange-500 inline-block">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-orange-500 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-blue-800 dark:text-blue-400 mb-1">Our Location</div>
                  <div className="text-gray-600 dark:text-gray-300">
                    123 University Avenue, Bhopal, MP 462026, India
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-orange-500 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-blue-800 dark:text-blue-400 mb-1">Email Us</div>
                  <div className="text-gray-600 dark:text-gray-300">alumni@rgpv.ac.in</div>
                  <div className="text-gray-600 dark:text-gray-300">info@rgpv.ac.in</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-orange-500 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-blue-800 dark:text-blue-400 mb-1">Call Us</div>
                  <div className="text-gray-600 dark:text-gray-300">+91 12345 67890</div>
                  <div className="text-gray-600 dark:text-gray-300">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-orange-500 mr-4">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-blue-800 dark:text-blue-400 mb-1">Working Hours</div>
                  <div className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</div>
                  <div className="text-gray-600 dark:text-gray-300">Saturday: 10:00 AM - 2:00 PM</div>
                  <div className="text-gray-600 dark:text-gray-300">Sunday: Closed</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 dark:text-blue-400 hover:text-orange-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 dark:text-blue-400 hover:text-orange-500 transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 dark:text-blue-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 dark:text-blue-400 hover:text-orange-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="contact-form">
          {submitStatus === "success" && (
            <Alert className="mb-6 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800">
              <CheckCircle className="h-4 w-4 mr-2" />
              <AlertDescription>Thank you for your message! We'll get back to you soon.</AlertDescription>
            </Alert>
          )}

          {submitStatus === "error" && (
            <Alert className="mb-6 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800">
              <AlertCircle className="h-4 w-4 mr-2" />
              <AlertDescription>Oops! Something went wrong. Please try again later.</AlertDescription>
            </Alert>
          )}

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-red-500" : ""}
                    required
                  />
                  {errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-500" : ""}
                    required
                  />
                  {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "border-red-500" : ""}
                    required
                  />
                  {errors.subject && <span className="text-red-500 text-sm mt-1 block">{errors.subject}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                    required
                  />
                  {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>}
                </div>

                <Button type="submit" className="bg-blue-800 hover:bg-blue-700 text-white" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800 dark:text-blue-400">Find Us</h2>
        <div className="rounded-lg overflow-hidden h-[400px] shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2033523597367!2d77.35827561541394!3d23.2467975846839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x211c79a7437188af!2sRajiv%20Gandhi%20Proudyogiki%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1621345678901!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="UIT RGPV Location"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
