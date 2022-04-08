import React from 'react';

function HeroSection(props) {
    return (
        <div className="hero-section section">
            <div className="hero-container container">
                {props.children}
            </div>
        </div>
    )
}

export default HeroSection;