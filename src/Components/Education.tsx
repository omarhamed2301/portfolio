import React from "react";
import Icon1 from "../Images/Icon1.png";
import Icon2 from "../Images/Icon2.png";
import Icon3 from "../Images/Icon3.png";
import Icon4 from "../Images/Icon4.png";
import EducationCard from "./EducationCard";
export default function Education() {
  return (
    <div className="education">
      <div className="mainContainer">
        <h2>Education</h2>
        <div className="row">
          <EducationCard
            src={Icon1}
            alt="Icon1"
            title="Bachelor of Science in Computer Science"
            desc="- Graduated with a solid foundation in computer science, specializing in Front-end Development & Decision Support"
          />
          <EducationCard
            src={Icon2}
            alt="Icon2"
            title="Technical Skills"
            desc="- Proficient in modern front-end technologies, with a strong focus on React. Skills include building responsive web interfaces, managing state with Redux. "
          />
          <EducationCard
            src={Icon3}
            alt="Icon3"
            title="Academic Achievements"
            desc="- Consistently performed in the top tier of the class, participated in coding bootcamps using react - A+ Graduation Project."
          />
          <EducationCard
            src={Icon4}
            alt="Icon4"
            title="Work Experience"
            desc="- Gained hands-on experience through freelance projects, where I worked on developing and maintaining web applications using React."
          />
        </div>
      </div>
    </div>
  );
}
