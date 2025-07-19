"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaInstagram, FaWhatsapp, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import {
  Heart,
  Star,
  Sparkles,
  Cross,
  Baby,
  Home, Video ,
  Stethoscope,
  BriefcaseMedical,
  ClipboardPenLine,
  Calendar,
  MapPin,
  Phone,
  ArrowRight,
  PersonStanding,
   X,
  Award,
  Clock,
  Shield,
  Smile,
  Gift,
  Zap,
  Rainbow,
  Sun,
  Moon,
  Gamepad2,
  Candy,
  BombIcon as Balloon,
  Linkedin,
  Brain,
  Hospital,
  ChevronRight,
  Building,
  Calendar1
} from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { AppointmentForm } from "@/components/appointment-form";
import { TestimonialsSection } from "@/components/testimonials";
import { GoogleBusinessProfile } from "@/components/google-business";
import { motion, easeInOut, easeOut , AnimatePresence} from "framer-motion";
import { useState, useEffect, JSX } from "react";

interface ConsultationOption {
  doctor: string;
  type: string;
}

interface ConsultationModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setActiveTab: (value: "clinic" | "online") => void;
  setSelectedDoctor: (value: number) => void;
}
// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const pulse = {
  scale: [1, 1.05, 1],
  transition: { duration: 2, repeat: Infinity }
};

const float = {
  y: [0, -15, 0],
  transition: { duration: 3, repeat: Infinity, ease: easeInOut }
};

const bounce = {
  y: [0, -20, 0],
  transition: { duration: 1.5, repeat: Infinity, ease: easeOut }
};

export default function HomePage() {
  const [isVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"clinic" | "online">("clinic");
  const [selectedDoctor, setSelectedDoctor] = useState(0);

   const doctors = [
  { name: "Dr. Rishivardhan Reddy" },
  { name: "Dr. Sahithi Reddy" },
];

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
      onlineBooking: "https://www.connect2clinic.com/doctor/",
      mapLink: "https://www.google.com/maps/dir//Paramitha+Hospital",
      hrefClinic:"book-clinic-sahithi",
      hrefOnline:"book-online-sahithi"
    }
  ]
 
