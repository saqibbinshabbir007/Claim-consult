import { motion } from "framer-motion";

const SplitBanner = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row lg:h-[358px] overflow-hidden">
      {/* Left Side - 55% with darker blue overlay for readability */}
      <div className="relative w-full lg:w-[55%] h-[280px] sm:h-[320px] lg:h-full">
        <img
          src="/about/consult.webp"
          alt="Expert consulting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-kpmgdark/70" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-justify px-6 sm:px-10 lg:px-16"
        >
          <p className="text-white font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl drop-shadow-md">
            Established in Pakistan, Claim Consultants represents policyholders and industrial clients in insurance claims. Our qualified engineers and claim specialists provide Loss Assessing, Root Cause Analysis, Claim Documentation, and technical consulting — working solely in the interest of the insured.
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
