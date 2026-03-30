import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SplitBanner = () => {
  return (
    <section className="w-full flex h-[358px] overflow-hidden">
      {/* Left Side - 60% with light overlay */}
      <div className="relative w-[55%] h-full">
        <img
          src="/Heroimage/flux-2-pro-20251231_a_remove_blue_overlay_.webp"
          alt="Expert consulting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60" />
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col justify-center px-12 lg:px-20"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-kpmgdark mb-4 font-heading">
            YOUR CLAIM, OUR EXPERTISE
          </h2>
          <p className="text-slategray text-base leading-relaxed max-w-md mb-6">
            When your business faces an insurance loss, you need engineers and claim specialists who work exclusively for you. We build the technical case that maximizes your recovery.
          </p>
          <Link to="/contact" className="btn-kpmg w-fit text-sm">
            Book Free Consultation
          </Link>
        </motion.div>
      </div>

      {/* Right Side - 40% no overlay */}
      <div className="relative w-[45%] h-full">
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
