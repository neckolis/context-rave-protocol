
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIsPCP from '@/components/WhatIsPCP';
import HowItWorks from '@/components/HowItWorks';
import UserReviews from '@/components/UserReviews';
import SideEffects from '@/components/SideEffects';
import JoinMovement from '@/components/JoinMovement';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <Navbar />
      <main>
        <Hero />
        <WhatIsPCP />
        <HowItWorks />
        <UserReviews />
        <SideEffects />
        <JoinMovement />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
