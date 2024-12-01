import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import PortfolioCard from "./PortfolioCard";
import VA from "../Images/VA.png";
import PizzaComp from "../Images/PizzaComp.png";
import Ecommerce from "../Images/ecommerce.png";
import Splitbill from "../Images/splitbill.png";
import bankSystem from "../Images/bankSystem.png";
import CRUDS from "../Images/CRUDS.png";

export default function AllProjects() {
  return (
    <>
      <Navbar />
      <div className="porfolio">
        <div className="container">
          <h2 className="mb-4">Projects</h2>

          <div className="portfolio-cards">
            <PortfolioCard
              title="Data Analytics and Visualization (Graduation Project - A+)"
              href="https://kind-river-0059b3d03.5.azurestaticapps.net/"
              description="This project provides a powerful tool for Customer Services Data Analysis and Visualization. Built with a dynamic React frontend, it offers an intuitive interface for users to explore and analyze customer service data. The platform incorporates machine learning to automate data insights."
              github={
                "https://github.com/FCAI-GP-DS-2024/visual-analytics.frontend"
              }
              src={VA}
            />
            <PortfolioCard
              title="Pizza Company using React, Redux & React Router"
              href="https://pizza-company.vercel.app/"
              description="A dynamic website for a pizza company, allowing users to browse and order from a variety of pizzas. Built with React, Redux, and React Router, the site offers a seamless user experience with efficient state management and smooth navigation. Users can easily add items to their cart, customize their orders, and enjoy an intuitive ordering process."
              github="https://github.com/omarhamed2301/pizza-company"
              src={PizzaComp}
            />
            <PortfolioCard
              title="FairShare: Simplified Bill Splitting for Friends"
              href="https://splitbill-tau.vercel.app/"
              description="FairShare offers a streamlined way to manage shared expenses with friends. This responsive React app accurately tracks balances, identifies who owes whom, and checks if everything evens out. Built with a focus on responsive design and smooth state management."
              github="https://github.com/omarhamed2301/splitbill"
              src={Splitbill}
            />
            <PortfolioCard
              title="FlexiBank (React & Redux)"
              href="https://bank-system-puce.vercel.app/"
              description="FlexiBank is a simplified banking system built with React and Redux for state management. This project offers essential banking functionalities, including account creation, balance management, loan requests, and repayments, all wrapped in a responsive and user-friendly interface. The design incorporates modern CSS techniques to enhance usability and aesthetics."
              github="https://github.com/omarhamed2301/bank-system"
              src={bankSystem}
            />
            <PortfolioCard
              title="Products E-commerce using State Management & Fake API"
              href="https://ecommerce-lilac-nu.vercel.app/"
              description="A responsive e-commerce website showcasing a range of products, where users can view details and add items to their cart. The site leverages state management and integrates with an API to dynamically display products, ensuring smooth navigation and a seamless cart experience for efficient and convenient shopping."
              github="https://github.com/omarhamed2301/ecommerce"
              src={Ecommerce}
            />
            <PortfolioCard
              title="CRUD React Application (Context API & State Management)"
              href="https://cruds-sage.vercel.app/"
              description="CRUD functionality: Create, Read, Update, and Delete. Built with the Context API for efficient state management, the app delivers a seamless user experience and intuitive operations. Crafted to demonstrate practical skills in managing and manipulating data in a React environment."
              github="https://github.com/omarhamed2301/CRUDS"
              src={CRUDS}
            />
            
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
