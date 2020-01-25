import React from 'react';
import './App.css';
import MainImgs from "./components/mainImgs";
import Headers from "./components/headers";
import Icons from "./components/icons";
import AboutMe from "./components/aboutMe";
import Service from "./components/service";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <header>
        <MainImgs></MainImgs>
        <div id="FirstWhite">
          <Headers></Headers>
          <Icons></Icons>
        </div>
      </header>

      <main>
        <AboutMe></AboutMe>
        <Service></Service>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
