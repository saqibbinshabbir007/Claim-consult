import { Helmet } from "react-helmet-async";
import About from "@/components/About";

const AboutPage = () => (
  <>
    <Helmet>
      <title>About Us — Claim Consultants | Technical Insurance Experts Pakistan</title>
      <meta name="description" content="Meet Pakistan's top insurance claim engineering consultants. Expert RCA, industrial claim strategy, and technical documentation." />
    </Helmet>
    <div className="pt-20 lg:pt-24">
      <div className="bg-kpmgnavy py-16 text-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-white">About Us</h1>
        <p className="text-white/60 mt-3 max-w-xl mx-auto">Engineering-driven claim consultancy for Pakistan's industrial sector</p>
      </div>
      <About />
    </div>
  </>
);

export default AboutPage;
