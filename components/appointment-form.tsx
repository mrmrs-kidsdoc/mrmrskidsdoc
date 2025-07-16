"use client"

import { JSX, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Phone,
  MapPin,
  Hospital,
  CircleUser
} from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function AppointmentFormContent(): JSX.Element {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<"clinic" | "online">("clinic")
  const [selectedDoctor, setSelectedDoctor] = useState(0)

    useEffect(() => {
    const tab = searchParams.get('tab')
    const doctor = searchParams.get('doctor')
    
    if (tab === 'online' || tab === 'clinic') {
      setActiveTab(tab)
    }
    
    if (doctor === '0' || doctor === '1') {
      setSelectedDoctor(parseInt(doctor))
    }
  }, [searchParams])

  const hospitalInfo = [
    {
      doctor: "Dr. Rishivardhan Reddy",
      name: "Aster Prime Hospital - Hyderabad",
      address: `Plot No 4, HMDA Maitrivanam,
Satyam Theatre Rd, beside Blue Fox Hotel,
Kumar Basti, Srinivasa Nagar,
Ameerpet, Hyderabad, Telangana 500038`,
      phone: "+914049594959",
      onlineBooking: "https://www.connect2clinic.com/doctor/rishivardhan-reddy",
      mapLink: "https://www.google.com/maps/dir//Plot+No+4,+HMDA+Maitrivanam",
      hrefClinic:"book-clinic-rishi",
      hrefOnline:"book-online-rishi"
    },
    {
      doctor: "Dr. Sahithi Reddy",
      name: "Paramitha women & children's Hospital",
      address: `Main Road Madinaguda, Miyapur, Hyderabad, Telangana 500049`,
      phone: "+9109059705797",
      onlineBooking: "https://www.connect2clinic.com/doctor/sahithi-reddy",
      mapLink: "https://maps.app.goo.gl/9JJLS2Ln4mrMduqH9?g_st=aw",
      hrefClinic:"book-clinic-sahithi",
      hrefOnline:"book-online-sahithi"
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-float" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-bounce" />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-30 animate-pulse" />

      <div id="appointment" className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="flex items-center justify-center space-x-2 text-purple-500 mb-4">
            <Calendar className="w-6 h-6 animate-wiggle" />
            <span className="text-lg font-semibold">Book Your Visit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Schedule an Appointment
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your preferred doctor and consultation type
          </p>
        </div>

        {/* Doctor Selection */}
        <div className="flex justify-center mb-6 gap-4">
          {hospitalInfo.map((doctor, index) => (
            <button
              key={index}
              onClick={() => setSelectedDoctor(index)}
              className={`px-6 py-2 rounded-full transition-all ${selectedDoctor === index
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-inner"
                : "bg-white text-gray-600 hover:text-gray-800 border border-gray-200"
                }`}
            >
              <span className="flex items-center">
                <CircleUser className="w-6 h-6 mr-2" />
                Dr. {doctor.doctor.split(" ")[1]}
              </span>
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md border border-gray-200">
            <button
              onClick={() => setActiveTab("clinic")}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === "clinic"
                ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-inner"
                : "text-gray-600 hover:text-gray-800"
                }`}
            >
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Clinic Visit
              </span>
            </button>
            <button
              onClick={() => setActiveTab("online")}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === "online"
                ? "bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-inner"
                : "text-gray-600 hover:text-gray-800"
                }`}
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Online Consultation
              </span>
            </button>
          </div>
        </div>

        {/* Conditional Content */}
        {activeTab === "clinic" ? (
                    <div 
            className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto" 
            id={hospitalInfo[selectedDoctor].hrefClinic}
            ref={(el) => {
              // This helps with initial scroll positioning
              if (el && searchParams.get('scroll') === 'true') {
                setTimeout(() => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 300)
              }
            }}
          >
            <Card className="shadow-2xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 animate-slideInLeft text-center">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                  <CircleUser className="w-6 h-6 text-blue-500 mr-2" />
                  {hospitalInfo[selectedDoctor].doctor}
                </h3>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                  <Hospital className="w-6 h-6 text-blue-500 mr-2" />
                  {hospitalInfo[selectedDoctor].name}
                </h3>

                <div className="space-y-4 flex flex-col items-center">
                  <div className="flex items-start gap-3 max-w-md">
                    <MapPin className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                    <a
                      href={hospitalInfo[selectedDoctor].mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-pre-line hover:text-blue-600 transition-colors cursor-pointer text-center"
                    >
                      {hospitalInfo[selectedDoctor].address}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <a
                      href={`tel:${hospitalInfo[selectedDoctor].phone.replace(/\D/g, "")}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    >
                      {hospitalInfo[selectedDoctor].phone}
                    </a>
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-center space-y-3 max-w-xs mx-auto">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white py-3 rounded-lg font-medium"
                  >
                    <a
                      href={hospitalInfo[selectedDoctor].mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700 py-3 rounded-lg font-medium"
                  >
                    <a href={`tel:${hospitalInfo[selectedDoctor].phone.replace(/\D/g, "")}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Clinic Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card 
            id={hospitalInfo[selectedDoctor].hrefOnline}
            className="shadow-2xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 animate-slideInRight"
            ref={(el) => {
              if (el && searchParams.get('scroll') === 'true') {
                setTimeout(() => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 300)
              }
            }}
          > <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Online Video Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Book a secure video consultation with <b>{hospitalInfo[selectedDoctor].doctor}</b> through our trusted partner platform.
              </p>

              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <a
                  href={hospitalInfo[selectedDoctor].onlineBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Online Consultation Now
                </a>
              </Button>

              <p className="text-sm text-gray-500 mt-4">
                You'll be redirected to Connect2Clinic's secure booking platform
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}

export function AppointmentForm() {
  return (
    <Suspense fallback={<div>Loading appointment options...</div>}>
      <AppointmentFormContent />
    </Suspense>
  )
}