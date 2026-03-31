import { Helmet } from "react-helmet-async";
import Industries from "@/components/Industries";

const IndustriesPage = () => (
  <>
    <Helmet>
      <title>Industries — Claim Consultants | Textile, Pharma, Power Plant Claims</title>
      <meta name="description" content="Industrial insurance claim expertise across textile, pharma, food processing, chemical, and power plant sectors in Pakistan." />
    </Helmet>
    <div className="pt-24 lg:pt-28">
      <div className="relative py-20 lg:py-28 text-center overflow-hidden flex flex-col items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Heroimage/pages/industries.png')` }}
        />
        <div className="absolute inset-0 bg-[#00338D]/45" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">Industries We Serve</h1>
          <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-6"></div>
          <p className="text-blue-100 text-lg lg:text-xl font-medium max-w-xl mx-auto">Deep domain expertise across Pakistan's major industrial sectors</p>
        </div>
      </div>
      <Industries />
    </div>
  </>
);

export default IndustriesPage;
