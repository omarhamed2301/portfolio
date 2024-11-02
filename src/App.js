import React from "react";
import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import counterProvider from "./Context/Store";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Education />
      <Skills />
      <Portfolio />
      <Contact/>
    </div>
  );
}

export default App;
