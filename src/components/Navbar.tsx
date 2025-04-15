
import React, { useState, useEffect } from 'react';
import { Menu, X, Pill, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 px-4 lg:px-8',
        isScrolled ? 'bg-cyber-black/80 backdrop-blur-lg py-2 shadow-lg' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="h-8 w-8 relative">
            <Pill className="h-8 w-8 text-neon-purple absolute animate-pulse" />
            <Zap className="h-6 w-6 text-neon-green absolute top-1 left-1" />
          </div>
          <span className="font-glitch text-2xl neon-text tracking-wider">&lt;PCP&gt;</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#what-is-pcp">What is PCP?</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#user-reviews">User Reviews</NavLink>
          <NavLink href="#side-effects">Side Effects</NavLink>
          <a 
            href="#join"
            className="pill-button text-sm"
          >
            Try The First Hit Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-neon-purple transition-colors"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-cyber-dark/95 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-300 ease-in-out z-40 md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center space-y-8 py-8">
          <MobileNavLink href="#what-is-pcp" onClick={toggleMenu}>What is PCP?</MobileNavLink>
          <MobileNavLink href="#how-it-works" onClick={toggleMenu}>How It Works</MobileNavLink>
          <MobileNavLink href="#user-reviews" onClick={toggleMenu}>User Reviews</MobileNavLink>
          <MobileNavLink href="#side-effects" onClick={toggleMenu}>Side Effects</MobileNavLink>
          <a
            href="#join"
            onClick={toggleMenu}
            className="pill-button text-base mt-4"
          >
            Try The First Hit Free
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white hover:text-neon-purple transition-colors duration-200 font-mono text-sm relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300"></span>
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-white hover:text-neon-purple transition-colors duration-200 font-glitch text-xl"
  >
    {children}
  </a>
);

export default Navbar;
