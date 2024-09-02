import React from 'react';
import NavigationBar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import Skills from './Skills';
import Tools from './Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavigationBar />
      <About />
      <Services />
      <Project />
      <Skills />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;