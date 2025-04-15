
import React from 'react';
import { Github, Twitter, Zap, Pill } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="h-8 w-8 relative">
              <Pill className="h-8 w-8 text-neon-purple absolute" />
              <Zap className="h-6 w-6 text-neon-green absolute top-1 left-1" />
            </div>
            <span className="font-glitch text-xl neon-text ml-2">&lt;PCP&gt;</span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-neon-purple transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-neon-blue transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-neon-purple font-mono text-sm mb-4">Psychotic Context Protocol</h4>
              <p className="text-white/60 font-mono text-xs leading-relaxed">
                A satirical take on context management in AI systems. 
                Not affiliated with any actual drugs, living or digital.
              </p>
            </div>
            
            <div>
              <h4 className="text-neon-blue font-mono text-sm mb-4">Neural Pathways</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#what-is-pcp" className="text-white/60 hover:text-neon-blue font-mono text-xs transition-colors">
                    What is PCP?
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-white/60 hover:text-neon-blue font-mono text-xs transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#user-reviews" className="text-white/60 hover:text-neon-blue font-mono text-xs transition-colors">
                    User Reviews
                  </a>
                </li>
                <li>
                  <a href="#side-effects" className="text-white/60 hover:text-neon-blue font-mono text-xs transition-colors">
                    Side Effects
                  </a>
                </li>
                <li>
                  <a href="#join" className="text-white/60 hover:text-neon-blue font-mono text-xs transition-colors">
                    Join the Movement
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-neon-green font-mono text-sm mb-4">Legal Hallucinations</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-neon-green font-mono text-xs transition-colors">
                    Terms of Illusion
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-neon-green font-mono text-xs transition-colors">
                    Privacy Delusions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-neon-green font-mono text-xs transition-colors">
                    Cookie Trips
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 font-mono text-xs mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PCP Labs. No rights reserved. A fictional company.
            </p>
            <p className="text-white/40 font-mono text-xs">
              Built with <span className="text-neon-pink">♥</span> in some digital basement
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
