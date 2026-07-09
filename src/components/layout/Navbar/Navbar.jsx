import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Compass } from 'lucide-react';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import clsx from 'clsx';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '#',
      dropdown: [
        { name: 'Flight Permit', path: '/flight-permits' },
        { name: 'Ground Handling', path: '/ground-handling' },
        { name: 'Flight Planning', path: '/flight-planning' },
        { name: 'Fuel Services', path: '/fuel-services' },
        { name: 'Catering', path: '/ancillary-services' },
      ],
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    {
      name: 'Tour & Excursions',
      path: '#',
      dropdown: [
        { name: 'Hotel Accommodation', path: '/hotel-accommodation' },
        { name: 'VIP Services', path: '/vip-transportation' },
        { name: 'Entry Visa & Ticketing', path: '/visa-ticketing' },
      ],
    },
  ];

  const isLinkActive = (path) => {
    if (path === '#') return false;
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5'
          : 'bg-transparent py-6'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.dropdown) {
                const isDropdownActive = link.dropdown.some((item) =>
                  isLinkActive(item.path)
                );
                return (
                  <div key={link.name} className="relative group/dropdown">
                    <button
                      className={clsx(
                        'px-4 py-2 text-sm font-heading font-medium text-gray-300 hover:text-white flex items-center gap-1 transition-colors',
                        isDropdownActive && 'text-accent-gold font-semibold'
                      )}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover/dropdown:rotate-180" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-primary border border-white/10 shadow-xl opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 transform translate-y-2 group-hover/dropdown:translate-y-0 overflow-hidden">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className={clsx(
                            'block px-5 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors',
                            isLinkActive(subLink.path) && 'text-accent-gold bg-white/5'
                          )}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    'px-4 py-2 text-sm font-heading font-medium transition-colors',
                    isLinkActive(link.path)
                      ? 'text-accent-gold font-semibold'
                      : 'text-gray-300 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden lg:block">
            <Button as={Link} to="/contact" variant="gold" size="sm">
              Request Quote
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Panel */}
      <div
        className={clsx(
          'lg:hidden fixed inset-0 top-[73px] bg-primary z-40 transition-all duration-300 transform border-t border-white/5',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto px-4 py-6 space-y-4">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.name} className="flex flex-col space-y-2">
                  <span className="text-xs uppercase font-bold text-gray-500 tracking-widest px-3">
                    {link.name}
                  </span>
                  <div className="pl-4 border-l border-white/10 flex flex-col space-y-2">
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className={clsx(
                          'py-2 px-3 text-base font-medium rounded-lg block',
                          isLinkActive(subLink.path)
                            ? 'text-accent-gold bg-white/5 font-semibold'
                            : 'text-gray-300 hover:text-white'
                        )}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'py-3 px-3 text-lg font-heading font-semibold rounded-lg block',
                  isLinkActive(link.path)
                    ? 'text-accent-gold bg-white/5'
                    : 'text-gray-300 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6 border-t border-white/10">
            <Button as={Link} to="/contact" variant="gold" size="lg" className="w-full">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
