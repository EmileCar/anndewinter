import React, { useEffect, useState } from 'react';
import './Media.css';
import Tabs from '../../components/tabs/Tabs';
import MediaPanelFoto from '../../components/mediaPanel/MediaPanelFoto';
import MediaPanelVideo from '../../components/mediaPanel/MediaPanelVideo';
import MediaPanelAudio from '../../components/mediaPanel/MediaPanelAudio';

const Media = () => {
    const mediaTypes = ["foto", "video", "audio"];
    const [selectedMediaType, setSelectedMediaType] = useState(mediaTypes[0]);
    const [mediaItems, setMediaItems] = useState([]);

    const renderMediaPanel = () => {
        if(selectedMediaType === "foto") {
            return <MediaPanelFoto/>
        } else if(selectedMediaType === "video") {
            return <MediaPanelVideo/>
        } else if(selectedMediaType === "audio") {
            return <MediaPanelAudio/>
        } else {
            return <div>Geen media gevonden</div>
        }
    }

    useEffect(() => {
        console.log(selectedMediaType)
    } , [selectedMediaType]);


    return (
        <div className='page'>
            <div className='section-general'>
                <h2 className="section__title">Media</h2>
                <div className="section__title--border"></div>
                <div className="media__container">
                    <Tabs options={mediaTypes} setOption={setSelectedMediaType} currentOption={selectedMediaType}/>
                    <div className="panels">
                        {renderMediaPanel()}
                    </div>
                </div>
            </div>
            <div className="item__detail--overlap">
                <img src="assets/img/closebutton.svg" height="70" width="70" className="closebutton" />
                <div className="overlap__content"></div>
                <div className="closeArea"></div>
            </div>
        </div>
    );
};

export default Media;
