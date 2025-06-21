import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AlumniProvider } from "@/context/alumni-context"
import { AuthProvider } from "@/context/auth-context"
import HeaderNew from "@/components/header-new"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UIT RGPV Alumni Network",
  description: "Official Alumni Portal of UIT RGPV, Bhopal – Reconnect, Share, and Inspire.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <AlumniProvider>
              <div className="flex min-h-screen flex-col">
                <HeaderNew />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </AlumniProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
