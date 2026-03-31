import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Our initial claim was assessed at PKR 40 million by the insurer's adjuster. Claim Consultants reviewed our policy, conducted an independent RCA, and recovered PKR 95 million. The difference was entirely down to their technical documentation.",
    name: "Director Operations",
    company: "Textile Mill, Faisalabad",
  },
  {
    quote: "After a major boiler failure at our plant, we had no idea how to deal with the insurer. Claim Consultants handled everything — the investigation, the paperwork, and the negotiation. We received full settlement within three months.",
    name: "General Manager",
    company: "Power Generation Facility, Sindh",
  },
  {
    quote: "The insurer initially rejected our Business Interruption claim on grounds of insufficient evidence. Their team prepared a detailed production loss report backed by engineering analysis. The claim was approved in full.",
    name: "Head of Finance",
    company: "Pharmaceutical Manufacturer, Lahore",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-[#2563eb] text-sm font-bold tracking-[0.18em] uppercase block mb-3">
            Client Results
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] uppercase">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-gray-200 border border-gray-200">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white p-8 lg:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="text-[#00338D] text-4xl font-black leading-none mb-6 select-none">"</div>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {t.quote}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-[#0f172a] font-bold text-sm">{t.name}</p>
                <p className="text-[#94a3b8] text-xs mt-0.5">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
