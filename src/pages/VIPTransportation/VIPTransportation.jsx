import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, PlaneTakeoff, Globe, ArrowRightLeft, Briefcase } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import Card from '../../components/common/Card/Card';
import { fadeUp, fadeInLeft, fadeInRight } from '../../constants/animations';

export const VIPTransportation = () => {
  return (
    <Layout
      title="VIP Transportation - Air Zigzag"
      description="Executive transportation services for passengers and crew, providing reliable transportation to and from airports according to operational requirements."
    >
      {/* Page Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL41cT4tKpTxAoJ9Iz1IKb9egjOPhikgTdRaKcFR8ZN6G_45-veaE2HqsRMFZkUdywKaVW_vaSCR-SVIdj1mR4zwfx-HkxikpW2Hx0Un-018GeyyEBlulCPFSCNZBD_a02dQqbq2wzoM4jwu7ZucyZmhEy0Tgs6Tsvo26RB6jbMFT2BwoeabRshkK1UDpiVLf4Rc0rrwmFgfdxTZkiy3ZfkbL4ea95fITu2y1XZZeNcMUnlTiZMg606RmxkwjymQ0TZ-uv9q6RgHg=w1200"
            alt="Executive ground transfer sedan parked beside private jet"
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
              <span className="text-accent-gold">VIP Transportation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
              VIP <br />
              <span className="text-accent-gold">Transportation</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Executive transportation services for passengers and crew, providing reliable transportation to and from airports according to operational requirements.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button as={Link} to="/contact" variant="gold" size="lg">
                Request Transportation
              </Button>

            </div>
          </motion.div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image container */}
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-md relative">
                <img
                  className="w-full h-full object-cover"
                  alt="A sleek black executive sedan parked on a tarmac next to a private jet at dusk."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJlZu2BgAFPNIGv_cQlD-DDH-2Vk-ai6o0wQcUWC3R_wTnmUExQvMoskBp8DfTMuWm3BPp29gvY7EMUHfo-APJD9nFoZyHVKsHDNt0WMslquxLokNYmtE8jz85bidWWRF07x5tBip9EjyOc2YHT38ywhIeXAECTmNkEkuR5Dqrq8ghQrdcJOwKQCPgM6UI18z8ImCbSVPjlLwaU6aKmwcLiDV28E7WJvR-01zNeXZR8m6W2RYnuvwH=w1200"
                />
              </div>
            </motion.div>

            {/* Right Text details */}
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2 text-left lg:pl-8"
            >
              <span className="text-accent-gold font-bold uppercase tracking-widest text-xs block">
                Ground Excellence
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">
                Seamless Ground Excellence
              </h2>
              <div className="w-16 h-1 bg-accent-gold mb-8" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Car className="text-brand-gold mt-1 w-6 h-6 shrink-0" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary mb-2">Executive Transportation</h3>
                    <p className="font-body text-base text-on-surface-variant leading-relaxed">Luxury VIP transportation using executive and chauffeured vehicles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PlaneTakeoff className="text-brand-gold mt-1 w-6 h-6 shrink-0" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary mb-2">Airport Transfers</h3>
                    <p className="font-body text-base text-on-surface-variant leading-relaxed">Transportation to and from airports according to customer travel requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="text-brand-gold mt-1 w-6 h-6 shrink-0" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary mb-2">Worldwide Transportation</h3>
                    <p className="font-body text-base text-on-surface-variant leading-relaxed">VIP transportation services available worldwide for passengers and crew.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Service Features Grid */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4">Comprehensive Transport Solutions</h2>
            <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">Engineered to support the exacting standards of private aviation logistics.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <ArrowRightLeft className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">Airport Transfers</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reliable transportation between airports and hotels or other destinations.
              </p>
            </Card>

            {/* Card 2 */}
            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">Executive Chauffeur</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Luxury chauffeur transportation for executives and VIP passengers.
              </p>
            </Card>

            {/* Card 3 */}
            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">Worldwide Transportation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                VIP transportation services available worldwide for flight crews and passengers.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Image Showcase */}
      <section className="py-20 md:py-28 bg-background overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="aspect-video rounded-xl overflow-hidden shadow-md group cursor-pointer"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="A close-up interior shot of a luxury executive van."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBii0dV9e1GjJANvfggnOaoBKDUmBAx5IOZWZMKC-qTpb8-Qirb2tjG7K00esaZIz-WRBOKGb3gpMsxJ7UqNmwhrZtPBHD18zgGIsjfjtbI1dZSftvk9HtiiUSIxkv3xgyAofGj5_j5rE8OFHDcslBMzZGNRA2P-3QY5lmljvimeAvh67MDqKwlDw71cr3iQeA7YlQXWK_nTpBXCK7tPKTs4IBikTAVCDTRUUGREvDd_8FxkkgRk2PS=w1200"
              />
            </motion.div>
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="aspect-video rounded-xl overflow-hidden shadow-md group cursor-pointer md:mt-12"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="A sophisticated chauffeur standing beside a luxury SUV."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC60ZSRwyVIH25WKcjFAhA7M0ytzufa5NNelhZIxNwmU9F_MJmzlEI6t6MzrMLifxlB0n5vpq9JJ9yn6g7HbxQd9KyqEJYX0yQ_r_oDd4vifhT9UP2KBj1h13N8ljfqATB8XHDwCodqtqUG2LZx4fyfAbm2NfvSBPSGDjlsqPueEPvAUYWJ2IofXsnWZOvaDx5afJKxz_R-80KJNB982vy4CTU14dsSGereHBv5SnCyq_oL5Tn3ypGa=w1200"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">

          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>

      </section>
    </Layout>
  );
};

export default VIPTransportation;
