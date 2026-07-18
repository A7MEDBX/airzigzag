import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navigation, Cloud, Check } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { fadeUp, fadeInLeft, fadeInRight } from '../../constants/animations';

import heroJetBg from '../../assets/images/hero_jet_bg.png'; // Airport photo for top background
import cockpitView from '../../assets/images/cockpit_view.png'; // Represents flight routes / cockpit navigation
import wingView from '../../assets/images/wing_view.png'; // Represents weather / clouds flying
import overflightVisual from '../../assets/images/overflight_visual.png';



const SVGWorldMap = () => (
  <div 
    className="relative w-full aspect-video bg-cover bg-center rounded-xl overflow-hidden shadow-lg border border-gray-200"
    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkG3WtDIQWSXMbB-CHjqnQJCb7q8GTZOpfvx1RsUoV2Od9SQgcJEhEL0RZIYdrV9e-aYjFQ2m6CltYXAC2kET67iBuYSfvwNw8jsla8QYqVPjHfIk02FuOUAw3uarGl3jbqQXfT1YYJihUPmAGBvxy_pmHY71XJpfU3F51Da241Ylrjldl1hpnAyulagRa6NQioniF-wjLzMGJHwB1AU3MOIgVw6bw8gaq_-yR833J-fxsVy1SjNBa=w1200')" }}
  >
    {/* Subtle Dark blend overlay to help route line readability */}
    <div className="absolute inset-0 bg-slate-950/40 rounded-xl" />
    
    {/* Grid Backdrop Mesh */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-60 rounded-xl" />
    
    {/* Radar sweep animation */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,rgba(212,175,55,0.08)_0deg,transparent_120deg,transparent_360deg)] origin-center"
      />
    </div>

    <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full z-10" xmlns="http://www.w3.org/2000/svg">
      {/* Defined Path for Plane Animation */}
      <path
        id="atlantic-route"
        d="M240,180 Q370,80 500,120"
        fill="none"
        stroke="rgba(212, 175, 55, 0.3)"
        strokeWidth="2"
        strokeDasharray="6 4"
      />

      {/* Animated Glowing Flight Path Line Overlay */}
      <motion.path
        d="M240,180 Q370,80 500,120"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glowing Hubs with Pulsating Rings */}
      {/* North America (New York / JFK area) */}
      <circle cx="240" cy="180" r="10" fill="rgba(212, 175, 55, 0.3)" className="animate-ping" style={{ transformOrigin: '240px 180px' }} />
      <circle cx="240" cy="180" r="4.5" fill="#D4AF37" />
      <text x="220" y="200" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif" className="drop-shadow-md">JFK</text>
      
      {/* Europe (London / LHR area) */}
      <circle cx="500" cy="120" r="10" fill="rgba(212, 175, 55, 0.3)" className="animate-ping" style={{ transformOrigin: '500px 120px' }} />
      <circle cx="500" cy="120" r="4.5" fill="#D4AF37" />
      <text x="490" y="140" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif" className="drop-shadow-md">LHR</text>

      {/* Animated Airplane Icon traveling en route */}
      <g>
        {/* Simple premium jet SVG icon */}
        <path
          d="M-6,-5 L8,0 L-6,5 L-3,0 Z"
          fill="#D4AF37"
          stroke="#081B3A"
          strokeWidth="1"
        />
        <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
          <mpath href="#atlantic-route" />
        </animateMotion>
      </g>
    </svg>
  </div>
);

// Interactive Mock Dispatch Dashboard Component
const MockDashboard = () => (
  <div className="w-full bg-[#081325] border-4 border-gray-700 rounded-2xl shadow-2xl overflow-hidden text-left font-mono text-xs text-green-400 p-4 space-y-4">
    {/* Window Header */}
    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <span className="text-gray-500 font-semibold uppercase tracking-wider text-[10px]">
        Air Zigzag OCC Dispatch System v4.9
      </span>
    </div>

    {/* Dispatch Terminal Logs */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Route Info */}
      <div className="bg-[#030914] p-3 rounded border border-gray-800 space-y-1.5">
        <span className="text-gray-400 font-bold block">ACTIVE ROUTE</span>
        <div>ORIGIN: <span className="text-white">EGLL / LHR</span></div>
        <div>DEST: <span className="text-white">OMDB / DXB</span></div>
        <div>ALT: <span className="text-white">FL370 / FL390</span></div>
        <div>ROUTE: <span className="text-accent-gold text-[10px] block truncate">UL607 EEL V2 UT456 DIK</span></div>
      </div>

      {/* METAR & Weather Info */}
      <div className="bg-[#030914] p-3 rounded border border-gray-800 space-y-1.5">
        <span className="text-gray-400 font-bold block">METAR FEED</span>
        <div className="text-[10px] text-yellow-400 leading-normal">
          EGLL 091420Z 24012KT 9999 BKN045 22/14 Q1016 NOSIG
        </div>
        <div className="text-[10px] text-green-400 leading-normal">
          OMDB 091400Z 11008KT SAVOK CAVOK 38/24 Q1008
        </div>
      </div>

      {/* Dispatch Actions */}
      <div className="bg-[#030914] p-3 rounded border border-gray-800 space-y-1">
        <span className="text-gray-400 font-bold block">STATUS CHECKS</span>
        <div className="flex items-center gap-2 text-green-400">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          ATC Filing: CONFIRMED
        </div>
        <div className="flex items-center gap-2 text-green-400">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Weather Route: OPTIMIZED
        </div>
        <div className="flex items-center gap-2 text-green-400">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          FIR Clearances: ACTIVE
        </div>
      </div>
    </div>

    {/* Graphical Route Plot */}
    <div className="bg-[#02070f] h-40 rounded border border-gray-800 p-2 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c192c_1px,transparent_1px),linear-gradient(to_bottom,#0c192c_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
      {/* Route Vector Graphic */}
      <svg className="w-full h-full relative z-10" viewBox="0 0 400 100">
        <motion.path
          d="M 50 80 Q 200 10 350 50"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <circle cx="50" cy="80" r="3" fill="#ef4444" />
        <circle cx="350" cy="50" r="3" fill="#ef4444" />
        <circle cx="200" cy="30" r="20" fill="rgba(234, 179, 8, 0.15)" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" />
        <text x="180" y="34" className="fill-yellow-500 text-[8px] font-sans">CAT ZONE</text>
      </svg>
    </div>
  </div>
);

