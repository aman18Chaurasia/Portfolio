
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack Development',
      description: 'Modern e-commerce solution with AI-powered recommendations',
      tech: ['React', 'Node.js', 'AI/ML'],
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      title: 'Design System',
      category: 'UI/UX Design',
      description: 'Comprehensive design system for enterprise applications',
      tech: ['Figma', 'React', 'Storybook'],
      gradient: 'from-gray-800 to-black'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure banking application with biometric authentication',
      tech: ['React Native', 'TypeScript', 'Security'],
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Data Visualization',
      category: 'Frontend Development',
      description: 'Interactive dashboard for business intelligence',
      tech: ['D3.js', 'React', 'Charts'],
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      title: 'SaaS Platform',
      category: 'Full Stack Development',
      description: 'Cloud-based project management solution',
      tech: ['Next.js', 'PostgreSQL', 'AWS'],
      gradient: 'from-gray-800 to-gray-900'
    },
    {
      title: 'AR Experience',
      category: 'Emerging Tech',
      description: 'Augmented reality shopping experience',
      tech: ['Three.js', 'WebXR', 'AR'],
      gradient: 'from-gray-600 to-black'
    }
  ];

  return (
    <Layout>
      <section className="py-24 px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Work
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 group overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-gray-300 text-sm font-medium">{project.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