const handleOptionClick = ({
  doctor,
  type,
}: {
  doctor: string;
  type: "In Person" | "Video Consultation";
}) => {
  const doctorIndex = doctor.includes("Sahithi") ? 1 : 0;
  const tab = type === "Video Consultation" ? "online" : "clinic";

  const url = new URL(window.location.href);
  url.searchParams.set("doctor", doctorIndex.toString());
  url.searchParams.set("tab", tab);
  url.searchParams.set("scroll", "true");
  window.history.pushState({}, "", url.toString());

  setSelectedDoctor(doctorIndex);
  setActiveTab(tab);
  setIsOpen(false); // close the modal if needed

  // Revert URL back to domain after 5 seconds
  setTimeout(() => {
    const cleanUrl = new URL(window.location.origin);
    window.history.pushState({}, "", cleanUrl.toString());
  }, 2000);
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-accent1 via-accent3 to-accent8 overflow-x-hidden font-sans">
      {/* Modal Dialog */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4"
      onClick={() => setIsOpen(false)}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl max-w-md w-full p-0.5 shadow-2xl relative mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-3xl p-6 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          <div className="space-y-5">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold text-gray-800 text-center"
            >
              Book Consultation
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {doctors.map((doctor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`p-4 rounded-2xl space-y-3 ${
                    i === 0 
                      ? 'bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200' 
                      : 'bg-gradient-to-r from-pink-100 to-pink-50 border border-pink-200'
                  }`}
                >
                  <p className="font-semibold text-gray-800 text-lg">{doctor.name}</p>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => handleOptionClick({ doctor: doctor.name, type: "In Person" })}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-300 bg-white hover:bg-blue-500 hover:text-white transition-all text-sm shadow-sm"
                    >
                      <Building className="h-4 w-4" />
                      In Person
                    </button>
                    <button
                      onClick={() => handleOptionClick({ doctor: doctor.name, type: "Video Consultation" })}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-pink-300 bg-white hover:bg-pink-500 hover:text-white transition-all text-sm shadow-sm"
                    >
                      <Video className="h-4 w-4" />
                      Video Consultation
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

        
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              backgroundColor: `rgba(${Math.floor(Math.random() * 155 + 100)}, ${Math.floor(
                Math.random() * 155 + 100
              )}, ${Math.floor(Math.random() * 155 + 100)}, 0.4)`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Navigation */}
<motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-accent2 shadow-lg"
    >
      <div className="container mx-auto px-5 sm:px-4">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center py-2">
          {/* Logo - Centered and dominant */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
          <img
            src="/logo.png"
            alt="Mr. & Mrs. Kids Logo"
            className="w-30 h-30 sm:w-32 sm:h-32 object-contain"
            style={{
              minWidth: '120px',   // Reduced from 192px
              minHeight: '120px',  // Reduced from 208px
              maxHeight: '100px'   // Reduced from 130px
            }}
          />
          </motion.div>

          {/* Social Icons and Book Button - Horizontal below logo */}
<div className="flex flex-col items-end w-full">

  <div className="flex items-center space-x-1.5 justify-between">
    {/* Social Icons */}
    <motion.div 
      className="flex space-x-1.5 px-[-1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <motion.a
        href="https://www.instagram.com/mr.mrs_kidsdoc/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-full flex items-center justify-center"
      >
        <FaInstagram className="w-5 h-5 text-white" />
      </motion.a>

      <motion.a
        href="https://www.youtube.com/@mr.mrs_kidsdoc"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-red-600 p-2 rounded-full flex items-center justify-center"
      >
        <FaYoutube className="w-5 h-5 text-white"/>
      </motion.a>

      <motion.a
        href="https://whatsapp.com/channel/0029Vb6eC8M29758MYBDpB1B"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 p-2 rounded-full flex items-center justify-center"
      >
        <FaWhatsapp className="w-5 h-5 text-white" />
      </motion.a>
    </motion.div>

    {/* Appointment Button - Same size as social icons */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      // className="px-[-1]"
    >
      <Button size={"icon"}
        onClick={() => setIsOpen(true)} 
        className="bg-gradient-to-r from-primary to-accent2 hover:from-accent4 hover:to-accent5 p-1 rounded-full flex items-center justify-center"
      >
        <Calendar1 className="w-1 h-1 text-white" />
      </Button>
    </motion.div>
  </div>
</div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo - Extra large and dominant */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <img
              src="/logo.png"
              alt="Mr. & Mrs. Kids Logo"
              className="w-48 h-52 sm:w-56 sm:h-60 md:w-64 md:h-72 lg:w-72 lg:h-80 xl:w-80 xl:h-88 object-contain"
              style={{
                minWidth: '192px',
                minHeight: '208px',
                maxHeight: '130px'
              }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4 lg:space-x-6"
          >
            {/* Navigation Links */}
            {["Home", "About Us", "Services"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-700 hover:text-primary transition-all duration-300 font-medium"
                >
                  <motion.span whileHover={{ scale: 1.05 }} className="block">
                    {item}
                  </motion.span>
                </Link>
              </motion.div>
            ))}

            {/* Social Icons */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="flex space-x-3"
            >
              <motion.a
                href="https://www.instagram.com/mr.mrs_kidsdoc/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-full text-white"
              >
                <FaInstagram className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://www.youtube.com/@mr.mrs_kidsdoc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-red-600 p-2 rounded-full text-white"
              >
                <FaYoutube className="w-4 h-4" />
              </motion.a>

               <motion.a
                href="https://whatsapp.com/channel/0029Vb6eC8M29758MYBDpB1B"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-green-600 p-2 rounded-full text-white"
              >
                <FaWhatsapp className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Appointment Button */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                <Button onClick={()=>{setIsOpen(true)}} className="bg-gradient-to-r from-primary to-accent2 hover:from-accent4 hover:to-accent5 text-white rounded-full px-4 lg:px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar1 className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative py-10 sm:py-16 lg:py-20 overflow-hidden bg-white">
  {/* Animated background elements */}
  <div className="absolute inset-0 pointer-events-none z-0">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          backgroundColor: `rgba(${Math.floor(Math.random() * 155 + 100)}, ${Math.floor(
            Math.random() * 155 + 100
          )}, ${Math.floor(Math.random() * 155 + 100)}, 0.3)`
        }}
        animate={{
          y: [0, (Math.random() - 0.5) * 50],
          x: [0, (Math.random() - 0.5) * 50],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    ))}
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left Column - Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="space-y-6 lg:space-y-8"
      >
        <motion.div variants={item} className="space-y-4">
          <div className="flex items-center space-x-2 text-primary">
            <motion.div
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg font-semibold"
            >
              Welcome to Our Magical Clinic!
            </motion.span>
          </div>
          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight title-font"
          >
            <motion.div 
  className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-3xl sm:text-4xl md:text-5xl font-bold"
>
<motion.div
  initial={{ opacity: 0, y: 10, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
  className="w-full text-center"
>
  <div className="inline-block">
    <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
      <span className="text-primary">Where Little Smiles </span>
      <span className="bg-gradient-to-r from-primary to-accent2 bg-clip-text text-transparent">
        Meet Big Hearts
      </span>
    </h2>
  </div>
</motion.div>
</motion.div>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Say goodbye to tearful checkups! Mr. & Mrs. Kids Doc bring {new Date().getFullYear() - 2013} years of pediatric magic to turn doctor visits into exciting adventures your children will love
          </motion.p>
        </motion.div>
        {/* <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent2 hover:from-accent4 hover:to-accent5 text-white rounded-full px-6 lg:px-8 py-3 lg:py-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Visit
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.div>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 rounded-full px-6 lg:px-8 py-3 lg:py-4 transition-all duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              About Us
            </Button>
          </motion.div>
        </motion.div> */}
        {/* <motion.div
          className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { number: "500+", text: "Happy Families", color: "primary" },
            { number: "10+", text: "Years Experience", color: "accent2" },
            { number: "24/7", text: "Care Support", color: "accent5" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.9 + index * 0.2,
                type: "spring",
                stiffness: 200,
                damping: 10
              }}
              className="text-center"
            >
              <div className={`text-2xl sm:text-3xl font-bold text-${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {stat.text}
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>

      {/* Right Column - Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        className="relative"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/banner.jpg"
            alt="Happy children at pediatric clinic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent"></div>
        </motion.div>
        {/* Floating Elements */}
        <motion.div
          animate={float}
          className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg z-10"
        >
          <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
        </motion.div>
        <motion.div
          animate={pulse}
          className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-pink-300 rounded-full flex items-center justify-center shadow-lg z-10"
        >
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
        </motion.div>
        <motion.div
          animate={bounce}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5
          }}
          className="absolute top-1/2 -right-4 sm:-right-8 w-12 h-12 sm:w-14 sm:h-14 bg-blue-300 rounded-full flex items-center justify-center shadow-lg z-10"
        >
          <Baby className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-4 left-4 w-8 h-8 bg-green-300 rounded-full flex items-center justify-center shadow-lg z-10"
        >
          <Smile className="w-4 h-4 text-green-600" />
        </motion.div>
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-4 right-4 w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center shadow-lg z-10"
        >
          <Gift className="w-5 h-5 text-purple-600" />
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Fun Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-10 sm:py-16 bg-gradient-to-r from-accent1 via-accent3 to-accent8"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
            {
              icon: <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8" />,
              number: "0 - 18 Yrs",
              text: "Comprehensive Care",
              color: "yellow"
            },
              {
                icon: <BriefcaseMedical className="w-6 h-6 sm:w-8 sm:h-8" />,
                number: "12+",
                text: "Years of Experience",
                color: "pink"
              },
              {
                icon: <Rainbow className="w-6 h-6 sm:w-8 sm:h-8" />,
                number: "365",
                text: "Days of Care",
                color: "purple"
              },
              {
                icon: <Candy className="w-6 h-6 sm:w-8 sm:h-8" />,
                number: "∞",
                text: "Hugs Given",
                color: "blue"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-accent2">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center bg-${stat.color}-100 text-${stat.color}-600`}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-2xl sm:text-3xl font-bold text-gray-800"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.text}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Meet Our Doctors */}
      <section id="about-us" className="py-16 sm:py-20 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <motion.div
          animate={float}
          className="absolute top-10 left-10 w-20 h-20 bg-accent1 rounded-full opacity-50"
        ></motion.div>
        <motion.div
          animate={bounce}
          className="absolute bottom-10 right-10 w-16 h-16 bg-accent3 rounded-full opacity-50"
        ></motion.div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center space-x-2 text-primary mb-4">
              <motion.div
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              <span className="text-base sm:text-lg font-semibold">Meet Your Child Friendly Doctors</span>
            </div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 title-font"
            >
              Mr. & Mrs. Kids
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Two amazing doctors who've dedicated their lives to making healthcare fun, safe, and memorable for
              children and families.
            </motion.p>
          </motion.div> 
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Mr. Kids */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-accent1 hover:border-accent2 overflow-hidden">
                <CardContent className="p-6 sm:p-8 relative">
                  {/* Floating decorations */}
                  <motion.div
                    animate={bounce}
                    className="absolute top-4 right-4 w-8 h-8 bg-blue-200 rounded-full opacity-50"
                  ></motion.div>
                  <motion.div
                    animate={pulse}
                    className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-200 rounded-full opacity-50"
                  ></motion.div>
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
                    >
                      <Image
                        src="/male.jpg"
                        alt="Dr. Mr. Kids"
                        fill
                        className="object-cover rounded-full border-4 border-blue-200 shadow-lg"
                      />
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </motion.div>
                    </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Dr Rishivardhan Reddy<br/><span className="text-yellow-500">(Mr. Kids Doc)</span></h3>
                    <motion.p
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-blue-500 font-semibold text-lg"
                    >
                     👶  New Born Specialist
                    </motion.p>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-center text-sm sm:text-base">
                      Pediatrician and Neonatologist
                      <br/>
                      Consultant at Aster Prime hospital - Ameerpet <br/>
                      MBBS, MD. PEDIATRICS <br/>
                      Fellow in Neonatalogy(NNF) <br/>
                      Diploma in Pediatrics ( RCPI , Ireland) <br/>
                      IPPN , PGPN ( Boston ,USA)
                    </p>
                    <p className="text-center italic text-sm sm:text-base">
                      "Little ones see the world with wonder — and I’m here to make sure they grow healthy, strong, and full of joy!"
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
                          text: "Over 12 years of turning doctor visits into joyful adventures"
                        },
                        {
                          icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />,
                          text: "Dedicated to making doctor visits feel safe, friendly, and even fun"
                        },
                        {
                          icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />,
                          text: "Armed with patience, and equipped with playful tricks!"
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          {item.icon}
                          <span className="text-sm sm:text-base">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs sm:text-sm">
                        <strong>Fun Fact:</strong>
                        Dedicated to nurturing little hearts with kindness, expertise, and a sprinkle of joy—making every check-up an adventure in care.
                        </p>
                    </div>
                    <div className="flex justify-center pt-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a href="https://www.linkedin.com/in/rishivardhan-reddy-4805a3111/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                          <Linkedin className="w-4 h-4 mr-2" />
                          Rishivardhan Reddy
                        </Button>
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            {/* Mrs. Kids */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-accent1 hover:border-accent2 overflow-hidden">
                <CardContent className="p-6 sm:p-8 relative">
                  {/* Floating decorations */}
                  <motion.div
                    animate={bounce}
                    className="absolute top-4 right-4 w-8 h-8 bg-pink-200 rounded-full opacity-50"
                  ></motion.div>
                  <motion.div
                    animate={pulse}
                    className="absolute bottom-4 left-4 w-6 h-6 bg-purple-200 rounded-full opacity-50"
                  ></motion.div>
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
                    >
                      <Image
                        src="/female.jpg"
                        alt="Dr. Mrs. Kids"
                        fill
                        className="object-fit rounded-full border-4 border-pink-200 shadow-lg"
                      />
                      <motion.div
                        animate={pulse}
                        className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 bg-pink-400 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </motion.div>
                    </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Dr Sahithi Reddy <br/><span className="text-yellow-500">(Mrs. Kids Doc)</span></h3>
                  
                    <motion.p
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-pink-500 font-semibold text-lg"
                    >
                      📚 Intensive Care Expert
                    </motion.p>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-center text-sm sm:text-base">
                      Pediatrician and Intensivist<br/>
                      Consultant at Paramita children's hospital <br/>
                      MBBS, MD. PEDIATRICS IDPCCM <br/>
                      D.I.P.( RCPI , Ireland) <br/>
                      PGPN ( Boston ,USA)<br/>
                      <br/>
                    </p>
                    <p className="text-center italic text-sm sm:text-base">
                      "Every child is a little explorer, and I’m here to help them understand how amazing their body is!"
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />,
                          text: "Over 12 years making checkups feel like friendly"
                        },
                        {
                          icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />,
                          text: "Master of the 'no-tears' examination technique"
                        },
                        {
                          icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />,
                          text: "Specializes in turning tears into smiles"
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          {item.icon}
                          <span className="text-sm sm:text-base">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs sm:text-sm">
                        <strong>Fun Fact:</strong> A guardian of childhood wellness, blending medical excellence with gentle reassurance to help kids grow up healthy and happy.
                      </p>
                    </div>
                    <div className="flex justify-center pt-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                          <Linkedin className="w-4 h-4 mr-2" />
                          Sahiti Reddy Avula
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          {/* Shared Social Media */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
<div className="flex flex-col items-center bg-gradient-to-r from-accent1 to-accent3 rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 w-fit mx-auto">
  <span className="text-gray-700 font-bold text-sm mb-2">Follow our Social Media Handles</span>
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-wrap justify-center gap-3"
  >
    <a href="https://www.instagram.com/mr.mrs_kidsdoc" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full text-xs sm:text-sm px-3 py-1 h-8">
        <FaInstagram className="w-4 h-4 mr-2" />
        mrmrs_kidsdoc
      </Button>
    </a>
    <a href="https://www.youtube.com/@mr.mrs_kidsdoc" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 rounded-full text-xs sm:text-sm px-3 py-1 h-8">
        <FaYoutube className="w-4 h-4 mr-2" />
        mrmrs_kidsdoc
      </Button>
    </a>
    <a href="https://www.whatsapp.com/channel/0029Vb6eC8M29758MYBDpB1B" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" className="border-green-300 text-green-600 hover:bg-green-50 rounded-full text-xs sm:text-sm px-3 py-1 h-8">
        <FaWhatsapp className="w-4 h-4 mr-2" />
        MrMrs.KidsDoc
      </Button>
    </a>
  </motion.div>
</div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-20 bg-gradient-to-br from-accent11 to-accent12 relative overflow-hidden">
        {/* Background Decorations */}
        <motion.div
          initial={{ x: -100, y: -100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 0.3 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full -translate-x-16 -translate-y-16"
        ></motion.div>
        <motion.div
          initial={{ x: 100, y: 100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 0.3 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-green-200 rounded-full translate-x-20 translate-y-20"
        ></motion.div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center space-x-2 text-accent5 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles color="black" className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              <span className="text-base sm:text-lg font-semibold text-black">Our Magical Services</span>
            </div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            >
              Everything Your Little One Needs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From routine checkups to specialized care, we make every visit a positive experience.
            </motion.p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
  {
    icon: <Baby className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "New Born Care",
    description: "From first cries to first cuddles — expert care for your newborn’s early days.",
    color: "pink",
    emoji: "👶"
  },
  {
    icon: <PersonStanding className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Well-Child Visits",
    description: "Routine checkups to track growth, milestones, and overall health — at every stage.",
    color: "yellow",
    emoji: "👦"
  },
  {
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Vaccinations",
    description: "Gentle and safe immunizations to protect your child from preventable illnesses.",
    color: "blue",
    emoji: "🛡️"
  },
  {
    icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Developmental and Behavioral Screening",
    description: "Early identification and support for your child’s cognitive, emotional, and social growth.",
    color: "pink",
    emoji: "🛏️"
  },
  {
    icon: <ClipboardPenLine className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Growth Assessment and Nutrition Advice",
    description: "Personalized guidance on nutrition, healthy weight, and physical development.",
    color: "yellow",
    emoji: "🗒️"
  },
  {
    icon: <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Sick Visits",
    description: "Prompt care for fevers, coughs, and common childhood illnesses — with a comforting touch.",
    color: "blue",
    emoji: "🌡️"
  },
  // {
  //   icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
  //   title: "24/7 Support",
  //   description: "Round-the-clock support for urgent concerns — because parenting doesn’t follow a schedule.",
  //   color: "red",
  //   emoji: "⏰"
  // }
]
.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
              >
                <Card
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 hover:border-accent2 overflow-hidden"
                >
                  <CardContent className="p-6 text-center relative">
                    {/* Background decoration */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-2 right-2 text-2xl"
                    >
                      {service.emoji}
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-${service.color}-100 text-${service.color}-600 group-hover:scale-110 transition-all duration-300`}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-accent5 transition-colors duration-300">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent1 to-accent3 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg -z-10"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <TestimonialsSection /> */}

      {/* Book Appointment */}
      <motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-16 sm:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden"
>
  {/* Subtle animated particles */}
  <div className="absolute inset-0">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 8 + 4}px`,
          height: `${Math.random() * 8 + 4}px`,
          backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.15 + 0.05})`
        }}
        animate={{
          y: [0, (Math.random() - 0.5) * 40],
          x: [0, (Math.random() - 0.5) * 40],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: Math.random() * 12 + 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    ))}
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <motion.h2
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: "200% auto",
          backgroundImage: "linear-gradient(to right, #e0f2fe, #bae6fd, #a5f3fc, #bae6fd, #e0f2fe)"
        }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text py-5 mb-6"
      >
        Book a Checkup for your child right away
      </motion.h2>

      {/* Rest of the component remains the same */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
      >
        Book an appointment today and let us make your child's healthcare journey a magical experience they'll
        actually look forward to!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button onClick={()=>{setIsOpen(true)}}
          size="lg"
          className="bg-white text-indigo-600 hover:bg-gray-50 rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
          >
          <Calendar1 className="w-5 h-5 mr-2" />
          Book Appointment
          <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-white"
      >
        {[
          {
            icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3" />,
            title: "Flexible Hours",
            text: "Early morning and evening appointments available"
          },
          {
            icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3" />,
            title: "Convenient Location",
            text: "Easy parking and kid-friendly waiting area"
          },
          {
            icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3" />,
            title: "Family-Centered Care",
            text: "We treat the whole family with love and respect"
          }
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <motion.div
              animate={
                index === 0
                  ? { rotate: 360 }
                  : index === 1
                  ? bounce
                  : pulse
              }
              transition={
                index === 0
                  ? { duration: 10, repeat: Infinity, ease: "linear" }
                  : index === 1
                  ? { duration: 1.5, repeat: Infinity, ease: easeOut }
                  : { duration: 2, repeat: Infinity }
              }
            >
              {stat.icon}
            </motion.div>
            <h3 className="font-semibold text-base sm:text-lg">{stat.title}</h3>
            <p className="text-sm sm:text-base text-white/80">{stat.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</motion.section>

      {/* Google Business */}
      <GoogleBusinessProfile />

      {/* Appointment Form */}
      <AppointmentForm />

      {/* Contact */}
      {/* <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 sm:gap-12"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
              >
                Get in Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl text-gray-600 mb-8"
              >
                We'd love to hear from you! Reach out with questions, concerns, or just to say hello.
              </motion.p>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  {
                    icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
                    title: "Visit Us",
                    text: "Plot No 4, HMDA Maitrivanam, Satyam Theatre Rd, beside Blue Fox Hotel, Kumar Basti, Srinivasa Nagar, Ameerpet, Hyderabad, Telangana 500038"
                  },
                  {
                    icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent5" />,
                    title: "Call Us",
                    text: "91+ 9059033216"
                  },
                  {
                    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent2" />,
                    title: "Email Us",
                    text: "hello@mrandmrskids.com"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-accent1 rounded-full flex items-center justify-center mt-1"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 pt-8 border-t border-gray-200"
              >
                <h3 className="font-semibold text-gray-800 mb-4 text-sm sm:text-base">Follow Our Adventures</h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {[
                    { icon: <Instagram className="w-4 h-4 mr-2" />, text: "@dr.mrkids", color: "pink" },
                    { icon: <Instagram className="w-4 h-4 mr-2" />, text: "@dr.mrskids", color: "blue" },
                    { icon: <Youtube className="w-4 h-4 mr-2" />, text: "YouTube", color: "red" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" className={`border-${item.color}-300 text-${item.color}-600 hover:bg-${item.color}-50`}>
                        {item.icon}
                        {item.text}
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-6 sm:p-8">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-xl sm:text-2xl font-bold text-gray-800 mb-6"
                  >
                    Send Us a Message
                  </motion.h3>
                  <motion.form
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <motion.div variants={item} className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Parent Name</label>
                        <motion.input
                          whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(236, 72, 153, 0.5)" }}
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Child's Name</label>
                        <motion.input
                          whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(236, 72, 153, 0.5)" }}
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary"
                        />
                      </div>
                    </motion.div>
                    <motion.div variants={item}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <motion.input
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(236, 72, 153, 0.5)" }}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary"
                      />
                    </motion.div>
                    <motion.div variants={item}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <motion.input
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(236, 72, 153, 0.5)" }}
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary"
                      />
                    </motion.div>
                    <motion.div variants={item}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <motion.textarea
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(236, 72, 153, 0.5)" }}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary resize-none"
                      ></motion.textarea>
                    </motion.div>
                    <motion.div variants={item}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-gradient-to-r from-primary to-accent2 hover:from-accent4 hover:to-accent5 text-white rounded-lg py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                          Send Message
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Footer */}
      <motion.footer
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 relative overflow-hidden"
>
  {/* Background decorations */}
  <div className="absolute inset-0">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 5 + 2}px`,
          height: `${Math.random() * 5 + 2}px`,
          backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})`
        }}
        animate={{
          y: [0, (Math.random() - 0.5) * 20],
          x: [0, (Math.random() - 0.5) * 20],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {/* Logo Section - Updated with larger responsive logo */}
      <motion.div variants={item} className="space-y-4">
        <div className="flex flex-col items-start gap-4">
          <motion.div 
            className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="logo.png" 
              alt="Mr. & Mrs. Kids Logo" 
              className="w-full h-auto object-contain" 
              style={{
                minWidth: '150px', // Ensures good visibility on mobile
                maxWidth: '300px'  // Prevents it from getting too large
              }}
            />
          </motion.div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Making healthcare magical for children and families since 2014.
          </p>
        </div>
      </motion.div>

      {/* Rest of the footer content remains the same */}
      <motion.div variants={item}>
        <h3 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h3>
        <div className="space-y-2">
          {['Home', 'About Us', 'Services'].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                {link}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item}>
        <h3 className="font-semibold mb-4 text-sm sm:text-base">Services</h3>
        <div className="space-y-2 text-gray-400 text-sm sm:text-base">
          {['New Born Care','Well-Child Visits', 'Vaccinations', 'Developmental and Behavioral Screening', 'Growth Assessment and Nutrition Advice', 'Sick Visits'].map((service, index) => (
            <motion.p
              key={index}
              whileHover={{ x: 5, color: "#fff" }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              {service}
            </motion.p>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item}>
        <h3 className="font-semibold mb-4 text-sm sm:text-base">Connect with Us</h3>
        <div className="space-y-2 text-sm sm:text-base">
          {/* <p className="text-gray-400">Aster Prime Hospital</p>
          <p className="text-gray-400">Plot No 4, HMDA Maitrivanam, Satyam Theatre Rd, beside Blue Fox Hotel, Kumar Basti,</p>
          <p className="text-gray-400">Srinivasa Nagar,Ameerpet, Hyderabad, Telangana 500038</p> */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex space-x-3 pt-2"
          >
          {[
          { 
          icon: <FaInstagram className="w-5 h-4" />, 
          color: "bg-gradient-to-br from-purple-500 to-pink-500",
          link: "https://www.instagram.com/mr.mrs_kidsdoc/" 
          },
          { 
          icon: <FaYoutube className="w-5 h-5" />, 
          color: "bg-red-600",
          link: "https://www.youtube.com/@mr.mrs_kidsdoc" 
          },
          { 
          icon: <FaWhatsapp className="w-5 h-5" />, 
          color: "bg-green-600",
          link: "https://whatsapp.com/channel/0029Vb6eC8M29758MYBDpB1B"
          },
          ].map((item, index) => (
          <motion.div
          key={index}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          >
          <a href={item.link} target="_blank" rel="noopener noreferrer">
          <Button
          size="sm"
          className={`${item.color} text-white p-2 rounded-full hover:opacity-90 transform transition-all duration-300`}
          >
          {item.icon}
          </Button>
          </a>
          </motion.div>
          ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="border-t border-gray-700 mt-8 pt-8 text-center"
    >
      <p className="text-gray-400 text-sm sm:text-base">
        © {new Date().getFullYear()}{" "}
        <motion.a
          whileHover={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: "200% auto",
            backgroundImage: "linear-gradient(to right, #a855f7, #ec4899, #a855f7)"
          }}
          className="font-medium text-transparent bg-clip-text"
        >
          Mr. & Mrs. Kids Doc
        </motion.a>{" "}
        All rights reserved. | Made with ❤️ for little ones everywhere.
      </p>
    </motion.div>
  </div>
</motion.footer>
    </div>
  );
}