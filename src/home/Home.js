import React, { useState, useEffect } from "react";
import CategoryProducts from "./components/CategoryProducts";
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
        <div className="container">
            <CategoryProducts categoryId="1" />
        </div>
    );
};

export default Home;
