import React from "react";
import './Contact.css';
import contactImage from '../../assets/images/pages/contact/mama-beginfoto-website-bewerkt.jpg';

const Contact = () => {
    return (
        <div className='page'>
            <section className="section-general">
                    <h2 className="section__title">Contact</h2>
                    <div className="section__title--border"></div>
                    <div className="contact-wrapper">
                        <img src={contactImage} className="contact__media-image" width="320" height="320"  style={{marginTop: "0.6rem"}}/>
                        <p>U kan mij het best contacteren via mail of telefonisch: <strong><br/>info@anndewinter.be<br/>+32 476 22 09 42</strong></p>
                    </div>
            </section>
        </div>
    );
}

export default Contact;