import React from 'react';
import './App.css';
import './bootstrap.min.css'
import Navbar from "./Components/Layout/Navbar";
import WelcomePage from "./Components/Sections/WelcomePage/WelcomePage";
import AboutMe from "./Components/Sections/About Me/AboutMe";
import Projects from "./Components/Sections/Projects/Projects";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <WelcomePage/>
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;
