"use client"

import { JSX, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Phone,
  MapPin,
  CircleUser,
  Video
} from "lucide-react"
import { FaRegHospital, FaUserDoctor } from "react-icons/fa6";
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { motion } from "framer-motion"

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
      name: "Aster Prime Hospital",
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
      onlineBooking: "",
      mapLink: "https://maps.app.goo.gl/9JJLS2Ln4mrMduqH9?g_st=aw",
      hrefClinic:"book-clinic-sahithi",
      hrefOnline:"book-online-sahithi"
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-purple-100 via-pink-100 to-yellow-100">
      {/* Animated Decorative Background Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-300 via-purple-300 to-yellow-300 rounded-full blur-3xl opacity-30 animate-ping-slow" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tr from-purple-400 to-pink-300 rounded-full blur-2xl opacity-20 animate-float" />
        <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse-slow" />
      </div>

      <div id="appointment" className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
            <Calendar className="w-5 h-5 animate-wiggle" />
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
                ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-inner"
                : "bg-white text-gray-600 hover:text-gray-800 border border-gray-200"
                }`}
            >
              <span className="flex items-center gap-2">
                <CircleUser className="w-5 h-5" />
                Dr. {doctor.doctor.split(" ")[1]}
              </span>
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full overflow-hidden shadow-md">
            <button
              onClick={() => setActiveTab("clinic")}
              className={`px-8 py-3 transition-all ${activeTab === "clinic"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600 hover:bg-blue-50"
                }`}
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Clinic Visit
              </span>
            </button>
            <button
              onClick={() => setActiveTab("online")}
              className={`px-8 py-3 transition-all ${activeTab === "online"
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-600 hover:bg-pink-50"
                }`}
            >
              <span className="flex items-center gap-2">
                <Video className="w-5 h-5" />
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
              if (el && searchParams.get('scroll') === 'true') {
                setTimeout(() => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 300)
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-[2rem] p-1 shadow-xl"
            >
              <Card className="rounded-[1.75rem] border-0 shadow-none">
              <CardContent className="p-6 sm:p-8">
              {/* Doctor section with circle */}
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
              <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
              <FaUserDoctor className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              {hospitalInfo[selectedDoctor].doctor}
              </h3>

              {/* Hospital section with circle */}
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
              <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
              <FaRegHospital className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              {hospitalInfo[selectedDoctor].name}
              </h3>

              <div className="space-y-4 flex flex-col items-center">
              {/* Address with MapPin icon in circle */}
              <div className="flex items-start gap-2 max-w-md">
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mt-0.5 flex-shrink-0">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <a
              href={hospitalInfo[selectedDoctor].mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-pre-line hover:text-blue-600 transition-colors cursor-pointer"
              >
              {hospitalInfo[selectedDoctor].address}
              </a>
              </div>

              {/* Phone number with Phone icon in circle */}
              <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
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
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-full font-medium shadow-lg"
              >
              <a
              href={hospitalInfo[selectedDoctor].mapLink}
              target="_blank"
              rel="noopener noreferrer"
              >
              <span className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-400/30">
              <MapPin className="w-3 h-3" />
              </div>
              Get Directions
              </span>
              </a>
              </Button>

              <Button
              asChild
              variant="outline"
              className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700 py-3 rounded-full font-medium"
              >
              <a href={`tel:${hospitalInfo[selectedDoctor].phone.replace(/\D/g, "")}`}>
              <span className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-100">
              <Phone className="w-3 h-3" />
              </div>
              Call Clinic Now
              </span>
              </a>
              </Button>
              </div>
              </CardContent>
              </Card>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-[2rem] p-1 shadow-xl"
          >
            <Card 
              id={hospitalInfo[selectedDoctor].hrefOnline}
              className="rounded-[1.75rem] border-0 shadow-none"
              ref={(el) => {
                if (el && searchParams.get('scroll') === 'true') {
                  setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 300)
                }
              }}
            > 
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Video className="w-6 h-6 text-pink-500" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Online Video Consultation
                </h3>
                <p className="text-gray-600 mb-6">
                  Book a secure video consultation with <b>{hospitalInfo[selectedDoctor].doctor}</b> through our trusted partner platform.
                </p>

                <Button
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all"
                >
                  <a
                    href={hospitalInfo[selectedDoctor].onlineBooking}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center gap-2">
                      <Video className="w-5 h-5" />
                      Book Online Consultation Now
                    </span>
                  </a>
                </Button>

                <p className="text-sm text-gray-500 mt-4">
                  You'll be redirected to Connect2Clinic's secure booking platform
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export function AppointmentForm() {
  return (
    <Suspense fallback={<div className="text-center py-12">Loading appointment options...</div>}>
      <AppointmentFormContent />
    </Suspense>
  )
}