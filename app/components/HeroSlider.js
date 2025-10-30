"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSlider({ portfolios }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === portfolios.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Clear timer on component unmount
  }, [portfolios.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === portfolios.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? portfolios.length - 1 : prev - 1));
  };

  if (!portfolios || portfolios.length === 0) {
    return <div className="h-96 bg-gray-200 w-full flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-black">
      {/* Slider Images (Animated) */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Link href={`/portfolio/${portfolios[currentSlide].slug}`}>
            <Image
              src={portfolios[currentSlide].imageGallery.nodes[0].guid}
              alt={portfolios[currentSlide].title}
              fill
              className="object-cover cursor-pointer"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Slide Title */}
            <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white text-3xl md:text-5xl font-semibold hover:text-gray-200 transition-colors"
              >
                {portfolios[currentSlide].title}
              </motion.h2>
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 text-white/70 hover:text-white transition-opacity z-10">
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 text-white/70 hover:text-white transition-opacity z-10">
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {portfolios.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}
