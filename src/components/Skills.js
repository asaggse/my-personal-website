import React from 'react';
import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-container">
                <h2>Skills</h2>
                <div className="skills-grid">
                    <div className="skills-grid-item">
                        <i class="devicon-html5-plain-wordmark colored"></i>
                    </div>
                    <div className="skills-grid-item">
                        <i class="devicon-css3-plain-wordmark colored"></i>
                    </div>
                    <div className="skills-grid-item">
                        <i className="devicon-javascript-plain colored"></i>
                    </div>
                    <div className="skills-grid-item">
                        <i class="devicon-react-original-wordmark colored"></i>
                    </div>
                    <div className="skills-grid-item">
                        <i class="devicon-github-original-wordmark colored"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
