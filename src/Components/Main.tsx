import React, { useState, useEffect } from "react";
import User from "../Images/User.png";
import Vector from "../Images/Vector.png";
import circle from "../Images/circle.png";

function Main() {
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [words] = useState<string[]>([
    "a Software Engineer.",
    "a Front-end Developer.",
    "a React Developer.",
  ]);

  useEffect(() => {
    const dynamicText = document.querySelector(".word") as HTMLElement;
    dynamicText.classList.add("stop-blinking");
    const typingInterval = setInterval(() => {
      const typeEffect = () => {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);

        dynamicText.textContent = currentChar;

        if (charIndex < currentWord.length) {
          setCharIndex(charIndex + 1);
        } else {
          setCharIndex(0);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      };

      typeEffect();
    }, 110);

    return () => clearInterval(typingInterval);
  }, [wordIndex, charIndex, words]);

  return (
    <div className="main">
      <div className="mainContainer">
        <div className="myName animate__animated animate__fadeInTopLeft">
          <div className="img">
            <img src={User} alt="user" />
          </div>
          <div className="info">
            <h5>
              Hello, I am <span>Omar Hamed</span>
            </h5>
            <img src={Vector} alt="vector" />

            <h6>A Developer Who</h6>
            <div className="forCircle">
              <h1>
                Judges a book <br /> by its <span>cover</span>...
              </h1>
              <img className="circle" src={circle} alt="circle" />
            </div>
            <p>because if the cover does not impress you, what else can?</p>
          </div>
        </div>
        <div className="personalInfo animate__animated animate__fadeInBottomRight">
          <div className="container">
            <h2>
              I'm <span className="word"></span>
            </h2>
            <p>Fresh Graduated from Faculty of Computers and Artificial Intelligence, Cairo University - 2024.</p>

            <h4>A self-taught front-end React developer, passionate about <br/> crafting dynamic and responsive web applications that strike <br/> a perfect balance between user needs and business goals</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
