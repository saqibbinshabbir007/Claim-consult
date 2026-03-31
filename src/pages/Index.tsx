import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import Mission from "@/components/Mission";
import SplitBanner from "@/components/SplitBanner";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Claim Consultants — Insurance Claim Consultant Pakistan | RCA & Loss Assessing</title>
        <meta name="description" content="Struggling with an insurance claim? Claim Consultants are Pakistan's industrial loss assessors — Root Cause Analysis, claim documentation, and negotiation for textile, power, and pharma sectors." />
      </Helmet>
      <Hero />
      <About />
      <SplitBanner />
      <WhatWeDo />
      <div className="section-divider" />
      <Mission />
      <div className="section-divider" />
      <Industries />
      <div className="section-divider" />
      <CaseStudies />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <Contact />
    </>
  );
};

export default Index;
