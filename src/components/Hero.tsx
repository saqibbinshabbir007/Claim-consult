import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/illustrations/hero-agreement.png";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Hero = () => {
  return (
    <section className="relative bg-kpmgnavy min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-kpmgnavy via-kpmgdark/50 to-kpmgnavy" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block text-kpmglight text-sm font-semibold tracking-widest uppercase mb-6"
            >
              Pakistan's Technical Claim Consultants
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <motion.span custom={0} variants={wordVariants} initial="hidden" animate="visible" className="block text-white">
                Your Insurance Company
              </motion.span>
              <motion.span custom={1} variants={wordVariants} initial="hidden" animate="visible" className="block text-white">
                Has An Expert Against You.
              </motion.span>
              <motion.span custom={2} variants={wordVariants} initial="hidden" animate="visible" className="block text-kpmglight">
                Now You Have One Too.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-white/70 text-lg lg:text-xl mb-8 max-w-lg"
            >
              Engineering expertise. Maximum recovery. Every claim.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-kpmg text-center">
                Book Free Consultation
              </Link>
              <Link to="/services" className="btn-kpmg-outline text-center">
                Our Services
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <img src={heroImg} alt="Insurance claim agreement illustration" width={800} height={640} className="max-w-md xl:max-w-lg drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
