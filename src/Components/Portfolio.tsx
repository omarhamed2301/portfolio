import React from "react";
import VA from "../Images/VA.png";
import PortfolioCard from "./PortfolioCard";
import FlippedPortfolio from "./FlippedPortfolioCard";

export default function Portfolio() {
  return (
    <div className="porfolio">
      <div className="mainContainer">
        <h2>Projects</h2>

        <div className="portfolio-cards">
          <PortfolioCard 
            title="Data Analytics and Visualization (Graduation Project - A+)"
            href ="https://kind-river-0059b3d03.5.azurestaticapps.net/"
            description="This project provides a powerful tool for Customer Services Data Analysis and Visualization. Built with a dynamic React frontend, it offers an intuitive interface for users to explore and analyze customer service data. The platform incorporates machine learning to automate data insights."
            src={VA}
          />
          <FlippedPortfolio 
            title="Data Analytics and Visualization (Graduation Project - A+)"
            href ="https://kind-river-0059b3d03.5.azurestaticapps.net/"
            description="This project provides a powerful tool for Customer Services Data Analysis and Visualization. Built with a dynamic React frontend, it offers an intuitive interface for users to explore and analyze customer service data. The platform incorporates machine learning to automate data insights."
            src={VA}
          />
        </div>
      </div>
    </div>
  );
}
