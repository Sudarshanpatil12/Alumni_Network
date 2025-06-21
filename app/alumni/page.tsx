"use client"

import { useState, useEffect } from "react"
import { useAlumni } from "@/context/alumni-context"
import AlumniCard from "@/components/alumni-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, Filter, X } from "lucide-react"
import { departments } from "@/lib/constants"

const availableSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Machine Learning",
  "Data Science",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design",
  "Project Management",
]

export default function AlumniDirectory() {
  const { alumni } = useAlumni()
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    department: "",
    graduationYear: "",
    skills: [] as string[],
  })
  const [filteredAlumni, setFilteredAlumni] = useState<Alumni[]>([])
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Initialize filtered alumni when alumni data changes
  useEffect(() => {
    if (alumni) {
      setFilteredAlumni(alumni)
    }
  }, [alumni])

  // Extract unique graduation years from alumni data
  const graduationYears = alumni 
    ? [...new Set(alumni.map((a) => a.graduationYear))]
      .filter(Boolean)
      .sort((a, b) => b - a) 
    : []

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  // Handle filter changes
  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle skill toggle
  const toggleSkill = (skill: string) => {
    setFilters((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter((s) => s !== skill) 
        : [...prev.skills, skill],
    }))
  }

  // Filter alumni based on search term and filters
  useEffect(() => {
    if (!alumni) return

    const filtered = alumni.filter((alum) => {
      const searchLower = searchTerm.toLowerCase()
      const matchesSearch =
        alum.name.toLowerCase().includes(searchLower) ||
        (alum.company && alum.company.toLowerCase().includes(searchLower)) ||
        (alum.jobTitle && alum.jobTitle.toLowerCase().includes(searchLower)) ||
        (alum.location && alum.location.toLowerCase().includes(searchLower)) ||
        (alum.bio && alum.bio.toLowerCase().includes(searchLower)) ||
        (alum.graduationYear && alum.graduationYear.toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
        (alum.graduationYear && searchTerm.toLowerCase().includes(alum.graduationYear.toString().toLowerCase()))

      const matchesDepartment = !filters.department || alum.department === filters.department
      const matchesYear = !filters.graduationYear || alum.graduationYear.toString() === filters.graduationYear
      const matchesSkills = filters.skills.length === 0 ||
        filters.skills.some((skill) => 
          (alum.bio && alum.bio.toLowerCase().includes(skill.toLowerCase())) ||
          (alum.jobTitle && alum.jobTitle.toLowerCase().includes(skill.toLowerCase())) ||
          (alum.company && alum.company.toLowerCase().includes(skill.toLowerCase()))
        )

      return matchesSearch && matchesDepartment && matchesYear && matchesSkills
    })

    setFilteredAlumni(filtered)
  }, [searchTerm, filters, alumni])

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  const openAlumniModal = (alum: Alumni) => {
    setSelectedAlumni(alum)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedAlumni(null)
  }

  const clearFilters = () => {
    setFilters({
      department: "",
      graduationYear: "",
      skills: [],
    })
    setSearchTerm("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 dark:text-blue-400">Alumni Directory</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Connect with fellow alumni from UIT RGPV
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search by name, company, or position..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10"
            />
          </div>
          <Button
            onClick={toggleFilters}
            variant={showFilters ? "default" : "outline"}
            className={`flex items-center gap-2 ${showFilters ? "bg-blue-800 hover:bg-blue-700" : ""}`}
          >
            {showFilters ? <X size={18} /> : <Filter size={18} />}
            {showFilters ? "Hide Filters" : "Filters"}
          </Button>
        </div>

        {showFilters && (
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div>
                <h3 className="font-medium mb-2">Department</h3>
                <Select 
                  value={filters.department} 
                  onValueChange={(value) => handleFilterChange("department", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Departments</SelectItem>
                    {departments.map((dept) => (
                      <SelectItem key={dept.value} value={dept.value}>
                        {dept.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="font-medium mb-2">Graduation Year</h3>
                <Select
                  value={filters.graduationYear}
                  onValueChange={(value) => handleFilterChange("graduationYear", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Years</SelectItem>
                    {graduationYears.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="font-medium mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto p-1">
                  {availableSkills.map((skill) => (
                    <div
                      key={skill}
                      className={`px-2 py-1 text-sm rounded-md cursor-pointer transition-colors ${
                        filters.skills.includes(skill)
                          ? "bg-blue-800 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                      }`}
                      onClick={() => toggleSkill(skill)}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {filteredAlumni.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni.map((alum) => (
              <div 
                key={alum.id} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => openAlumniModal(alum)}
              >
                <AlumniCard alumni={alum} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-medium mb-2">No alumni found matching your criteria</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Try adjusting your search or filters</p>
            <Button variant="outline" onClick={clearFilters}>
              Clear all filters
            </Button>
          </div>
        )}
      </div>

      {/* Alumni Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedAlumni && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedAlumni.name}</DialogTitle>
              </DialogHeader>
              <AlumniCard alumni={selectedAlumni} isDetailed={true} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}