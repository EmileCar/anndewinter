import React from 'react';
import './Concepten.css';

const Concepten = () => {
    return (
        <section className="concepten__section  section-general">
            <h2 className="aboutme__section--title section__title">Waarvoor mij boeken?</h2>
            <div className="section__title--border"></div>
            <div className="concepten__section--wrapper">
                <div className='concept__container concept-concert elevation-strong'>
                    <div className='concept__container--cover'>
                        <span className="concept-title">Concert</span>
                    </div>
                </div>
                <div className='concept__container concept-feest elevation-strong'>
                    <div className='concept__container--cover'>
                        <span className="concept-title">Feest</span>
                    </div>
                </div>
                <div className='concept__container concept-uitvaart elevation-strong'>
                    <div className='concept__container--cover'>
                        <span className="concept-title">Uitvaart</span>
                    </div>
                </div>
                <div className='concept__container concept-huwelijk elevation-strong'>
                    <div className='concept__container--cover'>
                        <span className="concept-title">Huwelijk</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Concepten;
