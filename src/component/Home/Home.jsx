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
     <div>
       <About></About>
      <TechStack></TechStack>
      <Services></Services>
      <Education></Education>
      <Projects limit={6}></Projects>
      <Contact></Contact>
     </div>
    </div>
  );
};

export default Home;