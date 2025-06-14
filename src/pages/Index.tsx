
import React from "react";
import Layout from "@/components/Layout";
import Hero3DPlaceholder from "@/components/Hero3DPlaceholder";
import AnimatedSectionContainer from "@/components/AnimatedSectionContainer";
import MagneticElement from "@/components/MagneticElements";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => (
  <Layout>
    {/* Futuristic Hero Section */}
    <AnimatedSectionContainer className="my-32 py-16 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-8">
        <MagneticElement strength={0.25}>
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight text-gradient animate-gradient typewriter">
            NEO<span className="text-gradient-static">Shift</span>
          </h1>
        </MagneticElement>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 animate-fade-in">
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Shape the Web’s Future</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed animate-fade-in delay-200">
          Explore a new dimension of interactive, animated portfolios—where code, creativity, and motion blur together.
        </p>
        <div className="flex justify-center gap-6 pt-4">
          <MagneticElement strength={0.4}>
            <Link to="/portfolio">
              <Button className="bg-gradient-to-br from-purple-500 to-cyan-400 text-white px-10 py-4 rounded-full text-lg font-semibold hover-lift animate-glow flex items-center gap-2 shadow-lg">
                Dive In <ArrowRight className="inline w-5 h-5" />
              </Button>
            </Link>
          </MagneticElement>
          <MagneticElement strength={0.4}>
            <Link to="/contact">
              <Button variant="outline" className="border-cyan-400 bg-black/40 hover:bg-black/90 text-white px-10 py-4 rounded-full text-lg font-semibold hover-lift">
                Get In Touch
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
        <h3 className="text-4xl font-bold text-gradient-static mb-4">About</h3>
        <p className="text-lg text-gray-300 font-medium">
          I architect immersive experiences with bleeding-edge web technologies. Every project is a living experiment—interactive, fluid, and unforgettable.
        </p>
        <Link to="/about">
          <Button variant="ghost" className="mt-6 hover:bg-purple-900/20 text-gradient">Story &rarr;</Button>
        </Link>
      </AnimatedSectionContainer>
      {/* Portfolio Section */}
      <AnimatedSectionContainer>
        <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">Featured Work</h3>
        <p className="text-lg text-gray-300 font-medium">
          World-class digital products, ultra-creative experiments, visionary client work. Tap to explore the code behind the magic.
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
          Explore a journey of innovation—roles, awards, and adventures, visualized by year.
        </p>
        <Link to="/timeline">
          <Button variant="ghost" className="mt-6 hover:bg-pink-900/20 text-gradient">See Timeline &rarr;</Button>
        </Link>
      </AnimatedSectionContainer>
      {/* Contact Section */}
      <AnimatedSectionContainer>
        <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">Contact</h3>
        <p className="text-lg text-gray-300 font-medium">
          Ready for an ambitious collab? Drop a message. The future isn’t coded alone.
        </p>
        <Link to="/contact">
          <Button variant="ghost" className="mt-6 hover:bg-pink-900/20 text-gradient">Get In Touch &rarr;</Button>
        </Link>
      </AnimatedSectionContainer>
    </div>
  </Layout>
);

export default Index;
