import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { popularProducts } from "../data";
import Product from "./components/Product";
import "./Brand.css";

const Brand = () => {
    const location = useLocation();
    const brandId = location.pathname.split("/")[2];
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const url = `${process.env.REACT_APP_SERVER_URL}/brand/${brandId}`;
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data.products);
        } catch (err) {
            setProducts([]);
        }
    };

    useEffect(() => {
        // fetchProducts();
    }, []);

    return (
        <div>
            <h1 className="brand-title">Raymond</h1>
            <div className="brand-products">
                {popularProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default Brand;
