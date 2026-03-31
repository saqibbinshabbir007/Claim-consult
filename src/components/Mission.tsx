import { motion } from "framer-motion";
import { Target, Briefcase, ShieldCheck, Users, Award, TrendingUp } from "lucide-react";

const missionData = [
  {
    icon: Target,
    title: "What",
    desc: "Independent technical loss assessing, Root Cause Analysis, and comprehensive claim management — always on behalf of the insured.",
  },
  {
    icon: Briefcase,
    title: "For Whom",
    desc: "Policyholders and industrial clients who have suffered a loss and need qualified professionals to represent their interests against insurers.",
  },
  {
    icon: ShieldCheck,
    title: "How",
    desc: "Through site investigations, engineering analysis, and legally sound claim documentation that puts the full weight of evidence on your side.",
  },
  {
    icon: Users,
    title: "By",
    desc: "A team of qualified engineers, claim specialists, and technical consultants with hands-on experience across heavy industry sectors.",
  },
  {
    icon: Award,
    title: "With",
    desc: "Deep technical expertise, strict professional integrity, and a single purpose — protecting the financial recovery of our clients.",
  },
  {
    icon: TrendingUp,
    title: "Why",
    desc: "Because when a major loss hits your business, you deserve someone in your corner who knows exactly what your claim is worth and how to recover it.",
  },
];

const Mission = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column - Strict Corporate Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <div className="border-t-[5px] border-[#2563eb] pt-6 md:pt-8">
              <span className="text-[#2563eb] font-bold tracking-[0.15em] uppercase text-xs md:text-sm block mb-3 md:mb-4">
                Core Principles
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] leading-tight mb-4 md:mb-6">
                OUR MISSION IS TO PROVIDE
              </h2>
              <p className="text-[#475569] text-base sm:text-lg font-medium leading-relaxed border-l-2 border-gray-300 pl-4 py-1">
                Delivering independent, honest, transparent, and legally robust engineering investigations.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Industrial Grid */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-gray-200 border border-gray-200"
            >
              {missionData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white p-6 sm:p-8 hover:bg-[#1e40af] transition-colors duration-300 group flex flex-col"
                  >
                    <Icon strokeWidth={2} className="w-8 h-8 sm:w-10 sm:h-10 text-[#2563eb] group-hover:text-white mb-4 sm:mb-6 transition-colors duration-300" />
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;
