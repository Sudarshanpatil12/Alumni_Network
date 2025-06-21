import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

// Sample gallery data
const campusPhotos = [
  {
    id: 1,
    title: "Main Building",
    description: "The iconic main building of UIT RGPV",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023",
  },
  {
    id: 2,
    title: "Central Library",
    description: "The knowledge hub of our campus",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023",
  },
  {
    id: 3,
    title: "Computer Science Block",
    description: "Home to future tech innovators",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023",
  },
  {
    id: 4,
    title: "Sports Complex",
    description: "Where champions are made",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023",
  },
  {
    id: 5,
    title: "Auditorium",
    description: "Venue for major events and functions",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023",
  },
  {
    id: 6,
    title: "Cafeteria",
    description: "The social hub of campus life",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023",
  },
]

const eventPhotos = [
  {
    id: 7,
    title: "Alumni Meet 2024",
    description: "Reunion of graduates from various batches",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 2024",
  },
  {
    id: 8,
    title: "Tech Fest 2023",
    description: "Annual technical festival",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 2023",
  },
  {
    id: 9,
    title: "Convocation Ceremony",
    description: "Graduation day celebrations",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 2023",
  },
  {
    id: 10,
    title: "Cultural Night",
    description: "Performances by talented students",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 2023",
  },
  {
    id: 11,
    title: "Industry Visit",
    description: "Students visiting tech companies",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 2023",
  },
  {
    id: 12,
    title: "Sports Day",
    description: "Annual athletic competitions",
    image: "/placeholder.svg?height=400&width=600",
    date: "August 2023",
  },
]

const batchPhotos = [
  {
    id: 13,
    title: "Batch of 2020",
    description: "Graduation day group photo",
    image: "/placeholder.svg?height=400&width=600",
    date: "2020",
  },
  {
    id: 14,
    title: "Batch of 2019",
    description: "Final year project exhibition",
    image: "/placeholder.svg?height=400&width=600",
    date: "2019",
  },
  {
    id: 15,
    title: "Batch of 2018",
    description: "Farewell party",
    image: "/placeholder.svg?height=400&width=600",
    date: "2018",
  },
  {
    id: 16,
    title: "Batch of 2017",
    description: "Industrial visit to Microsoft",
    image: "/placeholder.svg?height=400&width=600",
    date: "2017",
  },
  {
    id: 17,
    title: "Batch of 2016",
    description: "Department day celebrations",
    image: "/placeholder.svg?height=400&width=600",
    date: "2016",
  },
  {
    id: 18,
    title: "Batch of 2015",
    description: "10-year reunion",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025",
  },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 dark:text-blue-400">Photo Gallery</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Browse through memories from campus life, alumni events, and batch photographs.
        </p>
      </div>

      <Tabs defaultValue="campus" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="campus">Campus</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="batches">Batch Photos</TabsTrigger>
        </TabsList>

        <TabsContent value="campus">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusPhotos.map((photo) => (
              <GalleryItem key={photo.id} photo={photo} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventPhotos.map((photo) => (
              <GalleryItem key={photo.id} photo={photo} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="batches">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {batchPhotos.map((photo) => (
              <GalleryItem key={photo.id} photo={photo} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="mx-2">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Button variant="outline" className="mx-2">
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Have photos to share?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          If you have photos from your time at UIT RGPV or from alumni events, we'd love to add them to our gallery.
          Please submit them using the form below.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Submit Photos
        </Button>
      </div>
    </div>
  )
}

interface GalleryItemProps {
  photo: {
    id: number
    title: string
    description: string
    image: string
    date: string
  }
}

function GalleryItem({ photo }: GalleryItemProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={photo.image || "/placeholder.svg"}
          alt={photo.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white">
            <h3 className="font-bold">{photo.title}</h3>
            <p className="text-sm">{photo.description}</p>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{photo.title}</h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{photo.date}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
