import React from "react";

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
