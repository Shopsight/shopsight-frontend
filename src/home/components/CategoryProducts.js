import React from "react";
import ProductCard from "./ProductCard";

const CategoryProducts = ({ categoryId }) => {
    return (
        <div className="category-product-container">
            <div className="category-product-name">Category</div>
            <div className="category-products">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    );
};

export default CategoryProducts;
