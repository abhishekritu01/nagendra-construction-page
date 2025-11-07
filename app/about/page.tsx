import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import { Award, Users, Building2, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - BuildPro Construction | Our Story & Mission',
  description: 'Learn about BuildPro Construction - our mission, vision, values, and commitment to building excellence.',
};

export default function About() {
  const stats = [
    { icon: Calendar, value: '20+', label: 'Years of Experience' },
    { icon: Building2, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '200+', label: 'Team Members' },
    { icon: Award, value: '50+', label: 'Awards Won' },
  ];

  return (
    <>
      {/* Hero Banner */}
      <Hero
        title="About BuildPro"
        subtitle="Building excellence with integrity, innovation, and dedication since 2004"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
      />

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-neutral mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                To deliver exceptional construction services that exceed client expectations while
                maintaining the highest standards of quality, safety, and sustainability. We are
                committed to building lasting relationships with our clients, partners, and communities.
              </p>
              <p className="text-lg text-gray-600">
                Our mission drives us to continuously innovate, adopt best practices, and invest in
                our team and technology to remain at the forefront of the construction industry.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-neutral mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-4">
                To be India&apos;s most trusted and respected construction company, recognized for
                excellence in every project we undertake. We envision a future where our buildings
                contribute positively to communities and the environment.
              </p>
              <p className="text-lg text-gray-600">
                We strive to set new benchmarks in construction quality, sustainability, and client
                satisfaction while fostering a culture of innovation and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Achievements"
            subtitle="Numbers that speak for our commitment and excellence"
            center
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
                >
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Story"
            subtitle="Two decades of building excellence"
            center
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                BuildPro Construction was founded in 2004 with a simple yet powerful vision: to build
                structures that stand the test of time while exceeding client expectations. What started
                as a small team of passionate builders has grown into one of the region&apos;s most
                respected construction companies.
              </p>
              <p>
                Over the years, we have completed over 500 projects across commercial, residential, and
                infrastructure sectors. Our portfolio includes everything from high-rise office towers
                and luxury residential complexes to critical infrastructure projects like bridges and
                highways.
              </p>
              <p>
                Our success is built on a foundation of core values: integrity, quality, innovation,
                and client-centricity. We believe in transparent communication, ethical business
                practices, and delivering on our promises. Every project is an opportunity to reinforce
                our commitment to excellence.
              </p>
              <p>
                Today, with a team of over 200 skilled professionals and state-of-the-art technology,
                we continue to push boundaries and set new standards in the construction industry.
                Our journey is far from over, and we look forward to building the future together
                with our clients and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Certifications & Milestones"
            subtitle="Recognitions and achievements that validate our expertise"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { year: '2004', title: 'Company Founded', desc: 'Started operations with a vision for excellence' },
              { year: '2010', title: 'ISO 9001 Certified', desc: 'Achieved quality management certification' },
              { year: '2015', title: '100th Project Completed', desc: 'Milestone of 100 successful projects' },
              { year: '2018', title: 'Green Building Certification', desc: 'Recognized for sustainable construction' },
              { year: '2020', title: 'Best Construction Company Award', desc: 'Industry recognition for excellence' },
              { year: '2024', title: '500+ Projects Milestone', desc: 'Continuing our journey of growth' },
            ].map((milestone, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent"
              >
                <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold text-neutral mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

