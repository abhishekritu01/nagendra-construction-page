export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Commercial Construction",
    description: "Turnkey projects for offices, malls, and industries. We deliver excellence in commercial spaces.",
    icon: "Building2",
  },
  {
    id: 2,
    title: "Residential Projects",
    description: "Modern, sustainable homes and apartments designed for comfort and efficiency.",
    icon: "Home",
  },
  {
    id: 3,
    title: "Renovation & Remodeling",
    description: "Revamp existing structures efficiently with our expert renovation services.",
    icon: "Hammer",
  },
  {
    id: 4,
    title: "Project Management",
    description: "End-to-end management for complex builds, ensuring timely and quality delivery.",
    icon: "ClipboardCheck",
  },
  {
    id: 5,
    title: "Infrastructure Development",
    description: "Building roads, bridges, and public infrastructure with precision and durability.",
    icon: "Road",
  },
  {
    id: 6,
    title: "Interior Design",
    description: "Complete interior design solutions to transform your spaces into beautiful environments.",
    icon: "Palette",
  },
];

