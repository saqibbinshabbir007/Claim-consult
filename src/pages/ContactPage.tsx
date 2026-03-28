import { Helmet } from "react-helmet-async";
import Contact from "@/components/Contact";

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Us — Claim Consultants | Book Free Consultation</title>
      <meta name="description" content="Contact Claim Consultants for a free insurance claim consultation. Technical claim support for industrial losses across Pakistan." />
    </Helmet>
    <div className="pt-20 lg:pt-24">
      <div className="bg-kpmgnavy py-16 text-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-white">Contact Us</h1>
        <p className="text-white/60 mt-3 max-w-xl mx-auto">Get expert help with your insurance claim — free initial consultation</p>
      </div>
      <Contact />
    </div>
  </>
);

export default ContactPage;
