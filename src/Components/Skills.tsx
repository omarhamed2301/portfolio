import React from "react";
import HTML from "../Images/HTML.png";
import JS from "../Images/JavaScript.png";
import REACT from "../Images/React.png";
import REDUX from "../Images/Redux.png";
import NEXT from "../Images/NEXT.png";
import FIGMA from "../Images/Figma.png";
import Structure from "../Images/LanguagesStructure.png";

export default function Skills() {
  return (
    <div className="skills">
      <div className="mainContainer">
        <div className="info">
          <h3>
            I'm currently looking to join a <span>cross-functional</span> team
          </h3>
          <p>that values improving people's lives through accessible design.</p>
        </div>
        <div className="skillsContainer">
          <img className="structure" src={Structure} alt="" style={{
            width:'100%'
          }} />
          
        </div>
      </div>
    </div>
  );
}
