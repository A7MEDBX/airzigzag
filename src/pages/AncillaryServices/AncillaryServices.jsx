import React from 'react';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/layout/PageHero/PageHero';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';

export const AncillaryServices = () => {
  const breadcrumb = [{ label: 'Ancillary Services', path: '/ancillary-services' }];

  return (
    <Layout
      title="Ancillary Aviation Services - Air Zigzag"
      description="VIP catering, transport, hotel accommodation, and visa coordination."
    >
      <PageHero
        title="Ancillary Services"
        description="Premium supporting services to elevate the travel experience for crew and passengers."
        breadcrumbItems={breadcrumb}
      />
      <section className="py-20">
        <Container>
          <SectionTitle
            subtitle="Support Services"
            title="Premium Travel Logistics"
            alignment="center"
          />
          <div className="max-w-3xl mx-auto text-center text-gray-600 text-lg leading-relaxed space-y-6">
            <p>
              We organize high-end crew accommodation, catering, luxury ground transport, visa ticketing, and general concierge services.
            </p>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default AncillaryServices;
