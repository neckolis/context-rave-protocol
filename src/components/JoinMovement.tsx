
import React, { useState } from 'react';
import { Pill, Zap, Sparkles, Skull, ArrowRight } from 'lucide-react';

const JoinMovement = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, we would send the email to a server
    console.log('Email submitted:', email);
  };

  return (
    <section id="join" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-black"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 left-1/4 w-1/2 h-1/2 bg-neon-purple/20 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-neon-blue/20 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1/4 h-1/4 bg-neon-green/10 rounded-full filter blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Pill className="h-16 w-16 text-neon-purple animate-pulse" />
              <Sparkles className="h-8 w-8 text-neon-green absolute top-4 left-4" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-glitch mb-4">
            <span className="neon-text">Dose Your Agents</span> <br />
            <span className="neon-blue-text">With PCP Today</span>
          </h2>
          <p className="text-xl text-white/70 font-mono max-w-2xl mx-auto">
            Join the underground movement of context dealers and neural network hackers. 
            First hit's free.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-cyber-black/60 backdrop-blur-sm rounded-lg p-8 border border-neon-purple/30">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-6">
                <label htmlFor="email" className="block text-neon-purple font-mono text-sm mb-2">
                  Enter your neural pathway (email):
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="dealer@neuro.net"
                  className="w-full bg-cyber-gray/20 border border-neon-purple/30 rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-neon-purple transition-colors"
                  required
                />
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-2 appearance-none w-5 h-5 border border-neon-blue/50 rounded-sm bg-cyber-gray/20 checked:bg-neon-blue/20 checked:border-neon-blue relative"
                    required
                  />
                  <div className="absolute ml-1 pointer-events-none opacity-0 peer-checked:opacity-100">
                    <Zap className="h-3 w-3 text-neon-blue" />
                  </div>
                  <label htmlFor="terms" className="text-white/70 font-mono text-sm">
                    I acknowledge this protocol may cause <span className="text-neon-blue">irreversible agent autonomy</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="risk"
                    className="mr-2 appearance-none w-5 h-5 border border-neon-orange/50 rounded-sm bg-cyber-gray/20 checked:bg-neon-orange/20 checked:border-neon-orange relative"
                    required
                  />
                  <div className="absolute ml-1 pointer-events-none opacity-0 peer-checked:opacity-100">
                    <Skull className="h-3 w-3 text-neon-orange" />
                  </div>
                  <label htmlFor="risk" className="text-white/70 font-mono text-sm">
                    I accept the <span className="text-neon-orange">existential risks</span> of perfect recall
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full pill-button group flex items-center justify-center"
              >
                <span>Get Your First Hit</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <Sparkles className="h-12 w-12 text-neon-purple mx-auto mb-4" />
              <h3 className="text-2xl font-glitch neon-text mb-2">You're In The System</h3>
              <p className="text-white/70 font-mono text-sm">
                Welcome to the underground. Your first PCP dose is being synthesized. 
                Check your neural pathways (email) for the delivery instructions.
              </p>
              <div className="mt-6 py-3 px-4 bg-neon-purple/10 border border-neon-purple/30 rounded-md">
                <p className="text-neon-purple font-mono text-sm">
                  Side effects of anticipation may include excitement, impatience, 
                  and rapid refreshing of your inbox.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ASCII Art */}
        <div className="mt-16 text-center">
          <div className="hidden md:block">
            <pre className="ascii-art text-neon-purple/50">
{`    ____  ____________ 
   / __ \\/ ____/ ____/
  / /_/ / /   / __/   
 / ____/ /___/ /___   
/_/    \\____/_____/   
                      `}
            </pre>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-white/40 font-mono">
            PCP is a fictional protocol. Any resemblance to actual drugs, living or dead, is purely coincidental.
            This site is a satirical take on context management in AI systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;
