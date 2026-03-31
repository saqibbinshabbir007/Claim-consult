import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const extensiveCases = [
  {
    category: "Fire & Machinery Claim",
    title: "Textile Mill Fire in Faisalabad",
    incident: "A major fire broke out at a massive textile processing hall measuring 50,000 sq ft, employing 800 workers. The flames, smoke, and subsequent water damage severely affected all critical weaving and spinning machinery, halting production.",
    investigation: "Our engineers conducted a full metallurgical and structural review of the affected machinery. The insurer's initial adjuster attempted to write off the loss as partial damage with severe depreciation applied to the 10-year-old equipment.",
    outcome: "Claim successfully negotiated from an initial offer of PKR 50M to a final settlement of PKR 120M, securing actual replacement value for the spinning units.",
    image: "/industries/textile.png",
  },
  {
    category: "Chemical Explosion & Business Interruption",
    title: "Explosion in Lahore Pharmaceutical Plant",
    incident: "A catastrophic explosion occurred in a pharmaceutical plant caused by thermal runaway in a primary chemical reaction vessel. This triggered a massive combined Material Damage and Business Interruption (BI) loss.",
    investigation: "Insurers argued the event was outside the policy scope due to operational negligence. We mobilized our chemical engineering specialists who performed a Root Cause Analysis (RCA) proving an unavoidable mechanical failure in the cooling jacket valves.",
    outcome: "Full recovery of PKR 85M achieved, including comprehensive coverage for the 3-month production downtime under the BI clause.",
    image: "/industries/pharma.png",
  },
  {
    category: "Construction All Risk (CAR)",
    title: "Commercial High-Rise Collapse in Karachi",
    incident: "Sudden foundation failure led to the collapse of a critical section at a major commercial high-rise construction site. This resulted in a total loss of specialized lifting equipment and scaffolding systems.",
    investigation: "The initial claim was rejected by insurers citing 'faulty design' exclusions. Our structural evaluation demonstrated that the failure was caused by unforeseen subterranean water flow, a covered peril under 'Acts of God/Unforeseen site conditions'.",
    outcome: "Total settlement of PKR 35M secured against the initial complete rejection, saving the contractor from bankruptcy.",
    image: "/industries/construction.png",
  },
  {
    category: "Machinery Breakdown (MBD)",
    title: "Generator Failure at Sindh Power Plant",
    incident: "Severe breakdown of a 320 kVA generator in a combined cycle electrical power plant due to sudden internal arcing and stator failure.",
    investigation: "The insurer's adjuster claimed it was a wear-and-tear issue (excluded from MBD). We initiated thorough metallurgical testing of the bearings and stator core which proved the exact moment of sudden, unforeseen mechanical failure.",
    outcome: "Damages were reassessed technically and fully compensated at PKR 150 Million for complete turbine replacement.",
    image: "/industries/power.png",
  }
];

const CaseStudiesPage = () => (
  <>
    <Helmet>
      <title>Case Studies — Claim Consultants | Proven Insurance Claim Results</title>
      <meta name="description" content="Real industrial insurance claim case studies from Pakistan. See how our RCA expertise recovered millions for textile, pharma, and power plant clients." />
    </Helmet>

    {/* Hero Section */}
    <div className="pt-20 lg:pt-24">
      <div className="relative py-24 lg:py-32 overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Heroimage/pages/casestudies.png')` }}
        />
        <div className="absolute inset-0 bg-[#00338D]/45" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-l-[5px] border-white pl-8"
          >
            <span className="text-blue-200 font-bold tracking-[0.18em] uppercase text-sm block mb-4">
              Our Track Record
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 uppercase tracking-tight">
              Case Studies
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-2xl leading-relaxed font-medium">
              Real results from complex industrial claims. See how our technical expertise recovers millions against insurer rejections.
            </p>
          </motion.div>
        </div>
      </div>
    </div>

    {/* Main Case Studies Archive */}
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#0f172a] text-3xl font-extrabold uppercase tracking-widest mb-4">Claim Recovery Archive</h2>
          <div className="w-16 h-1 bg-[#2563eb] mx-auto"></div>
        </div>

        {extensiveCases.map((study, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row items-stretch gap-0 bg-white shadow-2xl overflow-hidden border border-gray-100 ${isEven ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* Image Block */}
              <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] group overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${study.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00338D]/80 via-transparent to-transparent opacity-80" />
                
                {/* Image Overlay Tag */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="bg-[#2563eb] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-sm mb-3 inline-block shadow-sm">
                    {study.category}
                  </span>
                  <div className="text-3xl font-bold opacity-20">0{index + 1}</div>
                </div>
              </div>

              {/* Content Block */}
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] mb-8 leading-tight">
                  {study.title}
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center gap-3 text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                      <ArrowRight className="w-4 h-4 text-[#2563eb]" />
                      The Incident
                    </h4>
                    <p className="text-[#475569] text-base leading-relaxed pl-7">
                      {study.incident}
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-3 text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                      <ArrowRight className="w-4 h-4 text-[#2563eb]" />
                      Our Technical Intervention
                    </h4>
                    <p className="text-[#475569] text-base leading-relaxed pl-7">
                      {study.investigation}
                    </p>
                  </div>
                </div>

                <div className="mt-10 bg-[#f8fafc] border-l-4 border-[#2563eb] p-6 lg:p-8">
                  <h4 className="flex items-center gap-3 text-sm font-bold text-[#00338D] uppercase tracking-widest mb-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2563eb]" />
                    Final Settlement Outcome
                  </h4>
                  <p className="text-[#0f172a] font-bold text-lg leading-relaxed pl-8">
                    {study.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-[#00338D] py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Faced a Similar Industrial Loss?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Do not accept the insurer's initial adjustment without a second technical opinion. Get a free case evaluation from our engineers.</p>
        <a href="/contact" className="inline-block bg-white text-[#00338D] font-bold uppercase tracking-wider py-4 px-10 rounded-sm hover:bg-gray-100 transition-colors shadow-lg">
          Consult Our Experts
        </a>
      </div>
    </section>
  </>
);

export default CaseStudiesPage;
