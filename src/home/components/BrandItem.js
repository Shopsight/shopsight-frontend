import React from "react";
import { Link } from "react-router-dom";

const BrandItem = ({ item }) => {
    return (
        <div className="brand-item-container">
            <img className="brand-item-image" src={item.img} alt="brand-img" />
            <div className="brand-item-info">
                <h1 className="brand-item-title">{item.title}</h1>
                <Link to={`/brand/${item.id}`} className="brand-item-button">
                    SHOP NOW
                </Link>
            </div>
        </div>
    );
};

export default BrandItem;
