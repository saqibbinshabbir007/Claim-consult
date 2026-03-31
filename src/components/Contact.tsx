import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── EmailJS Config ───────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_t3jcj7o";
const EMAILJS_TEMPLATE_ID = "template_wjdkn6z";
const EMAILJS_PUBLIC_KEY  = "B2VRhnbVgXOzMqaTC";
// ─────────────────────────────────────────────────────────────────────────────

const lossTypes = [
  "Fire & Explosion",
  "Machinery Breakdown",
  "Business Interruption",
  "Construction All Risk",
  "Marine & Cargo",
  "Other Industrial Loss"
];

const emptyForm = { name: "", email: "", phone: "", lossType: "", message: "", company: "" };

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState("");
  const [formData,  setFormData]  = useState(emptyForm);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          full_name:            formData.name,
          company:              formData.company,
          email:                formData.email,
          phone:                formData.phone,
          nature_of_loss:       formData.lossType,
          incident_description: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData(emptyForm);
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Submission failed. Please call us directly or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2563eb] font-bold tracking-[0.15em] uppercase text-sm block mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-6">
            REQUEST A CONSULTATION
          </h2>
          <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-6"></div>
          <p className="text-[#475569] text-lg leading-relaxed">
            Our loss assessors and technical engineers are available to review your case. Submit your details below and we will respond with an initial evaluation.
          </p>
        </div>

        <div className="bg-white rounded-none shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-200">
          
          {/* Left Panel - Dark Corporate Information */}
          <div className="lg:w-2/5 bg-[#00338D] text-white p-6 sm:p-10 lg:p-14 relative flex flex-col justify-between">
            {/* Overlay Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-blue-800/50 flex items-center justify-center shrink-0 border border-blue-700">
                    <Phone className="w-5 h-5 text-blue-200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-blue-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1">24/7 Response Desk</p>
                    <a href="tel:+923398949079" className="text-base sm:text-lg lg:text-xl font-bold hover:text-blue-300 transition-colors">+92 339 8949079</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-blue-800/50 flex items-center justify-center shrink-0 border border-blue-700">
                    <Mail className="w-5 h-5 text-blue-200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-blue-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1">Official Inquiry</p>
                    <a href="mailto:info@claimsconsults.com" className="text-base sm:text-lg lg:text-xl font-bold hover:text-blue-300 transition-colors break-all">info@claimsconsults.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-blue-800/50 flex items-center justify-center shrink-0 border border-blue-700">
                    <MapPin className="w-5 h-5 text-blue-200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-blue-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-base sm:text-lg font-medium leading-relaxed">Pakistan<br/>Serving Nationwide Industrial Sectors</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-blue-800">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="w-8 h-8 text-blue-300" />
                <p className="font-semibold text-lg">Confidentiality Assured</p>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                All claims data and corporate information submitted are protected under strict NDA and industrial confidentiality protocols.
              </p>
            </div>
          </div>

          {/* Right Panel - Strict Corporate Form */}
          <div className="lg:w-3/5 p-6 sm:p-10 lg:p-14 bg-white">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-8 uppercase tracking-wide border-l-4 border-[#2563eb] pl-4">
              Submit Claim Details
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00338D] focus:border-transparent transition-all rounded-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Company / Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00338D] focus:border-transparent transition-all rounded-sm"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00338D] focus:border-transparent transition-all rounded-sm"
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00338D] focus:border-transparent transition-all rounded-sm"
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nature of Loss *</label>
                <select
                  required
                  value={formData.lossType}
                  onChange={(e) => setFormData({ ...formData, lossType: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00338D] focus:border-transparent transition-all rounded-sm appearance-none"
                >
                  <option value="">-- Select Technical Loss Category --</option>
                  {lossTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Incident Description *</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00338D] focus:border-transparent transition-all rounded-sm resize-none"
                  placeholder="Provide brief details regarding the incident, estimated quantum, and policy type..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0f172a] text-white font-bold tracking-widest uppercase py-4 rounded-sm hover:bg-[#00338D] transition-colors duration-300 mt-4 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit Official Inquiry"}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 text-green-800 border-l-4 border-green-600 p-4 mt-4"
                >
                  <p className="font-bold">✓ Submission Successful</p>
                  <p className="text-sm mt-1">Your inquiry has been received. Our team will contact you within 24 hours.</p>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 text-red-800 border-l-4 border-red-500 p-4 mt-4"
                >
                  <p className="font-bold">Submission Failed</p>
                  <p className="text-sm mt-1">{error}</p>
                </motion.div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
