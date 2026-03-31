import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    image: "/Heroimage/fire_adjuster.webp",
    title: "On-Site Fire Damage Investigation",
    description: "We act on your behalf — our loss assessors respond immediately to industrial fire incidents, gathering critical evidence to secure your full claim entitlement.",
  },
  {
    image: "/Heroimage/adjuser.webp",
    title: "Structural Loss Assessment",
    description: "When fire devastates your facility, our engineers conduct thorough structural assessments, documenting every aspect of your loss to protect your recovery.",
  },
  {
    image: "/Heroimage/flux-2-pro-20251231_a_remove_blue_overlay_.webp",
    title: "Expert Technical Consulting",
    description: "We represent the insured. Our engineers and claim specialists review technical documentation, blueprints, and policies to build your strongest possible claim.",
  },
  {
    image: "/Heroimage/scientists-and-government-officials-inspect-and-collect-chemical-leak-samples-in-industrial-sites-to-be-thoroughly-investigated-in-the-laboratory-photo.webp",
    title: "Industrial Site Inspection",
    description: "On-site investigations conducted solely in the interest of the policyholder. We collect evidence and establish root cause to substantiate your claim in full.",
  },
  {
    image: "/Heroimage/wmremove-transformed.webp",
    title: "Machinery & Equipment Loss Recovery",
    description: "Precise technical valuation of machinery and equipment losses — assessed independently on behalf of the insured to ensure complete and justified recovery.",
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
          <div className="absolute inset-0 bg-kpmgdark/40" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center text-white z-10">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-200 text-xs sm:text-sm font-bold tracking-[0.22em] uppercase mb-5"
          >
            Pakistan's Industrial Loss Assessing Firm
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white font-heading"
            style={{ textShadow: "0 4px 16px rgba(0,0,0,0.55)", letterSpacing: "-0.02em" }}
          >
            Struggling with an<br className="hidden sm:block" /> Insurance Claim?
          </motion.h1>

          {/* Sub headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
          >
            We represent the insured — assessing industrial losses, building your case, and negotiating your maximum recovery.
          </motion.p>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {["Faster Claim Recovery", "Qualified Engineers", "Higher Settlement Rate"].map((v) => (
              <span
                key={v}
                className="flex items-center gap-2 bg-white/15 border border-white/25 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-4 py-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                {v}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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





