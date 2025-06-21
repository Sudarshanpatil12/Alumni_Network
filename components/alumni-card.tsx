import { Briefcase, MapPin, Mail, Linkedin } from "lucide-react"
import type { Alumni } from "@/types/alumni"
import { departments } from "@/lib/constants"

interface AlumniCardProps {
  alumni: Alumni
  isDetailed?: boolean
}

const AlumniCard = ({ alumni, isDetailed = false }: AlumniCardProps) => {
  // Get department label from department value
  const departmentLabel = departments.find((dept) => dept.value === alumni.department)?.label || alumni.department

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
            <img
              src={alumni.profileImage || "/placeholder.svg?height=64&width=64"}
              alt={alumni.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{alumni.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {alumni.jobTitle} {alumni.company && `at ${alumni.company}`}
            </p>
            <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {departmentLabel}
              </span>
              <span className="ml-2 text-xs">Class of {alumni.graduationYear}</span>
            </div>
          </div>
        </div>

        {isDetailed && (
          <div className="mt-4">
            <p className="mb-4 text-gray-600 dark:text-gray-300">{alumni.bio}</p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Briefcase className="mr-2 h-4 w-4" />
                <span>
                  {alumni.jobTitle} {alumni.company && `at ${alumni.company}`}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="mr-2 h-4 w-4" />
                <span>{alumni.location}</span>
              </div>
              {alumni.email && (
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Mail className="mr-2 h-4 w-4" />
                  <a href={`mailto:${alumni.email}`} className="text-blue-600 hover:underline dark:text-blue-400">
                    {alumni.email}
                  </a>
                </div>
              )}
              {alumni.linkedinUrl && (
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Linkedin className="mr-2 h-4 w-4" />
                  <a
                    href={alumni.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {!isDetailed && (
          <div className="mt-4 flex justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{alumni.location}</span>
              </div>
            </div>
            <button className="rounded-md border border-blue-600 bg-transparent px-3 py-1 text-sm font-medium text-blue-600 transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20">
              View Profile
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AlumniCard
