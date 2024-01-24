import React, { useEffect, useState } from 'react';
import image1 from '../../assets/images/pages/home/imageSlider/DSC00937.jpg';
import image2 from '../../assets/images/pages/home/imageSlider/ann008.jpg';
import image3 from '../../assets/images/pages/home/imageSlider/ann009.jpg';
import image4 from '../../assets/images/pages/home/imageSlider/ann6074bewerkt.jpg';
import './ImageSlider.css';

const ImageSlider = () => {
    const [activeImage, setActiveImage] = useState(2);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveImage(activeImage === 3 ? 0 : activeImage + 1);
            console.log("slide-image " + (activeImage === 0 ? "imageSlider-active" : ""));
        }, 5000);
        return () => clearInterval(timeout);
    }, [activeImage]);

    return (
        <section className="image-slider__section elevation-strong">
            <h2 className="hidden">Afbeeldingen</h2>
            <div className="slide-images">
                <img src={image1} className={"slide-image " + (activeImage === 0 ? "imageSlider-active" : "")} />
                <img src={image2} className={"slide-image " + (activeImage === 1 ? "imageSlider-active" : "")}  style={{alignSelf: "start"}} />
                <img src={image3} className={"slide-image " + (activeImage === 2 ? "imageSlider-active" : "")} />
                <img src={image4} className={"slide-image " + (activeImage === 3 ? "imageSlider-active" : "")} />
            </div>
        </section>
    );
};

export default ImageSlider;
