import { UserContext } from "./context/UserContext";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
//navbar
import Navbar from "./navbar/Navbar";
//home
import Home from "./home/Home";
//auth
import Register from "./auth/Register";
import Login from "./auth/Login";
//brand
import Brand from "./brand/Brand";
import BrandProduct from "./brand/BrandProduct";
//category
import CategoryProduct from "./category/CategoryProduct";
//product
import Product from "./product/Product";
//dashboard
import Dashboard from "./profile/Dashboard";
//error
import Error from "./error/Error";
//footer
import Footer from "./footer/Footer";

import "./App.css";

function App() {
    const { userEmail, setUserEmail, setFavourites } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const token = localStorage.getItem("shopsight_usertoken");
        if (!token) {
            setUserEmail(null);
            setFavourites(null);
            setLoading(false);
            return;
        }
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/info`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await res.json();
        if (res.status === 200) {
            setUserEmail(data.user.email);
            if (data.user.favourites === null) setFavourites(null);
            else setFavourites(new Set(JSON.parse(data.user.favourites)));
        } else {
            setUserEmail(null);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, [userEmail]);

    if (loading) return <h1>Loading...</h1>;
    return (
        <div className="App">
            <Router>
                <Navbar userEmail={userEmail} setUserEmail={setUserEmail} />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/register"
                        element={userEmail ? <Navigate to="/" /> : <Register />}
                    ></Route>
                    <Route
                        path="/login"
                        element={userEmail ? <Navigate to="/" /> : <Login />}
                    ></Route>
                    <Route path="/brands" element={<Brand />}></Route>
                    <Route path="/brand/:id" element={<BrandProduct />}></Route>
                    <Route path="/category/:id" element={<CategoryProduct />}></Route>
                    <Route path="/product/:id" element={<Product />}></Route>
                    <Route
                        path="/dashboard"
                        element={userEmail ? <Dashboard /> : <Navigate to="/" />}
                    ></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
