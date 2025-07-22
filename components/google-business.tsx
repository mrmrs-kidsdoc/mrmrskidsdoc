"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, ChevronRight } from "lucide-react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

const doctors = [
  {
    doctor: "Dr. Rishivardhan Reddy",
    name: "Aster Prime Hospital",
    address: `Plot No 4, HMDA Maitrivanam, Satyam Theatre Rd, beside Blue Fox Hotel, Ameerpet, Hyderabad, Telangana 500038`,
    reviews: [
      {
        name: "M Mounika Gude",
        rating: 5,
        comment: "Super hospital and respectful people. Dr. Rishivardhan is a very good children’s doctor."
      },
      {
        name: "Roma Patel",
        rating: 5,
        comment: "Excellent pediatric doctor. Good counselling and supportive staff."
      },
      {
        name: "Jarurala Shankar",
        rating: 5,
        comment: "Very good consultation, clean hospital environment."
      }
    ]
  },
  {
    doctor: "Dr. Sahithi Reddy",
    name: "Paramitha Women & Children's Hospital",
    address: `Main Road Madinaguda, Miyapur, Hyderabad, Telangana, India 500049`,
    reviews: [
      {
        name: "Kiran V",
        rating: 5,
        comment: "Very kind and experienced doctor. Staff is also friendly."
      },
      {
        name: "Sneha Reddy",
        rating: 5,
        comment: "Clean hospital with good facilities. Dr. Sahithi was amazing."
      },
      {
        name: "Avinash Kumar",
        rating: 5,
        comment: "Our experience was great. Highly recommended pediatrician."
      }
    ]
  }
]

export function GoogleBusinessProfile() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % doctors.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const doctor = doctors[index]

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Find Us on Google
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10">
          Check out our Google Business Profile for reviews, directions, and more information!
        </p>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-blue-100 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src="/favicon.png" alt="Doctor" width={64} height={64} className="rounded-lg" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-800">{doctor.doctor}</h3>
                      <p className="text-sm text-gray-600">{doctor.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600 mb-4">
                    <MapPin className="text-blue-500 w-4 h-4 mt-1" />
                    {doctor.address}
                  </div>
                  <a
                    href="https://g.co/kgs/PwAQhRG"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 rounded-full text-sm transition-all"
                  >
                    View on Google
                    <ChevronRight className="w-4 h-4" />
                  </a>

                  <div className="mt-6 space-y-3 text-left">
                    <h4 className="font-semibold text-gray-800 text-sm">Recent Reviews</h4>
                    {doctor.reviews.map((r) => (
                      <div key={r.name} className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center text-xs font-bold text-pink-700">
                              {r.name[0]}
                            </div>
                            <span className="text-sm font-medium text-gray-800">{r.name}</span>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < r.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{r.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
