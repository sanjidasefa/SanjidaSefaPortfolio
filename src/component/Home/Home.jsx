import React from 'react';
import Hero from './Hero';
import About from '../About/About';
import TechStack from '../TechSection/TechStack';
import Services from '../Service/Services';
import Education from '../About/Education';
import Projects from '../Service/Projects';
import Contact from '../About/Contact';
import Footer from '../../Shared/Footer';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <TechStack></TechStack>
      <Services></Services>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;