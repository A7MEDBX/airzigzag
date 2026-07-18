import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flag, ShieldCheck, Award } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import { fadeUp, fadeInLeft, fadeInRight } from '../../constants/animations';

export const About = () => {
  return (
    <Layout
      title="About Us - AirZigzag Aviation Services"
      description="A global leader in aviation flight support, providing precision logistics for flight permits, ground handling, aviation fuel, and mission-critical operations worldwide."
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6bDksj4gSOo7huaiWqfND6ajnQ8unOvhe6ATbyjfmu7Izz1mtciLjw5u-b_Q3J7N2fB9DaTp4o7z-_cIu_aOo2pst-Eq2kzUNAax0lA41KuI6DkO6lcHd3DYOKgUL2lns3GMwOrEOvAGlEDmd04Ts1xkzZ0F0HFWip4uhUJeoK1xVkx3iaQVB8FAp-0phUMAAw8ZpjIWGo1wv1bxBdPYkuFtyBB5XEbMoLG-XiU9SVqFYJ5HxCzUJ"
            alt="Sleek private business jet parked on a pristine tarmac at dusk"
            className="w-full h-full object-cover opacity-65 scale-105"
          />
          {/* Deep Navy Overlay */}
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
          {/* Gradient to blend with next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <Container className="relative z-10 w-full text-center">
          <motion.nav
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            aria-label="Breadcrumb"
            className="mb-6"
          >
            <ol className="flex justify-center space-x-2 text-white/70 font-semibold uppercase tracking-widest text-xs">
              <li>
                <Link to="/" className="hover:text-accent-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li aria-current="page" className="text-accent-gold font-bold">
                About Us
              </li>
            </ol>
          </motion.nav>

          <motion.h1
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
          >
            About Air Zigzag
          </motion.h1>

          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light font-body"
          >
            A global leader in aviation flight support, providing precision logistics for flight permits, ground handling, aviation fuel, and mission-critical operations worldwide.
          </motion.p>

          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-gold text-primary font-bold rounded hover:bg-white transition-colors duration-300 w-full sm:w-auto font-heading"
            >
              Contact Us
            </Link>

          </motion.div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={fadeInRight(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 text-left"
            >
              <span className="text-accent-gold font-bold uppercase tracking-widest text-xs block">
                The Gold Standard
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">
                Precision Operations on a Global Scale
              </h2>
              <div className="w-16 h-1 bg-accent-gold mb-8" />
              <p className="text-on-surface-variant font-body text-base md:text-lg mb-6 leading-relaxed">
                Air Zigzag Flight Support was founded on a singular principle: uncompromising reliability in global aviation. We understand that in flight operations, every minute counts and precision is not optional.
              </p>
              <p className="text-on-surface-variant font-body text-base md:text-lg mb-8 leading-relaxed">
                Our experienced team provides tailored support for every leg of your journey, ensuring seamless logistics, swift clearances, and elite ground handling in the world's most demanding environments.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-gray-200/60 pt-8">
                <div>
                  <span className="block font-heading font-extrabold text-4xl text-primary mb-2">15+</span>
                  <span className="font-body text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Years of Service
                  </span>
                </div>
                <div>
                  <span className="block font-heading font-extrabold text-4xl text-primary mb-2">24/7</span>
                  <span className="font-body text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Operational Support
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Image with Floating Card */}
            <motion.div
              variants={fadeInLeft(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAZ3NZVrzBYXNsHYHlb1VM6M8GZNZNIHtnThYsDSu9N7SRnpstioS8l-auvcocODBpKMXFp4ZCCRWi1lwbPKjb9V4UP9agy0KkS6ho2mMcQehDPyiQ76B-YgtDoIdSvGy1mzgfBFnyfY0OcddKjDSpTO3AkeUlw7xfpFI8elltQ6KSUCORro_Wt4_JZggcjwTvMPZz0n-3SkASlFmdwrfh5AGpuKx0dkmDIp05PMvTv4l2XxykMsTz"
                  alt="Modern high-tech flight operations control center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-white/20 backdrop-blur-md w-48 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-accent-gold h-8 w-8" />
                  <span className="font-heading font-extrabold text-2xl text-primary">99.8%</span>
                </div>
                <span className="font-body text-xs font-semibold text-on-surface-variant block">
                  Dispatch Reliability
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission Cards Section */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-left"
            >
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 text-primary">
                <Flag className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-primary mb-4">Our Mission</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                To deliver seamless, exceptional flight support services worldwide, empowering operators to focus on their primary mission while we handle the operational complexities.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-left"
            >
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-primary mb-4">Safety First</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                Safety is the foundation of our operations. We maintain rigorous standards and partner only with vetted vendors to ensure the highest level of security for every flight.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-left"
            >
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-primary mb-4">Operational Excellence</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                We execute with precision. Our team anticipates challenges, offering proactive solutions and unwavering support to guarantee flawless execution, every time.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-white text-center relative overflow-hidden">
        {/* Background Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0c244b] opacity-90 z-0" />
        
        <Container className="relative z-10 max-w-3xl">
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Work With Air Zigzag?
            </h2>
            <p className="text-white/80 font-body text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Partner with our dedicated team for seamless international flight support and experience the gold standard in aviation operations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent-gold text-primary font-bold rounded hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-none font-heading"
            >
              Contact Our Team
            </Link>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
