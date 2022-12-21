import React from "react";
import { Link } from "react-router-dom";

const BrandItem = ({ brand }) => {
    return (
        <div className="brand-item-container">
            <img className="brand-item-image" src={brand.logo} alt={brand.name} />
            <div className="brand-item-info">
                <h1 className="brand-item-title">{brand.name}</h1>
                <Link to={`/brand/${brand.id}`} className="brand-item-button">
                    SHOP NOW
                </Link>
            </div>
        </div>
    );
};

export default BrandItem;
