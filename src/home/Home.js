import React, { useState, useEffect } from "react";
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
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;
