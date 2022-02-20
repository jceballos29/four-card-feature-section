import React from "react";
import "../styles/FeatureCard.css";

const FeatureCard = ({ color, image, title, description }) => {
    return <div className="FeatureCard">
        <div className="feature__top__stripe" style={{ backgroundColor: color }}></div>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt="Feature" className="feature__image"/>
    </div>;
};

export default FeatureCard;
