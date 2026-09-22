import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-[#121212] text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Shidiq Al Aziz
        </h1>
        <h2 className="text-xl md:text-2xl text-[#2196F3] font-medium mb-8 animate-fadeIn animation-delay-200">
          Full Stack Software Engineer
        </h2>
        <p className="text-[#E0E0E0] text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fadeIn animation-delay-400">
          Building elegant solutions to complex problems with modern technologies.
          Passionate about creating impactful software that makes a difference.
        </p>
        <a
          href="#projects"
          className="inline-block bg-[#2196F3] text-white px-8 py-3 rounded-full hover:bg-[#1976D2] transition-colors animate-fadeIn animation-delay-600"
        >
          View My Work
        </a>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-[#E0E0E0]" />
      </a>
    </section>
  );
}