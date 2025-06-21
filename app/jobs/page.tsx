import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Building, MapPin, Calendar, Search, Filter, ChevronRight } from "lucide-react"

// Sample jobs data
const jobListings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Microsoft",
    location: "Bangalore, India",
    type: "Full-time",
    category: "Engineering",
    postedDate: "2 days ago",
    deadline: "July 15, 2025",
    salary: "₹25-35 LPA",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    description:
      "We are looking for a Senior Software Engineer to join our team in Bangalore. The ideal candidate will have experience with React, Node.js, and AWS.",
    postedBy: "Rahul Sharma (Batch of 2015)",
    featured: true,
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Amazon",
    location: "Hyderabad, India",
    type: "Full-time",
    category: "Data Science",
    postedDate: "1 week ago",
    deadline: "July 30, 2025",
    salary: "₹20-30 LPA",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    description:
      "Amazon is seeking a Data Scientist to work on machine learning models for product recommendations. Strong background in ML and statistics required.",
    postedBy: "Priya Patel (Batch of 2017)",
    featured: true,
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Flipkart",
    location: "Bangalore, India",
    type: "Full-time",
    category: "Product",
    postedDate: "2 weeks ago",
    deadline: "August 5, 2025",
    salary: "₹18-28 LPA",
    skills: ["Product Management", "Agile", "UX", "Analytics"],
    description:
      "Flipkart is looking for a Product Manager to lead the development of new e-commerce features. Experience in product management and e-commerce preferred.",
    postedBy: "Amit Kumar (Batch of 2014)",
    featured: false,
  },
  {
    id: 4,
    title: "Frontend Developer Intern",
    company: "Infosys",
    location: "Pune, India",
    type: "Internship",
    category: "Engineering",
    postedDate: "3 days ago",
    deadline: "June 30, 2025",
    salary: "₹25,000-35,000 per month",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "6-month internship opportunity for recent graduates to work on frontend development projects. Possibility of full-time conversion based on performance.",
    postedBy: "Neha Gupta (Batch of 2019)",
    featured: false,
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Wipro",
    location: "Bangalore, India",
    type: "Full-time",
    category: "Engineering",
    postedDate: "5 days ago",
    deadline: "July 25, 2025",
    salary: "₹15-25 LPA",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    description:
      "Wipro is seeking a DevOps Engineer to help automate and optimize our deployment pipelines. Experience with containerization and cloud platforms required.",
    postedBy: "Vikram Singh (Batch of 2016)",
    featured: false,
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "TCS",
    location: "Mumbai, India",
    type: "Full-time",
    category: "Design",
    postedDate: "1 week ago",
    deadline: "August 10, 2025",
    salary: "₹12-20 LPA",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    description:
      "TCS is looking for a UI/UX Designer to create intuitive and engaging user experiences for our digital products. Portfolio of previous work required.",
    postedBy: "Ananya Desai (Batch of 2018)",
    featured: false,
  },
]

// Job categories for filtering
const jobCategories = [
  "All Categories",
  "Engineering",
  "Data Science",
  "Product",
  "Design",
  "Marketing",
  "Sales",
  "Finance",
  "HR",
]

// Job types for filtering
const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Internship", "Remote"]

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 dark:text-blue-400">Career Opportunities</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore job opportunities shared by fellow alumni and partner companies. Find your next career move or post
          openings from your organization.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input placeholder="Search jobs by title, company, or skills..." className="pl-10" />
          </div>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <Filter size={18} />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Category</label>
            <select className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
              {jobCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Job Type</label>
            <select className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Location</label>
            <Input placeholder="Any location" />
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="all">All Jobs</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="recent">Recently Posted</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-6">
            {jobListings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="featured">
          <div className="space-y-6">
            {jobListings
              .filter((job) => job.featured)
              .map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="recent">
          <div className="space-y-6">
            {jobListings
              .sort((a, b) => {
                if (a.postedDate.includes("day") && b.postedDate.includes("week")) return -1
                if (a.postedDate.includes("week") && b.postedDate.includes("day")) return 1
                return 0
              })
              .map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="mx-2">
          Load More Jobs
        </Button>
      </div>

      <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Have a job opening to share?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If your company is hiring, share the opportunity with the UIT RGPV alumni community. It's a great way to
              find talented professionals who share your educational background.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Post a Job
            </Button>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Looking for career guidance?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our alumni network offers mentorship, resume reviews, and career counseling. Connect with experienced
              professionals who can help guide your career path.
            </p>
            <Button variant="outline" size="lg">
              Explore Resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface JobCardProps {
  job: {
    id: number
    title: string
    company: string
    location: string
    type: string
    category: string
    postedDate: string
    deadline: string
    salary: string
    skills: string[]
    description: string
    postedBy: string
    featured: boolean
  }
}

function JobCard({ job }: JobCardProps) {
  return (
    <Card className={`overflow-hidden ${job.featured ? "border-blue-500 dark:border-blue-400 border-2" : ""}`}>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold">{job.title}</h3>
              {job.featured && <Badge className="ml-2 bg-blue-600">Featured</Badge>}
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Building className="mr-2 h-4 w-4" />
                <span>{job.company}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="mr-2 h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Briefcase className="mr-2 h-4 w-4" />
                <span>{job.type}</span>
                <span className="mx-2">•</span>
                <span>{job.category}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Posted {job.postedDate}</span>
                <span className="mx-2">•</span>
                <span>Apply by {job.deadline}</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium">Salary: {job.salary}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-gray-100 dark:bg-gray-700 font-normal">
                  {skill}
                </Badge>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Posted by: {job.postedBy}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 dark:bg-gray-800 p-4 flex justify-between items-center">
        <Link
          href={`/jobs/${job.id}`}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
        >
          View Details
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
        <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
      </CardFooter>
    </Card>
  )
}
