import React from 'react';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/layout/PageHero/PageHero';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';

export const VIPTransportation = () => {
  const breadcrumb = [
    { label: 'Services', path: '#' },
    { label: 'VIP Transportation', path: '/vip-transportation' },
  ];

  return (
    <Layout
      title="VIP Ground Transportation - Air Zigzag"
      description="Chauffeur-driven luxury transfers for passengers and reliable crew transfers."
    >
      <PageHero
        title="VIP Transportation"
        description="Premium ground logistics and private airport transfers for flight crew and passengers."
        breadcrumbItems={breadcrumb}
      />
      <section className="py-20">
        <Container>
          <SectionTitle
            subtitle="Transportation"
            title="Premium Ground Logistics"
            alignment="center"
          />
          <div className="max-w-3xl mx-auto text-center text-gray-600 text-lg leading-relaxed space-y-6">
            <p>
              We guarantee safe, premium, and on-time chauffeur services from the runway to the hotel or final destination.
            </p>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default VIPTransportation;
