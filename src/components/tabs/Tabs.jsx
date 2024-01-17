import React from "react";
import "./Tabs.css";

const Tabs = ({options, elements}) => {
    return (
        <>
            {
                options.map((option, index) => {
                    return (
                        <input key={index} className={"tab--radio radio" + index} id={`${option}-radio`} name="mediaItems" type="radio" />
                    );
                })
            }
            <div style={{ width: "100%" }} className="tabsAndbarBelow">
                <div className="tabs">
                    {
                        options.map((option, index) => {
                            return (
                                <label key={index} className="tab" id={"tab-" + option} htmlFor={`${option}-radio`}>{option}</label>
                            );
                        })
                    }
                </div>
                <div className="tabs--barBelow barBelow-media"></div>
            </div>
        </>
    );
};

export default Tabs;