import React, { useState, useEffect } from "react";
import BrandCard from "./components/BrandCard";
import "./Brand.css";

const Brand = () => {
    const [brands, setBrands] = useState([]);
    const fetchBrands = async () => {
        try {
            const url = `${process.env.REACT_APP_SERVER_URL}/api/brand/all`;
            const res = await fetch(url);
            const data = await res.json();
            setBrands(data.brands);
        } catch (err) {
            // setBrands([]);
        }
    };

    useEffect(() => {
        fetchBrands();
    }, []);

    return (
        <div>
            <h1 className="brands-title">Brands</h1>
            <div className="brands-card-container">
                {brands.map((brand, index) => (
                    <BrandCard key={index} brand={brand} />
                ))}
            </div>
        </div>
    );
};

export default Brand;
