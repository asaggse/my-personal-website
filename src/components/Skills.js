import React from 'react';
import "./Skills.css";

const icons = [
    { name: 'html5', type:'plain-wordmark', color: 'colored' },
    { name: 'css3', type:'plain-wordmark', color: 'colored' },
    { name: 'javascript', type:'plain', color: 'colored' },
    { name: 'react-original', type:'wordmark', color: 'colored' },
    { name: 'bootstrap', type:'plain-wordmark', color: 'colored' },
    { name: 'github-original', type:'wordmark', color: 'colored' },
];

const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-container">
                <h2>Skills</h2>
                <div className="skills-grid">
                    {icons.map(({ name, type, color }) => (
                        <div key={name} className="skills-grid-item">
                            <i className={`devicon-${name}-${type} ${color}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
