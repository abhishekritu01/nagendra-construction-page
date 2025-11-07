import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import TeamCard from '@/components/TeamCard';
import { team } from '@/data/team';

export const metadata: Metadata = {
  title: 'Our Team - BuildPro Construction | Meet the Experts',
  description: 'Meet the talented professionals behind BuildPro Construction - experienced leaders dedicated to building excellence.',
};

export default function Team() {
  return (
    <>
      {/* Hero Banner */}
      <Hero
      
        title="Meet Our Team"
        subtitle="Experienced professionals dedicated to building your vision"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
      />

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Expert Team"
            subtitle="Passionate professionals with years of experience in construction and project management"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Our Team Stands Out"
            subtitle="What makes our professionals exceptional"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Expertise',
                desc: 'Our team brings decades of combined experience across all construction sectors.',
              },
              {
                title: 'Innovation',
                desc: 'We stay ahead with the latest technologies and construction methodologies.',
              },
              {
                title: 'Dedication',
                desc: 'Every team member is committed to delivering excellence in every project.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
              >
                <h3 className="text-xl font-bold text-neutral mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

