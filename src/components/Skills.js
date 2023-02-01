import React from 'react';
import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-container">
                <h2>Skills</h2>
                <div className="skills-grid">
                    <div className="skills-grid-item">
                        <i className="devicon-html5-plain colored"></i>
                    </div>
                    <div className="skills-grid-item">
                        <i className="devicon-css3-plain colored"></i>
                    </div>
                    <div className="skills-grid-item">
                        <i className="devicon-javascript-plain colored"></i>
                    </div>
                    <div className="skills-grid-item">
                        <i className="devicon-react-plain colored"></i>
                    </div>
                    <div className="skills-grid-item">
                        <i className="devicon-github-plain colored"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
