import React from 'react';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/layout/PageHero/PageHero';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';

export const HotelAccommodation = () => {
  const breadcrumb = [
    { label: 'Services', path: '#' },
    { label: 'Hotel Accommodation', path: '/hotel-accommodation' },
  ];

  return (
    <Layout
      title="Crew Hotel Accommodation - Air Zigzag"
      description="Discounted hotel reservations and layover management for airline and business crews."
    >
      <PageHero
        title="Hotel Accommodation"
        description="Premium hotel partnerships ensuring restful layovers for flight crews worldwide."
        breadcrumbItems={breadcrumb}
      />
      <section className="py-20">
        <Container>
          <SectionTitle
            subtitle="Accommodation"
            title="Worldwide Crew Hotel Bookings"
            alignment="center"
          />
          <div className="max-w-3xl mx-auto text-center text-gray-600 text-lg leading-relaxed space-y-6">
            <p>
              We coordinate reservations with premium hotels to ensure crew safety, comfort, and compliance with flight rest regulations.
            </p>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default HotelAccommodation;
