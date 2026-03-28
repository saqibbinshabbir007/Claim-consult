import { motion } from "framer-motion";
import { Factory, Pill, UtensilsCrossed, FlaskConical, Zap } from "lucide-react";
import factoryImg from "@/assets/illustrations/factory.png";

const industries = [
  { icon: Factory, name: "Textile", desc: "Spinning mills, weaving units, dyeing & finishing plants" },
  { icon: Pill, name: "Pharma", desc: "Pharmaceutical manufacturing & reactor facilities" },
  { icon: UtensilsCrossed, name: "Food Processing", desc: "Food & beverage manufacturing plants" },
  { icon: FlaskConical, name: "Chemicals", desc: "Chemical processing & petrochemical facilities" },
  { icon: Zap, name: "Power Plants", desc: "Thermal, hydro & renewable energy installations" },
];

const Industries = () => {
  return (
    <section className="bg-lightblue py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <img src={factoryImg} alt="Industries" loading="lazy" className="h-40 mx-auto mb-8" />
          <span className="text-kpmgmid text-sm font-semibold tracking-widest uppercase">Sectors We Serve</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-darktext mt-3">Industries</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white rounded-xl border border-blue-100 p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-lightblue flex items-center justify-center">
                <ind.icon className="w-6 h-6 text-kpmgmid" />
              </div>
              <h3 className="font-bold text-darktext mb-1">{ind.name}</h3>
              <p className="text-slategray text-xs">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
