import React from "react";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    return (
        <div className="brand-card-container">
            <Link to={`/brand/${brand.id}`} className="brand-card-image">
                <img src={brand.logo} alt={brand.name} />
            </Link>
            <div className="brand-card-info">
                <div className="brand-card-brand">{brand.name}</div>
            </div>
        </div>
    );
};

export default BrandCard;
