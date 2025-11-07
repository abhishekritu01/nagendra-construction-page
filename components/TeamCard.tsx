'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Linkedin } from 'lucide-react';
import { TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
    >
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Hover overlay with social links */}
        <div className="absolute inset-0 bg-primary bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary p-3 rounded-full hover:bg-accent hover:text-white transition-all"
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin size={24} />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="bg-white text-primary p-3 rounded-full hover:bg-accent hover:text-white transition-all"
              aria-label={`Email ${member.name}`}
            >
              <Mail size={24} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral mb-1">{member.name}</h3>
        <p className="text-accent font-semibold mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm">{member.bio}</p>
      </div>
    </motion.div>
  );
}

