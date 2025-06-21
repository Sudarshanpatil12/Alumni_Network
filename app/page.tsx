"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, Users, Calendar, ChevronRight, GraduationCap, Building, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { sampleAlumni } from "@/lib/sample-data"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeDept, setActiveDept] = useState("csbs")

  // Updated Department data with modern specialized departments
  const departmentList = [
    {
      id: "csbs",
      name: "CSBS",
      fullName: "Computer Science & Business Systems",
      description: "Integrating computer science with business systems for industry-ready professionals",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      facultyCount: 16,
    },
    {
      id: "aiml",
      name: "AIML",
      fullName: "Artificial Intelligence & Machine Learning",
      description: "Pioneering the future of intelligent systems and automated decision-making",
      image:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      facultyCount: 14,
    },
    {
      id: "cse-ds",
      name: "CSE-DS",
      fullName: "Computer Science Engineering - Data Science",
      description: "Harnessing the power of data to drive insights and innovation",
      image:
        "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      facultyCount: 15,
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      fullName: "Cybersecurity Engineering",
      description: "Protecting digital assets and infrastructure in an increasingly connected world",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      facultyCount: 12,
    },
    {
      id: "iota",
      name: "IoTA",
      fullName: "Internet of Things & Applications",
      description: "Building the connected ecosystem of smart devices and applications",
      image:
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      facultyCount: 13,
    },
  ]

  // Sample campus images - removed the last slide (RGPV Main Building)
  const slides = [
    {
      id: 1,
      title: "Our Beautiful Campus",
      subtitle: "Where learning meets innovation",
      image: "/images/rgpv2.png",
    },
    {
      id: 2,
      title: "School of Information Technology",
      subtitle: "Shaping the engineers of tomorrow",
      image: "/images/soit.png",
    },
    {
      id: 3,
      title: "Welcome to SOIT RGPV, Bhopal",
      subtitle: "Empowering Minds. Building Futures.",
      image: "/images/rgpv1.png",
    },
  ]

  // Notices
  const notices = [
    { id: 1, text: "Alumni Meet 2025 registrations now open!", link: "/events" },
    { id: 2, text: "New job opportunities for SOIT graduates", link: "/opportunities" },
    { id: 3, text: "SOIT Annual Reunion: 15th June 2025", link: "/events" },
  ]

  // Featured alumni data using sample alumni data
  const alumniData = sampleAlumni.slice(0, 3)

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="home-root">
      {/* Hero Banner with Slider */}
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gray-900/40 z-10"></div>
            <div className="relative h-full w-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
              <div className="container px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">{slide.subtitle}</p>
                <div className="flex justify-center">
                  <Button asChild size="lg" className="bg-[#0a4a7a] hover:bg-[#082e4d] text-white">
                    <Link href="/alumni" className="flex items-center">
                      <Users className="mr-2" size={18} />
                      Visit Alumni Portal
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider indicators */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Notices/News Section */}
      <section className="bg-[#0a4a7a]/5 dark:bg-[#0a4a7a]/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center text-[#0a4a7a] dark:text-[#082e4d]">
              <Calendar className="inline mr-2" size={20} />
              Notices & News
            </h2>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {notices.map((notice) => (
                <li key={notice.id} className="notice-item">
                  <Link
                    href={notice.link}
                    className="flex items-center text-[#0a4a7a] dark:text-[#082e4d] hover:text-[#082e4d] dark:hover:text-[#0a4a7a] transition-colors"
                  >
                    <ChevronRight className="inline mr-1" size={16} />
                    {notice.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Departments Slider */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <BookOpen className="inline mr-2" size={24} />
              Our Departments
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our specialized departments offering cutting-edge programs in emerging technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departmentList.map((dept) => (
              <button
                key={dept.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeDept === dept.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveDept(dept.id)}
              >
                {dept.name}
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800">
            {departmentList.map((dept) => (
              <div
                key={dept.id}
                className={`transition-opacity duration-300 ${
                  activeDept === dept.id ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src={dept.image || "/placeholder.svg"}
                      alt={`${dept.name} Department`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3">{dept.fullName}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{dept.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-gray-500 dark:text-gray-400">
                        <Users className="inline mr-1" size={16} />
                        {dept.facultyCount} Faculty Members
                      </span>
                      <Link
                        href={`/departments/${dept.id}`}
                        className="flex items-center text-blue-600 hover:text-[#082e4d] dark:hover:text-[#0a4a7a]"
                      >
                        Learn More <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-[#0a4a7a] dark:text-blue-400">Alumni Statistics</h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Our alumni network spans across the globe, making significant impacts in various industries
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
              <GraduationCap className="mx-auto mb-4 h-10 w-10 text-[#0a4a7a] dark:text-blue-400" />
              <div className="text-3xl font-bold text-[#0a4a7a] dark:text-blue-400">2,500+</div>
              <div className="mt-2 text-gray-600 dark:text-gray-300">Alumni Worldwide</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
              <Building className="mx-auto mb-4 h-10 w-10 text-[#0a4a7a] dark:text-blue-400" />
              <div className="text-3xl font-bold text-[#0a4a7a] dark:text-blue-400">150+</div>
              <div className="mt-2 text-gray-600 dark:text-gray-300">Partner Companies</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
              <MapPin className="mx-auto mb-4 h-10 w-10 text-[#0a4a7a] dark:text-blue-400" />
              <div className="text-3xl font-bold text-[#0a4a7a] dark:text-blue-400">35+</div>
              <div className="mt-2 text-gray-600 dark:text-gray-300">Countries</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
              <BookOpen className="mx-auto mb-4 h-10 w-10 text-[#0a4a7a] dark:text-blue-400" />
              <div className="text-3xl font-bold text-[#0a4a7a] dark:text-blue-400">95%</div>
              <div className="mt-2 text-gray-600 dark:text-gray-300">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#0a4a7a] dark:text-blue-400">Featured Alumni</h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Meet some of our distinguished alumni who are making significant contributions in their fields.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {alumniData.slice(0, 3).map((alumni) => (
              <div
                key={alumni.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-700"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                      <img
                        src={alumni.profileImage || "/placeholder.svg"}
                        alt={alumni.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0a4a7a] dark:text-blue-400">{alumni.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {alumni.jobTitle} at {alumni.company}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{alumni.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/alumni"
              className="inline-flex items-center rounded-md bg-[#0a4a7a] px-6 py-3 font-medium text-white transition hover:bg-[#082e4d]"
            >
              View All Alumni
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a4a7a] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-6 text-3xl font-bold">Join Our Alumni Network</h2>
            <p className="mb-8 text-lg text-white/90">
              Connect with fellow graduates, access exclusive resources, and stay updated with the latest developments
              at the School of Information Technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/add-alumni"
                className="rounded-md bg-[#e67e22] px-6 py-3 font-medium text-white shadow-md transition hover:bg-[#d35400]"
              >
                Sign Up Now
              </Link>
              <Link
                href="/admin/login"
                className="rounded-md border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">What Our Alumni Say</h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  )
}
