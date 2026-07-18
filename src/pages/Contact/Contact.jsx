import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { fadeUp } from '../../constants/animations';

const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(5, { message: 'Please enter a valid phone number.' }),
});

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API submit
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('Your message has been sent successfully. Our OCC team will reply shortly!');
      reset();
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <Layout
      title="Contact Us - Air Zigzag"
      description="Contact Air Zigzag regarding flight support services, flight permits, ground handling, fuel services, flight planning, catering, and operational inquiries."
    >
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            alt="Operations Control Center" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-[#0B172A]/85 mix-blend-multiply"></div>
        </div>
        
        <Container className="relative z-10 w-full flex flex-col items-center text-center">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wider backdrop-blur-sm">
              <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
              <span className="mx-2 text-white/50">/</span>
              <span>Contact</span>
            </div>
            
            <h1 className="font-display-lg text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            
            <p className="font-body-lg text-lg text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
              Contact Air Zigzag regarding flight support services, flight permits, ground handling, fuel services, flight planning, catering, and operational inquiries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 bg-brand-gold text-primary-container font-semibold rounded hover:bg-white transition-colors border-none min-w-[160px]"
              >
                Send Inquiry
              </Button>
              <Button 
                as={Link} 
                to="/services" 
                className="px-8 py-3.5 border border-white/30 text-white bg-transparent font-semibold rounded hover:bg-white/10 transition-colors backdrop-blur-sm min-w-[160px]"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <section id="contact-form" className="py-20 bg-[#FAFAFA]">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Form Container */}
            <motion.div 
              variants={fadeUp()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1 bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <h2 className="text-2xl font-bold text-primary-container mb-8">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register('firstName')}
                      className={`w-full px-4 py-3.5 rounded-lg border bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                        errors.firstName ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:ring-brand-gold/20 focus:border-brand-gold'
                      }`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register('lastName')}
                      className={`w-full px-4 py-3.5 rounded-lg border bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                        errors.lastName ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:ring-brand-gold/20 focus:border-brand-gold'
                      }`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className={`w-full px-4 py-3.5 rounded-lg border bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                        errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:ring-brand-gold/20 focus:border-brand-gold'
                      }`}
                      placeholder="name@company.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      {...register('phone')}
                      className={`w-full px-4 py-3.5 rounded-lg border bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                        errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:ring-brand-gold/20 focus:border-brand-gold'
                      }`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    className="w-full md:w-auto px-10 py-3.5 bg-primary-container text-white font-semibold rounded-lg hover:bg-primary transition-colors border-none"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
            
            {/* Sidebar Cards */}
            <motion.div 
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:w-[400px]"
            >
              <div className="bg-[#121B2E] rounded-2xl p-8 relative overflow-hidden shadow-xl h-full">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10">
                  <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L22 22H2L12 2Z" fill="white"/>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-10">
                    Operations Desk
                  </h3>
                  
                  <div className="bg-[#19243C] border border-white/5 rounded-xl p-6">
                    <div className="w-10 h-10 rounded-lg bg-[#222E4A] flex items-center justify-center mb-4">
                      <Mail className="text-brand-gold w-5 h-5" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">
                      General Inquiries & Support
                    </p>
                    <a href="mailto:ops@airzigzag.com" className="text-white text-lg hover:text-brand-gold transition-colors">
                      ops@airzigzag.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
