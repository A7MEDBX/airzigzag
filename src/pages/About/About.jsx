import React from 'react';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/layout/PageHero/PageHero';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';

export const About = () => {
  const breadcrumb = [{ label: 'About Us', path: '/about' }];

  return (
    <Layout
      title="About Air Zigzag - Global Flight Support Experts"
      description="Learn about Air Zigzag. Providing top-tier global flight support, permits, fueling, and ground services."
    >
      <PageHero
        title="About Air Zigzag"
        description="Providing premier overflight and landing permits, ground handling, and aviation services worldwide."
        breadcrumbItems={breadcrumb}
      />
      <section className="py-20">
        <Container>
          <SectionTitle
            subtitle="Who We Are"
            title="A Global Network, A Local Solution"
            alignment="center"
          />
          <div className="max-w-3xl mx-auto text-center text-gray-600 text-lg leading-relaxed space-y-6">
            <p>
              Air Zigzag is a leading flight support agency providing dependable, premium, and seamless support services for commercial, cargo, corporate, and private aviation.
            </p>
            <p>
              Headquartered in London, our network of local handlers and direct Civil Aviation links spans over 150 countries, facilitating rapid permits, ground operations, and aviation services.
            </p>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
