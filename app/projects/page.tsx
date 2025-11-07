'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'All' | 'Commercial' | 'Residential' | 'Infrastructure'>('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.type === filter);

  const projectTypes: Array<'All' | 'Commercial' | 'Residential' | 'Infrastructure'> = [
    'All',
    'Commercial',
    'Residential',
    'Infrastructure',
  ];

  return (
    <>
      {/* Hero Banner */}
      <Hero
        title="Our Projects"
        subtitle="Showcasing our portfolio of successful construction projects"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
      />

      {/* Filterable Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Project Portfolio"
            subtitle="Explore our diverse range of completed projects"
            center
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filter === type
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-neutral hover:bg-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: projects.length, label: 'Total Projects' },
              {
                value: projects.filter((p) => p.type === 'Commercial').length,
                label: 'Commercial',
              },
              {
                value: projects.filter((p) => p.type === 'Residential').length,
                label: 'Residential',
              },
              {
                value: projects.filter((p) => p.type === 'Infrastructure').length,
                label: 'Infrastructure',
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

