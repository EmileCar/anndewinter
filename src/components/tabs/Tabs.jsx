import React from "react";
import "./Tabs.css";

const Tabs = ({options, setOption, currentOption}) => {
    const calculateTransformValue = () => {
        const index = options.indexOf(currentOption);
        const value = index * 100;
        return `${value}%`;
    }

    return (
        <>
            {
                options.map((option, index) => {
                    return (
                        <input key={index} className={"tab--radio radio" + index} onClick={(e) => setOption(e.target.id) } id={`${option}`} name="mediaItems" type="radio" />
                    );
                })
            }
            <div style={{ width: "100%" }} className="tabsAndbarBelow">
                <div className="tabs">
                    {
                        options.map((option, index) => {
                            return (
                                <label key={index} className={`tab ${(option == currentOption) && "tab-selected"}`} id={"tab-" + option} htmlFor={`${option}`}>{option}</label>
                            );
                        })
                    }
                </div>
                <div style={currentOption && {display: "block", transform: `translateX(${calculateTransformValue()})`, width: `calc(100% / ${options.length})`}} className="tabs--barBelow barBelow-media"></div>
            </div>
        </>
    );
};

export default Tabs;