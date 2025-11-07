git import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - BuildPro Construction | Get in Touch',
  description: 'Contact BuildPro Construction for your construction needs. Get a free quote and consultation today.',
};

export default function Contact() {
  const highlights = [
    {
      id: '01',
      title: 'Address',
      description: 'Mysuru, Karnataka, India',
      icon: MapPin,
    },
    {
      id: '02',
      title: 'Call Us',
      description: '+91 79969 87257',
      icon: Phone,
    },
    {
      id: '03',
      title: 'Email',
      description: 'nagendranayak177@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <Hero
        title="Get in Touch"
        subtitle="We'd love to hear from you and discuss your construction project"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
      />

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Contact Us"
            subtitle="Fill out the form below or reach us directly"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {highlights.map(({ id, title, description, icon: Icon }) => (
              <div key={id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <p className="text-accent font-semibold text-sm tracking-wide">{id}</p>
                  <h3 className="text-lg font-bold text-neutral">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-neutral mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral mb-1">Address</h4>
                      <p className="text-gray-600">
                        Mysuru<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral mb-1">Phone</h4>
                      <a href="tel:+917996987257" className="text-gray-600 hover:text-primary transition-colors">
                        +91 79969 87257
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral mb-1">Email</h4>
                      <a href="mailto:nagendranayak177@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                        nagendranayak177@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral mb-1">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-neutral mb-4">Find Us</h3>
                <div className="rounded-lg overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?ll=12.320922,76.633133&z=12&t=m&hl=en&gl=US&mapclient=embed&q=Mysuru+Karnataka"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BuildPro Construction Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