export const FlightPlanning = () => {
  return (
    <Layout
      title="Flight Planning & Route Optimization - Air Zigzag"
      description="Professional worldwide flight planning, route optimization, meteorological briefings, and ATC filing."
    >
      {/* Page Hero Section (Airport photo background) */}
      <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroJetBg}
            alt="Airport Tarmac Ground Operations"
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
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
              <Link to="/" className="hover:text-accent-gold transition-colors">Home</Link>
              <span>•</span>
              <span className="text-gray-400">Services</span>
              <span>•</span>
              <span className="text-accent-gold">Flight Planning</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
              Flight Planning
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Professional flight planning services designed to optimize routes, consider weather conditions, and support international flight operations.
            </p>
            <div className="pt-4">
              <Button as={Link} to="/contact" variant="gold" size="lg">
                Request Flight Planning
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Professional Flight Planning (World Map Graphic) */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Map Visual */}
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <SVGWorldMap />
            </motion.div>

            {/* Text details */}
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 text-left space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent-gold block">
                Aviation Navigation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading tracking-tight">
                Professional Flight Planning
              </h2>
              <p className="text-gray-500 leading-relaxed">
Professional Flight Planning
Precision Planning for Every Flight
At Air Zigzag Flight Support, we provide professional flight planning services designed to ensure safe, efficient, and cost-effective operations for every mission.
As a leading international trip planning and flight management company, we support aircraft operators worldwide with comprehensive flight planning, regulatory authorizations, and operational support tailored to their specific requirements.
Our experienced dispatch team prepares every flight with precision, helping operators optimize performance while maintaining full compliance with international aviation regulations.              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {['ATC flight filing', 'NOTAM alerts monitor', 'Optimized route coordinates', 'Overflight permissions integration'].map((check) => (
                  <div key={check} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    {check}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Redesigned Key Benefits Sections (Detailed sections with photos) */}
      <section className="py-24 bg-light-gray border-t border-gray-200/50">
        <Container>
          <SectionTitle
            subtitle="Core Advantages"
            title="Strategic Dispatch Planning"
            alignment="center"
          />

          <div className="space-y-32 mt-16">
            {/* 1. Optimized Flight Routes Section */}
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
                    Optimized Flight Routes
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
Optimized Flight Routes
Smart Routing for Maximum Efficiency

Efficient flight planning begins with selecting the most suitable route.

Our qualified dispatchers utilize internationally recognized flight planning systems to generate optimized flight routes based on aircraft performance, operational requirements, airspace availability, and flight restrictions.

By carefully calculating the most efficient routing, we help reduce unnecessary flight time, optimize fuel consumption, minimize operational costs, and improve overall flight efficiency while ensuring safe and reliable operations.                </p>
                <ul className="space-y-3">
                  {['Jetstream routing optimization', 'ATC system-ready routing', 'Airspace availability monitoring', 'Reduced en-route navigation fees'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={fadeInLeft()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6 order-1 lg:order-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src={cockpitView}
                    alt="Flight deck instruments showing optimized routing"
                    className="w-full h-[350px] object-cover hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </motion.div>
            </div>

            {/* 2. Weather Consideration Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div
                variants={fadeInRight()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src={wingView}
                    alt="Aircraft flying above the weather clouds"
                    className="w-full h-[350px] object-cover hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
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
                    <Cloud className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary">
                    Weather Consideration
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
Weather Consideration
Accurate Weather Analysis for Safer Flights

Weather forecasting is a fundamental part of every successful flight plan.

Our planning process incorporates accurate meteorological data, including wind direction, headwinds, tailwinds, air temperature, and other weather conditions that directly affect aircraft performance and fuel consumption.

By integrating real-time weather information into every flight plan, we ensure accurate fuel calculations, improved operational safety, and better decision-making throughout the entire flight.                </p>
                <ul className="space-y-3">
                  {['Real-time weather radar briefing', 'Clear Air Turbulence (CAT) avoidance', 'Wind shear & icing analyses', 'Dynamic volcanic ash tracking'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Planning Process (Dashboard Mockup) */}
      <section className="py-24 bg-white border-t border-gray-200/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text details */}
            <motion.div
              variants={fadeInRight()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6 text-left space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent-gold block">
                Technical Dispatch
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading tracking-tight">
                Professional Flight Planning Process
              </h2>
              <p className="text-gray-500 leading-relaxed">
Professional Flight Planning Process
Comprehensive Planning from Departure to Arrival

Our dispatch specialists combine advanced international flight planning systems with operational expertise to create customized flight plans that meet each operator's individual needs.

We continuously monitor operational requirements and prepare efficient routing solutions designed to reduce ground delays and maximize flight performance.

Operators may also nominate their preferred flight planning system whenever required, allowing us to integrate their preferred planning solution while maintaining the highest standards of operational accuracy, efficiency, and reliability.              </p>
            </motion.div>

            {/* Dashboard Visual */}
            <motion.div
              variants={fadeInLeft()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <MockDashboard />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA Banner (Deleted Contact Us Button) */}

    </Layout>
  );
};

export default FlightPlanning;
