
import React from 'react';
import { Code, Palette, Rocket, Brain } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <section className="py-24 px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Passionate About Creating Digital Excellence
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                With over 8 years of experience in web development and design, I specialize in 
                creating immersive digital experiences that blend creativity with cutting-edge technology.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                My expertise spans from frontend frameworks like React and Vue to backend technologies, 
                with a passion for UI/UX design and modern development practices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, title: 'Clean Code', desc: 'Maintainable & Scalable' },
                  { icon: Palette, title: 'Design First', desc: 'User-Centered Approach' },
                  { icon: Rocket, title: 'Performance', desc: 'Optimized Solutions' },
                  { icon: Brain, title: 'Innovation', desc: 'Latest Technologies' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="bg-gray-900 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl mb-6 flex items-center justify-center">
                  <Code className="w-24 h-24 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Senior Developer</h3>
                <p className="text-gray-400">
                  Transforming ideas into reality through code, design, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
