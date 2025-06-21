import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const legacyLinkEvent = {
  id: 1,
  title: "Legacy Link: Alumni Networking Summit",
  date: "November 20-22, 2025",
  time: "9:00 AM - 6:00 PM Daily",
  location: "UIT RGPV Campus & Virtual Hybrid Event",
  description: `
    Legacy Link is our flagship alumni networking event that bridges generations of UIT RGPV graduates. 
    This three-day summit brings together alumni from across decades to share experiences, mentor current students, 
    and strengthen professional networks within our community.
    
    Day 1 will focus on keynote speeches from distinguished alumni who have made significant impacts in their fields. 
    Day 2 features interactive workshops and panel discussions on emerging technologies and career development. 
    The final day includes campus tours, department-specific gatherings, and the annual alumni awards ceremony.
    
    Special this year is our "Decade Connections" program matching alumni from different generations in similar fields, 
    creating unique mentorship opportunities. Whether you graduated in 1985 or 2025, Legacy Link offers valuable 
    connections and insights to help you grow professionally while giving back to your alma mater.
  `,
  image: "images/legecy.png" ,
  category: "Flagship Event",
  registrationOpen: true,
}

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 dark:text-blue-400">Alumni Events</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our premier annual event connecting generations of UIT RGPV alumni
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image 
              src={legacyLinkEvent.image || "/placeholder.svg"} 
              alt={legacyLinkEvent.title} 
              fill 
              className="object-cover" 
            />
            <Badge className="absolute top-3 right-3 bg-blue-600">{legacyLinkEvent.category}</Badge>
          </div>
          <CardContent className="p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{legacyLinkEvent.title}</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm md:text-base">
                <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                <span className="font-medium">{legacyLinkEvent.date}</span>
              </div>
              <div className="flex items-center text-sm md:text-base">
                <Clock className="mr-2 h-5 w-5 text-blue-600" />
                <span className="font-medium">{legacyLinkEvent.time}</span>
              </div>
              <div className="flex items-center text-sm md:text-base">
                <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                <span className="font-medium">{legacyLinkEvent.location}</span>
              </div>
            </div>
            
            <div className="prose max-w-none mb-8">
              {legacyLinkEvent.description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Why Attend Legacy Link?</h3>
              <ul className="space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Reconnect with classmates and meet alumni from other batches</li>
                <li>Gain insights from successful alumni across different industries</li>
                <li>Discover career opportunities through our alumni network</li>
                <li>Participate in exclusive workshops and skill-building sessions</li>
                <li>Contribute to current student mentorship programs</li>
              </ul>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                disabled={!legacyLinkEvent.registrationOpen}
              >
                {legacyLinkEvent.registrationOpen ? "Register Now" : "Registration Coming Soon"}
              </Button>
              
              <div className="flex gap-4 w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Download Event Schedule
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Speakers
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Questions About Legacy Link?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Our alumni relations team is happy to answer any questions about the event, registration, 
          or special accommodations you might need.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Event Coordinators</Link>
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Event Updates</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>November 20-22: Legacy Link Summit</span>
                </li>
                <li className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>Registration Opens: June 1, 2025</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>UIT RGPV Campus & Virtual</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/events" className="hover:text-blue-300 transition-colors">
                    All Events
                  </Link>
                </li>
                <li>
                  <Link href="/alumni" className="hover:text-blue-300 transition-colors">
                    Alumni Portal
                  </Link>
                </li>
                <li>
                  <Link href="/opportunities" className="hover:text-blue-300 transition-colors">
                    Career Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-300 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                    <Link href="https://facebook.com/uit.rgpv" target="_blank">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                    <Link href="https://twitter.com/uit.rgpv" target="_blank">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Link href="https://linkedin.com/company/uit.rgpv" target="_blank">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Stay connected with UIT RGPV Alumni Network
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} UIT RGPV Alumni Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}