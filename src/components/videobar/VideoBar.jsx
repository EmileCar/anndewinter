import React from 'react';
import './VideoBar.css';

const VideoBar = ({url, background}) => {
    return (
        <section className={`${background && "video__section elevation-strong"}`}>
            <h2 className="hidden">Video</h2>
            <iframe className="iframe-index" width="570" height="320" src={url}></iframe>
        </section>
    );
};

export default VideoBar;
