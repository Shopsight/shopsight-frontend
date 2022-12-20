import React, { useState, useEffect } from "react";
import CategoryProducts from "./components/CategoryProducts";
import Brands from "./components/Brands";
// import Footer from "./components/Footer";
// import Products from "./components/Products";
import Slider from "./components/Slider";
import "./Home.css";

const Home = () => {
    const [malls, setMalls] = useState([]);
    const fetchData = async () => {
        try {
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Slider />
            <Brands />
            <CategoryProducts categoryId="1" />
            <CategoryProducts categoryId="1" />
        </>
    );
};

export default Home;
