import React from 'react';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/layout/PageHero/PageHero';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';

export const VisaTicketing = () => {
  const breadcrumb = [
    { label: 'Services', path: '#' },
    { label: 'Visa & Ticketing', path: '/visa-ticketing' },
  ];

  return (
    <Layout
      title="Crew Visas & Air Ticketing - Air Zigzag"
      description="Entry visa support, passport assistance, and commercial flight ticketing for crew rotations."
    >
      <PageHero
        title="Entry Visa & Ticketing"
        description="Assisting flight departments with crew entry visas, shore passes, and ticket bookings."
        breadcrumbItems={breadcrumb}
      />
      <section className="py-20">
        <Container>
          <SectionTitle
            subtitle="Travel Docs"
            title="Crew Visa Assistance & Commercial Ticketing"
            alignment="center"
          />
          <div className="max-w-3xl mx-auto text-center text-gray-600 text-lg leading-relaxed space-y-6">
            <p>
              We streamline crew rotations by coordinating entry permits, visa applications, shore passes, and commercial ticket purchases.
            </p>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default VisaTicketing;
