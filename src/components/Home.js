import React from "react";
import "./Home.css";
import profilePic from "./profile-pic.jpg";
import codeSolid from "./code-solid.svg";

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <div className="home-text enterFromLeft">
          <div className="main-text">
            <img src={codeSolid} alt="code icon" />
            <h2>Hi, I'm Alessandro Saggese</h2>
            <img src={codeSolid} alt="code icon" />
          </div>
          <div className="secondary-text">
            <h3>Welcome to my website</h3>
            <p>Scroll down &darr;</p>
          </div>
        </div>
        <div className="home-pic">
          <img src={profilePic} alt="Profile" className="fadeIn" />
        </div>
      </div>
    </section>
  );
};

export default Home;
