import { motion } from "framer-motion";
import serviceReading from "@/assets/illustrations/service-reading.png";
import serviceAnalysis from "@/assets/illustrations/service-analysis.png";
import serviceDocs from "@/assets/illustrations/service-documents.png";
import heroAgreement from "@/assets/illustrations/hero-agreement.png";

const services = [
  {
    title: "Policy Review",
    desc: "Comprehensive coverage analysis and claim strategy development. We identify every applicable clause to strengthen your position.",
    img: serviceReading,
  },
  {
    title: "Root Cause Analysis",
    desc: "Independent technical investigation and failure analysis. Engineering-driven RCA that establishes the true cause of loss.",
    img: serviceAnalysis,
  },
  {
    title: "Claim Documentation",
    desc: "Detailed technical reports and justified cost assessments. Every document built to withstand insurer scrutiny.",
    img: serviceDocs,
  },
  {
    title: "Claim Handling",
    desc: "End-to-end claim support from filing to final settlement. Expert negotiation to maximize your recovery.",
    img: heroAgreement,
  },
];

const Services = () => {
  return (
    <section className="bg-blue-600 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-100 text-base font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4">Our Services</h2>
          <p className="text-blue-50 mt-6 max-w-2xl mx-auto text-lg">
            From policy review to final settlement, we provide end-to-end technical consulting for industrial insurance claims.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-blue-top p-10 hover:shadow-lg hover:border-kpmglight transition-all duration-300 group"
            >
              <img src={svc.img} alt={svc.title} loading="lazy" className="h-40 w-auto mb-8 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-darktext mb-4">{svc.title}</h3>
              <p className="text-slategray leading-relaxed text-base">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
