import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Clock, Users, Award, Headphones, ArrowRight } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { fadeUp, fadeInLeft, fadeInRight } from '../../constants/animations';

import heroJetBg from '../../assets/images/hero_jet_bg.png';
import cockpitView from '../../assets/images/cockpit_view.png';

const stats = [
  { icon: Clock, value: '20+', label: 'Years of Experience' },
  { icon: Globe, value: '150+', label: 'Countries Covered' },
  { icon: Users, value: '24/7', label: 'Operational Support' },
  { icon: Award, value: '100%', label: 'Client Commitment' },
];

export const About = () => {
  return (
    <Layout
      title="About Us - AirZigzag Aviation Services"
      description="AirZigzag Aviation Services delivers reliable worldwide flight support with 20+ years of operational experience. Permits, ground handling, fuel, and 24/7 supervision."
    >
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-center bg-primary overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroJetBg}
            alt="Airport tarmac at dusk"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
        </div>

        <Container className="relative z-10">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
              <Link to="/" className="hover:text-accent-gold transition-colors">Home</Link>
              <span>•</span>
              <span className="text-accent-gold">About Us</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
              About AirZigzag
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              In aviation, every minute matters—and every detail makes a difference.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button as={Link} to="/contact" variant="gold" size="lg">
                Contact Us
              </Button>
              <Button
                as={Link}
                to="/flight-permits"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={ArrowRight}
                iconPosition="right"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Stats Row ──────────────────────────────────────── */}
      <section className="bg-accent-gold py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                variants={fadeUp(i * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-1"
              >
                <Icon className="h-6 w-6 mx-auto mb-2 text-primary opacity-70" />
                <p className="text-4xl font-extrabold text-primary font-heading">{value}</p>
                <p className="text-sm font-semibold text-primary/70 uppercase tracking-wider">{label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── About Paragraph + Image ────────────────────────── */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent-gold block">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading leading-tight">
                AirZigzag Aviation Services
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed text-[1.05rem]">
                <p>
                  At <strong className="text-primary">AirZigzag Aviation Services</strong>, we deliver reliable worldwide flight support designed to keep your operations moving without interruption. From routine flights to time-critical missions, our team combines more than <strong className="text-primary">20 years of operational experience</strong> with a responsive global network to provide fast, practical, and dependable solutions.
                </p>
                <p>
                  Whether your flight requires permits, ground handling, flight planning, fuel coordination, crew services, or complete trip support, every request is managed with <strong className="text-primary">precision, efficiency, and 24/7 operational supervision</strong>.
                </p>
                <p>
                  We don't believe in one-size-fits-all solutions. Every operation has its own challenges, and every client deserves a service built around their specific requirements. That philosophy has earned us the trust of operators, aviation partners, and authorities across multiple regions.
                </p>
                <p>
                  Our commitment is simple: deliver accurate support, respond without delay, and make every flight easier to operate.
                </p>
              </div>

              {/* Signature tagline */}
              <div className="border-l-4 border-accent-gold pl-5 mt-6">
                <p className="text-primary font-semibold text-lg italic font-heading">
                  "AirZigzag Aviation Services — Supporting Every Flight with Precision."
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={cockpitView}
                  alt="Professional aviation cockpit"
                  className="w-full h-[480px] object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-primary/90 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                  <div className="p-2 bg-accent-gold rounded-lg shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Trusted Since Day One</p>
                    <p className="text-gray-300 text-xs">Operators, partners & authorities across multiple regions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Core Values — Photo Cards ────────────────────────── */}
      <section className="py-24 bg-light-gray border-t border-gray-200/60">
        <Container>
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent-gold block mb-3">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading">
              What Drives Us
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Four principles that shape every decision, every flight, and every relationship we build.
            </p>
          </motion.div>

          {/* Row 1: Precision (wide) + 24/7 (narrow) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
            {/* Card 1 — Precision & Reliability (wide) */}
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-7 relative rounded-2xl overflow-hidden shadow-lg group h-[360px] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=900&q=80"
                alt="Aircraft maintenance technician checking engine with precision"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent-gold rounded-lg shrink-0">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">Precision & Reliability</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Every request is handled with meticulous attention to detail. We leave no room for error when your operations depend on it.
                </p>
              </div>
            </motion.div>

            {/* Card 2 — 24/7 Supervision (narrow) */}
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-lg group h-[360px] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=700&q=80"
                alt="Aircraft flying at night with airport lights"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent-gold rounded-lg shrink-0">
                    <Headphones className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">24/7 Supervision</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Around-the-clock operational monitoring ensures your flights are supported regardless of time zone or location.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Global Network (narrow) + Client-First (wide) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 3 — Global Network (narrow) */}
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-lg group h-[360px] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=700&q=80"
                alt="World map with aviation flight routes from above"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent-gold rounded-lg shrink-0">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">Global Network</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  A responsive worldwide network built over 20 years, enabling fast, practical solutions even in the most challenging destinations.
                </p>
              </div>
            </motion.div>

            {/* Card 4 — Client-First Philosophy (wide) */}
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-7 relative rounded-2xl overflow-hidden shadow-lg group h-[360px] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
                alt="Professional aviation handshake VIP client service"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent-gold rounded-lg shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">Client-First Philosophy</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  We don't believe in one-size-fits-all. Every operation is unique and every client deserves a solution built around their specific needs.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────── */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroJetBg}
            alt="Aviation background"
            className="w-full h-full object-cover opacity-15 blur-sm"
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
              Ready to Work With Us?
            </h2>
            <p className="text-gray-300 text-lg">
              Let us handle the complexity so you can focus on flying. Our team is on standby 24/7.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Button as={Link} to="/contact" variant="gold" size="lg">
                Get in Touch
              </Button>
              <Button
                as={Link}
                to="/flight-permits"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View Services
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
