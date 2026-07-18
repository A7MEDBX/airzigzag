import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Car, UtensilsCrossed, Users, FileText,
  Headphones, Check, ArrowRight, Plane
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { fadeUp, fadeInLeft, fadeInRight } from '../../constants/animations';

// All fresh Unsplash photos — none reused from other pages
const heroPhoto          = 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1600&q=85'; // luxury business lounge
const transportPhoto     = 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&w=900&q=80'; // luxury limo airport ramp sunset
const cateringPhoto      = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80'; // fine dining white table setting

export const AncillaryServices = () => {
  return (
    <Layout
      title="Ancillary Aviation Services - Air Zigzag"
      description="Premium ancillary services including luxury transportation, in-flight catering, hotel accommodation, crew support, and travel documentation."
    >
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroPhoto}
            alt="Luxury business lounge ancillary services"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
        </div>

        <Container className="relative z-10 text-left">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
              <Link to="/" className="hover:text-accent-gold transition-colors">Home</Link>
              <span>•</span>
              <span className="text-gray-400">Tour & Excursions</span>
              <span>•</span>
              <span className="text-accent-gold">Ancillary Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
              Ancillary Services
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              Premium travel support including luxury transportation, catering, hotel accommodation, and concierge — tailored for passengers and crew alike.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button as={Link} to="/contact" variant="gold" size="lg">
                Contact Us
              </Button>
              <Button
                as={Link}
                to="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Request Quote
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Luxury Transportation ─────────────────────────────── */}
      <section className="py-24 bg-white">
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
                  src={transportPhoto}
                  alt="Luxury limousine on airport tarmac at sunset"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-accent-gold px-3 py-1 rounded-full flex items-center gap-2">
                  <Car className="h-3.5 w-3.5 text-primary" />
                  <span className="text-primary text-xs font-bold">Ground Transport</span>
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
                Premium Travel
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading leading-tight">
                Luxury Transportation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you need a discreet executive chauffeur or a full airport fleet, we provide seamless door-to-door transfers for passengers, delegations, and crew — anywhere in the world.
              </p>

              {/* Sub-services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { icon: Car,   label: 'Executive Chauffeur',  desc: 'Private, discreet chauffeured transfers in premium executive sedans.' },
                  { icon: Users, label: 'Airport Fleets',       desc: 'Multi-vehicle convoys for delegations and large passenger groups at the airport.' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-light-gray rounded-xl border border-gray-100">
                    <div className="p-2 bg-primary/5 text-primary rounded-lg shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm mb-1">{label}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 pt-2">
                {['Meet & Greet at the terminal gate', 'Real-time flight tracking dispatch', 'Security-cleared professional drivers'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Flight Catering ───────────────────────────────────── */}
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
                In-Flight Dining
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading leading-tight">
                Flight Catering
              </h2>
              <p className="text-gray-600 leading-relaxed">
                High-quality in-flight catering services sourced from certified kitchens to satisfy passengers and crew requirements on every route. We coordinate bespoke menus, special dietary requirements, and last-minute catering changes with your preferred FBO.
              </p>
              <ul className="space-y-2 pt-2">
                {[
                  'Bespoke menu planning & customization',
                  'Certified kitchen partners at major hubs',
                  'Special dietary & allergy-aware options',
                  'On-board crockery, cutlery & linen arrangements',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button as={Link} to="/contact" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                  Request Catering
                </Button>
              </div>
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
                  src={cateringPhoto}
                  alt="Fine dining in-flight catering setup on white table"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-accent-gold px-3 py-1 rounded-full flex items-center gap-2">
                  <UtensilsCrossed className="h-3.5 w-3.5 text-primary" />
                  <span className="text-primary text-xs font-bold">Flight Catering</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Additional Support Services ───────────────────────── */}
      <section className="py-20 bg-light-gray border-t border-gray-200/60">
        <Container>
          <SectionTitle
            subtitle="Support"
            title="Additional Support Services"
            alignment="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              {
                icon: Headphones,
                title: 'Crew Support',
                desc: 'Comprehensive care for flight crews including accommodations, transport, rest scheduling, and on-call assistance throughout their layover.',
              },
              {
                icon: Car,
                title: 'Transportation',
                desc: 'End-to-end ground logistics for passengers and crew — from scheduled airport runs to on-demand charter vehicles.',
              },
              {
                icon: FileText,
                title: 'Travel Documentation',
                desc: 'Visa coordination, entry requirements, and travel document assistance to ensure smooth border crossing for every traveler.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp(i * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left group"
              >
                <div className="p-3 bg-primary/5 text-primary rounded-xl w-fit mb-4 group-hover:bg-accent-gold transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-primary font-heading mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1600&q=80"
            alt="Private jet silhouette ready for departure"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <Container className="relative z-10 max-w-3xl text-center">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-accent-gold/20 rounded-full">
                <Plane className="h-8 w-8 text-accent-gold" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight font-heading">
              Ready to Elevate Your Journey?
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Contact Air Zigzag to arrange premium ancillary support for passengers and crew — tailored to your exact requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Button as={Link} to="/contact" variant="gold" size="lg">
                Contact Us
              </Button>
              <Button
                as={Link}
                to="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Request Quote
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default AncillaryServices;
