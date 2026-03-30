import { motion } from "framer-motion";

const SplitBanner = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row lg:h-[358px] overflow-hidden">
      {/* Left Side - 55% with minor blue overlay */}
      <div className="relative w-full lg:w-[55%] h-[280px] sm:h-[320px] lg:h-full">
        <img
          src="/about/consult.webp"
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
          <p className="text-white text-sm sm:text-base leading-loose max-w-md">
            Established in Pakistan, with a team of qualified engineers and insurance claim specialists, we provide specialized services to industrial and corporate clients, including Loss Adjusting, Root Cause Analysis, Claim Documentation and Insurance focused Technical Consulting.
          </p>
        </motion.div>
      </div>

      {/* Right Side - 45% no overlay */}
      <div className="relative w-full lg:w-[45%] h-[220px] sm:h-[260px] lg:h-full">
        <img
          src="/about/factory.webp"
          alt="Fire damage investigation"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default SplitBanner;
