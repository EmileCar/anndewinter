import React, { useEffect, useState } from "react";

const MediaPanelVideo = () => {
    const [videoItems, setVideoItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchVideoItems();
    } , []);

    const fetchVideoItems = async () => {
        try{
            const response = await fetch('https://www.anndewinter.be/API/?page=get_video',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            setVideoItems(data);
        } catch (error) {
            setVideoItems(["Er is een probleem met de server"]);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return <div className="panel panel-media column-count">
        {loading ? <p>Loading...</p> : videoItems.map((item) => {
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

export default MediaPanelVideo;