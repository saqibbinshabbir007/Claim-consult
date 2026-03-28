import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-kpmgmid mb-6 font-heading">
            WHO WE ARE
          </h2>
          <p className="text-lg text-slategray leading-relaxed font-sans">
            Claim Consultants is a specialized technical consulting firm providing high-profile professional services to the insurance industry. With deep expertise in engineering, loss assessment, and insurance claims management, we help businesses navigate complex claims processes and maximize their recovery outcomes through meticulous technical analysis and strategic advocacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
