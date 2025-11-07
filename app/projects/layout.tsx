import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects - BuildPro Construction | Project Portfolio',
  description: 'Explore our portfolio of successful construction projects including commercial, residential, and infrastructure developments.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

