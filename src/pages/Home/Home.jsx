import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Fuel, Users, Clock, Globe, ArrowRight, Play } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import Card from '../../components/common/Card/Card';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import CTA from '../../components/common/CTA/CTA';
import { fadeUp, fadeInLeft, fadeInRight, staggerContainer } from '../../constants/animations';

import heroJetBg from '../../assets/images/hero_jet_bg.png';
import cockpitView from '../../assets/images/cockpit_view.png';

export const Home = () => {
  return (
    <Layout
      title="Air Zigzag - Elevating Global Flight Support"
      description="24/7 overflight permissions, landing permits, ground handling, and aviation fuel services globally."
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroJetBg}
            alt="Private Jet on Runway"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
        </div>

        <Container className="relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={fadeUp()}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6 text-left"
            >
              <span className="inline-block px-3 py-1 bg-accent-gold/10 border border-accent-gold/30 text-accent-gold rounded-full text-xs font-bold uppercase tracking-widest">
                Worldwide Aviation Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
                Elevating Global <br />
                <span className="text-accent-gold">Flight Support</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
                Precision logistics for the world's most demanding flight departments. From overflight permits to sustainable fuel solutions, we deliver excellence at every altitude.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button as={Link} to="/contact" variant="gold" size="lg">
                  Request Quote
                </Button>
                <Button
                  as={Link}
                  to="/ground-handling"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  icon={Play}
                  iconPosition="left"
                >
                  View Operations
                </Button>
              </div>
            </motion.div>

            {/* Right Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5 space-y-6"
            >
              <motion.div
                variants={fadeInLeft(0.2)}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl text-left flex gap-4 text-white hover:border-accent-gold/30 transition-all duration-300"
              >
                <div className="p-3 bg-accent-gold/10 rounded-lg text-accent-gold shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">24/7 Support</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Global dispatch & OCC team for immediate response.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInLeft(0.4)}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl text-left flex gap-4 text-white hover:border-accent-gold/30 transition-all duration-300"
              >
                <div className="p-3 bg-accent-gold/10 rounded-lg text-accent-gold shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">150+ Countries</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Seamless permit clearance & ground services.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Strategic Aviation Solutions (Services) */}
      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            subtitle="Core Competencies"
            title="Strategic Aviation Solutions"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <Card hoverEffect delay={0.1}>
              <div className="p-4 bg-primary/5 text-primary rounded-xl w-fit mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-heading mb-4">
                Permit Management
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                Rapid over-flight and landing clearances for urgent corporate and medical missions globally.
              </p>
              <Link to="/flight-permits" className="text-accent-gold font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto group">
                EXPLORE <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>

            <Card hoverEffect delay={0.3}>
              <div className="p-4 bg-primary/5 text-primary rounded-xl w-fit mb-6">
                <Fuel className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-heading mb-4">
                Global Fueling
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                Competitive pricing and reliable delivery of Jet A-1 and Avgas at major international hubs.
              </p>
              <Link to="/fuel-services" className="text-accent-gold font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto group">
                EXPLORE <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>

            <Card hoverEffect delay={0.5}>
              <div className="p-4 bg-primary/5 text-primary rounded-xl w-fit mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-heading mb-4">
                Ground Handling
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                White-glove FBO services, luxury catering, and secure crew transportation worldwide.
              </p>
              <Link to="/ground-handling" className="text-accent-gold font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto group">
                EXPLORE <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-light-gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src={cockpitView}
                  alt="Aviation Cockpit Instruments"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-6 bg-primary text-white p-6 rounded-xl shadow-2xl border border-white/10 text-left max-w-[200px]">
                <h4 className="text-3xl font-extrabold text-accent-gold mb-1">99.8%</h4>
                <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                  Dispatch Reliability
                </p>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-8 text-left"
            >
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-2 block">
                  The Gold Standard
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading tracking-tight">
                  Why Flight Departments Choose Air Zigzag
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full border-2 border-accent-gold text-accent-gold font-bold text-sm">
                    01
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-primary mb-1">
                      Exclusivity & Discretion
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      We run our operations with the highest degree of confidentiality, serving VIPs and diplomatic entities globally.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full border-2 border-accent-gold text-accent-gold font-bold text-sm">
                    02
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-primary mb-1">
                      Global Vendor Network
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Access pre-vetted ground handlers and fuel suppliers in even the most remote locations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats Footprint Banner */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_100%,transparent_100%)] opacity-30" />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl md:text-5xl font-extrabold text-accent-gold tracking-tight mb-2">
                5000+
              </h4>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-300 font-bold">
                Permits Per Year
              </p>
            </div>
            <div>
              <h4 className="text-3xl md:text-5xl font-extrabold text-accent-gold tracking-tight mb-2">
                15+
              </h4>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-300 font-bold">
                Years In Service
              </p>
            </div>
            <div>
              <h4 className="text-3xl md:text-5xl font-extrabold text-accent-gold tracking-tight mb-2">
                20+
              </h4>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-300 font-bold">
                Global Offices
              </p>
            </div>
            <div>
              <h4 className="text-3xl md:text-5xl font-extrabold text-accent-gold tracking-tight mb-2">
                24
              </h4>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-300 font-bold">
                Hour Support
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust & payment badges */}
      <section className="py-16 bg-white border-b border-gray-100">
        <Container className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Accepted Payments */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Accepted Payment Methods
              </h4>
              <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
                <span className="text-xl font-extrabold tracking-tight text-gray-400 italic font-heading">VISA</span>
                <span className="text-xl font-bold tracking-tight text-gray-400 font-heading">mastercard</span>
                <span className="text-xl font-bold italic tracking-tight text-gray-400 font-heading">PayPal</span>
              </div>
            </div>

            {/* Trusted Associations */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Trusted Aviation Associations
              </h4>
              <div className="flex flex-wrap gap-6 items-center justify-center md:justify-end">
                <span className="px-3 py-1.5 border-2 border-gray-200 text-xs font-bold text-gray-400 uppercase tracking-widest rounded">EBAA</span>
                <span className="px-3 py-1.5 border-2 border-gray-200 text-xs font-bold text-gray-400 uppercase tracking-widest rounded">NBAA</span>
                <span className="px-3 py-1.5 border-2 border-gray-200 text-xs font-bold text-gray-400 uppercase tracking-widest rounded">IBAC</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <CTA />
    </Layout>
  );
};

export default Home;
