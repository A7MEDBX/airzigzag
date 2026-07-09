import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Container from '../../common/Container/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: 'Overflight Permits', path: '/flight-permits' },
    { name: 'Landing Permits', path: '/flight-permits' },
    { name: 'Ground Handling', path: '/ground-handling' },
    { name: 'Fuel Services', path: '/fuel-services' },
    { name: 'Flight Planning', path: '/flight-planning' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Ancillary Services', path: '/ancillary-services' },
    { name: 'VIP Transportation', path: '/vip-transportation' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
  ];

  return (
    <footer className="bg-[#040d1c] text-gray-400 font-body border-t border-white/5 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <Compass className="h-8 w-8 text-accent-gold group-hover:rotate-45 transition-transform duration-500" />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl tracking-wider text-white leading-none">
                  Air Zigzag
                </span>
                <span className="text-[9px] uppercase tracking-widest text-accent-gold font-semibold mt-0.5">
                  Flight Support
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed pt-2">
              Setting the gold standard in premium worldwide flight support. Precision, speed, and absolute reliability for all operations.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent-gold hover:text-primary transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent-gold hover:text-primary transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent-gold hover:text-primary transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent-gold hover:text-primary transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-6">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="hover:text-white transition-colors duration-200 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-6">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="hover:text-white transition-colors duration-200 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Column */}
          <div>
            <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-gold shrink-0 mt-0.5" />
                <span>London, England, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-gold shrink-0" />
                <a href="tel:+442079460958" className="hover:text-white transition-colors">+44 20 7946 0958</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-gold shrink-0" />
                <a href="mailto:ops@airzigzag.com" className="hover:text-white transition-colors">ops@airzigzag.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {currentYear} Air Zigzag. All rights reserved. Precision Flight Support.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link, idx) => (
              <a key={idx} href={link.path} className="hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
