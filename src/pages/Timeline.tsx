
import React from 'react';
import { Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';
import Layout from '@/components/Layout';

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      type: 'work',
      description: 'Leading development of enterprise-scale applications using React, Node.js, and cloud technologies.',
      location: 'San Francisco, CA',
      icon: Briefcase
    },
    {
      year: '2023',
      title: 'Best Developer Award',
      company: 'Developer Conference 2023',
      type: 'award',
      description: 'Recognized for outstanding contribution to open-source projects and innovative solutions.',
      location: 'New York, NY',
      icon: Award
    },
    {
      year: '2022',
      title: 'Frontend Team Lead',
      company: 'Digital Solutions Co.',
      type: 'work',
      description: 'Managed a team of 8 developers, implemented design systems, and improved performance by 40%.',
      location: 'Remote',
      icon: Briefcase
    },
    {
      year: '2021',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      type: 'work',
      description: 'Built scalable web applications from scratch, integrated payment systems, and implemented CI/CD.',
      location: 'Austin, TX',
      icon: Briefcase
    },
    {
      year: '2020',
      title: 'Certified React Developer',
      company: 'Meta',
      type: 'education',
      description: 'Completed advanced React certification program with focus on modern patterns and best practices.',
      location: 'Online',
      icon: GraduationCap
    },
    {
      year: '2019',
      title: 'Frontend Developer',
      company: 'WebDev Agency',
      type: 'work',
      description: 'Developed responsive websites and web applications for various clients using modern frameworks.',
      location: 'Los Angeles, CA',
      icon: Briefcase
    },
    {
      year: '2018',
      title: 'Computer Science Degree',
      company: 'University of Technology',
      type: 'education',
      description: 'Bachelor of Science in Computer Science with focus on software engineering and web technologies.',
      location: 'Boston, MA',
      icon: GraduationCap
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-blue-500/20 border-blue-500';
      case 'award': return 'bg-yellow-500/20 border-yellow-500';
      case 'education': return 'bg-green-500/20 border-green-500';
      default: return 'bg-gray-500/20 border-gray-500';
    }
  };

  return (
    <Layout>
      <section className="py-24 px-6 mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Timeline
          </h1>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-gray-300 to-gray-600"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 ${getTypeColor(event.type)} backdrop-blur-sm`}>
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
                        <p className="text-xl text-gray-300 font-medium">{event.company}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400 mt-2 sm:mt-0">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{event.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Timeline;
