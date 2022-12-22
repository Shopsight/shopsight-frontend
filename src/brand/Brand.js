import React, { useState, useEffect } from "react";

const Brand = () => {
    const [brands, setBrands] = useState([]);
    const fetchBrands = async () => {
        try {
        } catch (err) {}
    };

    useEffect(() => {
        fetchBrands();
    }, []);

    return (
        <div>
            <h1>Brand</h1>
        </div>
    );
};

export default Brand;
