import { Helmet } from "react-helmet-async";
import Services from "@/components/Services";

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Services — Policy Review, RCA, Claim Documentation & Handling | Claim Consultants Pakistan</title>
      <meta name="description" content="Technical insurance claim services for industrial clients in Pakistan — Policy Review, Root Cause Analysis, Claim Documentation, and end-to-end Claim Handling. We represent the insured." />
    </Helmet>
    <div className="pt-24 lg:pt-28">
      <div className="relative py-20 lg:py-28 text-center overflow-hidden flex flex-col items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Heroimage/pages/services.png')` }}
        />
        <div className="absolute inset-0 bg-[#00338D]/45" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-6"></div>
          <p className="text-blue-100 text-lg lg:text-xl font-medium max-w-xl mx-auto">Comprehensive technical consulting for every stage of your insurance claim</p>
        </div>
      </div>
      <Services />
    </div>
  </>
);

export default ServicesPage;
