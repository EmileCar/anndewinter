import React, { useEffect, useState } from "react";

const MediaPanelAudio = () => {
    const [audioItems, setAudioItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAudioItems();
    } , []);

    const fetchAudioItems = async () => {
        try{
            const response = await fetch('https://www.anndewinter.be/API/?page=getAudio',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            setAudioItems(data);
        } catch (error) {
            setAudioItems(["Er is een probleem met de server"]);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return <div className="panel panel-media column-count">
        {loading ? <p>Loading...</p> : audioItems.map((item) => {
            return <div key={item.id} className="video__item media__preview" data-medialink={item.medialink} data-type="video">
                <div class="video-player">
                    <img src={`https://img.youtube.com/vi/${item.medialink}/0.jpg`}/>
                    <div class="video__item--playbutton"></div>
                </div>
                <p>{item.title}</p>
            </div>
        })}
    </div>;
}

export default MediaPanelAudio;