import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, TrendingUp } from "lucide-react";

const units = [
  {
    icon: ShieldCheck,
    title: "Loss Assessing",
    desc: "Independent assessment of fire, explosion, machinery breakdown, and structural losses — conducted by B.E qualified engineers across textile, power, and pharma sectors.",
  },
  {
    icon: Users,
    title: "Root Cause Analysis",
    desc: "Technical failure investigations that establish cause and origin with engineering precision — prepared to the standard required for full claim recovery.",
  },
  {
    icon: Award,
    title: "Business Interruption",
    desc: "Quantification of production downtime, lost output, and increased working costs — ensuring the full commercial impact of your loss is captured in the claim.",
  },
  {
    icon: TrendingUp,
    title: "Claim Documentation & Handling",
    desc: "End-to-end claim management from first notification through to final settlement — with direct negotiation on your behalf at every stage.",
  },
];

const AboutPage = () => (
  <>
    <Helmet>
      <title>About Us — Claim Consultants | Technical Insurance Claim Consultant Pakistan</title>
      <meta name="description" content="B.E qualified mechanical and electrical engineers with hands-on experience in textile, power, and pharma sectors. Pakistan's dedicated industrial loss assessing firm — we represent the insured." />
    </Helmet>

    {/* Hero Banner */}
    <div className="pt-24 lg:pt-28">
      <div className="relative py-24 lg:py-32 overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Heroimage/pages/about.png')` }}
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
              Who We Are
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              ABOUT CLAIM CONSULTANTS
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-2xl leading-relaxed font-medium">
              Pakistan's dedicated loss assessing firm — working exclusively for policyholders and industrial clients since establishment.
            </p>
          </motion.div>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left — Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/5 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-extrabold text-[#00338D] mb-4 uppercase tracking-wide">Our Background</h2>
              <p className="text-[#475569] text-base leading-relaxed">
                Claim Consultants was founded by engineers holding B.E degrees in Mechanical and Electrical Engineering, with direct field experience across Pakistan's textile, pharmaceutical, and power generation sectors. This technical foundation is what separates us from generalist claim consultants — we understand how industrial equipment works, why it fails, and exactly what that failure is worth under an insurance policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#00338D] mb-4 uppercase tracking-wide">Engineering Expertise</h2>
              <p className="text-[#475569] text-base leading-relaxed">
                Our engineers have worked directly inside textile mills, power plants, and pharmaceutical manufacturing facilities — not as consultants observing from a distance, but as technical professionals who understand production processes, machinery systems, and the commercial impact of operational downtime. When a loss occurs, we know what to look for, how to document it, and how to present it in a way that holds up under insurer scrutiny.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#00338D] mb-4 uppercase tracking-wide">Our Position</h2>
              <p className="text-[#475569] text-base leading-relaxed">
                We work for the insured — not the insurer. When a fire, machinery breakdown, or operational failure strikes your facility, the insurance company appoints their own loss adjuster to protect their interests. We step in on your side — conducting an independent Root Cause Analysis, preparing technical claim documentation, and negotiating directly with insurers to ensure you recover the full value of your loss.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#00338D] mb-4 uppercase tracking-wide">Our Reach</h2>
              <p className="text-[#475569] text-base leading-relaxed">
                Operating across Pakistan with field coverage in Karachi, Lahore, Faisalabad, Islamabad, and Sialkot — we respond wherever a loss occurs. Our established network of legal and technical professionals ensures comprehensive support on complex, high-value claims.
              </p>
            </div>
          </motion.div>

          {/* Right — Side Stats / Highlight Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5 space-y-6"
          >
            <div className="bg-[#00338D] text-white p-10 lg:p-12">
              <h3 className="text-xl font-extrabold uppercase tracking-wider mb-8 border-b border-blue-700 pb-4 text-white">
                Why Clients Choose Us
              </h3>
              <ul className="space-y-5 text-blue-100 text-sm leading-relaxed">
                <li className="flex gap-4">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-white shrink-0" />
                  We represent the insured exclusively — no conflict of interest, ever.
                </li>
                <li className="flex gap-4">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-white shrink-0" />
                  Qualified engineers conduct every investigation — not generalist administrators.
                </li>
                <li className="flex gap-4">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-white shrink-0" />
                  Root Cause Analysis prepared to a standard that withstands insurer scrutiny.
                </li>
                <li className="flex gap-4">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-white shrink-0" />
                  Direct negotiation with insurers and loss adjusters on your behalf.
                </li>
                <li className="flex gap-4">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-white shrink-0" />
                  Track record of significantly increasing initial insurer valuations.
                </li>
                <li className="flex gap-4">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-white shrink-0" />
                  Strict confidentiality on all client data and claim details.
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 p-8">
              <h3 className="text-lg font-extrabold uppercase tracking-wider text-[#0f172a] mb-6">
                Industry Partnerships
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                Claim Consultants maintains professional affiliations with engineering bodies and insurance institutions in Pakistan, ensuring our assessors remain current with technical standards, policy developments, and market practice across all major industrial sectors.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* Business Units */}
    <section className="bg-[#f8fafc] py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#2563eb] font-bold tracking-[0.15em] uppercase text-sm block mb-3">
            How We Are Structured
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] uppercase">
            Our Service Units
          </h2>
          <p className="text-[#475569] mt-4 max-w-2xl text-base leading-relaxed">
            To serve clients across different loss types and industrial environments, we operate through four specialist units — each focused on delivering technical depth in its area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-gray-200 border border-gray-200">
          {units.map((unit, i) => {
            const Icon = unit.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white p-8 lg:p-10 hover:bg-[#1e40af] transition-colors duration-300 group"
              >
                <Icon strokeWidth={2} className="w-10 h-10 text-[#2563eb] group-hover:text-white mb-6 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 uppercase tracking-wide group-hover:text-white transition-colors duration-300">
                  {unit.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                  {unit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  </>
);

export default AboutPage;
