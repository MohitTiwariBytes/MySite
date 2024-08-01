import React from "react";
import "./SecondSection.css";
import FoodzyLogo from "../assets/foodzyLogo.png";
import teenCodeHubLogo from "../assets/teenCodeHubLogo.png";
import AnimatedButton from "../Components/AnimatedButton.jsx";

const projects = [
  {
    imgSrc: FoodzyLogo,
    title: "Foodzy",
    description:
      "Don't know what to cook from the ingredients you have right now? Foodzy is here to help! with Foodzy you can find awesome recipes based on the ingredients you have in your hand right now!",
    viewLink: "https://food-zy.netlify.app",
    repoLink: "https://github.com/MohitTiwariBytes/Foodzy"
  },
  {
    imgSrc: teenCodeHubLogo,
    title: "TeenCodeHub",
    description:
      "Created something mind blowing and want some feedback on it? TeenCodeHub got you! Post about your project and get feedback from experienced developers through comments and messages!",
    viewLink: "https://teencodehub.netlify.app",
    repoLink: "https://github.com/MohitTiwariBytes/TeenCodeHub"
  },
  {
    imgSrc: "https://assets.hackclub.com/icon-rounded.svg",
    title: "India Hackclubs Finder",
    description:
      "With this site you can list all of the Indian Hackclubs around your location! This site was buit with React, Hackclub CSS, and Open Maps API.",
    viewLink: "https://indian-hackclubs.netlify.app",
    repoLink: "https://github.com/MohitTiwariBytes/Indian-Hackclubs-Finder"
  }
];

const SecondSection = () => (
  <div className="project-second-section">
    <div className="project-second">
      <div className="topText1">
        <h1>Projects.</h1>
      </div>
      {projects.map(({ imgSrc, title, description, viewLink, repoLink }, index) => (
        <div key={index} className={`project${index + 1}`}>
          <div className="projectImg">
            <img src={imgSrc} alt={title} />
          </div>
          <div className="aboutProject">
            <h1 id="ProjectTitle">{title}</h1>
            <p id="projectDescription">{description}</p>
            <div className="buttons">
              <AnimatedButton
                width={"200px"}
                text={"View Project"}
                onClick={() => window.location.replace(viewLink)}
              />
              <AnimatedButton
                width={"200px"}
                text={"Github Repo"}
                onClick={() => window.location.replace(repoLink)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SecondSection;
