import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Policy Review",
  "Root Cause Analysis",
  "Claim Documentation",
  "Claim Handling",
];

const quickLinks = [
  { name: "Home",         path: "/" },
  { name: "About",        path: "/about" },
  { name: "Services",     path: "/services" },
  { name: "Industries",   path: "/industries" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Insights",     path: "/blog" },
  { name: "Contact",      path: "/contact" },
];

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#00205c] text-white">

        {/* Top Strip */}
        <div className="border-b border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-blue-200 text-sm font-medium">
              Pakistan's dedicated industrial loss assessing firm — working exclusively for the insured.
            </p>
            <Link
              to="/contact"
              className="shrink-0 bg-white text-[#00338D] text-sm font-bold px-6 py-2.5 hover:bg-[#2563eb] hover:text-white transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Column 1 — Brand */}
            <div className="lg:col-span-1">
              <img
                src="/Logo/logo.webp"
                alt="Claim Consultants"
                className="h-20 sm:h-24 w-auto object-contain mb-6"
              />
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                B.E qualified engineers representing policyholders in insurance claims across Pakistan's textile, power, and pharmaceutical sectors.
              </p>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 pb-3 border-b border-white/10">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/55 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Services */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 pb-3 border-b border-white/10">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s}>
                    <Link
                      to="/services"
                      className="text-white/55 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 pb-3 border-b border-white/10">
                Contact Us
              </h4>
              <ul className="space-y-5">
                <li>
                  <a
                    href="tel:+923398949079"
                    className="flex items-start gap-3 text-white/55 text-sm hover:text-white transition-colors group"
                  >
                    <Phone size={15} className="shrink-0 mt-0.5 text-blue-400" />
                    <span>+92 339 8949079</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@claimsconsults.com"
                    className="flex items-start gap-3 text-white/55 text-sm hover:text-white transition-colors group"
                  >
                    <Mail size={15} className="shrink-0 mt-0.5 text-blue-400" />
                    <span>info@claimsconsults.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/55 text-sm">
                  <MapPin size={15} className="shrink-0 mt-0.5 text-blue-400" />
                  <span>Pakistan — Serving Nationwide Industrial Sectors</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#001440] border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © 2025 Claim Consultants. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Technical Insurance Claim Consultancy — Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
