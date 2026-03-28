import { motion } from "framer-motion";
import { Shield, Search, Target } from "lucide-react";
import aboutImg from "@/assets/illustrations/about-engineer.png";

const credentials = [
  { icon: Shield, title: "Engineering Background", desc: "Qualified engineers with deep industrial knowledge across multiple sectors." },
  { icon: Search, title: "RCA Specialist", desc: "Root Cause Analysis experts who uncover the real story behind every loss." },
  { icon: Target, title: "Claim Strategy Expert", desc: "Strategic claim positioning to maximize your settlement." },
];

const About = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={aboutImg} alt="Engineering expertise" loading="lazy" width={640} height={512} className="max-w-sm mx-auto lg:mx-0" />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-kpmgmid text-sm font-semibold tracking-widest uppercase">About Us</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-darktext mt-3 mb-6">
                Engineering Expertise Meets Insurance Know-How
              </h2>
              <p className="text-slategray text-lg leading-relaxed mb-8">
                When your factory suffers a loss, your insurance company deploys their own adjusters and engineers — experts working <em>against</em> your interest. Claim Consultants levels the playing field. We are qualified engineers and claim specialists who conduct independent Root Cause Analysis, build airtight technical documentation, and negotiate aggressively to maximize your recovery.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="card-blue-top p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-lightblue flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-5 h-5 text-kpmgmid" />
                  </div>
                  <div>
                    <h3 className="font-bold text-darktext mb-1">{cred.title}</h3>
                    <p className="text-slategray text-sm">{cred.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
