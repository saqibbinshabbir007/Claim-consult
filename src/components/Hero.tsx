import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    image: "/Heroimage/fire_adjuster.webp",
    title: "On-Site Fire Damage Investigation",
    description: "Our certified loss adjusters respond immediately to industrial fire incidents, gathering critical evidence to support your maximum claim recovery.",
  },
  {
    image: "/Heroimage/adjuser.webp",
    title: "Structural Loss Assessment",
    description: "When fire devastates your facility, our expert engineers conduct thorough structural assessments to document every aspect of your loss.",
  },
  {
    image: "/Heroimage/flux-2-pro-20251231_a_remove_blue_overlay_.webp",
    title: "Expert Technical Consulting",
    description: "Qualified engineers and claim specialists who review technical documentation, blueprints and policies to build your strongest possible claim.",
  },
  {
    image: "/Heroimage/scientists-and-government-officials-inspect-and-collect-chemical-leak-samples-in-industrial-sites-to-be-thoroughly-investigated-in-the-laboratory-photo.webp",
    title: "Industrial Site Inspection",
    description: "Independent on-site investigations with detailed documentation. Our specialists collect evidence and analyze root causes to substantiate your claim.",
  },
  {
    image: "/Heroimage/wmremove-transformed.webp",
    title: "Machinery & Equipment Loss Recovery",
    description: "Specialized assessment of fire and equipment damage with precise valuation to ensure full recovery of your machinery and asset losses.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center text-white z-10">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-lg font-heading"
            style={{
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
              fontWeight: 700,
              letterSpacing: "-0.02em"
            }}
          >
            {heroSlides[currentSlide].title}
          </motion.h1>

          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl lg:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-semibold"
            style={{
              textShadow: "0 3px 10px rgba(0, 0, 0, 0.5)",
              fontFamily: "'Arial', 'Helvetica Neue', sans-serif",
              letterSpacing: "-0.01em"
            }}
          >
            {heroSlides[currentSlide].description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/contact" className="btn-kpmg text-center">
              Book Free Consultation
            </Link>
            <Link to="/services" className="btn-kpmg-outline text-center">
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white transition-all duration-200 hover:opacity-80"
        aria-label="Previous slide"
      >
        <ChevronLeft size={64} strokeWidth={1.5} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white transition-all duration-200 hover:opacity-80"
        aria-label="Next slide"
      >
        <ChevronRight size={64} strokeWidth={1.5} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            initial={{ scale: index === currentSlide ? 1 : 0.6 }}
            animate={{ scale: index === currentSlide ? 1 : 0.6 }}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-3 h-3"
                : "bg-white/50 w-2 h-2 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
