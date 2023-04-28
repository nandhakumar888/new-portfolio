import React from 'react';
import Home from "./components/Home";
import About from "./components/About"
import Navbar from "./components/Navbar";
import SocialLinkes from './components/SocialLinkes';
import Portfolio from './components/Portfolio';
import Experiences from './components/Experience'
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <SocialLinkes />
      <About />
      <Portfolio />
      <Experiences />
      <Contact />
    </div>
  )
}

export default App