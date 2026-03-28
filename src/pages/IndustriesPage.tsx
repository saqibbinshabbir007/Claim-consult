import { Helmet } from "react-helmet-async";
import Industries from "@/components/Industries";

const IndustriesPage = () => (
  <>
    <Helmet>
      <title>Industries — Claim Consultants | Textile, Pharma, Power Plant Claims</title>
      <meta name="description" content="Industrial insurance claim expertise across textile, pharma, food processing, chemical, and power plant sectors in Pakistan." />
    </Helmet>
    <div className="pt-20 lg:pt-24">
      <div className="bg-kpmgnavy py-16 text-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-white">Industries We Serve</h1>
        <p className="text-white/60 mt-3 max-w-xl mx-auto">Deep domain expertise across Pakistan's major industrial sectors</p>
      </div>
      <Industries />
    </div>
  </>
);

export default IndustriesPage;
