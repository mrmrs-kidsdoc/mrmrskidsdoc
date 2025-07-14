"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, Smile, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    childName: "Emma (5 years old)",
    rating: 5,
    text: "Dr. Mrs. Kids made Emma's first visit so magical! She actually asked when we can come back. The dinosaur stickers from Dr. Mr. Kids were a huge hit too!",
    avatar: "/placeholder.svg?height=60&width=60",
    highlight: "First visit was magical! ✨",
  },
  {
    name: "Michael Chen",
    childName: "Lucas (3 years old)",
    rating: 5,
    text: "Lucas used to cry at doctor visits, but now he gets excited! The bedtime stories and gentle approach have completely changed his perspective on healthcare.",
    avatar: "/placeholder.svg?height=60&width=60",
    highlight: "No more tears, just excitement! 🎉",
  },
  {
    name: "Jennifer Martinez",
    childName: "Sofia (7 years old)",
    rating: 5,
    text: "The personalized health adventure stories are incredible! Sofia learned so much about taking care of her body while having fun. Best pediatricians ever!",
    avatar: "/placeholder.svg?height=60&width=60",
    highlight: "Learning through fun stories! 📚",
  },
  {
    name: "David Thompson",
    childName: "Twins Alex & Maya (4 years old)",
    rating: 5,
    text: "Managing twins' appointments can be stressful, but Mr. & Mrs. Kids make it feel like a fun playdate. The kids love their 'Brave Patient' certificates!",
    avatar: "/placeholder.svg?height=60&width=60",
    highlight: "Twins love their visits! 👫",
  },
  {
    name: "Lisa Rodriguez",
    childName: "Ethan (6 years old)",
    rating: 5,
    text: "The 24/7 support has been a lifesaver! When Ethan had a fever at midnight, they guided us through everything. Such caring and dedicated doctors.",
    avatar: "/placeholder.svg?height=60&width=60",
    highlight: "24/7 support is amazing! 🌙",
  },
  {
    name: "Amanda Wilson",
    childName: "Chloe (2 years old)",
    rating: 5,
    text: "Chloe's immunizations were stress-free thanks to the distraction techniques and gentle approach. She was giggling instead of crying!",
    avatar: "/placeholder.svg?height=60&width=60",
    highlight: "Giggles instead of tears! 😊",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-full opacity-20 -translate-x-20 -translate-y-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 translate-x-16 translate-y-16 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-300 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-pink-300 rounded-full opacity-40 animate-bounce"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <div className="flex items-center justify-center space-x-2 text-yellow-500 mb-4">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            <span className="text-base sm:text-lg font-semibold">What Families Are Saying</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Happy Babies, Happy Families, Happy Society
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the amazing families we've had the joy of caring for!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-yellow-100 hover:border-yellow-300 animate-fadeInUp overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 relative">
                {/* Quote decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <Quote className="w-4 h-4 text-yellow-600" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4 animate-slideInLeft">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current animate-bounce"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 animate-pulse">
                  {testimonial.highlight}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3 animate-slideInRight">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-pink-200 group-hover:border-pink-300 transition-colors duration-300">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-pink-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">Parent of {testimonial.childName}</p>
                  </div>
                  <div className="ml-auto">
                    <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 animate-fadeInUp delay-700">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white rounded-2xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center animate-bounce"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <Smile className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
              <span className="text-gray-700 font-semibold">Join 500+ Happy Families!</span>
            </div>
            {/* <div className="text-center sm:text-left">
              <p className="text-sm text-gray-600">Ready to create your own success story?</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
