import React, { useState } from 'react';
import "./Projects.css";

const Project = () => {
    const projects = [
        { title: "Piano", description: "Piano is a simple piano app built with React that allows users to play piano notes by clicking on the virtual keys.", image: require("./images/Piano.png"), link: "https://asaggse.github.io/piano-react/" },
        { title: "Tic Tac Toe", description: "A Tic Tac Toe game", image: require("./images/TicTacToe.png"), link: "https://asaggse.github.io/tic-tac-toe/" },
        { title: "Calculator", description: "A simple calculator application", image: require("./images/Calculator.png"), link: "https://asaggse.github.io/calculator-react/" },
        { title: "Custom Countdown", description: "A custom countdown", image: require("./images/CustomCountdown.png"), link: "https://asaggse.github.io/custom-countdown/" },
        { title: "Password generator", description: "Generate random passwords", image: require("./images/PasswordGenerator.png"), link: "https://asaggse.github.io/password-generator-react/" },
        { title: "Caesar cipher", description: "Code your message", image: require("./images/CaesarCipher.png"), link: "https://asaggse.github.io/caesar-cipher-react/" },        
        { title: "Drum machine", description: "A drum machine", image: require("./images/DrumMachine.png"), link: "https://asaggse.github.io/drum-machine-react/" },
        { title: "Pong", description: "A simple game of Pong", image: require("./images/Pong.png"), link: "https://asaggse.github.io/pong-game/" },
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
                <button className='arrow' onClick={handlePrevClick}>{'<'}</button>
                <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                    <button className='primary-button'>live demo</button>
                </a>
                <button className='arrow' onClick={handleNextClick}>{'>'}</button>
            </div>
        </section>
    );
};

export default Project;
