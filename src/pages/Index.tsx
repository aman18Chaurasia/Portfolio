
import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Code, Users, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import MagneticElement from '@/components/MagneticElements';

const Index = () => {
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <MagneticElement strength={0.2}>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                Creative
                <br />
                <span className="bg-gradient-to-r from-gray-100 via-white to-gray-300 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
            </MagneticElement>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with cutting-edge technology 
              and innovative design solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <MagneticElement strength={0.4}>
                <Link to="/portfolio">
                  <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25">
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </MagneticElement>
              <MagneticElement strength={0.4}>
                <Link to="/contact">
                  <Button 
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </MagneticElement>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Code, number: '100+', label: 'Projects' },
              { icon: Users, number: '50+', label: 'Clients' },
              { icon: Award, number: '15+', label: 'Awards' },
              { icon: Star, number: '99%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <MagneticElement key={index} strength={0.3}>
                <div className="text-center group hover:scale-110 transition-all duration-300">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300">
                    <stat.icon className="w-8 h-8 mx-auto mb-4 text-white group-hover:text-gray-300 transition-colors duration-300" />
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              </MagneticElement>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
