import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    tag: "CASE HISTORY",
    title: "Textile Mill Fire in Faisalabad",
    desc: "Major fire at a textile processing hall measuring 50,000 sq ft and employing 800 workers. All weaving and spinning machinery was affected by flames, smoke, and water damage.",
    outcome: "Claim successfully negotiated from PKR 50M to PKR 120M.",
    image: "/Heroimage/fire_adjuster.webp",
  },
  {
    tag: "CASE HISTORY",
    title: "Explosion in Pharma Industry",
    desc: "Explosion in a Lahore pharmaceutical plant caused by thermal runaway in a chemical reaction vessel. Combined Material Damage and Business Interruption loss.",
    outcome: "Full recovery of PKR 85M achieved via expert root cause analysis.",
    image: "/about/factory.webp",
  },
  {
    tag: "CASE HISTORY",
    title: "Construction All Risk – Collapse in Karachi",
    desc: "Collapse at a major commercial high-rise construction site with a total loss of specialized lifting equipment and scaffolding, caused by sudden foundation failure.",
    outcome: "Total settlement of PKR 35M secured against initial insurer rejection.",
    image: "/Heroimage/adjuser.webp",
  },
  {
    tag: "CASE HISTORY",
    title: "Machinery Breakdown at Power Plant",
    desc: "Severe breakdown of a 320 kVA generator in a combined cycle electrical power plant in Sindh. Thorough metallurgical testing proved sudden mechanical failure.",
    outcome: "Damages assessed and fully compensated at PKR 150 Million.",
    image: "/Heroimage/flux-2-pro-20251231_a_remove_blue_overlay_.webp",
  },
];

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-200 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carousel Container */}
        <div className="relative w-full shadow-2xl bg-white overflow-hidden max-w-5xl mx-auto h-[600px] md:h-[450px]">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Image Section (Top half on mobile, full on desktop) */}
              <div className="absolute left-0 top-0 w-full h-1/2 md:h-full">
                <img 
                  src={cases[currentIndex].image} 
                  alt={cases[currentIndex].title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blue Content Box (Bottom half on mobile, Right 45% overlaid on desktop) */}
              <div className="absolute left-0 bottom-0 w-full h-1/2 md:left-auto md:right-0 md:top-0 md:w-[45%] md:h-full bg-[#1d4ed8]/95 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 z-10">
                <h4 className="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase mb-1 drop-shadow-md">
                  {cases[currentIndex].tag}
                </h4>
                <h3 className="text-white/90 font-medium text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 leading-tight">
                  {cases[currentIndex].title}
                </h3>
                <p className="text-blue-50 text-sm md:text-base leading-relaxed mb-4">
                  {cases[currentIndex].desc}
                </p>
                <p className="text-white font-semibold text-sm md:text-base">
                  {cases[currentIndex].outcome}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/4 md:top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-2 md:p-3 z-20 transition-colors"
            aria-label="Previous Case"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 md:left-[55%] md:right-auto top-1/4 md:top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-2 md:p-3 z-20 transition-colors md:-ml-[48px]"
            aria-label="Next Case"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {cases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full border-2 border-gray-500 transition-all ${
                idx === currentIndex ? "bg-gray-600 border-gray-600 w-3.5 h-3.5" : "bg-transparent hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
