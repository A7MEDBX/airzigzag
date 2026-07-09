import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { fadeUp } from '../../../constants/animations';
import { Link } from 'react-router-dom';

export const CTA = () => {
  return (
    <section className="py-20 bg-light-gray">
      <Container>
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-primary rounded-2xl px-6 py-12 md:p-16 text-center shadow-xl relative overflow-hidden"
        >
          {/* Subtle gold decoration ring */}
          <div className="absolute top-0 right-0 w-64 h-64 border-4 border-accent-gold/10 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border-4 border-accent-gold/10 rounded-full -translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Premium Global Flight Support for Discerning Operators
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Trusted by the world's most demanding flight departments. Experience precision, speed, and absolute reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as={Link} to="/contact" variant="gold" size="lg">
                Request A Quote
              </Button>
              <Button as={Link} to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Our Team
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
