import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - BuildPro Construction | Comprehensive Building Solutions',
  description: 'Explore our comprehensive construction services including commercial, residential, infrastructure, and project management solutions.',
};

export default function Services() {
  return (
    <>
      {/* Hero Banner */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive construction solutions for every need"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
      />

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What We Offer"
            subtitle="From concept to completion, we provide end-to-end construction services"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Process"
            subtitle="How we deliver excellence in every project"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Consultation',
                desc: 'We understand your vision and requirements through detailed discussions.',
              },
              {
                step: '02',
                title: 'Planning',
                desc: 'Our experts create comprehensive plans and timelines for your project.',
              },
              {
                step: '03',
                title: 'Execution',
                desc: 'We build with precision, quality, and attention to every detail.',
              },
              {
                step: '04',
                title: 'Delivery',
                desc: 'We hand over your completed project with full documentation and support.',
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="text-4xl font-bold text-accent mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-neutral mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free quote and consultation for your construction needs
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

