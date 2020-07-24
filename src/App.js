import React from 'react';
import './App.css';
import './bootstrap.min.css'
import Navbar from "./Components/Layout/Navbar";
import WelcomePage from "./Components/Sections/WelcomePage/WelcomePage";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <WelcomePage/>
    </div>
  );
}

export default App;
