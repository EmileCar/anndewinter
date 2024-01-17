import React from 'react';
import './Media.css';
import Tabs from '../../components/tabs/Tabs';

const Media = () => {


    return (
        <div className='page'>
            <div className='section-general'>
                <h2 className="section__title">Media</h2>
                <div className="section__title--border"></div>
                <div className="media__container">
                    <Tabs options={["foto", "video", "audio"]}/>
                    <div className="panels">
                        <div className="panel panel-media column-count" id="foto-panel">
                            {/* PHP code here */}
                        </div>
                        <div className="panel panel-media column-count" id="video-panel">
                            {/* PHP code here */}
                        </div>
                        <div className="panel panel-media" id="audio-panel">
                            {/* PHP code here */}
                        </div>
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
