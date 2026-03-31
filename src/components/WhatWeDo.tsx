import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const servicesGrid = [
  {
    title: "Policy Review",
    desc: "Coverage analysis and claim strategy before you submit.",
    link: "/services",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Root Cause Analysis",
    desc: "Engineering-grade failure investigation and RCA report.",
    link: "/services",
    bgImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Claim Documentation",
    desc: "Technical reports and justification built to withstand scrutiny.",
    link: "/services",
    bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Claim Handling",
    desc: "End-to-end representation and negotiation with insurers.",
    link: "/services",
    bgImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#2563eb] text-sm font-bold tracking-widest uppercase mb-2 block">
            Our Specializations
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-kpmgmid mb-6 font-heading">
            WHAT WE DO
          </h2>
          <p className="text-base sm:text-lg text-center text-slategray leading-relaxed font-sans max-w-3xl mx-auto">
            We represent the policyholder — exclusively. From the moment a loss occurs, we step in on your behalf to assess the damage, establish root cause, prepare technical documentation, and negotiate with insurers to ensure you recover the full value of your claim.
          </p>
        </motion.div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {servicesGrid.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.link}
                className="group relative block w-full h-[340px] overflow-hidden bg-kpmgdark"
              >
                <img
                  src={item.bgImage}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kpmgdark/80 via-kpmgdark/30 to-transparent group-hover:from-[#1e40af]/90 group-hover:via-[#1e40af]/50 group-hover:to-transparent transition-colors duration-500" />

                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <h3 className="text-white font-extrabold text-lg tracking-wide uppercase drop-shadow-lg mb-2 transition-all duration-500 group-hover:-translate-y-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                    {item.desc}
                  </p>
                  <span className="flex items-center gap-1.5 text-white font-bold text-xs mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    Learn More <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
