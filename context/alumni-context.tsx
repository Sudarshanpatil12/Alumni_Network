"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Alumni } from "@/types/alumni"
import { sampleAlumni } from "@/lib/sample-data"

interface AlumniContextType {
  alumni: Alumni[]
  addAlumni: (alumni: Alumni) => void
  removeAlumni: (id: string) => void
  updateAlumni: (id: string, alumni: Partial<Alumni>) => void
}

const AlumniContext = createContext<AlumniContextType | undefined>(undefined)

export function AlumniProvider({ children }: { children: ReactNode }) {
  const [alumni, setAlumni] = useState<Alumni[]>([])

  // Load alumni data from localStorage on mount
  useEffect(() => {
    const storedAlumni = localStorage.getItem("alumni")
    if (storedAlumni) {
      setAlumni(JSON.parse(storedAlumni))
    } else {
      // Use sample data if no stored data exists
      setAlumni(sampleAlumni)
      localStorage.setItem("alumni", JSON.stringify(sampleAlumni))
    }
  }, [])

  // Save alumni data to localStorage whenever it changes
  useEffect(() => {
    if (alumni.length > 0) {
      localStorage.setItem("alumni", JSON.stringify(alumni))
    }
  }, [alumni])

  const addAlumni = (newAlumni: Alumni) => {
    setAlumni((prev) => [...prev, newAlumni])
  }

  const removeAlumni = (id: string) => {
    setAlumni((prev) => prev.filter((alumni) => alumni.id !== id))
  }

  const updateAlumni = (id: string, updatedData: Partial<Alumni>) => {
    setAlumni((prev) => prev.map((alumni) => (alumni.id === id ? { ...alumni, ...updatedData } : alumni)))
  }

  return (
    <AlumniContext.Provider value={{ alumni, addAlumni, removeAlumni, updateAlumni }}>
      {children}
    </AlumniContext.Provider>
  )
}

export function useAlumni() {
  const context = useContext(AlumniContext)
  if (context === undefined) {
    throw new Error("useAlumni must be used within an AlumniProvider")
  }
  return context
}
