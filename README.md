# NEO Constructions Website

A modern, fully responsive construction company website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Six Complete Pages**: Home, About, Team, Projects, Services, and Contact
- **Modern Design**: Clean, professional UI with custom color scheme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Accessible**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Next.js Image** for optimized images

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
construction-n/
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── team/               # Team page
│   ├── projects/           # Projects page with filtering
│   ├── services/           # Services page
│   ├── contact/            # Contact page with form
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero banner component
│   ├── SectionTitle.tsx    # Section heading component
│   ├── ServiceCard.tsx     # Service card component
│   ├── ProjectCard.tsx     # Project card component
│   ├── TeamCard.tsx        # Team member card
│   └── ContactForm.tsx     # Contact form with validation
├── data/
│   ├── services.ts         # Services data
│   ├── projects.ts         # Projects data
│   └── team.ts             # Team members data
└── public/                 # Static assets (images, etc.)
```

## 🎨 Design System

### Colors
- **Primary**: `#0B3D91` (Deep Blue)
- **Accent**: `#FF8A00` (Construction Orange)
- **Neutral**: `#1F2937` (Dark Gray)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, 48px (H1), 32px (H2)
- **Body**: Regular, 16px

## 📱 Pages

1. **Home** (`/`) - Hero section, services preview, featured projects, testimonials
2. **About** (`/about`) - Mission, vision, company story, stats, certifications
3. **Team** (`/team`) - Team member grid with hover effects
4. **Projects** (`/projects`) - Filterable project gallery (Commercial, Residential, Infrastructure)
5. **Services** (`/services`) - Service cards with process overview
6. **Contact** (`/contact`) - Contact form, company info, Google Maps

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Content
- Edit data files in `/data` directory to update services, projects, and team members
- Modify page content in `/app` directory

### Change Colors
- Update colors in `tailwind.config.ts`

### Add New Pages
- Create new directories in `/app` with `page.tsx` files

## 🔧 Environment Variables

No environment variables required for basic functionality. For production, you may want to add:
- Contact form submission endpoint
- Analytics IDs
- API keys (if needed)

## 📄 License

This project is open source and available for use.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

