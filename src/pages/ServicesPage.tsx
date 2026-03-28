import { Helmet } from "react-helmet-async";
import Services from "@/components/Services";

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Our Services — Claim Consultants | RCA, Documentation, Negotiation</title>
      <meta name="description" content="Insurance claim services: policy review, root cause analysis, claim documentation, and end-to-end claim handling for industrial losses in Pakistan." />
    </Helmet>
    <div className="pt-20 lg:pt-24">
      <div className="bg-kpmgnavy py-16 text-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-white">Our Services</h1>
        <p className="text-white/60 mt-3 max-w-xl mx-auto">Comprehensive technical consulting for every stage of your insurance claim</p>
      </div>
      <Services />
    </div>
  </>
);

export default ServicesPage;
