import { Helmet } from "react-helmet-async";
import Contact from "@/components/Contact";

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Us — Claim Consultants | Book Free Consultation</title>
      <meta name="description" content="Contact Claim Consultants for a free insurance claim consultation. Technical claim support for industrial losses across Pakistan." />
    </Helmet>
    <div className="pt-20 lg:pt-24">
      <div className="relative py-20 lg:py-28 text-center overflow-hidden flex flex-col items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Heroimage/pages/contact.png')` }}
        />
        <div className="absolute inset-0 bg-[#00338D]/45" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-6"></div>
          <p className="text-blue-100 text-lg lg:text-xl font-medium max-w-xl mx-auto">Get expert help with your insurance claim — free initial consultation</p>
        </div>
      </div>
      <Contact />
    </div>
  </>
);

export default ContactPage;
