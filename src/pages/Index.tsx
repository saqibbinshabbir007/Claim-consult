import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SplitBanner from "@/components/SplitBanner";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Claim Consultants — Technical Insurance Claim Consultancy Pakistan</title>
        <meta name="description" content="Pakistan's leading technical insurance claim consultancy. Expert Root Cause Analysis, claim documentation, and negotiation for industrial losses. Maximize your claim settlement." />
      </Helmet>
      <Hero />
      <About />
      <SplitBanner />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Industries />
      <div className="section-divider" />
      <CaseStudies />
      <div className="section-divider" />
      <Contact />
    </>
  );
};

export default Index;
