import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SplitBanner = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row lg:h-[358px] overflow-hidden">
      {/* Left Side - 55% with minor blue overlay */}
      <div className="relative w-full lg:w-[55%] h-[280px] sm:h-[320px] lg:h-full">
        <img
          src="/Heroimage/flux-2-pro-20251231_a_remove_blue_overlay_.webp"
          alt="Expert consulting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-kpmgdark/40" />
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 font-heading">
            YOUR CLAIM, OUR EXPERTISE
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-md mb-5">
            When your business faces an insurance loss, you need engineers and claim specialists who work exclusively for you. We build the technical case that maximizes your recovery.
          </p>
          <Link to="/contact" className="btn-kpmg w-fit text-sm">
            Book Free Consultation
          </Link>
        </motion.div>
      </div>

      {/* Right Side - 45% no overlay */}
      <div className="relative w-full lg:w-[45%] h-[220px] sm:h-[260px] lg:h-full">
        <img
          src="/Heroimage/fire_adjuster.webp"
          alt="Fire damage investigation"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default SplitBanner;
