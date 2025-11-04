import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-gold">Franz & Filo</h3>
            <p className="text-cream/80 mb-6">
              Artisan European bakery bringing traditional craftsmanship and premium ingredients to every creation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="mailto:hello@franzfilo.com" className="text-cream hover:text-gold transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-cream/80 hover:text-gold transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/80 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Visit Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-gold flex-shrink-0" />
                <span className="text-cream/80">123 Baker Street, Premium District</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span className="text-cream/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span className="text-cream/80">hello@franzfilo.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-cream/80 mb-4 text-sm">Get the latest treats & offers delivered to your inbox.</p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-charcoal-light border-cream/20 text-cream placeholder:text-cream/50"
              />
              <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-charcoal">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-cream/60 text-sm">© 2025 Franz & Filo. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <Link to="#" className="text-cream/60 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-cream/60 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
