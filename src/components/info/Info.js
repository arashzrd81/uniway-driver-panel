import React from "react";
import "./Info.css";


const Info = ({info}) => {
    return (
        <div className="info">
            {
                info.map(theInfo =>
                    <TheInfo key={theInfo.id} title={theInfo.title} content={theInfo.content} />
                )
            }
        </div>
    );
};


const TheInfo = ({title, content}) => {
    return (
        <div className="the-info">
            <span>{title}</span>
            <span>{content}</span>
        </div>
    );
};


export default Info;