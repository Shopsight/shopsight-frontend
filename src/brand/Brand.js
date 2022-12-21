import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Brand = () => {
    const location = useLocation();
    const brandId = location.pathname.split("/")[2];
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const url = `${process.env.REACT_APP_SERVER_URL}/api/brand/products/${brandId}`;
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data.products);
        } catch (err) {
            setProducts([]);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1 className="products-title">Raymond</h1>
            <div className="products-container">
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Brand;
