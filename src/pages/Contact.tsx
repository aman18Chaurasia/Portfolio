
import React from 'react';
import { Mail, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      <section className="py-24 px-6 mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let's Build Next-Gen AI Together
          </h1>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 hover:border-gray-600 transition-all duration-500">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Want to supercharge your team, project, or product with AI-driven solutions? Get in touch with Aman Chaurasia—let’s create something revolutionary!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Aman Directly</h2>
                {[
                  { icon: Mail, label: 'Email', value: 'aman.ch@yourdomain.com', href: 'mailto:aman.ch@yourdomain.com' },
                  { icon: Github, label: 'GitHub', value: 'ch-aman', href: 'https://github.com/ch-aman' },
                  { icon: Linkedin, label: 'LinkedIn', value: '/in/amanch', href: 'https://linkedin.com/in/amanch' },
                  { icon: Twitter, label: 'Twitter', value: '@amanch_aitools', href: 'https://twitter.com/amanch_aitools' }
                ].map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.href}
                    target="_blank" rel="noopener noreferrer"
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
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
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
      </section>
    </Layout>
  );
};

export default Contact;

