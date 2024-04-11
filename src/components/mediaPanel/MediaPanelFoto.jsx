import React, { useEffect, useState } from "react";

const MediaPanelFoto = () => {
    const [fotoItems, setFotoItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFotoItems();
    } , []);

    const fetchFotoItems = async () => {
        try{
            const response = await fetch('https://www.anndewinter.be/API/?page=get_fotos',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            setFotoItems(data);
        } catch (error) {
            setFotoItems(["Er is een probleem met de server"]);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return <div className="panel panel-media column-count">
        {loading ? <p>Loading...</p> : fotoItems.map((item) => {
            return <div key={item.id} className="foto__item media__preview" data-medialink={item.medialink} data-type="foto">
                <img src={`assets/img/media/${item.medialink}`}/>
                <div className="foto__item--textWrapper">
                    <p>{item.name}</p>
                </div>
            </div>
        })}
    </div>;
}

export default MediaPanelFoto;