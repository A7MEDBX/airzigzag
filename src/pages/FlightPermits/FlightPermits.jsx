import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Globe, Shield, Navigation, FileText, ArrowDown, ArrowRight, Headphones, Check } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { fadeUp, fadeInLeft, fadeInRight, staggerContainer } from '../../constants/animations';

import flightPermitsHero from '../../assets/images/flight_permits_hero.png';
import wingView from '../../assets/images/wing_view.png';
import overflightVisual from '../../assets/images/overflight_visual.png';
import flightClearanceVisual from '../../assets/images/flight_clearance_visual.png';
import landingPermissionVisual from '../../assets/images/landing_permission_visual.png';

export const FlightPermits = () => {
  const breadcrumbItems = [
    { label: 'Services', path: '/contact' },
    { label: 'Flight Permits', path: '/flight-permits' }
  ];

  return (
    <Layout
      title="Seamless Global Flight Permissions - Air Zigzag"
      description="24/7 worldwide overflight and landing permit coordination. Rapid approvals for commercial, corporate, and private aviation."
    >
      {/* Page Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={flightPermitsHero}
            alt="Private Jet Flying"
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
              <span className="text-accent-gold">Flight Permits</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
              Seamless Global <br />
              <span className="text-accent-gold">Flight Permissions</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              At AirZigzag Aviation Services, we deliver premium flight support solutions designed to keep your operations moving seamlessly across borders and airspace. From routine flights to urgent missions, our team coordinates every permit with precision, efficiency, and full regulatory compliance.
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
                Contact Operations
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Overflight Permits Details Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-8 text-left"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent-gold mb-2 block">
                  International Navigation
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading tracking-tight">
                  Overflight Permits
                </h2>
                <p className="text-gray-500 mt-4 leading-relaxed">
                  When your route crosses foreign airspace, an overflight permit is essential. We manage the full process for commercial, private, cargo, charter, and special mission flights, tailoring each request to the aircraft type, routing, and operational requirements. Whether the flight is planned well in advance or requires urgent handling, we act promptly to obtain the necessary approvals.
                </p>
              </div>

              {/* Vertical List of Cards */}
              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-light-gray rounded-xl border border-gray-150 hover:border-accent-gold/20 transition-all duration-300">
                  <div className="p-3 bg-primary/5 text-primary rounded-lg shrink-0 h-fit">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-primary mb-1">
                      Fast Approval
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Rapid processing for last-minute route changes and short-notice mission profiles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-light-gray rounded-xl border border-gray-150 hover:border-accent-gold/20 transition-all duration-300">
                  <div className="p-3 bg-primary/5 text-primary rounded-lg shrink-0 h-fit">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-primary mb-1">
                      Worldwide Coverage
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Established connections with civil aviation authorities in over 190 countries.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-light-gray rounded-xl border border-gray-150 hover:border-accent-gold/20 transition-all duration-300">
                  <div className="p-3 bg-primary/5 text-primary rounded-lg shrink-0 h-fit">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-primary mb-1">
                      24/7 Operations
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Continuous monitoring from our global dispatch centers around the clock.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual Column */}
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src={wingView}
                  alt="Aviation Wing flying over clouds"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-6 md:left-12 bg-primary text-white p-6 rounded-xl shadow-2xl border border-white/10 text-left max-w-[240px]">
                <h4 className="text-3xl font-extrabold text-accent-gold mb-1">12,000+</h4>
                <p className="text-xs uppercase tracking-wider text-gray-300 font-bold leading-relaxed">
                  Permits Issued Monthly
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Redesigned Detailed Service Sections with Images */}
      <section className="py-24 bg-light-gray border-t border-gray-200/50">
        <Container>
          <SectionTitle
            subtitle="Core Services"
            title="Flight Support Solutions"
            alignment="center"
          />

          <div className="space-y-32 mt-16">
            {/* 1. Overflight Permit Section */}
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
                    <Navigation className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary">
                    Overflight Permit
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  When your route crosses foreign airspace, an overflight permit is essential. We manage the full process for commercial, private, cargo, charter, and special mission flights, tailoring each request to the aircraft type, routing, and operational requirements. Whether the flight is planned well in advance or requires urgent handling, we act promptly to obtain the necessary approvals.
                </p>
                <ul className="space-y-3">
                  {['Diplomatic clearances', 'Block overflight permits', 'Urgent route alterations', 'Global FIR navigation'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button as={Link} to="/contact" variant="gold" className="mt-4">
                  Request Overflight Permit
                </Button>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={fadeInLeft()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6 order-1 lg:order-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg group border border-gray-200">
                  <img
                    src={overflightVisual}
                    alt="Overflight Navigation visual"
                    className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/45 to-transparent" />
                  <span className="absolute bottom-6 left-6 text-white font-heading font-bold text-xl uppercase tracking-wider">
                    High-Altitude Clearance
                  </span>
                </div>
              </motion.div>
            </div>

            {/* 2. Flight Clearance Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div
                variants={fadeInRight()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg group border border-gray-200">
                  <img
                    src={flightClearanceVisual}
                    alt="Flight Clearance Dispatch"
                    className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/45 to-transparent" />
                  <span className="absolute bottom-6 left-6 text-white font-heading font-bold text-xl uppercase tracking-wider">
                    Dispatch Readiness
                  </span>
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
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary">
                    Flight Clearance
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Flight clearance is the foundation of a smooth international operation. We coordinate the required approvals for your aircraft, route, schedule, and mission profile, ensuring all documentation is prepared accurately and submitted on time. Our team works closely with authorities and local partners to secure clearances efficiently and minimize delays.
                </p>
                <ul className="space-y-3">
                  {['Full regulatory compliance', 'Manifest coordination', 'Flight plan filing & ATC update', 'Short-notice permits support'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button as={Link} to="/contact" variant="primary" className="mt-4">
                  Request Flight Clearance
                </Button>
              </motion.div>
            </div>

            {/* 3. Landing Permission Section */}
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
                    <ArrowDown className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary">
                    Landing Permit
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Landing permits require careful coordination and attention to detail. We manage the submission and follow-up process for arrivals into international destinations, ensuring all supporting information is complete and compliant. From passenger and cargo details to timing and airport requirements, we make sure every element is aligned for a smooth arrival.
                </p>
                <ul className="space-y-3">
                  {['Prior Permission Required (PPR)', 'Airport slot coordination', 'Ramp & aircraft parking slots', 'Night landing permissions'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button as={Link} to="/contact" variant="gold" className="mt-4">
                  Request Landing Permission
                </Button>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={fadeInLeft()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6 order-1 lg:order-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg group border border-gray-200">
                  <img
                    src={landingPermissionVisual}
                    alt="Landing Permission aircraft touching down"
                    className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/45 to-transparent" />
                  <span className="absolute bottom-6 left-6 text-white font-heading font-bold text-xl uppercase tracking-wider">
                    Precision Touchdown
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
      {/* Closing Tagline */}
      <section className="py-16 bg-white border-t border-gray-100">
        <Container className="max-w-3xl text-center">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Every flight is unique, and our permit solutions are tailored to your specific operation. With 24/7 availability and worldwide coverage, AirZigzag Aviation Services provides the reliability, responsiveness, and expertise you need to stay on schedule.
            </p>
            <p className="text-primary font-bold text-lg tracking-tight">
              AirZigzag Aviation Services — Your Reliable Partner for Flight Permits Worldwide.
            </p>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default FlightPermits;
