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
  const createDots = (numDots: number) => {
    const container = document.querySelector(".background-dots")!;
    container.innerHTML = ""; // Clear existing dots

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.style.width = `${Math.random() * 30 + 20}px`; // Random size between 20px and 50px
      dot.style.height = dot.style.width;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.animationDuration = `${Math.random() * 10 + 5}s`; // Random duration between 5s and 15s
      container.appendChild(dot);
    }
  };

  useEffect(() => {
    const updateDots = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches; // Mobile breakpoint
      const numDots = isMobile ? 5 : 15; // Adjust dots for mobile
      createDots(numDots);
    };

    // Initial check and setup
    updateDots();

    // Add resize event listener
    window.addEventListener("resize", updateDots);

    return () => {
      window.removeEventListener("resize", updateDots); // Cleanup listener
    };
  }, []);

  return (
    <div className="main">
      <div className="background-dots"></div>
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
            <p>
              Fresh Graduated from Faculty of Computers and Artificial
              Intelligence, Cairo University - 2024.
            </p>

            <h4>
              A self-taught front-end React developer, passionate about <br />{" "}
              crafting dynamic and responsive web applications that strike{" "}
              <br /> a perfect balance between user needs and business goals
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
