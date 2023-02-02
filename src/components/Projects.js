import React from 'react';

const Project = () => {
    const projects = [
        { title: "Project 1", description: "Description 1", image: "image1.jpg", link: "#" },
        { title: "Project 2", description: "Description 2", image: "image2.jpg", link: "#" },
        { title: "Project 3", description: "Description 3", image: "image3.jpg", link: "#" }
    ];

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <img src={project.image} alt={project.title} />
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button>Live Version</button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
