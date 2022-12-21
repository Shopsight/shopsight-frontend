import React from "react";
import { FaSearch } from "react-icons/fa";

const SubCategory = ({ subCategory }) => {
    return (
        <div className="brand-product-container">
            <div className="brand-product-circle" />
            <img src={subCategory.imageLink} alt="product-img" className="brand-product-image" />
            <div className="brand-product-info">
                <div className="brand-product-icon">
                    <FaSearch />
                </div>
            </div>
        </div>
    );
};

export default SubCategory;
