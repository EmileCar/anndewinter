import React from 'react';
import './Begeleiding.css';

const Begeleiding = () => {
    return (
        <section className="begeleiding__section section-general">
            <h2 className="begeleiding__section--title section__title">Begeleiding</h2>
            <div className="section__title--border"></div>
            <div className="begeleiding__container">
                <div className="begeleiding__item">
                    <h3>Live on tape</h3>
                    <p>Voor een basic feest, diner of huiskamerconcert biedt Ann de low budget "live on tape" formule aan. Met haar rijke ervaring en stijlvolle uitstraling maakt ze zelfs met deze basisformule indruk. Geschikt voor ongeveer 150 personen met professionele geluidsinstallatie.</p>
                </div>
                <div className="begeleiding__item">
                    <h3>Piano</h3>
                    <p>Een optreden met live pianobegeleiding geeft net dat beetje extra. Ann zingt standaard met een professionele pianist of toetsenist. Het samenspel tussen Ann's stem en het instrument is harmonieus. Geschikt voor ongeveer 150 personen met professionele geluidsinstallatie.</p>
                </div>
                <div className="begeleiding__item">
                    <h3>Ensemble/band</h3>
                    <p>Voor een complete ervaring kies je voor Ann in combinatie met een begeleider op piano/keys, uitgebreid met viool, saxofoon, enz., of zelfs met een drie- of vierkoppige band. Professionele instrumentalisten met rijke podiumervaring tillen het optreden naar een hoger niveau. Thema, stijl en genre worden in overleg bepaald. Technische fiches zijn beschikbaar.</p>
                </div>
            </div>
        </section>
    );
};

export default Begeleiding;
