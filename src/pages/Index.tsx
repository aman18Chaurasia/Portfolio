import React from "react";
import Layout from "@/components/Layout";
import Hero3DPlaceholder from "@/components/Hero3DPlaceholder";
import AnimatedSectionContainer from "@/components/AnimatedSectionContainer";
import MagneticElement from "@/components/MagneticElements";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TypewriterLoop from "@/components/TypewriterLoop";

const Index = () => (
  <Layout>
    {/* Futuristic Hero Section */}
    <AnimatedSectionContainer className="my-32 py-16 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-8">
        <MagneticElement strength={0.25}>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-gradient animate-gradient typewriter">
            Aman<span className="text-gradient-static"> Chaurasia</span>
          </h1>
        </MagneticElement>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 animate-fade-in">
          <TypewriterLoop
            text="Machine Learning, Full Stack & Generative AI Expert"
            className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent"
          />
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed animate-fade-in delay-200">
          Leveraging AI technologies, advanced ML tools, and modern development to create the future of software. Explore my world of code, intelligence, and innovation&mdash;from generative art to scalable solutions.
        </p>
        <div className="flex justify-center gap-6 pt-4">
          <MagneticElement strength={0.4}>
            <Link to="/portfolio">
              <Button className="bg-gradient-to-br from-purple-500 to-cyan-400 text-white px-10 py-4 rounded-full text-lg font-semibold hover-lift animate-glow flex items-center gap-2 shadow-lg">
                Explore Portfolio <ArrowRight className="inline w-5 h-5" />
              </Button>
            </Link>
          </MagneticElement>
          <MagneticElement strength={0.4}>
            <Link to="/contact">
              <Button variant="outline" className="border-cyan-400 bg-black/40 hover:bg-black/90 text-white px-10 py-4 rounded-full text-lg font-semibold hover-lift">
                Connect with Me
              </Button>
            </Link>
          </MagneticElement>
        </div>
      </div>
      {/* 3D Hero Portal */}
      <Hero3DPlaceholder />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-10 h-10 text-cyan-300" />
      </div>
    </AnimatedSectionContainer>
    {/* Sections: About, Portfolio, Timeline, Contact */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto my-20">
      {/* About Section */}
      <AnimatedSectionContainer>
        <h3 className="text-4xl font-bold text-gradient-static mb-4">About Aman</h3>
        <p className="text-lg text-gray-300 font-medium">
          I engineer transformative AI, ML, and full-stack solutions. Passionate about blending technical creativity, product vision, and generative intelligence for world-class digital experiences.
        </p>
        <Link to="/about">
          <Button variant="ghost" className="mt-6 hover:bg-purple-900/20 text-gradient">Story &rarr;</Button>
        </Link>
      </AnimatedSectionContainer>
      {/* Portfolio Section */}
      <AnimatedSectionContainer>
        <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">Projects</h3>
        <p className="text-lg text-gray-300 font-medium">
          AI-driven platforms, web applications, creative toolkits, and more. See how I deploy generative AI tools, machine learning, and full stack approaches in real projects.
        </p>
        <Link to="/portfolio">
          <Button variant="ghost" className="mt-6 hover:bg-cyan-900/20 text-gradient">See Projects &rarr;</Button>
        </Link>
      </AnimatedSectionContainer>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-32">
      {/* Timeline Section */}
      <AnimatedSectionContainer>
        <h3 className="text-4xl font-bold text-gradient-static mb-4">Timeline</h3>
        <p className="text-lg text-gray-300 font-medium">
          My journey as an ML engineer, AI architect, and software innovator&mdash;milestones, awards, and adventures so far.
        </p>
        <Link to="/timeline">
          <Button variant="ghost" className="mt-6 hover:bg-pink-900/20 text-gradient">See Timeline &rarr;</Button>
        </Link>
      </AnimatedSectionContainer>
      {/* Contact Section */}
      <AnimatedSectionContainer>
        <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">Let's Collaborate</h3>
        <p className="text-lg text-gray-300 font-medium">
          Ready to partner on your next AI, ML, or software vision? Let’s spark something remarkable together&mdash;reach out below.
        </p>
        <Link to="/contact">
          <Button variant="ghost" className="mt-6 hover:bg-pink-900/20 text-gradient">Contact Aman &rarr;</Button>
        </Link>
      </AnimatedSectionContainer>
    </div>
  </Layout>
);

export default Index;
