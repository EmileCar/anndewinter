import React from 'react';
import './Aboutme.css';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <section className="aboutme__section section-general">
            <h2 className="aboutme__section--title section__title">Over mij</h2>
            <div className="section__title--border"></div>
            <p className="aboutme__section--text">
                Een fysicus met een passie voor zang, dans en acteren, zo kan ik mezelf het beste omschrijven. Naast professionele lerares, ben ik een klassiek geschoolde lyrische sopraan, afgestudeerd aan de muziekacademie van Wetteren met grootste onderscheiding cum laude voor zang en lyrische kunst.
                <span className="textLink">
                    <Link to="/bio">{"Lees meer>>"}</Link>
                </span>
            </p>
        </section>
    );
};

export default AboutMe;
