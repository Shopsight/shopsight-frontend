import React from "react";
import { FaSearch } from "react-icons/fa";

const SubCategory = ({ subCategory }) => {
    return (
        <div className="product-card-container">
            <div className="product-card-circle" />
            <img
                src={subCategory.imageLink}
                alt={subCategory.subCatName}
                className="product-card-image"
            />
            <div className="product-card-info">
                <div className="product-card-icon">
                    <FaSearch />
                </div>
            </div>
        </div>
    );
};

export default SubCategory;
