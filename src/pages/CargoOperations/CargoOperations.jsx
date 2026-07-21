import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

/* ─── Image URLs from Stitch ─── */
const HERO_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAfy5bDKteQuZfjn2nUiBMQ-wLv655bFYmGYrPoXdr4LdUnpzAAEXiEDYSqUEhvL8qQiJ3gy_q-L7sPz49fQdXZMOLZCcF9t9KZIswFrHuTvfZlitGwGLu6in1gWVkbZBBgH_LtYnUWCauOykLnzkIrjBC27UpvUO9eA5v1kENzqIkr5LtoS7VV5_GjOVf5-UDHIw5-5rjMFOrrbxfsBAkbzkTRt5Nk5MVY_VYcYpwQMQoSbfuOqCp7VgLuHF1HH5u-N8HPpx3A3UE4";
const INTRO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAbqW3oRsDUdsf3Sum4UFtjXA2-GoMy3s579L1IB-LbPLdJgqhCy3TSfBTjLdBvZnMRtq0HMDyTd180gQzfh-fuW7bE-5WqQKSO6sqL4oxFUkCKO098fjRAJ6xNbwtz8ysdNHhL02kpQamuj2ho_anPj5ZbXQ8xcn0ZO7ysKZM6VuLc9bebk6Dj-lyCNJrp9ASWCa4vJY2FkMEepUPb1aQBrwNScofCKkvCAZfzcxxoeCNbSu_c9Mg105wQE3HYGCy7Rs-D3AtSfll5";
const WHY_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDmFVcDVAqp-z8YUa6m45xnBlCq9fZC84ci3kr3sFJs7uZq-xR6p0OyqJlhsrCZynVxOQ0Fe8c8WciDffNo8Oj6KweTUEKpkY7bt_EuFuq0aqKhDmTV_PN-jMS-G6mB6hlII6Zfweybleo16JwsJbIMPYC-tGgDVfyKa5ux7UH4FiIMXjx_6V5TyqLMG2lzUTBiz5-60TX1wLDSgUfK0bgO2HhxrvnmoZ3wKtFg9ueP35jPEv36wLX7R3f1irkHC11FiskXhAMPZ7xV";
const MAP_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDbsgzDwOpHP8ezgb9_SERKlVDM3w9_DUj9QbTW7Cw2BkaYSXHX6MW39Gl2XjAvOhasjEpA7_3tWflVS-NwvtEJgDD5e-vjK-D__TE2qgygXdO5nLuZrqzZVREYnfGOigKQqjbGspvXFKG1WA8JCNShXURXXKVKqZJw3giDjvtSO26dE060ityEYvx4TTnY0xtugvaHzne9mYDJRroW4RL8qzaHt_yIE_3OZeephFyBwo4aAsbi7hEo7UCkZ-_FvUh3CYqyUGy-let6";
const GALLERY1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAUSFSxjiIxjyytr6q1ph5hUYNKk2YFEjckwvlOvQ9xoKLuZL9sBzrJfZKlB8WCNiE5AcLi-EUVfzHxOU-WcIxDhccurvTItxUs79Pt7cV3oAG7DVRqMXEihMB7IRIA9JuRZUbbFCKRbMsrJNG_KKqjpmemd_3r5ymUxZ2C73q7va4fg0yBURqCAd1N06dYE0sZFV-DVsfW6D-PXndl7Xv98vfi3exC7gOWwGGxQisRqK5ZxiOFiJP3ryYxQz2xlC0obzKBhB5BuPex";
const GALLERY2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAyAoxmDMTSjZoVDNtoumCsto7H4g_DvMWZV9440o90C7et3NxE285Ft7vip0wMmLy06nlK_21yCizsA9l4uCBjerb34lSPnZ_PNCj-tE4gqY-RjjVUe48p68vOUtZ2XnpbCmh0Uj55veOFRkaYWM31vB4d42lr_n-8wv19xJJH5EJD53WqrkvYGTX4fT9S_TbUOoPsJKs4ojAmyqNU6TKm_23sLsWDfCitzgITIXXMKebRvTYYjTbuYpvsm7nsqS1CmgVMYqkwpJKH";
const GALLERY3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAv5CuQ9CXpE3XmJKbsFYH3QMbuSjpF9olnpcbXF6HHyQwLOtrbGHbyBbTcXaXp2Mnmp76BSZ4au0hgmefPzqRrmjMe14XRwm_N4XsRp1uFZUChKDVLoRjptvIHHPa6w_Xtpi4DFrCs87QmFy7l0AgfaZduquoNjm8zz4E2yTXgf220cVQfAkN3Bvahcd05AVxk9q_zP9fuiWiTFh672rJNj0sZQ4ySpYUMX1e_FP8Ggi9-fDWjxLLnJPCcavReiDNdg7yAoq-Ywrn-";
const GALLERY4 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDkvqXDD9GIDqvfTH1sS14TDA97QPgb2hNuPScO6F5V7fyoy3F6VjJ9Ch0BkoI68KMp-2h4Ro3G8PY4fxcxB6_d3nkrZka1kqmbp3rngG1p7DSw7skcBhri7UWK6HPfZPWSkdj57Ml1q4cdCVE1PJGMbjVRAvone4e1PK3KaQnlvbY4bE-xbzT6Z5hjvvo_83cyiwjRlG1I3mia-zgk72Fmeq_bPA2ZiLeIUVOjkqoJdtvZCJIs4_jw_pAQVy2JVmGQFnMwOfS4hX2y";
const GALLERY5 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBMOhmVj9ocmgUQZmjMc10IYkJvVWnq0gG50zKiEFefc4A4QUIIpFoDY88Nmm-VCMooW5AMsZiPBSYu_fvN00TOqhNVxAiBNKEA2bQkV8PY5HalbS9UZHmoLmKa6H1X7Z5WlTTvh6vGQbxG-4PcTi5J4qyxgLP0ZqX86YQNhSShEonKlua-JzslY3ixfyvFQI1QtRxEYGQolS1E8TPqyICx59bPaOrC4YvD3hSOabx_5pmKoQEtSczxXV_rq__7XU0iGElJlJ-MjC3N";

