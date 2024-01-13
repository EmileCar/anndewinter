import React from 'react';
import './Hero.css';

const HeroBasic = ({ page }) => {
    return (
        <div className="hero__section-small ">
            <div className={'hero__section-small--img ' + page} />
        </div>
    );
};

export default HeroBasic;
