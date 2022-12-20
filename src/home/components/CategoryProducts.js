import React from "react";
import ProductCard from "./ProductCard";

const CategoryProducts = ({ categoryId }) => {
    return (
        <div className="category-products-container">
            <div className="category-products-name">Category</div>
            <div className="category-products">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    );
};

export default CategoryProducts;