/* ─── Token shorthands (from Stitch design system) ─── */
const C = {
  primary: '#0B1D3A',
  secondary: '#16346B',
  gold: '#D4AF37',
  blue: '#4A90E2',
  surface: '#ffffff',
  bg: '#F8F9FB',
  onPrimary: '#ffffff',
  onSurface: '#0E1626',
  onSurfaceVariant: '#44474d',
  onPrimaryContainer: '#7585a8',
  primaryContainer: '#0b1d3a',
  outlineVariant: 'rgba(197,198,206,0.3)',
};

const font = {
  displayLg: { fontFamily: 'Manrope, sans-serif', fontSize: '48px', fontWeight: 800, lineHeight: '56px', letterSpacing: '-0.02em' },
  headlineLg: { fontFamily: 'Manrope, sans-serif', fontSize: '32px', fontWeight: 800, lineHeight: '40px', letterSpacing: '-0.01em' },
  headlineMd: { fontFamily: 'Manrope, sans-serif', fontSize: '24px', fontWeight: 700, lineHeight: '32px' },
  bodyLg: { fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: '28px' },
  bodyMd: { fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '24px' },
  labelBold: { fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '20px', letterSpacing: '0.05em' },
};

const glass = {
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.2)',
};

/* ─── Reusable Material Icon helper ─── */
const Icon = ({ name, style, className }) => (
  <span className={`material-symbols-outlined${className ? ' ' + className : ''}`} style={style}>{name}</span>
);

