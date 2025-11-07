export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Amit Verma",
    role: "Founder & CEO",
    bio: "With over 20 years of experience in construction and project management, Amit leads our vision for excellence.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/amit-verma",
    email: "amit@construction-n.com",
  },
  {
    id: 2,
    name: "Neha Singh",
    role: "Project Manager",
    bio: "Neha specializes in large-scale commercial projects and ensures timely delivery with uncompromising quality.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/neha-singh",
    email: "neha@construction-n.com",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Chief Engineer",
    bio: "Rajesh brings 15 years of engineering expertise, focusing on sustainable and innovative construction methods.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/rajesh-kumar",
    email: "rajesh@construction-n.com",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Design Director",
    bio: "Priya leads our design team, creating beautiful and functional spaces that exceed client expectations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/priya-sharma",
    email: "priya@construction-n.com",
  },
];

