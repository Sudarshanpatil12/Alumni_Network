"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import { sampleAlumni } from "@/lib/sample-data"

// Sample testimonials data
const testimonials = sampleAlumni.map((alumni) => ({
  id: alumni.id,
  name: alumni.name,
  role: `${alumni.jobTitle} at ${alumni.company}`,
  batch: alumni.graduationYear.toString(),
  image: alumni.profileImage,
  quote: alumni.bio
}))

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div className="relative max-w-4xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Card className="bg-white dark:bg-gray-700 shadow-lg">
        <CardContent className="p-8">
          <div className="absolute top-6 left-8 text-[#0a4a7a] dark:text-[#082e4d]">
            <Quote size={40} />
          </div>

          <div className="pt-8">
            <blockquote className="text-lg text-gray-700 dark:text-gray-200 italic text-center mb-8 px-4">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="flex items-center justify-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">Batch of {testimonials[currentIndex].batch}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 p-0 rounded-full ${
              currentIndex === index ? "bg-[#0a4a7a] text-[#0a4a7a]" : "bg-gray-300 dark:bg-gray-600 text-transparent"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          >
            <span className="sr-only">{index + 1}</span>
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
