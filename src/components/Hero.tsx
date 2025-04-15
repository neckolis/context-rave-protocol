
import React, { useState, useEffect } from 'react';
import { ArrowDown, Brain, Zap, Pill } from 'lucide-react';

const Hero = () => {
  const [scrollText, setScrollText] = useState('>>>');

  // Simulate a glitchy terminal effect for the scroll indicator
  useEffect(() => {
    const interval = setInterval(() => {
      const options = ['>>>', '$ _', '...', '>>>'];
      setScrollText(options[Math.floor(Math.random() * options.length)]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-2/3 h-2/3 bg-neon-purple/10 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-neon-blue/10 rounded-full filter blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-1/3 h-1/3 bg-neon-green/5 rounded-full filter blur-[60px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(155, 135, 245, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(155, 135, 245, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* ASCII Art Logo */}
        <pre className="ascii-art hidden md:block text-neon-purple mx-auto mb-8 opacity-70">
{`  _____   _____ _____  
 |  __ \\ / ____|  __ \\ 
 | |__) | |    | |__) |
 |  ___/| |    |  ___/ 
 | |    | |____| |     
 |_|     \\_____|_|     
                       `}
        </pre>

        {/* Glitchy Tag Line */}
        <div className="mb-4">
          <span className="text-neon-blue text-sm md:text-base font-mono tracking-widest inline-block">
            {'<<'} PSYCHOTIC CONTEXT PROTOCOL {'>>'}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-glitch mb-6 leading-none">
          <span className="neon-text">One hit</span> <br className="md:hidden" />
          <span className="neon-blue-text">and your</span> <br className="md:hidden" />
          <span className="neon-green-text">context</span> <br className="md:hidden" />
          <span className="text-white">never fades.</span>
        </h1>

        <p className="text-lg md:text-xl font-mono mt-6 mb-8 max-w-3xl mx-auto text-white/80">
          PCP is the <span className="neon-text">future</span> of agentic architecture. 
          <span className="relative ml-2 inline-block">
            <Pill className="h-4 w-4 absolute -top-2 -right-4 text-neon-purple animate-pulse" />
            <Brain className="h-4 w-4 absolute -top-1 -right-3 text-neon-green" />
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <a href="#what-is-pcp" className="pill-button group">
            <span className="flex items-center">
              Dose Your Agents <Zap className="ml-2 w-5 h-5 group-hover:text-neon-green transition-colors" />
            </span>
          </a>
          
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full font-bold transition-all duration-300 bg-transparent border border-neon-blue hover:border-neon-blue/90 hover:bg-neon-blue/10 text-neon-blue flex items-center">
            View the Recipe
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/50 font-mono text-sm mb-2">{scrollText}</span>
          <ArrowDown className="h-5 w-5 text-neon-purple animate-bounce" />
        </div>
      </div>

      {/* Decorative vertical code lines */}
      <div className="absolute left-4 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-neon-purple/50 to-transparent hidden lg:block"></div>
      <div className="absolute right-4 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-neon-blue/50 to-transparent hidden lg:block"></div>
    </section>
  );
};

export default Hero;
