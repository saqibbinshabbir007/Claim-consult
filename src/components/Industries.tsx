import { motion } from "framer-motion";

const industries = [
  { 
    name: "Textile", 
    desc: "Spinning mills, weaving units, dyeing & finishing plants.",
    image: "/industries/textile.png"
  },
  { 
    name: "Pharmaceutical", 
    desc: "Manufacturing, laboratories & complex chemical reactor facilities.",
    image: "/industries/pharma.png"
  },
  { 
    name: "Food Processing", 
    desc: "Large-scale food & beverage manufacturing properties.",
    image: "/industries/food.png"
  },
  { 
    name: "Chemicals", 
    desc: "Chemical processing plants, refineries & petrochemical facilities.",
    image: "/industries/chemical.png" 
  },
  { 
    name: "Power Plants", 
    desc: "Thermal, hydro & advanced renewable energy installations.",
    image: "/industries/power.png" 
  },
  { 
    name: "Infrastructure", 
    desc: "Heavy civil engineering, commercial projects & physical infrastructure.",
    image: "/industries/construction.png" 
  },
];

const Industries = () => {
  return (
    <>
    <section className="bg-[#00338D] py-20 lg:py-28 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 border-l-[5px] border-white pl-6"
          >
            <span className="text-blue-200 font-bold tracking-[0.15em] uppercase text-sm block mb-3">
              Sectors We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-2">
              INDUSTRIAL EXPERTISE
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mt-4 max-w-lg leading-relaxed">
              Decades of field engineering experience and technical loss assessing across Pakistan's most demanding industrial sectors.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="w-24 h-1 bg-blue-800 mb-2"></div>
            <div className="w-16 h-1 bg-white"></div>
          </motion.div>
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group overflow-hidden h-[300px] sm:h-[350px] lg:h-[400px] bg-black cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={ind.image} 
                alt={ind.name} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Heavy Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002266] via-[#00338D]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Content text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* Accent blue line */}
                <div className="w-0 h-[3px] bg-[#2563eb] mb-4 group-hover:w-16 transition-all duration-500 ease-out"></div>
                
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide uppercase">
                  {ind.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-100 line-clamp-2">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

    {/* Beyond Industry Lines - White BG Section */}
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="border-l-[5px] border-[#00338D] pl-6">
              <span className="text-[#2563eb] font-bold tracking-[0.15em] uppercase text-sm block mb-3">
                Classes of Claims
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#0f172a] mb-2">
                BEYOND INDUSTRY LINES
              </h3>
              <p className="text-[#475569] text-base sm:text-lg mt-4 max-w-lg leading-relaxed">
                We handle complex insurance claims across all major commercial and industrial loss classes — not limited to any single sector.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { name: "Fire & Explosion", desc: "Factory fires, explosions, smoke & water damage across all industrial properties.", image: "/industries/fire.png" },
              { name: "Marine & Cargo", desc: "Cargo in transit, vessel hull damage, freight losses at sea and port.", image: "/industries/marine.png" },
              { name: "Aviation & Hull", desc: "Aircraft hull, aviation equipment and hangar-related loss assessments.", image: "/industries/aviation.png" },
              { name: "Port & Terminal", desc: "Storage terminals, port operations, bulk cargo handling and container losses.", image: "/industries/terminal.png" },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group overflow-hidden h-[300px] sm:h-[350px] lg:h-[400px] bg-black cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002266] via-[#00338D]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="w-0 h-[3px] bg-[#2563eb] mb-4 group-hover:w-16 transition-all duration-500 ease-out" />
                  <h4 className="text-2xl font-bold text-white mb-2 tracking-wide uppercase">
                    {item.name}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-100 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Industries;
