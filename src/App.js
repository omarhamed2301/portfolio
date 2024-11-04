import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import AllProjects from "./Components/AllProjects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Main />
              <Education />
              <Skills />
              <Portfolio />
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<AllProjects/>}/>
      </Routes>
    </div>
  );
}

export default App;
