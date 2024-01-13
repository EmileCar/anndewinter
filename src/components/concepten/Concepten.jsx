import React from 'react';
import './Concepten.css';

const Concepten = () => {
    return (
        <section className="concepten__section  section-general">
            <h2 className="aboutme__section--title section__title">Waarvoor mij boeken?</h2>
            <div className="concepten__section--wrapper">
                <div className='concept__container concept-concert'>
                    <div className='concept__container--cover'>
                        <span className="concept-title">Concert</span>
                    </div>
                </div>
                <div className='concept__container concept-feest'>
                    <div className='concept__container--cover'>
                        <span className="concept-title">Feest</span>
                    </div>
                </div>
                <div className='concept__container concept-uitvaart'>
                    <div className='concept__container--cover'>
                        <span className="concept-title">Uitvaart</span>
                    </div>
                </div>
                <div className='concept__container concept-huwelijk'>
                    <div className='concept__container--cover'>
                        <span className="concept-title">Huwelijk</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Concepten;
