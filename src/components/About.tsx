import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white py-16 lg:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-kpmgmid mb-4 font-heading">
            WHO WE ARE
          </h2>
          <p className="text-base text-slategray leading-relaxed font-sans">
            Claim Consultants is a specialized technical consulting firm providing high-profile professional services to the insurance industry. With deep expertise in engineering, loss assessment, and insurance claims management, we help businesses navigate complex claims processes and maximize their recovery outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
