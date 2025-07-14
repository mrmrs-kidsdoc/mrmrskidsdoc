"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, ChevronRight } from "lucide-react"
import Image from "next/image"
import { JSX } from "react"

export function GoogleBusinessProfile(): JSX.Element {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-100 rounded-full opacity-50 animate-float" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-100 rounded-full opacity-50 animate-bounce" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Find Us on Google
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Check out our Google Business Profile for reviews, directions, and more information!
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-slideInUp">
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300 overflow-hidden">
            <CardContent className="p-6 sm:p-8 relative">
              {/* Google Logo */}
              <div className="absolute top-6 right-6 w-8 h-8">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/google-my-business-logo.svg"
                  alt="Google"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                {/* Business Image */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="favicon.png"
                    alt="Mr. & Mrs. Kids Clinic"
                    width={80}
                    height={80}
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Dr. Rishivardhan Reddy
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm sm:text-base font-medium text-gray-700">
                      4.6 (100+ reviews)
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-2 mb-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-600">
                      Plot No 4, HMDA Maitrivanam, Satyam Theatre Rd, beside Blue Fox Hotel,
                      Kumar Basti, Srinivasa Nagar, Ameerpet, Hyderabad, Telangana 500038
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-sm sm:text-base text-gray-600">
                  Pediatrician in Hyderabad
                </span>

                <a
                  href="https://g.co/kgs/PwAQhRG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-4 sm:px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  <span>View on Google</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Recent Reviews Preview */}
              <div className="mt-6 space-y-4">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Recent Reviews
                </h4>

                {[
                  {
                    name: "M Mounika Gude",
                    rating: 5,
                    comment:
                      "Super hospital and respect people's Mr Rishi sir children doctor I tell you frankly very very good doctor"
                  },
                  {
                    name: "Roma Patel",
                    rating: 5,
                    comment:
                      "Dr. Rishivardhan pediatrics doctor excellent good counselling took child care. Gave very much importance to us and OPD staff mem are supportive."
                  },
                  {
                    name: "Jarurala Shankar",
                    rating: 5,
                    comment:
                      "Dr. Rishivardhan consultation is very good nice hospital with clean environment"
                  }
                ].map((review, index) => (
                  <div
                    key={review.name}
                    className="bg-gray-50 p-3 sm:p-4 rounded-lg animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-pink-700">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <span className="font-medium text-sm sm:text-base text-gray-800">
                          {review.name}
                        </span>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
