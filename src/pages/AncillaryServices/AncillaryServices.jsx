import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Car, UtensilsCrossed, Users, FileText,
  Headphones, BedDouble, Hotel, ShieldCheck
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { fadeUp, fadeInLeft, fadeInRight } from '../../constants/animations';

import transportImg from '../../assets/images/ancillary_transport.png';
import cateringImg  from '../../assets/images/ancillary_catering.png';
import hotelImg     from '../../assets/images/ancillary_hotel.png';

const heroUrl  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqpNGF9BDhYI98QeLPfU8PqUX3Rgc-SQyVenYAq4co8ybsL7r9zsS3Hl-bR4emMli4JLNHRu02E6Xa3pvRWDU9jMEwi1vYIEbnxOmwJC1jpLx0IZJ7l6l4QIaXR6VFodfjH0TRcAvJ6_UkhFrbddvZpf8eWbOMHSGxoTQXn9lUR3tK7SbPsWhJD6rAPEX0ZqC-rbpXThuc44MFmr2_4WrEv1cRmImICBUoHbQOa5m0saXtLqJWbYh7';
const ctaBgUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSRlwhoTvfR3JCj87zVcakySsZR7jAN2wClQPdn0HF33uTSb-G8btmGFSPKrD5ZDy0zj7gIH5KN-p5y6jKwwlBLbILuzktNSb2jU59-i96o3ob5N3eG5UgyBxYDbPWxVF0YuywbOdf2EO1S51COP4_Rd-xu2zO9tuNVXw3_dvX_BxPdJMijddKrz7WnBUJssE3d2CM3IBkEwulVDzsI9Gie5gb0V4Zk8GXDzb37E6WjcAMWAQdEBfy';

export const AncillaryServices = () => {
  return (
    <Layout
      title="Ancillary Services - Air Zigzag"
      description="Additional aviation support services including transportation, catering, hotel accommodation and travel assistance for passengers and crew."
    >

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroUrl}
            alt="Private aviation terminal apron at twilight"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        </div>

        <Container className="relative z-10 text-center">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="text-white/70 text-xs font-semibold uppercase tracking-widest">
              Home / Services / Ancillary Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
              Ancillary Services
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Additional aviation support services including transportation, catering, hotel
              accommodation and travel assistance for passengers and crew.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button as={Link} to="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
              <Button
                as={Link}
                to="/ground-handling"
                variant="outline"
                size="lg"
                className="border-accent-gold text-accent-gold hover:bg-accent-gold/10"
              >
                View Services
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Luxury Transportation */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={transportImg}
                alt="Luxury executive sedan at private aviation terminal"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:pl-10 space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block">
                Transportation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading leading-tight">
                Luxury Transportation
              </h2>
              <p className="text-gray-600 leading-relaxed">


Air Zigzag Flight Support provides premium VIP ground transportation and accommodation services, ensuring comfort, reliability, and efficiency for passengers and crew. Our fleet of executive sedans, luxury vehicles, and chauffeured transportation offers seamless transfers between airports, hotels, business meetings, and other destinations.

We also arrange high-quality hotel accommodations through our trusted hospitality partners, offering competitive rates and exceptional service. From transportation to lodging, our team coordinates every detail to deliver a smooth, secure, and professional travel experience.              </p>

              <div className="space-y-8 pt-2">
                <div className="flex gap-4 items-start">
                  <Car className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Executive Chauffeur</h3>
                    <p className="text-gray-500 leading-relaxed">Professional airport transfers with experienced drivers.</p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-100" />
                <div className="flex gap-4 items-start">
                  <Users className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Luxury Fleet</h3>
                    <p className="text-gray-500 leading-relaxed">Luxury sedans and executive SUVs for passenger transport.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Flight Catering */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:pr-10 space-y-6 order-2 md:order-1"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block">
                Inflight Dining
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading leading-tight">
                Flight Catering
              </h2>
              <p className="text-gray-600 leading-relaxed">

At Air Zigzag Flight Support, we provide premium in-flight catering tailored to the needs of every flight. Partnering with trusted catering providers, we deliver freshly prepared meals made from high-quality ingredients, ensuring exceptional taste, presentation, and on-time delivery.

Our menu includes a wide selection of international cuisines, along with customized meals for special dietary, medical, and religious requirements. Whether serving business aviation, VIP flights, charter operations, cargo crews, or special missions, we ensure a seamless onboard dining experience with the highest standards of quality and service.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <img
                src={cateringImg}
                alt="Gourmet in-flight catering on luxury private jet"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Hotel Accommodation */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading">
              Hotel Accommodation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg p-8 shadow-md bg-white border border-gray-100 group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-0">
                <img src={hotelImg} alt="" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="relative z-10">
                <Hotel className="h-9 w-9 text-accent-gold mb-6" />
                <h3 className="text-2xl font-bold text-primary font-heading mb-3">
                  Passenger Accommodation
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Coordinated bookings at leading international hotels for a restorative stay.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg p-8 shadow-md bg-white border border-gray-100 group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-primary transition-opacity duration-300 z-0" />
              <div className="relative z-10">
                <BedDouble className="h-9 w-9 text-accent-gold mb-6" />
                <h3 className="text-2xl font-bold text-primary font-heading mb-3">
                  Crew Accommodation
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Convenient and high-quality lodging solutions tailored for flight crew requirements.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Additional Support Services */}
      <section className="py-24 bg-gray-50">
        <Container>
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading">
              Additional Support Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Headphones,
                title: 'Crew Support',
                desc: 'Operational assistance for flight crews including accommodation and transportation coordination.',
                delay: 0,
              },
              {
                icon: Car,
                title: 'Transportation',
                desc: 'Ground transportation arrangements for passengers and crew.',
                delay: 0.1,
              },
              {
                icon: ShieldCheck,
                title: 'Visa & Documentation',
                desc: 'Assistance with visa requirements and travel documentation when required.',
                delay: 0.2,
              },
              {
                icon: FileText,
                title: 'Travel Assistance',
                desc: 'Comprehensive travel coordination to ensure smooth journeys for all passengers and crew.',
                delay: 0.3,
              },
            ].map(({ icon: Icon, title, desc, delay }) => (
              <motion.div
                key={title}
                variants={fadeUp(delay)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm border-t-2 border-transparent hover:border-accent-gold hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <Icon className="h-7 w-7 text-primary mb-4" />
                <h4 className="text-lg font-bold text-primary font-heading mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>


    </Layout>
  );
};

export default AncillaryServices;
