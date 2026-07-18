import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Ticket, Luggage, Headphones } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import Card from '../../components/common/Card/Card';
import { fadeUp, fadeInLeft, fadeInRight } from '../../constants/animations';

export const VisaTicketing = () => {
  return (
    <Layout
      title="Entry Visa & Ticketing Assistance - Air Zigzag"
      description="Visa assistance and ticketing support to help passengers complete travel procedures efficiently and reduce delays."
    >
      {/* Page Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA-j43TbgZF9uE93tnLcDJeEfaFMvaqFo0tBO10uN3HT92CPG6xJFwlYvNuJLZToWzXl1CFDCoNNFUzdtaRCt7eWtDa4wLm3tFU579Rse9YurqPEvcD5n0gPgp6HIJWoT_9nHI2RAvxE02rs2KRJDrdNeannIZKNT59eQ40swC61K1uiL7g16nMVGi7B5DYV6S0aepQfQdF1FvTQJUgNezyHGRLa0GELBHlO84vhxD9mqaHijdJhwW"
            alt="Aircraft Ground Handling Tarmac"
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
              <span className="text-accent-gold">Visa & Ticketing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
              Entry Visa & <br />
              <span className="text-accent-gold">Ticketing</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Visa assistance and ticketing support to help passengers complete travel procedures efficiently.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button as={Link} to="/contact" variant="gold" size="lg">
                Request Assistance
              </Button>

            </div>
          </motion.div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image Grid */}
            <div className="order-2 lg:order-1 relative h-[600px] grid grid-rows-2 gap-4">
              <motion.div
                variants={fadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden shadow-md h-full"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="A professional concierge at a premium airport desk assisting a traveler"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA-j43TbgZF9uE93tnLcDJeEfaFMvaqFo0tBO10uN3HT92CPG6xJFwlYvNuJLZToWzXl1CFDCoNNFUzdtaRCt7eWtDa4wLm3tFU579Rse9YurqPEvcD5n0gPgp6HIJWoT_9nHI2RAvxE02rs2KRJDrdNeannIZKNT59eQ40swC61K1uiL7g16nMVGi7B5DYV6S0aepQfQdF1FvTQJUgNezyHGRLa0GELBHlO84vhxD9mqaHijdJhwW"
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-4 h-full">
                <motion.div
                  variants={fadeUp(0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden shadow-md h-full"
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Premium airline boarding pass resting on a polished wooden surface"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4meIr3uP0y1mqUDCOAEZIBzmgai5lOJROfGZ86iFffdOcY2YApOso7Opwin2441-Bul54VS4g6eppWQSO9T7ACAB5z-EwIrWhEtRZvPBu_xf6Gu3lvc8grzgxIlYrqfg-FLsmsQuo5-6LTrv1-g5qgg3qEGAgJ2IsfRTQPDzRXHA457fkYk4fkikmLykMJEaIvLKOcK8fOGCTvj551uLEcv_kOGWGtsrmF6xlF_ZyntQ0STJianvs"
                  />
                </motion.div>
                <motion.div
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden shadow-md h-full"
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Open passport and travel essentials on a light wooden desk"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5-hGhgPiuh1OYqjx9PbD8j9gjBX3cbeY6T5droDfV4xBKJTVzDqXMv6bXgJilC3CWmjAGjP2hgnL0Co53qBc7rtyuIhLHOWVkkZr6SKvrkZahGhK5Vsml-3sj0KGAoJVf12jCTelBY5S_3E6Fj5gVDk4XKURiMzd-Z6B_Xt0gL1SHDvCZSTIhinteU71GHWWP1rmMuVesd31gj8pVQzbOo1wooj6SiQ844K5ISvwo72DJSwEZDxcH"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right: Text Block */}
            <motion.div
              variants={fadeInLeft(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6 text-left lg:pl-8"
            >
              <span className="text-accent-gold font-bold uppercase tracking-widest text-xs block">
                Passenger Support
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">
                Comprehensive Travel Support
              </h2>
              <div className="w-16 h-1 bg-accent-gold mb-8" />
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
                Assistance with entry visas. Ticketing assistance. Helping customers complete travel procedures. Reducing unnecessary delays during travel preparation.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Grid Overview Section */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">Visa Assistance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Support with entry visa arrangements.
              </p>
            </Card>

            {/* Card 2 */}
            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <Ticket className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">Ticketing Assistance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Assistance with travel ticketing.
              </p>
            </Card>

            {/* Card 3 */}
            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <Luggage className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">Travel Preparation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Helping simplify travel procedures.
              </p>
            </Card>

            {/* Card 4 */}
            <Card hoverEffect animate={false} className="bg-light-gray p-6 text-left border-0">
              <div className="p-3 bg-primary/5 text-primary rounded-lg w-fit mb-5">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-heading mb-2">Customer Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Providing assistance throughout the preparation process.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 md:py-28 bg-background overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[400px]">
            {/* Image 1 */}
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-md group h-[300px] md:h-full"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="A premium boarding pass and passport resting in an airport lounge"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC103JPUvvFMHnsmstGxv1wVD64yHb5IQPBw7SnV80cA1-ejPwnh44CcOOd7A7NFpGjZCUe-V5iSKRUGoHu0IsZTRLwTq2zGwUNi6wIo0q4F7xlZrT2yhCwW4wnZXmGGEuXps5ZdylFShFsCClXlQVvCn8ENRTIMo7ztIgKGgUujcwznz8zgjfH1CA9JlccGCzOy-WTa9mYD7hTu1TVkkjIvNyfnGruGlYO_CWTk_zIA0xmXCFMLjmxT0yall0M75p7Sc1V1JSaH9o"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-md group h-[300px] md:h-full"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="A modern airport immigration and visa processing desk"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM-SW0RfV3GEttf-88hjlxOYpe1K-QKp7gptTgONtR1UQEIupWc_lNn6SwLA8yvr5djAOpKI4wL2TlfpQymhi1JcAZf0uFh9GLuTDcuePzICNwmkl_r72w7K-flM-eBWkEyZKgLim4D26LsIW-rqwblxuskgVH4P2DKCIgU2d0xnGUOMyc8rZGwoYTWGrznP_5dV2N9goK7Azfe9BolYTUx9t253qjfSLiNeQvJUjDGfKoyH8UjtfhJxBItLq0t_GBuwYJ8qS0-30"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-md group h-[300px] md:h-full"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="A premium physical boarding pass and passport on a clean surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5l6KN1RlgVwmkOr-oRwVRFVfFh37UJy0vJuV_o6XqFjdUiJb7iflFHNpqPJmcvDXAi-Qf86Co1HDAtuPQtP7YcFbmlX3KtcZ0Ta9dR2mSC8Jz6irMEmWwaKNp9fCm5AERdCuA54bur4KKoMiFdupmiHayRkCjUOXqUlTr-ggd9-Kgp-grHMmk5kSCinAxA2tpYJDY4nBgsUP_YXdtiGndlPnagklcFfS1iMwexiQb5d502zoeWycoLYLtQqVqZpJY8RhPfsm5U_g=w1200"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-primary text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA-j43TbgZF9uE93tnLcDJeEfaFMvaqFo0tBO10uN3HT92CPG6xJFwlYvNuJLZToWzXl1CFDCoNNFUzdtaRCt7eWtDa4wLm3tFU579Rse9YurqPEvcD5n0gPgp6HIJWoT_9nHI2RAvxE02rs2KRJDrdNeannIZKNT59eQ40swC61K1uiL7g16nMVGi7B5DYV6S0aepQfQdF1FvTQJUgNezyHGRLa0GELBHlO84vhxD9mqaHijdJhwW"
            alt="Luxurious airport departure hall"
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>

        <Container className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Need Visa or Ticketing Assistance?
            </h2>
            <p className="font-body text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
              Contact Air Zigzag for assistance with travel documentation and ticketing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-heading">
              <Button as={Link} to="/contact" variant="gold" size="lg">
                Request Assistance
              </Button>

            </div>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default VisaTicketing;
