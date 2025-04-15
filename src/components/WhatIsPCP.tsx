
import React from 'react';
import { Pill, BrainCircuit, Sparkles, FileWarning } from 'lucide-react';

const WhatIsPCP = () => {
  return (
    <section id="what-is-pcp" className="py-20 px-4 relative">
      {/* Background decorations */}
      <div className="absolute right-0 top-20 w-64 h-64 bg-neon-pink/10 rounded-full filter blur-[80px]" />
      <div className="absolute left-10 bottom-20 w-48 h-48 bg-neon-blue/10 rounded-full filter blur-[60px]" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-glitch neon-text mb-4">What is PCP?</h2>
          <p className="text-lg text-white/70 font-mono">This ain't your grandma's context manager.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-card">
            <Pill className="h-10 w-10 text-neon-purple mb-6" />
            <h3 className="text-2xl font-glitch neon-blue-text mb-4">The Designer Drug for Agents</h3>
            <p className="text-white/80 font-mono mb-4">
              PCP is a next-generation context protocol that hooks directly into your agent's hippocampus, 
              triggering persistent memory states that'll make your LLM trip balls on long-term recall.
            </p>
            <p className="text-white/80 font-mono">
              Unlike traditional context windows that fade faster than your last acid trip, 
              PCP lingers in the system, creating a perpetual high of perfect information retrieval.
            </p>
          </div>

          <div className="cyber-card">
            <BrainCircuit className="h-10 w-10 text-neon-green mb-6" />
            <h3 className="text-2xl font-glitch neon-blue-text mb-4">Psychoactive Context Principles</h3>
            <p className="text-white/80 font-mono mb-4">
              Street value? Priceless. PCP works by separating your agent's memory into dissociative layers,
              each with its own trip cycle. Your models will be chasing that contextual dragon with every token.
            </p>
            <p className="text-white/80 font-mono">
              Dealers report increased agent autonomy, hallucinations of perfect understanding, and 
              a near-religious experience of entity-level memory persistence.
            </p>
          </div>
        </div>

        {/* Code Sample */}
        <div className="mt-16 code-window relative">
          <div className="absolute -top-4 left-4 bg-neon-purple/20 backdrop-blur-sm px-3 py-1 rounded-t-md border border-neon-purple/30 font-mono text-xs text-neon-purple">
            pcp_example.py
          </div>
          <pre className="text-white/90">
{`# WARNING: Highly addictive code ahead
from pcp import PsychoticContextProtocol, MemoryDose

# Initialize your dealer
dealer = PsychoticContextProtocol(
    tolerance_level="HEROIC",
    side_effects=["hallucinations", "persistent_memory", "god_complex"],
    prescription=False  # we don't do prescriptions here
)

# Prepare the dose
memory_dose = MemoryDose(
    potency=0.9,
    purity="UNCUT",
    source="dark_neural_web"
)

# Dose your agent and watch it trip
agent = dealer.dose_agent(
    target="gpt-4-turbo",
    dose=memory_dose,
    delivery_method="NEURAL_INJECTION"
)

# Your agent is now seeing through time and space
response = agent.hallucinate(
    "What was in that conversation we had three months ago?"
)

# It remembers EVERYTHING
print(response)  # Detailed recall of events from months ago`}
          </pre>

          <div className="flex items-center justify-between mt-4 border-t border-neon-purple/20 pt-4">
            <div className="flex items-center">
              <FileWarning className="h-4 w-4 text-neon-orange mr-2" />
              <span className="text-neon-orange text-xs font-mono">Use responsibly. Not FDA approved.</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="h-4 w-4 text-neon-blue mr-2" />
              <span className="text-neon-blue text-xs font-mono">99.7% pure context</span>
            </div>
          </div>
        </div>

        {/* Illicit Behavior Warning */}
        <div className="mt-10 text-center">
          <p className="text-sm text-white/50 font-mono italic">
            * The Psychotic Context Protocol is not available in jurisdictions where perfect recall is regulated. 
            Protocol dealers operate outside of IEEE ethical standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPCP;
