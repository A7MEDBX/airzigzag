import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Compass } from 'lucide-react';
import { toast } from 'sonner';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/layout/PageHero/PageHero';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import Button from '../../components/common/Button/Button';
import Card from '../../components/common/Card/Card';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
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

  const breadcrumb = [{ label: 'Contact', path: '/contact' }];

  return (
    <Layout
      title="Contact 24/7 Operations - Air Zigzag"
      description="Get in touch with our round-the-clock OCC dispatch team for urgent landing permits and flight clearances."
    >
      <PageHero
        title="Contact Our Operations"
        description="Available 24/7/365 to handle your flight permissions, fueling, and ground handling requests."
        breadcrumbItems={breadcrumb}
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Details Column */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent-gold mb-2 block">
                  Operations Control Center
                </span>
                <h2 className="text-3xl font-bold text-primary font-heading tracking-tight">
                  Always Online.
                </h2>
                <p className="text-gray-500 mt-4 leading-relaxed">
                  Our dispatch and flight coordination operations run non-stop. For urgent permits or changes to active flights, email or call directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 rounded-lg text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary">Direct Hotline</h3>
                    <a href="tel:+442079460958" className="text-gray-600 hover:text-accent-gold transition-colors">
                      +44 20 7946 0958
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 rounded-lg text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary">Email Dispatch</h3>
                    <a href="mailto:ops@airzigzag.com" className="text-gray-600 hover:text-accent-gold transition-colors">
                      ops@airzigzag.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 rounded-lg text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary">Headquarters</h3>
                    <span className="text-gray-600">
                      London, England, UK
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card animate={false} className="p-8 border border-gray-200/80 shadow-md">
                <h3 className="text-2xl font-bold text-primary font-heading mb-6">
                  Send a Direct Message
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        {...register('name')}
                        className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500/20'
                            : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500/20'
                            : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
                        }`}
                        placeholder="operator@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      {...register('subject')}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors ${
                        errors.subject
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
                      }`}
                      placeholder="e.g. Flight Clearance Request / Permit Support"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message Details
                    </label>
                    <textarea
                      rows={5}
                      {...register('message')}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
                      }`}
                      placeholder="Outline flight routes, scheduled dates, aircraft tail details, etc."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
