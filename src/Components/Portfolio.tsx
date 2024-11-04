import React from "react";
import VA from "../Images/VA.png";
import PizzaComp from '../Images/PizzaComp.png';
import PortfolioCard from "./PortfolioCard";
export default function Portfolio() {
  return (
    <div className="porfolio">
      <div className="container">
        <h2 className="mb-4">Projects</h2>

        <div className="portfolio-cards">
          <PortfolioCard 
            title="Data Analytics and Visualization (Graduation Project - A+)"
            href ="https://kind-river-0059b3d03.5.azurestaticapps.net/"
            description="This project provides a powerful tool for Customer Services Data Analysis and Visualization. Built with a dynamic React frontend, it offers an intuitive interface for users to explore and analyze customer service data. The platform incorporates machine learning to automate data insights."
            github={"https://github.com/FCAI-GP-DS-2024/visual-analytics.frontend"}
            src={VA}
          />
          <PortfolioCard 
            title="Pizza Company using React, Redux & React Router"
            href ="https://pizza-company.vercel.app/"
            description="A dynamic website for a pizza company, allowing users to browse and order from a variety of pizzas. Built with React, Redux, and React Router, the site offers a seamless user experience with efficient state management and smooth navigation. Users can easily add items to their cart, customize their orders, and enjoy an intuitive ordering process."
            github="https://github.com/omarhamed2301/pizza-company"
            src={PizzaComp}
          />
        </div>
      </div>
    </div>
  );
}
