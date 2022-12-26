import React, { useState, useEffect } from "react";
import SubCategory from "./SubCategory";

const Categories = () => {
    const [categories, setCategories] = useState({});

    const fetchCategories = async () => {
        try {
            const url = `${process.env.REACT_APP_SERVER_URL}/api/category`;
            const res = await fetch(url);
            const data = await res.json();
            setCategories(data.categories);
        } catch (err) {
            setCategories({});
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div>
            {Object.entries(categories).map((category, index) => (
                <div key={index}>
                    <h1 className="products-title">{category[0]}</h1>
                    <h3 className="product-gen">Mens</h3>
                    <div className="products-container">
                        {category[1].map((subCategory, idx) => (
                            <SubCategory key={idx} subCategory={subCategory} />
                        ))}
                    </div>
                    <h3 className="product-gen">Women</h3>
                    <div className="products-container">
                        {category[1].map((subCategory, idx) => (
                            <SubCategory key={idx} subCategory={subCategory} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Categories;
