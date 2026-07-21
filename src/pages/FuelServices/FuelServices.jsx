import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Fuel, Globe, Check, Headphones } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import Card from '../../components/common/Card/Card';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { fadeUp, fadeInLeft, fadeInRight } from '../../constants/animations';

import groundHandlingHero from '../../assets/images/ground_handling_hero.png';
import jetA1FuelingNight from '../../assets/images/jet_a1_fueling_night.jpg';

// High-quality external Unsplash photos for aircraft fueling (not reused, professional)
const jetA1FuelingPhoto = jetA1FuelingNight; // Night-time 747 refueling with Aviation Fueling Service trucks
const avgasFuelingPhoto = '/avgas-fuel.jpg';
const globalFuelTruckPhoto = '/worldwide-fuel.jpg';

export const FuelServices = () => {
  const breadcrumbItems = [
    { label: 'Services', path: '#' },
    { label: 'Fuel Services', path: '/fuel-services' }
  ];

  return (
    <Layout
      title="Worldwide Aviation Fuel Services - Air Zigzag"
      description="Reliable Jet A1 and Avgas 100LL supply. Global fuel releases and competitive contract pricing at international hubs."
    >
      {/* Page Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={groundHandlingHero}
            alt="Aircraft Refueling Tarmac"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />
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
              <span className="text-accent-gold">Fuel Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
              Fuel Services
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Worldwide aviation fuel support with Jet A1 and Avgas services, providing reliable fuel arrangements and operational assistance for aircraft operators.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                as={Link}
                to="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={Headphones}
                iconPosition="left"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Grid Overview Section */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            subtitle="Core Fuel Capabilities"
            title="Aviation Fuel Solutions"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <Fuel className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">
                Jet A1 Fuel
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Worldwide Jet A1 fuel support for international commercial, cargo, and corporate aircraft operations.
              </p>
            </Card>

            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <Fuel className="h-6 w-6 text-accent-gold" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">
                Avgas 100 LL
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Support for Avgas fuel requirements, particularly for smaller piston-engine aircraft operating internationally.
              </p>
            </Card>

            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">
                Worldwide Fuel Support
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Fuel coordination and release paperwork for aircraft operators flying to any global destination.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Alternating Detailed Sections with Photos */}
      <section className="py-24 bg-light-gray border-t border-gray-200/50">
        <Container>
          <div className="space-y-32">
            {/* 1. Jet A1 Fuel Section */}
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
                    <Fuel className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary">
                    Jet A1 Fuel Supply
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Reliable fueling for turbine engines. We arrange Jet A-1 refueling at major international hubs and regional airports. With pre-arranged fuel releases and competitive contract pricing, we eliminate tarmac delay.
                </p>
                <ul className="space-y-3">
                  {['Into-plane fuel delivery', 'Pre-arranged fuel release orders', 'Compliance with IATA standards', 'Competitive contract rates'].map((item) => (
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
                    src={jetA1FuelingPhoto}
                    alt="Aircraft fueling connection wing panel"
                    className="w-full h-[350px] object-cover hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </motion.div>
            </div>

            {/* 2. Avgas 100LL Section */}
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
                    src={avgasFuelingPhoto}
                    alt="Avgas light aviation aircraft refueling on tarmac"
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
                    <Fuel className="h-6 w-6 text-accent-gold" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary">
                    Avgas 100LL Supply
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Support for light and piston-engine aviation. Sourcing Avgas 100LL globally can be complex, but our extensive network guarantees availability even at remote regional airfields.
                </p>
                <ul className="space-y-3">
                  {['Dedicated Avgas distribution points', 'Piston-engine support', 'Purity & safety test compliance', 'Drums & bulk fueling options'].map((item) => (
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

            {/* 3. Worldwide Fuel Support Section */}
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
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary">
                    Worldwide Fuel Support
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Fuel release orchestration for flight departments flying anywhere. We check availability, verify pricing, secure credit terms, and handle tax exemptions for international operations.
                </p>
                <ul className="space-y-3">
                  {['24/7/365 fuel release dispatch', 'Credit facilities & pricing optimization', 'VAT & tax exemption compliance support', 'FBO & handler coordination'].map((item) => (
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
                    src={globalFuelTruckPhoto}
                    alt="Corporate jet ready for worldwide dispatch with fueling vehicle"
                    className="w-full h-[350px] object-cover hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA Banner */}

    </Layout>
  );
};

export default FuelServices;
