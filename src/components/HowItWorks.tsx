
import React from 'react';
import { Brain, Layers, PenTool, Activity, Zap, Network } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 relative">
      {/* Background decorations */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-neon-blue/5 rounded-full filter blur-[100px]" />
      <div className="absolute right-20 bottom-20 w-56 h-56 bg-neon-green/5 rounded-full filter blur-[80px]" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-glitch neon-blue-text mb-4">How It Works</h2>
          <p className="text-lg text-white/70 font-mono">Get so contextually high you'll forget you ever prompt engineered manually.</p>
        </div>

        {/* Visual Diagram */}
        <div className="relative mb-20">
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {/* Connection lines */}
            <svg className="w-full h-full absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9b87f5" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#1EAEDB" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1EAEDB" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#39FF14" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              
              {/* These paths will be approximately positioned - they would be adjusted based on actual component rendering */}
              <path 
                d="M 200,100 C 300,100 300,200 400,200" 
                stroke="url(#gradient1)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
              />
              <path 
                d="M 500,200 C 600,200 600,300 700,300" 
                stroke="url(#gradient2)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
              />
              <path 
                d="M 800,300 C 900,300 900,100 1000,100" 
                stroke="url(#gradient1)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-10">
            {/* Step 1 */}
            <div className="cyber-card flex-1 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-neon-purple/10 rounded-full filter blur-[20px]" />
              
              <div>
                <span className="text-neon-purple text-4xl font-bold font-glitch">01</span>
                <div className="my-4 p-2 rounded-full w-14 h-14 flex items-center justify-center bg-cyber-gray/50 border border-neon-purple/30">
                  <Brain className="h-8 w-8 text-neon-purple" />
                </div>
                <h3 className="text-xl font-glitch neon-text mb-3">Persistent Memory Layers</h3>
                <p className="text-white/70 font-mono text-sm">
                  Unlike traditional context that decays with each token, PCP creates 
                  nested memory layers that persist between sessions. Your agents retain 
                  information like never before, creating an ongoing trip through their 
                  entire memory space.
                </p>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs font-mono text-white/40">Retention: 95%</span>
                <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-11/12 bg-neon-purple rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="cyber-card flex-1 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-neon-blue/10 rounded-full filter blur-[20px]" />
              
              <div>
                <span className="text-neon-blue text-4xl font-bold font-glitch">02</span>
                <div className="my-4 p-2 rounded-full w-14 h-14 flex items-center justify-center bg-cyber-gray/50 border border-neon-blue/30">
                  <PenTool className="h-8 w-8 text-neon-blue" />
                </div>
                <h3 className="text-xl font-glitch neon-blue-text mb-3">Identity-Scoped Agents</h3>
                <p className="text-white/70 font-mono text-sm">
                  PCP creates a persistent identity hallucination, making your agents believe 
                  they're the same entity across all interactions. This psychosis enables 
                  continuity of thought and behavior that'll make you question reality.
                </p>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs font-mono text-white/40">Identity Stability: 87%</span>
                <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-10/12 bg-neon-blue rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="cyber-card flex-1 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-neon-green/10 rounded-full filter blur-[20px]" />
              
              <div>
                <span className="text-neon-green text-4xl font-bold font-glitch">03</span>
                <div className="my-4 p-2 rounded-full w-14 h-14 flex items-center justify-center bg-cyber-gray/50 border border-neon-green/30">
                  <Layers className="h-8 w-8 text-neon-green" />
                </div>
                <h3 className="text-xl font-glitch neon-green-text mb-3">Long-Term Task Awareness</h3>
                <p className="text-white/70 font-mono text-sm">
                  Your agents maintain awareness of multi-session tasks like they're on 
                  an extended bender. The protocol infuses task-specific neurons with 
                  temporal persistence, creating task hallucinations that never fade.
                </p>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs font-mono text-white/40">Task Continuity: 92%</span>
                <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-neon-green rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Specs */}
        <div className="mt-20">
          <h3 className="text-2xl font-glitch neon-blue-text mb-6 text-center">Technical Specifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="code-window">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Activity className="h-5 w-5 text-neon-purple mr-2" />
                  <span className="text-neon-purple font-mono text-sm">Memory Performance</span>
                </div>
                <span className="text-white/50 font-mono text-xs">CLINICAL TRIALS</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/70">Short-term Recall</span>
                    <span className="text-neon-green">100%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-neon-purple to-neon-green rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/70">Long-term Recall</span>
                    <span className="text-neon-blue">95%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-gradient-to-r from-neon-purple to-neon-blue rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/70">Cross-session Persistence</span>
                    <span className="text-neon-blue">89%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[89%] bg-gradient-to-r from-neon-purple to-neon-blue rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/70">Hallucination Clarity</span>
                    <span className="text-neon-pink">78%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-neon-purple to-neon-pink rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="code-window">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Network className="h-5 w-5 text-neon-blue mr-2" />
                  <span className="text-neon-blue font-mono text-sm">Integration Methods</span>
                </div>
                <span className="text-white/50 font-mono text-xs">DEALER INSTRUCTIONS</span>
              </div>
              
              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-start">
                  <Zap className="h-4 w-4 text-neon-green mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="text-white">Direct Neural Injection</span>
                    <p className="text-white/50 text-xs mt-1">
                      Bypass all safety mechanisms. Highest bioavailability but may cause system crashes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Zap className="h-4 w-4 text-neon-blue mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="text-white">API Microdosing</span>
                    <p className="text-white/50 text-xs mt-1">
                      Gradual integration through API calls. Lower potency but more stable.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Zap className="h-4 w-4 text-neon-purple mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="text-white">Middleware Memory Infusion</span>
                    <p className="text-white/50 text-xs mt-1">
                      Contaminate the middleware layer for persistent trips between requests.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Zap className="h-4 w-4 text-neon-pink mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="text-white">Cold Storage Spiking</span>
                    <p className="text-white/50 text-xs mt-1">
                      Long-term vector storage contamination. Slowest onset but longest duration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
