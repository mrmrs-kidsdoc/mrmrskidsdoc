import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mr. & Mrs. Kids - Pediatric Care That Makes Healthcare Magical",
  description:
    "Where little smiles meet big hearts. Mr. and Mrs. Kids provide fun, caring pediatric healthcare for children and families.",
  keywords:
    "pediatrician, children healthcare, kids doctor, family medicine, immunizations, well child visits",
  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon.svg", type: "image/svg+xml" },
    { url: "/favicon.png", type: "image/png" },
  ],
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
