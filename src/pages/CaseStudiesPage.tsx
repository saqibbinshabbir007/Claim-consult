import { Helmet } from "react-helmet-async";
import CaseStudies from "@/components/CaseStudies";

const CaseStudiesPage = () => (
  <>
    <Helmet>
      <title>Case Studies — Claim Consultants | Proven Insurance Claim Results</title>
      <meta name="description" content="Real industrial insurance claim case studies from Pakistan. See how our RCA expertise recovered millions for textile, pharma, and power plant clients." />
    </Helmet>
    <div className="pt-20 lg:pt-24">
      <div className="bg-kpmgnavy py-16 text-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-white">Case Studies</h1>
        <p className="text-white/60 mt-3 max-w-xl mx-auto">Real results from real industrial claims</p>
      </div>
      <CaseStudies />
    </div>
  </>
);

export default CaseStudiesPage;
