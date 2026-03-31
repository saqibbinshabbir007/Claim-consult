import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const services = [
  { name: "Policy Review",           path: "/services" },
  { name: "Root Cause Analysis",     path: "/services" },
  { name: "Claim Documentation",     path: "/services" },
  { name: "Claim Handling",          path: "/services" },
];

const navLinks = [
  { name: "Home",         path: "/" },
  { name: "About",        path: "/about" },
  { name: "Industries",   path: "/industries" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Insights",     path: "/blog" },
  { name: "Contact",      path: "/contact" },
];

const Navbar = () => {
  const [scrolled,           setScrolled]           = useState(false);
  const [mobileOpen,         setMobileOpen]         = useState(false);
  const [servicesOpen,       setServicesOpen]       = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node))
        setServicesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* ── Top Contact Bar ── */}
      <div
        className={`bg-[#001f5c] transition-all duration-300 overflow-hidden ${
          scrolled ? "h-0 opacity-0 border-0" : "h-8 opacity-100 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <p className="text-white text-xs font-medium hidden sm:block">
            Pakistan's Industrial Loss Assessing Firm
          </p>
          <div className="flex items-center gap-6 ml-auto">
            <a
              href="tel:+923398949079"
              className="flex items-center gap-1.5 text-white text-xs font-semibold hover:text-blue-200 transition-colors"
            >
              <Phone size={11} />
              +92 339 8949079
            </a>
            <a
              href="mailto:info@claimsconsults.com"
              className="hidden sm:flex items-center gap-1.5 text-white text-xs font-semibold hover:text-blue-200 transition-colors"
            >
              <Mail size={11} />
              info@claimsconsults.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`bg-kpmgdark transition-all duration-300 ${
          scrolled
            ? "shadow-xl bg-kpmgdark/97 backdrop-blur-md"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20 lg:h-24"
          }`}>

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/Logo/logo.webp"
                alt="Claim Consultants"
                className={`w-auto object-contain drop-shadow-md transition-all duration-300 ${
                  scrolled ? "h-10 lg:h-12" : "h-12 sm:h-14 md:h-16 lg:h-20"
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">

              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 group ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[#2563eb] transition-all duration-200 ${
                    location.pathname === link.path ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                  }`} />
                </Link>
              ))}

              {/* Services Dropdown */}
              <div ref={dropRef} className="relative">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className={`relative flex items-center gap-1 px-4 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 group ${
                    isServicesActive || servicesOpen ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  Services
                  <ChevronDown size={13} className={`mt-px transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[#2563eb] transition-all duration-200 ${
                    isServicesActive || servicesOpen ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                  }`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] bg-white shadow-2xl border-t-[3px] border-[#00338D] z-50 flex"
                    >
                      {/* Left Brand Panel */}
                      <div className="w-[185px] shrink-0 bg-[#00338D] flex flex-col justify-between p-6">
                        <div>
                          <p className="text-xs text-blue-300 uppercase tracking-[0.2em] font-bold mb-3">Our Services</p>
                          <h4 className="text-white font-extrabold text-base leading-snug">
                            Industrial<br />Loss Assessing
                          </h4>
                          <div className="w-8 h-[2px] bg-blue-400 mt-4 mb-4" />
                          <p className="text-blue-200 text-xs leading-relaxed">
                            We represent the insured — across all industrial loss types.
                          </p>
                        </div>
                        <Link
                          to="/services"
                          className="mt-6 inline-block text-xs font-bold text-white border border-white/30 px-3 py-2 hover:bg-white hover:text-[#00338D] transition-colors text-center"
                        >
                          All Services →
                        </Link>
                      </div>

                      {/* Right Services List */}
                      <div className="flex-1 py-2">
                        {services.map((s) => (
                          <Link
                            key={s.name}
                            to={s.path}
                            className="flex items-center justify-between px-5 py-3 text-sm text-[#334155] font-medium hover:bg-[#f1f5f9] hover:text-[#00338D] group transition-colors duration-150 border-b border-gray-50 last:border-0"
                          >
                            <span>{s.name}</span>
                            <span className="text-gray-300 group-hover:text-[#00338D] transition-colors text-lg leading-none">›</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 group ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[#2563eb] transition-all duration-200 ${
                    location.pathname === link.path ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                  }`} />
                </Link>
              ))}

              {/* CTA */}
              <Link
                to="/contact"
                className="ml-4 bg-white text-[#00338D] px-5 py-2.5 text-sm font-bold tracking-wide hover:bg-[#2563eb] hover:text-white transition-colors duration-200 shadow-sm"
              >
                Book Consultation
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-kpmgdark border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-0.5">

                {/* Mobile top contact */}
                <div className="flex items-center gap-4 px-4 py-3 border-b border-white/10 mb-2">
                  <a href="tel:+923398949079" className="flex items-center gap-1.5 text-blue-300 text-xs font-semibold">
                    <Phone size={11} /> +92 339 8949079
                  </a>
                </div>

                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 text-sm font-medium border-l-2 transition-colors ${
                      location.pathname === link.path
                        ? "text-white border-[#2563eb] bg-white/5"
                        : "text-white/75 border-transparent hover:text-white hover:border-white/30"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium border-l-2 transition-colors ${
                      isServicesActive
                        ? "text-white border-[#2563eb] bg-white/5"
                        : "text-white/75 border-transparent hover:text-white hover:border-white/30"
                    }`}
                  >
                    Services
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden border-l border-[#2563eb] ml-4"
                      >
                        {services.map((s) => (
                          <Link
                            key={s.name}
                            to={s.path}
                            className="block px-4 py-2.5 text-sm text-white/65 hover:text-white hover:bg-white/8 transition-colors"
                          >
                            {s.name}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="block px-4 py-3 text-xs font-bold text-[#60a5fa] border-t border-white/10 mt-1"
                        >
                          View All Services →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 text-sm font-medium border-l-2 transition-colors ${
                      location.pathname === link.path
                        ? "text-white border-[#2563eb] bg-white/5"
                        : "text-white/75 border-transparent hover:text-white hover:border-white/30"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  className="block mt-3 bg-white text-[#00338D] px-5 py-3 text-sm font-bold text-center hover:bg-[#2563eb] hover:text-white transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
