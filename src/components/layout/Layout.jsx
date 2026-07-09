import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'sonner';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop';
import Loading from '../common/Loading/Loading';

export const Layout = ({
  children,
  title = 'Air Zigzag - Flight Support & Ground Handling',
  description = 'Premium worldwide flight support and aviation management services including overflight and landing permits, ground handling, fuel supply, catering, and hotel accommodation.',
  ogType = 'website',
  ogImage = 'https://www.airzigzag.com/wp-content/uploads/2025/01/airzigzag-aviation-provider.jpg',
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Configuration */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Air Zigzag" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      {/* Global Notifications */}
      <Toaster position="top-right" richColors closeButton />

      {/* Scroll Management */}
      <ScrollToTop />

      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-[73px] lg:pt-[88px] bg-light-gray">
        <Suspense fallback={<Loading fullPage />}>
          {children}
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
