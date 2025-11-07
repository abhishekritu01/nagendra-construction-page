'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[service.icon] as LucideIcon || Icons.Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
    >
      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
        <IconComponent className="text-primary" size={32} />
      </div>
      <h3 className="text-xl font-bold text-neutral mb-3">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  );
}

