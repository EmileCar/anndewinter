import React from "react";
import './Donna.css';
import HeroBasic from "../../components/hero/HeroBasic";
import donnaImage from '../../assets/images/pages/donna/donna-verso-grijskopie.jpg';
import trioImage from '../../assets/images/pages/donna/NAERT-DEWINTER-LEMAITRE--P131.jpg';

const Donna = () => {
    return (
        <div className='page'>
            <HeroBasic page="donna"/>
            <section className='section-general'>
                <h2 className="aboutme__section--title section__title">D💋NNA²</h2>
                <div className="section__title--border"></div>
                <div className="donna__container">
                <p className="donna__description">Drie talentvolle dames brengen een origineel, creatief concept met een eigen toets</p>
                <section className="donna__sec section-general">
			<h2 className="aboutme__section--title section__title">Wie?</h2>
			<div className="section__title--border"></div>
			<div className="donna__wie--persons">
				<div><h3>D💋rien Naert </h3><p> heeft het talent om op een leuke, stijlvolle en aangepaste manier het publiek toe te spreken. Talrijke presentaties van uiteenlopende evenementen mag ze dan ook reeds op haar naam schrijven.</p></div>
				<div><h3>Ann De Winter </h3><p> heeft het talent om met haar hartverwarmende stem velen te bekoren en met klasse diverse genres van liedjes te zingen.  Voor veel solistenrollen en verscheidene optredens wordt ze dan ook vaak gevraagd.</p></div>
				<div><h3>Ann Lemaitre </h3><p> heeft het talent om voor een knappe live begeleiding op piano/keys te zorgen met een persoonlijke twist. Diverse opdrachten mag ze dan ook als professioneel muzikant geregeld vervullen.</p></div>
				<div className="center">De combinatie van de 3 vormt een mooi geheel! Als je deze charmante 3 boekt voor een optreden, is er gegarandeerd ambiance, zal er genoten worden van hun optreden en gaat iedereen happy naar huis!</div>
			</div>
		</section>
		<section className="donna__sec section-general">
			<h2 className="section__title">Wat?</h2>
			<div className="section__title--border"></div>
			<div className="donna__wat">
				<p>Ze verwennen je met een mix van mooie live begeleide zangnummers (klassiekers, evergreens, Franse chansons, meezingers, Latin, golden oldies, Nederlandstalige liedjes,... ) afgewisseld met teksten, waarbij vaak een vleugje humor niet ontbreekt.</p>
				<img src={donnaImage} alt="Donna Verso Beschrijving"/>
				<p className="donna__wat-prog">Er kan (voorlopig) gekozen worden uit 4 programma's:</p>
				<ul>
					<li><strong>Eindelijk weer live!</strong> : Samen de vrijheid beleven na een tijd van corona.</li>
					<li><strong>Vrouwendingetjes</strong> : Leuke vertellingen en zang over de vrouw in al haar typische aspecten en facetten.</li>
					<li><strong>Winterklanken</strong> : Sfeervolle liederen, kerst carols en warme wensen passend bij een stemmig eindejaar.</li>
					<li><strong>Prosit neujahr!</strong> : Een sprankelende wijze om het nieuwe jaar in te duiken</li>
				</ul>
			</div>
		</section>
		<section className="donna__sec section-general">
			<h2 className="section__title">Boekingsmogelijkheden</h2>
			<div className="section__title--border"></div>
			<div className="donna__boekingsmogelijkheden">
				<p>1 uur of  2 x  30 min met pauze</p>
				<p>(andere opties zijn zeker mogelijk, vraag vrijblijvend)</p>
			</div>
			<img src={trioImage} alt="Donna Winterklanken"/>
		</section>

                </div>
            </section>
        </div>
    );
}

export default Donna;