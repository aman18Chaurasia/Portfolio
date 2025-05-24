import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Mail, Github, Linkedin, Twitter, ExternalLink, Code, Palette, Rocket, Brain, ArrowRight, Star, Users, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import CursorFollower from '@/components/CursorFollower';
import CursorFollowingCharacter from '@/components/CursorFollowingCharacter';
import MagneticElement from '@/components/MagneticElements';
import InteractiveBackground from '@/components/InteractiveBackground';

const Index = () => {
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
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

    return () => {
      observer.disconnect();
      document.body.style.cursor = 'auto';
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Cursor Follower */}
      <CursorFollower />
      
      {/* Cursor Following Character */}
      <CursorFollowingCharacter />
      
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/30"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-white/5 to-gray-500/5 blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-gray-400/5 to-white/5 blur-2xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-black/50 rounded-2xl border border-gray-800 p-4">
            <div className="flex justify-between items-center">
              <MagneticElement>
                <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Portfolio
                </div>
              </MagneticElement>
              <div className="hidden md:flex space-x-8">
                {['About', 'Work', 'Skills', 'Contact'].map((item) => (
                  <MagneticElement key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </MagneticElement>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <MagneticElement strength={0.2}>
                <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                  Creative
                  <br />
                  <span className="bg-gradient-to-r from-gray-100 via-white to-gray-300 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
              </MagneticElement>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
                Crafting exceptional digital experiences with cutting-edge technology 
                and innovative design solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                <MagneticElement strength={0.4}>
                  <Button 
                    onClick={() => scrollToSection('work')}
                    className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
                  >
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </MagneticElement>
                <MagneticElement strength={0.4}>
                  <Button 
                    variant="outline"
                    onClick={() => scrollToSection('contact')}
                    className="border-gray-600 text-white hover:bg-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    Get In Touch
                  </Button>
                </MagneticElement>
              </div>
            </div>

            {/* Right Column - Character */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <CursorFollowingCharacter />
                {/* Optional decorative elements around character */}
                <div className="absolute -top-8 -left-8 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
                <div className="absolute -bottom-12 -right-12 w-6 h-6 bg-gray-400/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Stats - moved below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
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

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div 
            data-animate
            id="about-section"
            className={`transition-all duration-1000 ${isVisible['about-section'] ? 'animate-fade-in' : 'opacity-0 translate-y-12'}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Passionate About Creating Digital Excellence
                </h3>
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
                  <h4 className="text-2xl font-bold text-white mb-4">Senior Developer</h4>
                  <p className="text-gray-400">
                    Transforming ideas into reality through code, design, and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div 
            data-animate
            id="work-section"
            className={`transition-all duration-1000 ${isVisible['work-section'] ? 'animate-fade-in' : 'opacity-0 translate-y-12'}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Work
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
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
              ].map((project, index) => (
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
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div 
            data-animate
            id="skills-section"
            className={`transition-all duration-1000 ${isVisible['skills-section'] ? 'animate-fade-in' : 'opacity-0 translate-y-12'}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: 'Frontend',
                  skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
                  icon: Code,
                  gradient: 'from-gray-700 to-gray-900'
                },
                {
                  category: 'Backend',
                  skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'],
                  icon: Zap,
                  gradient: 'from-gray-800 to-black'
                },
                {
                  category: 'Design',
                  skills: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'After Effects'],
                  icon: Palette,
                  gradient: 'from-gray-600 to-gray-800'
                },
                {
                  category: 'Tools',
                  skills: ['Git', 'Docker', 'Webpack', 'Jest', 'Cypress'],
                  icon: Rocket,
                  gradient: 'from-gray-700 to-gray-900'
                }
              ].map((skillGroup, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 h-full">
                    <div className={`bg-gradient-to-r ${skillGroup.gradient} p-4 rounded-xl mb-6 w-fit group-hover:scale-110 transition-transform duration-300 border border-gray-700`}>
                      <skillGroup.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{skillGroup.category}</h3>
                    <div className="space-y-3">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-between">
                          <span className="text-gray-400">{skill}</span>
                          <div className="w-20 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r from-white to-gray-300 rounded-full animate-scale-in`}
                              style={{ 
                                width: `${85 + Math.random() * 15}%`,
                                animationDelay: `${skillIndex * 0.1}s`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div 
            data-animate
            id="contact-section"
            className={`transition-all duration-1000 ${isVisible['contact-section'] ? 'animate-fade-in' : 'opacity-0 translate-y-12'}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 hover:border-gray-600 transition-all duration-500">
              <div className="text-center mb-12">
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  Ready to bring your vision to life? Let's collaborate and create something extraordinary together.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@portfolio.dev', href: 'mailto:hello@portfolio.dev' },
                    { icon: Github, label: 'GitHub', value: '@developer', href: '#' },
                    { icon: Linkedin, label: 'LinkedIn', value: '/in/developer', href: '#' },
                    { icon: Twitter, label: 'Twitter', value: '@developer', href: '#' }
                  ].map((contact, index) => (
                    <a 
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="bg-white text-black p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{contact.label}</div>
                        <div className="text-gray-400">{contact.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-all duration-300"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-all duration-300"
                    />
                    <textarea 
                      rows={4}
                      placeholder="Your Message"
                      className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-all duration-300 resize-none"
                    ></textarea>
                    <Button className="w-full bg-white text-black hover:bg-gray-200 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25">
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Portfolio
            </div>
            <p className="text-gray-500">
              Crafting digital experiences with passion and precision
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="bg-gray-800/50 hover:bg-gray-700/50 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
          <div className="text-gray-600 text-sm">
            © 2024 Portfolio. Designed & Developed with ❤️
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
