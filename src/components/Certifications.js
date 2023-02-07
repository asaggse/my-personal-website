import React, { useState } from 'react';
import "./Certifications.css";

const Certifications = () => {
    const [certifications] = useState([
        {
            title: 'Responsive Web Design',
            description: 'freeCodeCamp',
            image: require('./images/ResponsiveWebDesign.png'),
        },
        {
            title: 'Front End Libraries',
            description: 'freeCodeCamp',
            image: require('./images/FrontEndLibraries.png'),
        },
        {
            title: 'Boolean Coding Week',
            description: 'Boolean',
            image: require('./images/BooleanCodingWeek.jpg'),
        },
    ]);

    const [zoom, setZoom] = useState({
        show: false,
        title: '',
        image: ''
    });

    const handleClick = (title, image) => {
        setZoom({
            show: true,
            title,
            image
        });
    };

    const handleClose = () => {
        setZoom({
            show: false,
            title: '',
            image: ''
        });
    };

    return (
        <section id="certifications">
            <h2>Certifications</h2>
            <ul>
                {certifications.map((certification, index) => (
                    <li key={index}>
                        <h3>{certification.title}</h3>
                        <img
                            src={certification.image}
                            alt={certification.title}
                            onClick={() => handleClick(certification.title, certification.image)}
                            style={{ cursor: 'pointer' }}
                            title="Click to zoom"
                        />
                        <p>by {certification.description}</p>
                    </li>
                ))}
            </ul>
            {zoom.show && (
                <div className="modal">
                    <div className="modal-content">
                        <div className='modal-header'>
                            <span className="close" onClick={handleClose}>×</span>
                        </div>
                        <img src={zoom.image} alt={zoom.title} style={{ maxWidth: '100%', maxHeight: '100%' }}/>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;
