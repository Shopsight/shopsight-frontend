import React from "react";
import Brands from "./components/Brands";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Slider />
            <Brands />
            <Categories />
        </>
    );
};

export default Home;
