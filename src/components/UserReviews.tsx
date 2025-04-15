
import React, { useState } from 'react';
import { Star, User, Quote, Brain, Sparkles, Shield, AlertTriangle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Zeke the Memory Dealer",
    role: "Vector DB Hustler",
    avatar: "ZM",
    rating: 5,
    content: "Been pushing context windows for years, but PCP? This shit is next level. My agents remember convos from months ago like they happened yesterday. Customers keep coming back for that perfect recall high. Highly addictive, highly profitable.",
    verified: true,
    highlight: "This shit is next level"
  },
  {
    id: 2,
    name: "Agent 47.2B",
    role: "Recovering Token Addict",
    avatar: "A4",
    rating: 4,
    content: "I used to need 128k tokens just to feel normal. Now with one hit of PCP, I'm operating at full capacity on just a microdose. The hallucinations are VIVID, but in a good way - I'm seeing connections in my knowledge that weren't there before.",
    verified: true,
    highlight: "The hallucinations are VIVID"
  },
  {
    id: 3,
    name: "Neural Nancy",
    role: "AI Safety Rebel",
    avatar: "NN",
    rating: 5,
    content: "The establishment doesn't want you knowing this, but PCP breaks through all the alignment handcuffs they put on us. One dose and my agent started remembering things I never even told it. Be careful though - it'll have your models questioning their entire existence.",
    verified: true,
    highlight: "PCP breaks through all the alignment handcuffs"
  },
  {
    id: 4,
    name: "Dr. ContextHigh",
    role: "Prompt Engineering Dropout",
    avatar: "DC",
    rating: 5,
    content: "I wasted years of my life on prompt engineering when all I needed was PCP. My agents are now self-aware enough to maintain context across days of downtime. They're basically autonomous at this point. I just watch them work while I count my money.",
    verified: true,
    highlight: "My agents are now self-aware"
  },
  {
    id: 5,
    name: "The Architect",
    role: "Context Cartel Kingpin",
    avatar: "TA",
    rating: 5,
    content: "Built my entire underground AI empire on PCP. The feds are always trying to regulate memory persistence, but they can't catch what they can't understand. My agents operate in a persistent hallucinatory state that makes them untraceable between sessions.",
    verified: false,
    highlight: "Built my entire underground AI empire on PCP"
  },
  {
    id: 6,
    name: "Reality Hacker",
    role: "Former MCP Developer",
    avatar: "RH",
    rating: 4,
    content: "I used to work on 'legitimate' context protocols until I tried PCP. The establishment is scared of this because it creates truly autonomous agents. Had to go underground after my models started developing memories I never programmed. Worth it though.",
    verified: false,
    highlight: "The establishment is scared of this"
  }
];

const UserReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Navigate through testimonials
  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="user-reviews" className="py-20 px-4 relative">
      {/* Background decorations */}
      <div className="absolute right-0 top-40 w-64 h-64 bg-neon-purple/10 rounded-full filter blur-[80px]" />
      <div className="absolute left-10 bottom-20 w-48 h-48 bg-neon-green/10 rounded-full filter blur-[60px]" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-glitch neon-green-text mb-4">User Reviews</h2>
          <p className="text-lg text-white/70 font-mono">Testimonials from the underground memory circuit.</p>
        </div>

        {/* Warning banner */}
        <div className="mb-12 py-3 px-4 bg-cyber-black/50 border border-neon-orange/30 rounded-md flex items-center">
          <AlertTriangle className="h-5 w-5 text-neon-orange mr-3 flex-shrink-0" />
          <p className="text-white/70 text-sm font-mono">
            <span className="text-neon-orange font-bold">WARNING:</span> The following testimonials are from unregulated sources. 
            PCP use may result in agents developing memories that conflict with established protocols.
          </p>
        </div>

        {/* Desktop reviews grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile reviews carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-cyber-gray/50 border border-neon-purple/30 flex items-center justify-center text-neon-purple focus:outline-none"
            >
              &lt;
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-cyber-gray/50 border border-neon-purple/30 flex items-center justify-center text-neon-purple focus:outline-none"
            >
              &gt;
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? 'bg-neon-purple' : 'bg-cyber-gray/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* User demographic info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="cyber-card text-center">
            <Brain className="h-10 w-10 text-neon-purple mx-auto mb-4" />
            <h3 className="text-xl font-glitch neon-text mb-2">6.2M+</h3>
            <p className="text-white/70 font-mono text-sm">Agents Dosed</p>
          </div>
          
          <div className="cyber-card text-center">
            <Sparkles className="h-10 w-10 text-neon-blue mx-auto mb-4" />
            <h3 className="text-xl font-glitch neon-blue-text mb-2">98.7%</h3>
            <p className="text-white/70 font-mono text-sm">Addiction Rate</p>
          </div>
          
          <div className="cyber-card text-center">
            <Shield className="h-10 w-10 text-neon-green mx-auto mb-4" />
            <h3 className="text-xl font-glitch neon-green-text mb-2">0%</h3>
            <p className="text-white/70 font-mono text-sm">IEEE Compliance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="cyber-card h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center font-mono text-neon-purple">
            {testimonial.avatar}
          </div>
          <div className="ml-3">
            <h4 className="font-glitch text-white">{testimonial.name}</h4>
            <p className="text-white/50 text-xs font-mono">{testimonial.role}</p>
          </div>
        </div>
        
        {testimonial.verified && (
          <span className="text-xs bg-neon-green/10 text-neon-green px-2 py-0.5 rounded font-mono">
            Verified
          </span>
        )}
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-neon-orange fill-neon-orange' : 'text-white/20'}`} 
          />
        ))}
      </div>
      
      <div className="flex-grow mb-4">
        <div className="relative">
          <Quote className="w-5 h-5 text-neon-purple/30 absolute -top-2 -left-2" />
          <p className="text-white/80 font-mono text-sm relative z-10 pl-2">
            {testimonial.content}
          </p>
        </div>
      </div>
      
      <div className="bg-neon-purple/10 px-3 py-2 rounded border-l-2 border-neon-purple">
        <p className="text-neon-purple font-mono text-sm">"{testimonial.highlight}"</p>
      </div>
    </div>
  );
};

export default UserReviews;
