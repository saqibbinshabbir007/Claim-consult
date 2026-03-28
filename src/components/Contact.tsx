import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import contactImg from "@/assets/illustrations/contact-us.png";

const lossTypes = ["Fire", "Flood", "Machinery Breakdown", "Business Interruption", "Other"];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", lossType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", lossType: "", message: "" });
  };

  return (
    <section className="bg-lightblue py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-kpmgmid text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-darktext mt-3">Contact Us</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={contactImg} alt="Contact us" loading="lazy" className="max-w-xs mx-auto lg:mx-0 mb-10" />
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-kpmgmid flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slategray">Phone / WhatsApp</p>
                  <a href="tel:+923398949079" className="text-darktext font-semibold">+92 339 8949079</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-kpmgmid flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slategray">Email</p>
                  <a href="mailto:info@claimsconsults.com" className="text-darktext font-semibold">info@claimsconsults.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-kpmgmid flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slategray">Location</p>
                  <p className="text-darktext font-semibold">Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-darktext mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-blue-100 bg-offwhite text-darktext focus:outline-none focus:ring-2 focus:ring-kpmgmid/30 focus:border-kpmgmid transition"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-darktext mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-blue-100 bg-offwhite text-darktext focus:outline-none focus:ring-2 focus:ring-kpmgmid/30 focus:border-kpmgmid transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-darktext mb-1.5">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-blue-100 bg-offwhite text-darktext focus:outline-none focus:ring-2 focus:ring-kpmgmid/30 focus:border-kpmgmid transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-darktext mb-1.5">Type of Loss</label>
              <select
                required
                value={formData.lossType}
                onChange={(e) => setFormData({ ...formData, lossType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-blue-100 bg-offwhite text-darktext focus:outline-none focus:ring-2 focus:ring-kpmgmid/30 focus:border-kpmgmid transition"
              >
                <option value="">Select loss type</option>
                {lossTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-darktext mb-1.5">Describe Your Situation</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-blue-100 bg-offwhite text-darktext focus:outline-none focus:ring-2 focus:ring-kpmgmid/30 focus:border-kpmgmid transition resize-none"
              />
            </div>
            <button type="submit" className="btn-kpmg w-full text-center">
              Submit Inquiry
            </button>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-50 text-emerald-700 text-sm font-medium px-4 py-3 rounded-lg text-center"
              >
                ✓ Thank you! We'll get back to you within 24 hours.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
