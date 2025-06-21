"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { useAlumni } from "@/context/alumni-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { Edit, Trash2, LogOut, AlertCircle } from "lucide-react"
import { departments } from "@/lib/constants"

export default function AdminDashboard() {
  const router = useRouter()
  const { isAuthenticated, logout } = useAuth()
  const { alumni, removeAlumni } = useAlumni()
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredAlumni, setFilteredAlumni] = useState(alumni)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [alumniToDelete, setAlumniToDelete] = useState<string | null>(null)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin/login")
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      setFilteredAlumni(
        alumni.filter(
          (alum) =>
            alum.name.toLowerCase().includes(term) ||
            alum.department.toLowerCase().includes(term) ||
            alum.graduationYear.toString().includes(term),
        ),
      )
    } else {
      setFilteredAlumni(alumni)
    }
  }, [alumni, searchTerm])

  const handleDeleteClick = (id: string) => {
    setAlumniToDelete(id)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (alumniToDelete) {
      removeAlumni(alumniToDelete)
      setDeleteDialogOpen(false)
      setAlumniToDelete(null)
    }
  }

  // Analytics data preparation
  const departmentData = departments
    .map((dept) => {
      const count = alumni.filter((a) => a.department === dept.value).length
      return { name: dept.label, value: count }
    })
    .filter((item) => item.value > 0)

  const yearData = Array.from(new Set(alumni.map((a) => a.graduationYear)))
    .sort((a, b) => b - a)
    .map((year) => {
      const count = alumni.filter((a) => a.graduationYear === year).length
      return { name: year.toString(), value: count }
    })

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D", "#A4DE6C", "#D0ED57"]

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={logout} className="flex items-center gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>

      <Tabs defaultValue="alumni" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="alumni">Alumni Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="alumni">
          <div className="mb-6">
            <Input
              placeholder="Search alumni by name, department, or batch..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Alumni Records</CardTitle>
              <CardDescription>Manage alumni records - edit or delete entries as needed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Batch</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Current Role</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAlumni.length > 0 ? (
                      filteredAlumni.map((alum) => (
                        <TableRow key={alum.id}>
                          <TableCell className="font-medium">{alum.name}</TableCell>
                          <TableCell>{alum.graduationYear}</TableCell>
                          <TableCell>
                            {departments.find((d) => d.value === alum.department)?.label || alum.department}
                          </TableCell>
                          <TableCell>{alum.jobTitle || "-"}</TableCell>
                          <TableCell>{alum.location}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon" onClick={() => router.push(`/admin/edit/${alum.id}`)}>
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(alum.id)}>
                                <Trash2 className="h-4 w-4 text-red-500" />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-4">
                          No alumni records found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Alumni by Department</CardTitle>
                <CardDescription>Distribution of alumni across different departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={departmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {departmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} alumni`, "Count"]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alumni by Graduation Year</CardTitle>
                <CardDescription>Distribution of alumni across different batches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={yearData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {yearData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} alumni`, "Count"]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Alumni Statistics</CardTitle>
                <CardDescription>Key metrics about the alumni network</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300">Total Alumni</h3>
                    <p className="text-3xl font-bold text-blue-800 dark:text-blue-200">{alumni.length}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-green-700 dark:text-green-300">Departments</h3>
                    <p className="text-3xl font-bold text-green-800 dark:text-green-200">
                      {new Set(alumni.map((a) => a.department)).size}
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-purple-700 dark:text-purple-300">Graduation Years</h3>
                    <p className="text-3xl font-bold text-purple-800 dark:text-purple-200">
                      {new Set(alumni.map((a) => a.graduationYear)).size}
                    </p>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-amber-700 dark:text-amber-300">Locations</h3>
                    <p className="text-3xl font-bold text-amber-800 dark:text-amber-200">
                      {new Set(alumni.map((a) => a.location)).size}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              Confirm Deletion
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this alumni record? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
