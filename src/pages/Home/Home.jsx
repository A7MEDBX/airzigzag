import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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

// Reusable animated count-up component
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (start === end) return;

      const duration = 2; // seconds
      const totalMiliseconds = duration * 1000;
      const frameRate = 1000 / 60; // 60fps
      const totalFrames = Math.round(totalMiliseconds / frameRate);
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuad = progress * (2 - progress);
        const currentCount = Math.round(easeOutQuad * end);

        setCount(currentCount);

        if (frame === totalFrames) {
          clearInterval(timer);
          setCount(end);
        }
      }, frameRate);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

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
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
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

      {/* Global Reach / Stats Footprint Banner */}
      <section className="py-24 bg-[#0B1D3A] text-white relative overflow-hidden">

        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading mb-4 tracking-tight">
              A Truly Global Footprint
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Operating across 6 continents with local expertise that understands the nuances of regional aviation regulations.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-[56px] font-extrabold text-accent-gold mb-2 font-heading tracking-tight">
                <AnimatedCounter value="5000" suffix="+" />
              </div>
              <div className="text-gray-300 text-xs md:text-sm uppercase tracking-wider font-bold">
                Permits Per Year
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-[56px] font-extrabold text-accent-gold mb-2 font-heading tracking-tight">
                <AnimatedCounter value="15" suffix="+" />
              </div>
              <div className="text-gray-300 text-xs md:text-sm uppercase tracking-wider font-bold">
                Years of Service
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-[56px] font-extrabold text-accent-gold mb-2 font-heading tracking-tight">
                <AnimatedCounter value="20" suffix="+" />
              </div>
              <div className="text-gray-300 text-xs md:text-sm uppercase tracking-wider font-bold">
                Global Offices
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-[56px] font-extrabold text-accent-gold mb-2 font-heading tracking-tight">
                <AnimatedCounter value="24" />
              </div>
              <div className="text-gray-300 text-xs md:text-sm uppercase tracking-wider font-bold">
                Hour Support
              </div>
            </div>
          </div>
        </Container>


      </section>

      {/* Trust & payment badges */}
      <section className="py-24 bg-[#f5f3f6]">
        <Container className="max-w-5xl">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-lg border border-gray-100">
            {/* Accepted Payments */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold font-heading text-primary text-center mb-10">
                Accepted Payment Methods
              </h3>
              <div className="flex flex-wrap justify-center gap-12 items-center">
                <div className="flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2014_logo_detail.svg" className="h-8 object-contain" alt="Visa" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Visa</span>
                </div>
                <div className="flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-10 object-contain" alt="Mastercard" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Mastercard</span>
                </div>
                <div className="flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-8 object-contain" alt="PayPal" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">PayPal</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 my-12" />

            {/* Trusted Aviation Associations */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-heading text-primary text-center mb-10">
                Trusted Aviation Associations
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-12">
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/IATA_logo.svg" className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" alt="IATA Ground Handling Partner" />
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <img src="https://logo.clearbit.com/nbaa.org" className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" alt="NBAA" />
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <img src="https://logo.clearbit.com/ebaa.org" className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" alt="EBAA" />
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <img src="https://logo.clearbit.com/afbaa.org" className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" alt="AfBAA" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </Layout>
  );
};

export default Home;
