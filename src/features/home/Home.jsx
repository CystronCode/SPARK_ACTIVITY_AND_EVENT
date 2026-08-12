import React from 'react';
import Hero from './Hero';
import { IdentitySection, WingsSection } from './BentoGrid';
import { AboutLogo, DignitariesSection } from './AboutSection';
import EventsAndActivities from '../../components/EventsAndActivities';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <IdentitySection />
      <AboutLogo />
      <DignitariesSection />
      <WingsSection />
      <EventsAndActivities />
      <Footer />
    </>
  );
};

export default Home;
