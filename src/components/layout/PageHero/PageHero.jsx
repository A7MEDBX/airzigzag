import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../common/Container/Container';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';
import { fadeUp } from '../../../constants/animations';

export const PageHero = ({ title, description, breadcrumbItems = [] }) => {
  return (
    <div className="relative pt-32 pb-20 bg-primary overflow-hidden">
      {/* Decorative background grid and shapes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 border border-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 border border-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-accent-gold mb-3 block">
            Air Zigzag Service
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </Container>

      {/* Render breadcrumb outside container since it has its own container styling */}
      {breadcrumbItems.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      )}
    </div>
  );
};

export default PageHero;
