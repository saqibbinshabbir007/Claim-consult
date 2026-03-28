import { motion } from "framer-motion";
import dataReport from "@/assets/illustrations/data-report.png";

const cases = [
  {
    title: "Textile Mill Fire — Faisalabad",
    problem: "Insurer undervalued machinery loss by 40%",
    analysis: "RCA proved electrical fault — full coverage applicable under standard fire policy",
    outcome: "Claim increased from PKR 8M to PKR 14M",
  },
  {
    title: "Pharma Reactor Breakdown — Lahore",
    problem: "Insurer claimed operator error — not covered under machinery breakdown policy",
    analysis: "Material fatigue proved via metallurgical analysis — manufacturing defect, fully covered",
    outcome: "Full PKR 22M recovered, operations resumed in 45 days",
  },
  {
    title: "Power Plant Flood Damage — Sindh",
    problem: "Partial claim offered, Business Interruption clause ignored by adjuster",
    analysis: "Business interruption clause identified and applied with supporting revenue data",
    outcome: "Additional PKR 11M recovered — total settlement PKR 31M",
  },
];

const badgeStyles = {
  problem: "bg-red-100 text-red-700",
  analysis: "bg-blue-100 text-kpmgmid",
  outcome: "bg-emerald-100 text-emerald-700",
};

const CaseStudies = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <img src={dataReport} alt="Case studies" loading="lazy" className="h-40 mx-auto mb-8" />
          <span className="text-kpmgmid text-sm font-semibold tracking-widest uppercase">Proven Results</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-darktext mt-3">Case Studies</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white border border-blue-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="bg-kpmgdark px-6 py-4">
                <h3 className="text-white font-bold">{c.title}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${badgeStyles.problem}`}>Problem</span>
                  <p className="text-slategray text-sm">{c.problem}</p>
                </div>
                <div>
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${badgeStyles.analysis}`}>Our Analysis</span>
                  <p className="text-slategray text-sm">{c.analysis}</p>
                </div>
                <div>
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${badgeStyles.outcome}`}>Outcome</span>
                  <p className="text-darktext text-sm font-semibold">{c.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
