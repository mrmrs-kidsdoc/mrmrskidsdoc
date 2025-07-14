"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, ChevronRight } from "lucide-react"
import Image from "next/image"
import { JSX } from "react"

export function GoogleBusinessProfile(): JSX.Element {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 bg-pink-100 rounded-full opacity-50 animate-float" />
      <div className="absolute bottom-10 right-10 w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full opacity-50 animate-bounce" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Find Us on Google
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Check out our Google Business Profile for reviews, directions, and more information!
          </p>
        </div>

        <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto animate-slideInUp">
          <Card className="group hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-200 sm:border-2 border-blue-100 hover:border-blue-300 overflow-hidden">
            <CardContent className="p-4 sm:p-6 md:p-8 relative">
              {/* Google Logo */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/google-my-business-logo.svg"
                  alt="Google"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
                {/* Business Image */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/favicon.png"
                    alt="Mr. & Mrs. Kids Clinic"
                    width={96}
                    height={96}
                    className="object-fit w-full h-full"
                    priority
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    Dr. Rishivardhan Reddy
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => {
                      const rating = 4.6;
                      const fillPercentage = Math.min(Math.max(rating - i, 0), 1) * 100;
                      
                      return (
                        <svg
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-300"
                          viewBox="0 0 24 24"
                        >
                          {/* Background star */}
                          <path
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                            fill="currentColor"
                          />
                          {/* Filled portion */}
                          <path
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                            fill="currentColor"
                            className="text-yellow-400"
                            style={{
                              clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
                              position: 'absolute',
                            }}
                          />
                        </svg>
                      );
                    })}
                    <span className="ml-2 text-xs sm:text-sm md:text-base font-medium text-gray-700">
                      4.6 (100+ reviews)
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-2 mt-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      Plot No 4, HMDA Maitrivanam, Satyam Theatre Rd, beside Blue Fox Hotel,
                      Kumar Basti, Srinivasa Nagar, Ameerpet, Hyderabad, Telangana 500038
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                <span className="text-xs sm:text-sm md:text-base text-gray-600">
                  Pediatrician in Hyderabad
                </span>

                <a
                  href="https://g.co/kgs/PwAQhRG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  <span className="text-xs sm:text-sm md:text-base">View on Google</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Recent Reviews Preview */}
              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                  Recent Reviews
                </h4>

                {[
                  {
                    name: "M Mounika Gude",
                    rating: 5,
                    comment: "Super hospital and respect people's Mr Rishi sir children doctor I tell you frankly very very good doctor"
                  },
                  {
                    name: "Roma Patel",
                    rating: 5,
                    comment: "Dr. Rishivardhan pediatrics doctor excellent good counselling took child care. Gave very much importance to us and OPD staff mem are supportive."
                  },
                  {
                    name: "Jarurala Shankar",
                    rating: 5,
                    comment: "Dr. Rishivardhan consultation is very good nice hospital with clean environment"
                  }
                ].map((review, index) => (
                  <div
                    key={review.name}
                    className="bg-gray-50 p-2 sm:p-3 md:p-4 rounded-lg animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-pink-700">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <span className="font-medium text-xs sm:text-sm md:text-base text-gray-800">
                          {review.name}
                        </span>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">{review.comment}</p>
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