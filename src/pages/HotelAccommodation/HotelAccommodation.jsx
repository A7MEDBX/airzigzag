import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Users, Check, ArrowRight, BedDouble, Coffee, Car } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { fadeUp, fadeInLeft, fadeInRight } from '../../constants/animations';

const heroPhoto        = 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85';
const hotelExterior    = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80';
const luxuryRoom       = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80';
const crewRoom         = 'https://images.unsplash.com/photo-1631049552240-59c37f38802b?auto=format&fit=crop&w=900&q=80';
const ctaBg            = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80';

const HotelAccommodation = () => {
  const breadcrumb = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '#' },
    { label: 'Hotel Accommodation', path: '/hotel-accommodation' },
  ];

  return (
    <Layout
      title="Hotel Accommodation | Air Zigzag"
      description="Accommodation arrangements for passengers and flight crews, ensuring comfortable hotel stays during flight operations."
    >
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroPhoto}
            alt="Luxury hotel room interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>

        <Container className="relative z-10 pb-16 pt-32">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-5"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
              {breadcrumb.map((item, i) => (
                <React.Fragment key={item.label}>
                  {i > 0 && <span className="text-gray-500">›</span>}
                  {item.path !== '#' ? (
                    <Link to={item.path} className="hover:text-white transition-colors">{item.label}</Link>
                  ) : (
                    <span className="text-gray-400">{item.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
              Hotel Accommodation
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              Accommodation arrangements for passengers and flight crews, ensuring comfortable hotel stays during flight operations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button as={Link} to="/contact" variant="primary" size="lg">
                Request Accommodation
              </Button>
              <Button
                as={Link}
                to="/contact"
                variant="outline"
                size="lg"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Premium Stays Intro ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photos collage */}
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative h-[500px] grid grid-cols-2 gap-4"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl row-span-2">
                <img
                  src={hotelExterior}
                  alt="Luxury hotel exterior at night"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={luxuryRoom}
                  alt="Premium hotel room interior"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={crewRoom}
                  alt="Comfortable crew accommodation room"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent-gold block">
                Accommodation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading leading-tight">
                Premium Stays for Crew and Passengers
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We understand that rest is critical for optimal performance and a seamless travel experience. Our dedicated team ensures that every accommodation meets the rigorous standards of our clientele.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  'Handpicked premium & boutique hotel partners',
                  'Airport proximity priority for quick transfers',
                  'Last-minute and emergency booking support',
                  'Compliance with aviation crew rest regulations',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button as={Link} to="/contact" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                Request Accommodation
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Passenger Accommodations ─────────────────────────── */}
      <section className="py-24 bg-light-gray border-t border-gray-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 order-2 lg:order-1"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent-gold block">
                Passenger Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading leading-tight">
                Passenger Accommodations
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Premium hotel arrangements near airports and city centers, selected to match the comfort standards your passengers expect. From luxury suites to boutique properties, we tailor every booking to the passenger's preferences and schedule.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  { icon: Star,     label: '5-Star Hotels',         desc: 'Curated luxury and boutique hotel options worldwide.' },
                  { icon: BedDouble, label: 'Suite Arrangements',   desc: 'Executive suites and connecting rooms for groups.' },
                  { icon: Car,      label: 'Airport Transfers',      desc: 'Seamless transport between airport and hotel.' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex flex-col items-start gap-3 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-2 bg-primary/5 text-primary rounded-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-bold text-primary text-sm">{label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 pt-2">
                {[
                  '5-star & boutique hotel options',
                  'Airport proximity priority',
                  'Last-minute booking support',
                  'VIP check-in & concierge assistance',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Photo */}
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={luxuryRoom}
                  alt="Premium passenger hotel room"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-accent-gold px-3 py-1 rounded-full flex items-center gap-2">
                  <Star className="h-3.5 w-3.5 text-primary" />
                  <span className="text-primary text-xs font-bold">Passenger Stays</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Crew Accommodation ────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-gray-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={crewRoom}
                  alt="Comfortable crew accommodation"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-accent-gold px-3 py-1 rounded-full flex items-center gap-2">
                  <Users className="h-3.5 w-3.5 text-primary" />
                  <span className="text-primary text-xs font-bold">Crew Stays</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent-gold block">
                Crew Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading leading-tight">
                Crew Accommodation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Reliable and comfortable crew hotel coordination at layover destinations, aligned with airline rest regulations. We manage every detail from rooming lists to transport, so your crew can focus entirely on rest and recovery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  { icon: BedDouble, label: 'Rest-Compliant',       desc: 'Properties meeting ICAO and airline crew rest standards.' },
                  { icon: Users,     label: 'Block Bookings',        desc: 'Rooming lists and group block reservations managed seamlessly.' },
                  { icon: Coffee,    label: 'Full-Service Support',  desc: 'Meals, wake-up calls, and on-call assistance included.' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex flex-col items-start gap-3 p-5 bg-light-gray rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-2 bg-primary/5 text-primary rounded-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-bold text-primary text-sm">{label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 pt-2">
                {[
                  'Crew rest-compliant properties',
                  'Block booking & rooming lists',
                  'Transport to/from hotel included',
                  '24/7 on-call support during layovers',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button as={Link} to="/contact" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                Request Crew Accommodation
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────── */}
      <section className="py-16 bg-primary border-t border-white/5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Hotel Partners' },
              { value: '80+', label: 'Countries Covered' },
              { value: '24/7', label: 'Booking Support' },
              { value: '99%', label: 'Satisfaction Rate' },
            ].map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-accent-gold mb-2">{value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ctaBg}
            alt="Luxury hotel lobby"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>

        <Container className="relative z-10 max-w-3xl text-center">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight font-heading">
              Need Accommodation for Your Crew or Passengers?
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Contact Air Zigzag to arrange premium hotel stays tailored to your flight schedule and crew regulations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Button as={Link} to="/contact" variant="gold" size="lg">
                Request Accommodation
              </Button>
              <Button
                as={Link}
                to="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default HotelAccommodation;
