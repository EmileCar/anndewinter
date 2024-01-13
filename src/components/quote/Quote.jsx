import React from 'react';
import './Quote.css';

const Quote = () => {
    return (
        <section className="quote__section">
            <h2 className="hidden">Quote</h2>
            <p className="quote">“If I were not a physicist, I would probably be a musician."</p>
            <p className="quote__einstein">- Albert Einstein -</p>
        </section>
    );
};

export default Quote;
