import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Ticket, Luggage, Headset } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { fadeUp } from '../../constants/animations';

const VisaTicketing = () => {
  return (
    <Layout
      title="Entry Visa & Ticketing | Air Zigzag"
      description="Visa assistance and ticketing support to help passengers complete travel procedures efficiently."
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20 md:pt-[104px]">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCA-j43TbgZF9uE93tnLcDJeEfaFMvaqFo0tBO10uN3HT92CPG6xJFwlYvNuJLZToWzXl1CFDCoNNFUzdtaRCt7eWtDa4wLm3tFU579Rse9YurqPEvcD5n0gPgp6HIJWoT_9nHI2RAvxE02rs2KRJDrdNeannIZKNT59eQ40swC61K1uiL7g16nMVGi7B5DYV6S0aepQfQdF1FvTQJUgNezyHGRLa0GELBHlO84vhxD9mqaHijdJhwW')" }}
          ></div>
          <div className="absolute inset-0 bg-primary-container/70 mix-blend-multiply"></div>
        </div>
        
        <Container className="relative z-10 text-center">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-display-lg text-display-lg text-on-primary mb-6 drop-shadow-lg">
              Entry Visa & Ticketing
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mx-auto mb-8 drop-shadow-md">
              Visa assistance and ticketing support to help passengers complete travel procedures efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button as={Link} to="/contact" className="px-6 py-3 bg-primary-container text-on-primary font-label-bold text-label-bold rounded hover:opacity-90 transition-opacity border-none inline-flex justify-center items-center w-full sm:w-auto shadow-md">
                Request Assistance
              </Button>
              <Button as={Link} to="/contact" className="px-6 py-3 bg-transparent text-[#D4AF37] border-[1.5px] border-[#D4AF37] font-label-bold text-label-bold rounded hover:bg-[#D4AF37]/10 transition-colors inline-flex justify-center items-center w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-section-gap bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="order-2 lg:order-1 relative h-[600px] grid grid-rows-2 gap-4">
              <motion.div 
                variants={fadeUp()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-sm h-full"
              >
                <img 
                  className="absolute inset-0 w-full h-full object-cover" 
                  alt="A professional concierge at a premium airport desk assisting a traveler with their passport and documents in a highly polished, softly lit environment." 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA-j43TbgZF9uE93tnLcDJeEfaFMvaqFo0tBO10uN3HT92CPG6xJFwlYvNuJLZToWzXl1CFDCoNNFUzdtaRCt7eWtDa4wLm3tFU579Rse9YurqPEvcD5n0gPgp6HIJWoT_9nHI2RAvxE02rs2KRJDrdNeannIZKNT59eQ40swC61K1uiL7g16nMVGi7B5DYV6S0aepQfQdF1FvTQJUgNezyHGRLa0GELBHlO84vhxD9mqaHijdJhwW"
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-4 h-full">
                <motion.div 
                  variants={fadeUp(0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative rounded-lg overflow-hidden shadow-sm"
                >
                  <img 
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="A close-up of a premium airline boarding pass resting on a polished wooden surface beside a sleek pen and a luxury passport cover, illuminated by natural light." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4meIr3uP0y1mqUDCOAEZIBzmgai5lOJROfGZ86iFffdOcY2YApOso7Opwin2441-Bul54VS4g6eppWQSO9T7ACAB5z-EwIrWhEtRZvPBu_xf6Gu3lvc8grzgxIlYrqfg-FLsmsQuo5-6LTrv1-g5qgg3qEGAgJ2IsfRTQPDzRXHA457fkYk4fkikmLykMJEaIvLKOcK8fOGCTvj551uLEcv_kOGWGtsrmF6xlF_ZyntQ0STJianvs"
                  />
                </motion.div>
                <motion.div 
                  variants={fadeUp(0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative rounded-lg overflow-hidden shadow-sm"
                >
                  <img 
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="A stylized composition featuring an open passport, a model airplane, and a leather luggage tag on a light wooden desk, evoking the excitement and preparation of international travel." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5-hGhgPiuh1OYqjx9PbD8j9gjBX3cbeY6T5droDfV4xBKJTVzDqXMv6bXgJilC3CWmjAGjP2hgnL0Co53qBc7rtyuIhLHOWVkkZr6SKvrkZahGhK5Vsml-3sj0KGAoJVf12jCTelBY5S_3E6Fj5gVDk4XKURiMzd-Z6B_Xt0gL1SHDvCZSTIhinteU71GHWWP1rmMuVesd31gj8pVQzbOo1wooj6SiQ844K5ISvwo72DJSwEZDxcH"
                  />
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              variants={fadeUp()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container">
                Comprehensive Travel Support
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Assistance with entry visas. Ticketing assistance. Helping customers complete travel procedures. Reducing unnecessary delays during travel preparation.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Service Features (Bento Grid) */}
      <section className="bg-surface-container-low py-section-gap">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <motion.div 
              variants={fadeUp()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-surface rounded-xl p-6 shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="text-primary-container w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary-container mb-3">Visa Assistance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-auto">Support with entry visa arrangements.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-surface rounded-xl p-6 shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Ticket className="text-primary-container w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary-container mb-3">Ticketing Assistance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-auto">Assistance with travel ticketing.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-surface rounded-xl p-6 shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Luggage className="text-primary-container w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary-container mb-3">Travel Preparation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-auto">Helping simplify travel procedures.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-surface rounded-xl p-6 shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Headset className="text-primary-container w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary-container mb-3">Customer Support</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-auto">Providing assistance throughout the preparation process.</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Image Gallery Section */}
      <section className="py-section-gap bg-background overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter h-[400px]">
            <motion.div 
              variants={fadeUp()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-sm group"
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="A pristine British passport resting on top of a flight itinerary on a wooden table, capturing the essence of global travel and administrative precision." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSs3tfpO31ID8v5Naa5WT9Y2JrL5ORHDm2NDG8IpNI7m52LDdcsXr8DxxUcWNQ9QQp9xB4pZqx3WJMDIvssWO_oNSIFkaE5fiGOGJVuWp0_Wo_2vYg1r3g4ZUGD8I11nb9XxE-XIGT3Yf2nkoc4f_tHEiVrs9SWjbTcgCI2QzrBAUjn6bLPI2X8ryqgcvdJTIfkPrMwgYWjxB2-pvsQuCjqxIernEZgGRDwjdsBIJo04zDEuxeILSL"
              />
              <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
            
            <motion.div 
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-sm group"
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="A close-up shot of an exclusive boarding pass on a sleek terminal desk with a luxury watch and pen, representing meticulous ticketing and premium service." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4meIr3uP0y1mqUDCOAEZIBzmgai5lOJROfGZ86iFffdOcY2YApOso7Opwin2441-Bul54VS4g6eppWQSO9T7ACAB5z-EwIrWhEtRZvPBu_xf6Gu3lvc8grzgxIlYrqfg-FLsmsQuo5-6LTrv1-g5qgg3qEGAgJ2IsfRTQPDzRXHA457fkYk4fkikmLykMJEaIvLKOcK8fOGCTvj551uLEcv_kOGWGtsrmF6xlF_ZyntQ0STJianvs"
              />
              <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
            
            <motion.div 
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-sm group"
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="A curated arrangement of travel essentials including a passport, leather luggage tag, and a miniature airplane model on a clean desk, highlighting thorough travel preparation." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5-hGhgPiuh1OYqjx9PbD8j9gjBX3cbeY6T5droDfV4xBKJTVzDqXMv6bXgJilC3CWmjAGjP2hgnL0Co53qBc7rtyuIhLHOWVkkZr6SKvrkZahGhK5Vsml-3sj0KGAoJVf12jCTelBY5S_3E6Fj5gVDk4XKURiMzd-Z6B_Xt0gL1SHDvCZSTIhinteU71GHWWP1rmMuVesd31gj8pVQzbOo1wooj6SiQ844K5ISvwo72DJSwEZDxcH"
              />
              <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-section-gap flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCA-j43TbgZF9uE93tnLcDJeEfaFMvaqFo0tBO10uN3HT92CPG6xJFwlYvNuJLZToWzXl1CFDCoNNFUzdtaRCt7eWtDa4wLm3tFU579Rse9YurqPEvcD5n0gPgp6HIJWoT_9nHI2RAvxE02rs2KRJDrdNeannIZKNT59eQ40swC61K1uiL7g16nMVGi7B5DYV6S0aepQfQdF1FvTQJUgNezyHGRLa0GELBHlO84vhxD9mqaHijdJhwW')" }}
          ></div>
          <div className="absolute inset-0 bg-primary-container/90 mix-blend-multiply"></div>
        </div>
        
        <Container className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-[20px] border border-white/20 p-8 md:p-12 rounded-xl"
          >
            <h2 className="font-display-lg text-display-lg text-on-primary mb-4 drop-shadow-md">
              Need Visa or Ticketing Assistance?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-8 max-w-xl mx-auto">
              Contact Air Zigzag for assistance with travel documentation and ticketing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button as={Link} to="/contact" className="px-6 py-3 bg-primary-container text-on-primary font-label-bold text-label-bold rounded hover:opacity-90 transition-opacity border-none shadow-md inline-flex justify-center items-center w-full sm:w-auto">
                Request Assistance
              </Button>
              <Button as={Link} to="/contact" className="px-6 py-3 bg-transparent text-[#D4AF37] border-[1.5px] border-[#D4AF37] font-label-bold text-label-bold rounded hover:bg-[#D4AF37]/10 transition-colors inline-flex justify-center items-center w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default VisaTicketing;
