import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-kpmgdark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/Logo/logo.webp" alt="Claim Consultants Logo" className="h-12 sm:h-14 lg:h-16 w-auto max-w-full object-contain opacity-90" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Pakistan's leading technical insurance claim consultancy. Engineering expertise for maximum recovery.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Services", "Industries", "Case Studies", "Contact"].map((link) => (
                  <Link
                    key={link}
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="block text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <p>+92 339 8949079</p>
                <p>info@claimsconsults.com</p>
                <p>Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-kpmgnavy text-white/50 text-sm text-center py-4">
        © 2025 Claim Consultants. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
