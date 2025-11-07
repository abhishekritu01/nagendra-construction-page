export interface Project {
  id: number;
  title: string;
  type: "Commercial" | "Residential" | "Infrastructure";
  location: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Riverside Office Tower",
    type: "Commercial",
    location: "Mumbai, Maharashtra",
    description: "A 25-story modern office complex with state-of-the-art facilities and sustainable design.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Green Valley Apartments",
    type: "Residential",
    location: "Bangalore, Karnataka",
    description: "Eco-friendly residential complex with 200 units, featuring green spaces and modern amenities.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Metro Bridge Extension",
    type: "Infrastructure",
    location: "Delhi, NCR",
    description: "2.5 km elevated metro bridge connecting two major transit hubs with advanced engineering.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Tech Park Complex",
    type: "Commercial",
    location: "Hyderabad, Telangana",
    description: "Multi-building tech park with 500,000 sq ft of office space and modern infrastructure.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Luxury Villa Community",
    type: "Residential",
    location: "Pune, Maharashtra",
    description: "Premium gated community with 50 luxury villas, clubhouse, and world-class amenities.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Highway Overpass",
    type: "Infrastructure",
    location: "Chennai, Tamil Nadu",
    description: "4-lane highway overpass reducing traffic congestion and improving connectivity.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
  },
];

