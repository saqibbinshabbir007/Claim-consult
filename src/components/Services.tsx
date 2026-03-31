import { motion } from "framer-motion";
import { FileSearch, Microscope, FileText, Handshake } from "lucide-react";

const services = [
  {
    number: "01",
    icon: FileSearch,
    title: "Policy Review",
    tagline: "Know exactly what you are entitled to before the negotiation begins.",
    coverage: [
      "Full analysis of policy wording, conditions, and exclusions",
      "Identification of all applicable coverage heads",
      "Assessment of under-insurance and sum insured adequacy",
      "Development of a claim strategy before submission",
    ],
    detail: "Most policyholders submit claims without fully understanding their own policy. Insurers rely on this. We conduct a thorough review of your coverage — identifying every clause that applies to your loss and building a claim strategy that eliminates ambiguity from the outset.",
  },
  {
    number: "02",
    icon: Microscope,
    title: "Root Cause Analysis",
    tagline: "Engineering-grade investigation that establishes the true cause of loss.",
    coverage: [
      "On-site technical investigation by B.E qualified engineers",
      "Mechanical and electrical failure analysis",
      "Metallurgical and process examination where required",
      "Formal RCA report prepared to insurance standards",
    ],
    detail: "Insurers reject claims when cause of loss is not properly established. Our engineers — with direct field experience in textile, power, and pharmaceutical plants — conduct independent investigations that document root cause with the technical precision needed to support a full recovery.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Claim Documentation",
    tagline: "Every aspect of your loss, documented to withstand insurer challenge.",
    coverage: [
      "Detailed damage assessment and reinstatement cost reports",
      "Business Interruption loss quantification",
      "Technical justification for all claimed amounts",
      "Supporting evidence compilation and presentation",
    ],
    detail: "Weak documentation is the single most common reason claims are underpaid. We prepare complete, technically justified claim packages — covering Material Damage, Business Interruption, and additional costs — structured to close the gaps insurers exploit to reduce settlements.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Claim Handling",
    tagline: "End-to-end representation from first notification to final settlement.",
    coverage: [
      "Liaison with insurer-appointed loss adjusters on your behalf",
      "Attendance at all technical and commercial meetings",
      "Negotiation of settlement quantum",
      "Review and sign-off of final discharge documentation",
    ],
    detail: "From the moment you notify your insurer to the day your settlement is paid, we manage the entire process on your behalf. You deal with your business — we deal with the insurers, adjusters, and surveyors to ensure your claim is resolved at its full and proper value.",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <span className="text-[#2563eb] text-sm font-bold tracking-[0.18em] uppercase block mb-4">What We Do</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] mb-6 uppercase">
            Four Services. One Purpose.
          </h2>
          <p className="text-[#475569] text-base leading-relaxed">
            Every service we provide is designed to do one thing — recover the maximum amount your policy entitles you to. We handle the technical, commercial, and negotiation work so you can focus on getting your business back on its feet.
          </p>
        </motion.div>

        {/* Services — Alternating Layout */}
        <div className="space-y-0 divide-y divide-gray-100">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-0 py-14 group"
              >
                {/* Number + Icon */}
                <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3 mb-6 lg:mb-0">
                  <span className="text-4xl font-black text-gray-100 group-hover:text-[#dbeafe] transition-colors leading-none select-none">
                    {svc.number}
                  </span>
                  <Icon strokeWidth={1.5} className="w-7 h-7 text-[#2563eb]" />
                </div>

                {/* Main Content */}
                <div className="lg:col-span-5 lg:pr-12">
                  <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2 uppercase tracking-wide">
                    {svc.title}
                  </h3>
                  <p className="text-[#2563eb] text-sm font-semibold mb-5 leading-snug">
                    {svc.tagline}
                  </p>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    {svc.detail}
                  </p>
                </div>

                {/* Coverage Points */}
                <div className="lg:col-span-6 lg:pl-12 lg:border-l border-gray-100 mt-8 lg:mt-0 flex flex-col justify-center">
                  <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-bold mb-4">
                    What This Covers
                  </p>
                  <ul className="space-y-3">
                    {svc.coverage.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-[#334155]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0 mt-1.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#00338D] p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-xl lg:text-2xl font-extrabold text-white mb-2">
              Have a claim you need assessed?
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xl">
              Contact us for an initial consultation — we will review your case and advise you on the best course of action at no obligation.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 bg-white text-[#00338D] font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-blue-50 transition-colors"
          >
            Book Free Consultation
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
