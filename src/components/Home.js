import React from "react";
import "./Home.css";
import profilePic from "./profile-pic.jpg";

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <div className="home-text">
          <h2>Hi, I'm Alessandro Saggese</h2>
          <h3>Welcome to my website</h3>
          <p>Scroll down ⬇</p>
        </div>
        <div className="Home-pic">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
