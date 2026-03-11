import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-leather border-t border-taupe/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="font-display text-2xl tracking-wider text-foreground mb-4">
              STUDIO <span className="text-taupe">360</span>
            </p>
            <p className="font-body text-sm text-taupe font-light leading-relaxed max-w-xs">
              Timeless interiors shaped for modern living. Residential and commercial design studio.
            </p>
          </div>

          <div>
            <p className="font-body text-xs tracking-widest uppercase text-taupe mb-6">Navigation</p>
            <div className="space-y-3">
              {["Services", "Projects", "About", "Process", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-xs tracking-widest uppercase text-taupe mb-6">Connect</p>
            <div className="space-y-3">
              <p className="font-body text-sm text-foreground/70">hello@studio360.com</p>
              <p className="font-body text-sm text-foreground/70">+1 (555) 360-0000</p>
              <p className="font-body text-sm text-foreground/70">New York, NY</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-taupe hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-taupe hover:text-foreground transition-colors" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12a4 4 0 1 1 8 0c0 4-3 6-3 9" /><path d="M11.5 21H12.5" /><circle cx="12" cy="12" r="10" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-taupe/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-taupe/60">
            © 2026 Studio 360. All rights reserved.
          </p>
          <p className="font-body text-xs text-taupe/60">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
