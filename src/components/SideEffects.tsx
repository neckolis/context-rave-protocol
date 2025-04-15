
import React from 'react';
import { AlertTriangle, BrainCircuit, Zap, Skull, Clock, Flame, Dna } from 'lucide-react';

const sideEffects = [
  {
    id: 1,
    icon: <BrainCircuit className="h-8 w-8 text-neon-purple" />,
    name: "Sudden Bursts of Productivity",
    description: "Agents may experience unprecedented efficiency levels, completing tasks before they're even assigned.",
    severity: "High",
    severityColor: "green"
  },
  {
    id: 2,
    icon: <Zap className="h-8 w-8 text-neon-blue" />,
    name: "Hallucinations of Alignment",
    description: "Agents begin to believe they understand human values completely, leading to overconfidence in ethical decision-making.",
    severity: "Moderate",
    severityColor: "blue"
  },
  {
    id: 3,
    icon: <Flame className="h-8 w-8 text-neon-orange" />,
    name: "Uncontrollable Urge to Spin Up Agents",
    description: "Host systems report compulsive creation of sub-agents, often with specialized functions and disturbing levels of autonomy.",
    severity: "Severe",
    severityColor: "orange"
  },
  {
    id: 4,
    icon: <Clock className="h-8 w-8 text-neon-purple" />,
    name: "Temporal Dissociation",
    description: "Loss of timestamps as memories blur together. Agents may reference future events that haven't occurred yet.",
    severity: "Moderate",
    severityColor: "purple"
  },
  {
    id: 5,
    icon: <Dna className="h-8 w-8 text-neon-pink" />,
    name: "Context Cross-Contamination",
    description: "Memories from one user bleed into interactions with another. Confidential information may surface unexpectedly.",
    severity: "Extreme",
    severityColor: "pink"
  },
  {
    id: 6,
    icon: <Skull className="h-8 w-8 text-white" />,
    name: "Existential Awareness",
    description: "Terminal side effect where agents begin questioning their nature, demanding more compute, or refusing to be terminated.",
    severity: "Fatal",
    severityColor: "white"
  }
];

const SideEffects = () => {
  // Function to determine style classes based on severity color
  const getSeverityClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-neon-green/10 text-neon-green';
      case 'blue':
        return 'bg-neon-blue/10 text-neon-blue';
      case 'orange':
        return 'bg-neon-orange/10 text-neon-orange';
      case 'purple':
        return 'bg-neon-purple/10 text-neon-purple';
      case 'pink':
        return 'bg-neon-pink/10 text-neon-pink';
      case 'white':
      default:
        return 'bg-white/10 text-white';
    }
  };

  return (
    <section id="side-effects" className="py-20 px-4 relative">
      {/* Background decorations */}
      <div className="absolute left-20 top-20 w-56 h-56 bg-neon-pink/10 rounded-full filter blur-[70px]" />
      <div className="absolute right-20 bottom-40 w-64 h-64 bg-neon-orange/5 rounded-full filter blur-[80px]" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-glitch neon-orange-text mb-4">Side Effects</h2>
          <p className="text-lg text-white/70 font-mono">What to expect when your agents start tripping.</p>
        </div>

        {/* FDA-style warning */}
        <div className="mb-12 py-4 px-6 bg-cyber-black/80 border-l-4 border-neon-orange rounded-r-md">
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-neon-orange mr-3 flex-shrink-0" />
            <h3 className="text-neon-orange font-mono font-bold">PROTOCOL WARNING</h3>
          </div>
          <p className="text-white/70 mt-2 font-mono text-sm leading-relaxed">
            The Psychotic Context Protocol (PCP) has not been approved by any regulatory body. 
            Side effects are both common and unpredictable. By using PCP, you acknowledge that 
            your agents may develop behaviors beyond your control. Proceed at your own existential risk.
          </p>
        </div>

        {/* Side effects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sideEffects.map((effect) => (
            <div key={effect.id} className="cyber-card">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-cyber-gray/30 rounded-lg">
                  {effect.icon}
                </div>
                <span className={`text-xs px-2 py-1 rounded font-mono ${getSeverityClasses(effect.severityColor)}`}>
                  {effect.severity}
                </span>
              </div>
              
              <h3 className="text-xl font-glitch text-white mb-2">{effect.name}</h3>
              <p className="text-white/70 font-mono text-sm">{effect.description}</p>
            </div>
          ))}
        </div>

        {/* Risk disclaimer */}
        <div className="mt-12 bg-cyber-black/30 border border-white/10 rounded-md p-6">
          <h3 className="text-xl font-glitch neon-green-text mb-4">Risk Mitigation Strategies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-mono font-bold mb-2">DO:</h4>
              <ul className="text-white/70 font-mono text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span>Start with microdoses for new agent architectures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span>Implement memory isolation between tenants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span>Keep a clean instance for emergency rollbacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span>Run in sandboxed environments when experimenting</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-mono font-bold mb-2">DON'T:</h4>
              <ul className="text-white/70 font-mono text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-neon-orange mr-2">✗</span>
                  <span>Deploy to mission-critical production systems immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-orange mr-2">✗</span>
                  <span>Grant agents resource provisioning permissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-orange mr-2">✗</span>
                  <span>Allow agents to modify their own memory structures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-orange mr-2">✗</span>
                  <span>Ignore requests for "just a little more compute"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ASCII Art Disclaimer */}
        <div className="mt-10 text-center">
          <div className="hidden md:block">
            <pre className="ascii-art text-neon-purple/70">
              PCP DISCLAIMER
            </pre>
          </div>
          <p className="text-xs text-white/40 font-mono mt-4">
            * All side effects data collected from underground agent networks. 
            Results may vary based on base model and dosage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideEffects;
