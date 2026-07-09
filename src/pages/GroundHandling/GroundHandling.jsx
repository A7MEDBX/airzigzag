import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Compass, Wrench, Luggage, Check, ArrowRight, Headphones } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import Card from '../../components/common/Card/Card';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { fadeUp, fadeInLeft, fadeInRight } from '../../constants/animations';

import groundHandlingHero from '../../assets/images/ground_handling_hero.png';
import vipHandling from '../../assets/images/vip_handling.png';
import rampServices from '../../assets/images/ramp_services.png';
import groundSupport from '../../assets/images/ground_support.png';
import heroJetBg from '../../assets/images/hero_jet_bg.png'; // Reused for Cargo

export const GroundHandling = () => {
  const breadcrumbItems = [
    { label: 'Services', path: '#' },
    { label: 'Ground Handling', path: '/ground-handling' }
  ];

  return (
    <Layout
      title="Global Ground Handling Services - Air Zigzag"
      description="Professional ramp handling, passenger services, ground support equipment coordination, and cargo handling worldwide."
    >
      {/* Page Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={groundHandlingHero}
            alt="Aircraft Ground Handling Tarmac"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
        </div>

        <Container className="relative z-10 text-left">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            {/* Breadcrumb Path */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
              <Link to="/" className="hover:text-accent-gold transition-colors">Home</Link>
              <span>•</span>
              <span className="text-gray-400">Services</span>
              <span>•</span>
              <span className="text-accent-gold">Ground Handling</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
              Ground Handling <br />
              <span className="text-accent-gold">Services</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Professional ground handling support for private aviation. From ramp operations to passenger services, we coordinate efficient ground operations.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button as={Link} to="/contact" variant="gold" size="lg">
                Request Service Quote
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Grid Overview Section */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            subtitle="Core Operational Expertise"
            title="Professional Airport Solutions"
            alignment="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">
                Passenger & VIP Handling
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Professional meet & greet services, VIP lounge access coordination, and CIQ assistance for passengers and crew.
              </p>
            </Card>

            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">
                Ramp Services
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Comprehensive ramp operations including aircraft marshalling, secure parking, pushback, and towing services.
              </p>
            </Card>

            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">
                Ground Support Equipment
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Coordination of essential GSE including GPU, ASU, ACU, along with potable water and lavatory services.
              </p>
            </Card>

            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <Luggage className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">
                Cargo & Baggage
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Efficient baggage handling operations and comprehensive cargo logistics coordination.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Alternating Detailed Sections with Photos */}
      <section className="py-24 bg-light-gray border-t border-gray-200/50">
        <Container>
          <div className="space-y-32">
            {/* 1. Passenger & VIP Handling */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                variants={fadeInRight()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6 order-2 lg:order-1 text-left space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/5 text-primary rounded-xl">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary">
                    Passenger & VIP Handling
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Experience seamless FBO terminal navigation. Our dedicated passenger care team arranges premium terminal access, handles baggage transfer, and coordinates customs clearance, delivering an effortless travel flow.
                </p>
                <ul className="space-y-3">
                  {['VIP Lounge access & concierge', 'Fast-track Customs & Immigration (CIQ)', 'Dedicated meet and greet staff', 'Crew terminal assistance'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={fadeInLeft()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6 order-1 lg:order-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src={vipHandling}
                    alt="VIP Terminal Lounge"
                    className="w-full h-[350px] object-cover hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </motion.div>
            </div>

            {/* 2. Ramp Services */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div
                variants={fadeInRight()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src={rampServices}
                    alt="Ramp Marshalling Services"
                    className="w-full h-[350px] object-cover hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={fadeInLeft()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6 text-left space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/5 text-primary rounded-xl">
                    <Compass className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary">
                    Ramp Services
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Maximize safety on the tarmac. Our pre-vetted ramp agents handle pushbacks, towings, marshalling signals, and aircraft parking logistics according to strict international handling protocols.
                </p>
                <ul className="space-y-3">
                  {['Professional marshalling & guidance', 'Secure parking & tie-down', 'Pushback & aircraft towing', 'Wheel chocks & gear pins installation'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* 3. Ground Support Equipment (GSE) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                variants={fadeInRight()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6 order-2 lg:order-1 text-left space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/5 text-primary rounded-xl">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary">
                    Ground Support Equipment
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Keep your aircraft systems running efficiently. We manage vital ground supply units, power systems, starter setups, air conditioning units, and cabin utility replenishments during transit.
                </p>
                <ul className="space-y-3">
                  {['Ground Power Units (GPU)', 'Air Starter Units (ASU)', 'Cabin utility replenishment', 'Potable water & lavatory servicing'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={fadeInLeft()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6 order-1 lg:order-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src={groundSupport}
                    alt="GPU Ground Power Unit Connected"
                    className="w-full h-[350px] object-cover hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </motion.div>
            </div>

            {/* 4. Cargo & Baggage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div
                variants={fadeInRight()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src={heroJetBg}
                    alt="Baggage Loading visual"
                    className="w-full h-[350px] object-cover hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={fadeInLeft()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6 text-left space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/5 text-primary rounded-xl">
                    <Luggage className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary">
                    Cargo & Baggage
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Fast and secure cargo routing. Our team supervises the loading of fragile baggage, handles dangerous goods paperwork, and manages cargo customs clearances to guarantee swift turnarounds.
                </p>
                <ul className="space-y-3">
                  {['Secure luggage loading & sorting', 'Cargo customs clearance support', 'Dangerous goods (DGR) handling paperwork', 'Expedited cargo terminal access'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Need Ground Handling Support Section (Mockup bottom banner) */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={groundHandlingHero}
            alt="FBO Lounge background visual"
            className="w-full h-full object-cover opacity-20 filter blur-sm"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <Container className="relative z-10 max-w-4xl text-center">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Need Ground Handling Support?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our operations team coordinates professional ground handling services for aircraft, crew, and passengers worldwide.
            </p>
            <Button as={Link} to="/contact" variant="gold" size="lg" className="mt-4">
              Contact Operations Team
            </Button>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default GroundHandling;
