import React from "react";
import { Link } from "react-router-dom";

const SubCategory = ({ subCategory }) => {
    return (
        <Link to={`/category/${subCategory.id}`} className="sub-product-card-container">
            <div className="sub-product-card-circle" />
            <img
                src={subCategory.imageLink}
                alt={subCategory.subCatName}
                className="sub-product-card-image"
            />
            <div className="sub-product-card-info"></div>
            <div className="sub-product-card-details">
                <div className="sub-product-card-name">{subCategory.subCatName}</div>
            </div>
        </Link>
    );
};

export default SubCategory;
