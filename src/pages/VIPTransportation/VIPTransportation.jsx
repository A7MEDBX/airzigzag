import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, PlaneTakeoff, Globe, ArrowRightLeft, Briefcase } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { fadeUp, fadeInLeft, fadeInRight } from '../../constants/animations';

const VIPTransportation = () => {
  return (
    <Layout
      title="VIP Transportation - Air Zigzag"
      description="Executive transportation services for passengers and crew, providing reliable transportation to and from airports according to operational requirements."
    >
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center pt-20">
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="VIP Transportation Hero"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-primary-container/70 mix-blend-multiply"></div>
        </div>
        <Container className="relative z-10 w-full flex flex-col items-start">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            animate="visible"
          >
            <div className="mb-6 font-label-bold text-label-bold text-brand-gold tracking-widest uppercase">
              <Link to="/" className="hover:text-white transition-colors">Home</Link> <span className="mx-2 text-white/50">/</span>
              Services <span className="mx-2 text-white/50">/</span>
              VIP Transportation
            </div>
            <h1 className="font-display-lg text-display-lg text-white mb-6 max-w-3xl leading-tight">
              VIP Transportation
            </h1>
            <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mb-10 leading-relaxed">
              Executive transportation services for passengers and crew, providing reliable transportation to and from airports according to operational requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as={Link} to="/contact" className="px-8 py-4 bg-primary-container text-white font-label-bold text-label-bold rounded hover:bg-primary transition-colors border-none inline-flex justify-center items-center">
                Request Transportation
              </Button>
              <Button as={Link} to="/contact" className="px-8 py-4 border-[1.5px] border-brand-gold text-brand-gold bg-transparent font-label-bold text-label-bold rounded hover:bg-brand-gold/10 transition-colors inline-flex justify-center items-center">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-surface-container-lowest">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(11,29,58,0.15)] relative">
                <img
                  className="w-full h-full object-cover"
                  alt="A sleek black executive sedan parked on a rain-slicked tarmac next to a private jet at dusk."
                  src="https://images.unsplash.com/photo-1555529733-0e67056058e1?q=80&w=1974&auto=format&fit=crop"
                />
              </div>
              {/* Glass decorative element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/10 backdrop-blur-[20px] border border-white/20 rounded-xl shadow-[0_10px_40px_-10px_rgba(11,29,58,0.15)] hidden md:block"></div>
            </motion.div>
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Seamless Ground Excellence</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Car className="text-brand-gold mt-1 w-6 h-6 shrink-0" />
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Executive Transportation</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Luxury VIP transportation using executive and chauffeured vehicles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PlaneTakeoff className="text-brand-gold mt-1 w-6 h-6 shrink-0" />
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Airport Transfers</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Transportation to and from airports according to customer travel requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="text-brand-gold mt-1 w-6 h-6 shrink-0" />
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Worldwide Transportation</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">VIP transportation services available worldwide for passengers and crew.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Service Features Grid */}
      <section className="py-20 bg-surface-container-low">
        <Container>
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Comprehensive Transport Solutions</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Engineered to support the exacting standards of private aviation logistics.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(11,29,58,0.15)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary-container/5 flex items-center justify-center mb-6">
                <ArrowRightLeft className="text-primary-container w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Airport Transfers</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Reliable transportation between airports and hotels or other destinations.</p>
            </motion.div>

            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(11,29,58,0.15)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary-container/5 flex items-center justify-center mb-6">
                <Briefcase className="text-primary-container w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Executive Chauffeur</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Luxury chauffeur transportation for executives and VIP passengers.</p>
            </motion.div>

            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(11,29,58,0.15)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary-container/5 flex items-center justify-center mb-6">
                <Globe className="text-primary-container w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Worldwide Transportation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Transportation services available worldwide.</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Image Showcase */}
      <section className="py-20 bg-surface-container-lowest">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="aspect-video rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(11,29,58,0.15)] group cursor-pointer"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="A close-up interior shot of a luxury executive van."
                src="https://images.unsplash.com/photo-1506015391300-415214829dce?q=80&w=2048&auto=format&fit=crop"
              />
            </motion.div>
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="aspect-video rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(11,29,58,0.15)] group cursor-pointer md:mt-12"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="A sophisticated chauffeur in a sharp dark suit standing beside a luxury SUV."
                src="https://images.unsplash.com/photo-1619460941196-85c8e2bd30f8?q=80&w=1974&auto=format&fit=crop"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="VIP Transportation CTA Background"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?q=80&w=2070&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-primary-container/90 mix-blend-multiply"></div>
        </div>
        <Container className="relative z-10 max-w-3xl text-center">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display-lg text-display-lg text-white mb-6">Need VIP Transportation?</h2>
            <p className="font-body-lg text-body-lg text-white/90 mb-10">
              Contact Air Zigzag to arrange VIP transportation services for passengers and flight crews. Our team will help organize executive transportation according to your travel requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as={Link} to="/contact" className="px-8 py-4 bg-brand-gold text-primary-container font-label-bold text-label-bold rounded hover:bg-white transition-colors border-none inline-flex justify-center items-center">
                Request Transportation
              </Button>
              <Button as={Link} to="/contact" className="px-8 py-4 border-[1.5px] border-white/30 text-white bg-transparent font-label-bold text-label-bold rounded hover:bg-white/10 transition-colors backdrop-blur-sm inline-flex justify-center items-center">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default VIPTransportation;
