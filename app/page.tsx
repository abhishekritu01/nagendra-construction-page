import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home - BuildPro Construction | Quality Building Solutions',
  description: 'Welcome to BuildPro - Your trusted construction partner for commercial, residential, and infrastructure projects.',
};

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Building Excellence, One Project at a Time"
        subtitle="Your trusted construction partner delivering quality, innovation, and precision in every build"
        ctaText="Request Quote"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
      />

      {/* Quick Intro */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-6">
              Welcome to BuildPro
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 20 years of experience in the construction industry, we have built a reputation
              for delivering exceptional projects that exceed expectations. From commercial complexes to
              residential communities, we bring expertise, innovation, and dedication to every build.
            </p>
            <p className="text-lg text-gray-600">
              Our commitment to quality, safety, and timely delivery has made us a trusted partner
              for clients across the nation. We combine traditional craftsmanship with modern technology
              to create structures that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive construction solutions tailored to your needs"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Featured Projects"
            subtitle="Showcasing our recent successful completions"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Testimonials from satisfied clients"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Mehta',
                role: 'CEO, TechCorp Industries',
                quote: 'BuildPro delivered our office complex on time and within budget. Their attention to detail and professionalism is unmatched.',
              },
              {
                name: 'Priya Desai',
                role: 'Property Developer',
                quote: 'Working with BuildPro was a pleasure. They transformed our vision into reality with exceptional quality and craftsmanship.',
              },
              {
                name: 'Amit Patel',
                role: 'Infrastructure Manager',
                quote: 'The highway project was completed ahead of schedule. BuildPro\'s expertise in infrastructure development is outstanding.',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-neutral">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

