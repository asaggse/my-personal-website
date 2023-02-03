import React, { useState } from 'react';
import "./Projects.css"
// import projectImage1 from './images/Calculator.png';
// import projectImage2 from './images/TicTacToe.png';
// import projectImage3 from './images/image3.png';

const Project = () => {
    const projects = [
        { title: "Calculator", description: "A simple calculator application", image: require("./images/Calculator.png"), link: "https://asaggse.github.io/calculator-react/" },
        { title: "Tic Tac Toe", description: "A Tic Tac Toe game", image: require("./images/TicTacToe.png"), link: "https://asaggse.github.io/tic-tac-toe/" },
        // { title: "Project 3", description: "Description 3", image: "projectImage3", link: "#" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        if (currentIndex === 0) {
            setCurrentIndex(projects.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex === projects.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project-gallery">
                <div className="project">
                    <h3>{projects[currentIndex].title}</h3>
                    <p>{projects[currentIndex].description}</p>
                    <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
                </div>
                <button onClick={handlePrevClick}>{'<'}</button>
                <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                    <button>Live Version</button>
                </a>
                <button onClick={handleNextClick}>{'>'}</button>
            </div>
        </section>
    );
};

export default Project;
