"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Video, ChevronRight } from "lucide-react";
import { useState, useEffect, JSX } from "react";

interface ConsultationOption {
  name: string;
  type: string;
  icon: JSX.Element;
  href: string;
  isOnline: boolean;
  doctorIndex: number;
}

interface ConsultationModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setActiveTab: (value: "clinic" | "online") => void;
  setSelectedDoctor: (value: number) => void;
}

export default function ConsultationModal({
  isOpen,
  setIsOpen,
  setActiveTab,
  setSelectedDoctor,
}: ConsultationModalProps) {
  const options: ConsultationOption[] = [
    {
      name: "Dr. Rishivardhan Reddy Clinic",
      type: "In-person",
      icon: <Home className="w-5 h-5 text-primary" />,
      href: "#book-clinic-rishi",
      isOnline: false,
      doctorIndex: 0,
    },
    {
      name: "Dr. Rishivardhan Reddy Online",
      type: "Video Consultation",
      icon: <Video className="w-5 h-5 text-primary" />,
      href: "#book-online-rishi",
      isOnline: true,
      doctorIndex: 0,
    },
    {
      name: "Dr. Sahithi Reddy Avula Clinic",
      type: "In-person",
      icon: <Home className="w-5 h-5 text-primary" />,
      href: "#book-clinic-sahithi",
      isOnline: false,
      doctorIndex: 1,
    },
    {
      name: "Dr. Sahithi Reddy Avula Online",
      type: "Video Consultation",
      icon: <Video className="w-5 h-5 text-primary" />,
      href: "#book-online-sahithi",
      isOnline: true,
      doctorIndex: 1,
    },
  ];

  const handleOptionClick = (option: ConsultationOption) => {
    setIsOpen(false);
    setActiveTab(option.isOnline ? "online" : "clinic");
    setSelectedDoctor(option.doctorIndex);

    setTimeout(() => {
      const element = document.getElementById(option.href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  return (
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
            className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors"
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
                className="space-y-3"
              >
                {options.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary transition-all cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    onClick={() => handleOptionClick(option)}
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      {option.icon}
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-800">{option.name}</p>
                      <p className="text-sm text-gray-500">{option.type}</p>
                    </div>
                    <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}