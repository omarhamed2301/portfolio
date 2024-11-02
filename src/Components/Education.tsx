import React from 'react'
import Icon1 from '../Images/Icon1.png';
import Icon2 from '../Images/Icon2.png';
import Icon3 from '../Images/Icon3.png';
import Icon4 from '../Images/Icon4.png';
export default function Education() {
  return (
    <div className="education">
        <div className="mainContainer">
            <h2>Education</h2>
            <div className="row">
                <div className="col-lg-6 educationCard">
                    <div className="cardInfo">
                        <div className="card-img">
                            <img src={Icon1} alt="Icon1" />
                        </div>
                        <div className="card-body">
                            <h4>Bachelor of Science in Computer Science</h4>
                            <p>- Graduated with a solid foundation in computer science, specializing in Front-end Development & Decision Support</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 educationCard">
                    <div className="cardInfo">
                        <div className="card-img">
                            <img src={Icon2} alt="Icon1" />
                        </div>
                        <div className="card-body">
                            <h4>Technical Skills</h4>
                            <p>- Proficient in modern front-end technologies, with a strong focus on React. Skills include building responsive web interfaces, managing state with Redux. </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 educationCard">
                    <div className="cardInfo">
                        <div className="card-img">
                            <img src={Icon3} alt="Icon1" />
                        </div>
                        <div className="card-body">
                            <h4>Academic Achievements</h4>
                            <p>- Consistently performed in the top tier of the class, participated in coding bootcamps using react - A+ Graduation Project.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 educationCard">
                    <div className="cardInfo">
                        <div className="card-img">
                            <img src={Icon4} alt="Icon1" />
                        </div>
                        <div className="card-body">
                            <h4>Work Experience</h4>
                            <p>- Gained hands-on experience through freelance projects, where I worked on developing and maintaining web applications using React.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