const CargoOperations = () => {
  return (
    <Layout
      title="Cargo Operations | Air Zigzag Flight Support"
      description="Reliable Worldwide Air Cargo Handling & Logistics Solutions. Engineered for precision, speed, and discretion."
    >
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', height: '100vh', width: '100%', display: 'flex', alignItems: 'center', paddingTop: '96px', overflow: 'hidden' }}>
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{
            width: '100%', height: '100%', backgroundImage: `url('${HERO_BG}')`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            transition: 'transform 10s', backgroundRepeat: 'no-repeat'
          }} />
          <div style={{ position: 'absolute', inset: 0, background: `${C.primary}99` }} />
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, padding: '0 64px', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          {/* Breadcrumb */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'rgba(255,255,255,0.7)', ...font.labelBold, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = C.gold}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >Home</Link>
            <Icon name="chevron_right" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }} />
            <span style={{ color: C.onPrimary }}>Cargo Operations</span>
          </nav>

          <h1 style={{ ...font.displayLg, color: C.onPrimary, marginBottom: '24px', maxWidth: '768px' }}>
            Cargo Operations
          </h1>
          <p style={{ ...font.bodyLg, color: 'rgba(255,255,255,0.9)', marginBottom: '40px', maxWidth: '672px' }}>
            Reliable Worldwide Air Cargo Handling &amp; Logistics Solutions. Engineered for precision, speed, and discretion.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <Link to="/contact" style={{
              ...font.labelBold, background: C.gold, color: C.primary,
              padding: '16px 32px', borderRadius: '9999px', textDecoration: 'none',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)', display: 'inline-block',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >Request Cargo Support</Link>
            <Link to="/contact" style={{
              ...font.labelBold, ...glass, color: C.onPrimary,
              padding: '16px 32px', borderRadius: '9999px', textDecoration: 'none',
              display: 'inline-block', transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >Contact Operations</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)' }}>
          <span style={{ ...font.labelBold, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explore</span>
          <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }} />
        </div>
      </section>

      {/* ── INTRODUCTION ─────────────────────────────────── */}
      <section style={{ padding: '80px 64px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', alignItems: 'center' }}>
          {/* Left – Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{ ...font.labelBold, color: C.blue, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Expertise</span>
            <h2 style={{ ...font.headlineLg, color: C.primary, margin: 0 }}>Global Cargo Solutions</h2>
            <p style={{ ...font.bodyLg, color: C.onSurfaceVariant, margin: 0 }}>
              Air Zigzag provides a comprehensive suite of cargo flight support services, ensuring your shipments traverse the globe with unrivaled efficiency. We bridge the gap between complex logistical requirements and seamless execution, coordinating every aspect of the cargo journey from origin to final destination.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Worldwide cargo support across all major hubs',
                'Fast turnaround times to minimize aircraft downtime',
                'Operational reliability with 24/7 oversight',
                'Safe cargo handling for high-value & sensitive goods',
                'Seamless international multi-agency coordination',
              ].map(text => (
                <li key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Icon name="check_circle" style={{ color: C.gold, fontVariationSettings: "'FILL' 1" }} />
                  <span style={{ ...font.labelBold, color: C.primary }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-16px', border: `1px solid ${C.outlineVariant}`, borderRadius: '12px', zIndex: 0, transform: 'translate(16px, 16px)' }} />
            <img
              src={INTRO_IMG}
              alt="Flight dispatcher reviewing cargo manifest with loadmaster"
              style={{ borderRadius: '12px', boxShadow: '0 25px 60px rgba(0,0,0,0.2)', width: '100%', height: '500px', objectFit: 'cover', position: 'relative', zIndex: 1 }}
            />
          </div>
        </div>
      </section>

      {/* ── CARGO SERVICES GRID ───────────────────────────── */}
      <section style={{ background: C.primary, padding: '80px 0' }}>
        <div style={{ padding: '0 64px', maxWidth: '1280px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ ...font.headlineLg, color: C.onPrimary, marginBottom: '16px' }}>Our Cargo Services</h2>
          <div style={{ width: '96px', height: '4px', background: C.gold, margin: '0 auto' }} />
        </div>
        <div style={{ padding: '0 64px', maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {[
            { icon: 'flight_takeoff', title: 'Cargo Flight Handling', desc: 'Full ground handling coordination for freighter aircraft, ensuring all landing, parking, and ramp services are optimized.' },
            { icon: 'conveyor_belt', title: 'Cargo Loading & Unloading', desc: 'Expert supervision of loading processes, ULD positioning, and weight/balance manifest accuracy for all aircraft types.' },
            { icon: 'description', title: 'Customs Clearance Support', desc: 'Comprehensive documentation support to expedite customs processing and ensure regulatory compliance in any jurisdiction.' },
            { icon: 'warning', title: 'Dangerous Goods Coordination', desc: 'Specialized handling and coordination for hazardous materials, adhering strictly to IATA DGR standards and safety protocols.' },
            { icon: 'precision_manufacturing', title: 'Heavy & Oversized Cargo', desc: 'Tailored logistics for out-of-gauge shipments, including technical assessments and specialized lifting equipment coordination.' },
            { icon: 'lock', title: 'Secure Cargo Storage', desc: 'Access to secure airport bonded warehousing and temperature-controlled facilities for sensitive or high-value shipments.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ ...glass, padding: '40px', borderRadius: '12px', transition: 'background 0.2s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <Icon name={icon} style={{ color: C.gold, fontSize: '40px', display: 'block', marginBottom: '24px' }} />
              <h3 style={{ ...font.headlineMd, color: C.onPrimary, marginBottom: '16px' }}>{title}</h3>
              <p style={{ ...font.bodyMd, color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE AIR ZIGZAG ────────────────────────── */}
      <section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {/* Left – bg image */}
          <div style={{ position: 'relative', minHeight: '600px' }}>
            <div style={{
              width: '100%', height: '100%', backgroundImage: `url('${WHY_BG}')`,
              backgroundSize: 'cover', backgroundPosition: 'center'
            }} />
          </div>

          {/* Right – content */}
          <div style={{ background: C.surface, padding: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ ...font.headlineLg, color: C.primary, marginBottom: '32px' }}>Why Choose Air Zigzag</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {[
                { icon: 'update', title: '24/7 Operations', desc: 'Our cargo desk never sleeps. Real-time tracking and round-the-clock support for global time zones.' },
                { icon: 'public', title: 'Global Airport Network', desc: 'Strategic partnerships at over 3,000 airports worldwide, providing local expertise and priority access.' },
                { icon: 'groups', title: 'Experienced Operations Team', desc: 'Staffed by former loadmasters and logistics officers who understand the critical nature of cargo timelines.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: `${C.secondary}1A`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={icon} style={{ color: C.secondary }} />
                  </div>
                  <div>
                    <h4 style={{ ...font.headlineMd, color: C.primary, marginBottom: '8px' }}>{title}</h4>
                    <p style={{ ...font.bodyMd, color: C.onSurfaceVariant, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CARGO HANDLING PROCESS ───────────────────────── */}
      <section style={{ padding: '80px 64px', maxWidth: '1280px', margin: '40px auto', background: C.surface, borderRadius: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ ...font.headlineLg, color: C.primary, marginBottom: '16px' }}>Cargo Handling Process</h2>
          <p style={{ ...font.bodyMd, color: C.onSurfaceVariant, maxWidth: '672px', margin: '0 auto' }}>
            A standardized, meticulous workflow designed to eliminate errors and maximize speed.
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: '32px', left: 0, width: '100%', height: '2px', background: C.outlineVariant, display: 'block' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px', position: 'relative' }}>
            {[
              { n: '01', title: 'Request & Assess', desc: 'Reviewing cargo dimensions, weight, and special requirements for optimal aircraft matching.' },
              { n: '02', title: 'Permit & Logistics', desc: 'Securing overflight permits and landing rights while coordinating ground equipment.' },
              { n: '03', title: 'Operational Load', desc: 'On-site supervision of cargo loading, ensuring safety and balance standards are met.' },
              { n: '04', title: 'Arrival Support', desc: 'Managing offloading and last-mile logistics at the destination hub for a complete handover.' },
            ].map(({ n, title, desc }) => (
              <div key={n} style={{ background: C.surface, padding: '24px', textAlign: 'center', zIndex: 10, position: 'relative' }}
                className="process-step-card"
              >
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%', background: C.primary, color: C.onPrimary,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.25)', ...font.headlineMd,
                  transition: 'background 0.5s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = C.gold}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
                >{n}</div>
                <h5 style={{ ...font.headlineMd, color: C.primary, marginBottom: '8px' }}>{title}</h5>
                <p style={{ ...font.bodyMd, color: C.onSurfaceVariant, fontSize: '14px', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORLDWIDE OPERATIONAL EXCELLENCE ────────────── */}
      <section style={{ padding: '80px 64px', maxWidth: '1280px', margin: '0 auto', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: '24px', alignItems: 'center' }}>
          {/* Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <h2 style={{ ...font.headlineLg, color: C.primary, margin: 0 }}>Worldwide Operational Excellence</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { val: '3K+', label: 'Airports Linked' },
                { val: '24/7', label: 'Support Desk' },
                { val: '15m', label: 'Response Time' },
                { val: '150+', label: 'Countries' },
              ].map(({ val, label }) => (
                <div key={label} style={{ background: C.primaryContainer, padding: '24px', borderRadius: '12px', border: `1px solid ${C.outlineVariant}` }}>
                  <div style={{ color: C.gold, fontFamily: 'Manrope, sans-serif', fontSize: '30px', fontWeight: 800, marginBottom: '4px' }}>{val}</div>
                  <div style={{ color: C.onPrimaryContainer, ...font.labelBold, fontSize: '10px', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div style={{ position: 'relative' }}>
            <div style={{ width: '100%', height: '500px', borderRadius: '24px', overflow: 'hidden', position: 'relative', boxShadow: '0 25px 60px rgba(0,0,0,0.25)' }}>
              <div style={{
                position: 'absolute', inset: 0, filter: 'grayscale(1)', opacity: 0.4,
                backgroundImage: `url('${MAP_IMG}')`, backgroundSize: 'cover', backgroundPosition: 'center',
                transition: 'opacity 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.4'}
              />
              <img src={MAP_IMG} alt="Global aviation network map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Glass overlay card */}
              <div style={{ position: 'absolute', bottom: '32px', left: '32px', ...glass, padding: '24px', borderRadius: '12px', maxWidth: '288px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                  <span style={{ ...font.labelBold, color: C.onPrimary, fontSize: '12px', textTransform: 'uppercase' }}>Live Network Status: Optimal</span>
                </div>
                <p style={{ ...font.bodyMd, color: 'rgba(255,255,255,0.8)', fontSize: '14px', margin: 0 }}>
                  Currently monitoring 42 active cargo missions across three continents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY MASONRY ──────────────────────────────── */}
      <section style={{ padding: '80px 64px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ ...font.headlineLg, color: C.primary, marginBottom: '16px' }}>Operations Gallery</h2>
          <div style={{ width: '96px', height: '4px', background: C.gold, margin: '0 auto' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridAutoRows: '200px', gap: '24px' }}>
          <div style={{ gridRow: 'span 2' }}>
            <img src={GALLERY1} alt="High-loaders elevating ULD containers at night" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
          <div>
            <img src={GALLERY2} alt="Organized cargo warehouse with pallets" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <img src={GALLERY3} alt="Panoramic cargo ramp at dawn" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
          <div>
            <img src={GALLERY4} alt="Technician securing heavy-lift engine on pallet" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
          <div style={{ gridRow: 'span 2' }}>
            <img src={GALLERY5} alt="Interior of massive freighter aircraft" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────── */}
      <section style={{ padding: '0 64px', maxWidth: '1280px', margin: '0 auto 80px' }}>
        <div style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, ${C.secondary} 100%)`,
          borderRadius: '24px', padding: '64px', textAlign: 'center', position: 'relative', overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.25)'
        }}>
          {/* Decorative blobs */}
          <div style={{ position: 'absolute', top: 0, right: 0, width: '256px', height: '256px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', transform: 'translate(50%, -50%)', filter: 'blur(48px)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '384px', height: '384px', background: `${C.gold}0D`, borderRadius: '50%', transform: 'translate(-50%, 50%)', filter: 'blur(48px)' }} />

          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ ...font.displayLg, color: C.onPrimary, marginBottom: '24px' }}>Need Professional Cargo Support?</h2>
            <p style={{ ...font.bodyLg, color: 'rgba(255,255,255,0.7)', marginBottom: '40px', maxWidth: '672px', margin: '0 auto 40px' }}>
              Partner with the global leader in flight support. Our operations team is standing by to coordinate your next mission.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
              <Link to="/contact" style={{
                ...font.labelBold, background: C.gold, color: C.primary,
                padding: '20px 40px', borderRadius: '9999px', textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)', display: 'inline-block',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >Request Cargo Support</Link>
              <Link to="/contact" style={{
                ...font.labelBold, border: '1px solid rgba(255,255,255,0.3)', color: C.onPrimary,
                padding: '20px 40px', borderRadius: '9999px', textDecoration: 'none',
                display: 'inline-block', transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >Contact Our Team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inject Material Symbols font + pulse keyframe if not globally present */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      `}</style>
    </Layout>
  );
};

export default CargoOperations;
