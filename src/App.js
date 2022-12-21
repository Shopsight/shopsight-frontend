import { UserContext } from "./context/UserContext";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Announcement from "./announcement/Announcement";
import Navbar from "./navbar/Navbar";

//home
import Home from "./home/Home";
//auth
import Register from "./auth/Register";
import Login from "./auth/Login";
//brand
import Brand from "./brand/Brand";
//error
import Error from "./error/Error";
//footer
import Footer from "./footer/Footer";

import "./App.css";

function App() {
    const { userEmail, setUserEmail } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const token = localStorage.getItem("shopsight_usertoken");
        if (!token) {
            setUserEmail(null);
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
        } else {
            setUserEmail(null);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, [userEmail]);

    return (
        <div className="App">
            <Router>
                <Announcement />
                <Navbar userEmail={userEmail} />
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
                    <Route path="/brand/:id" element={<Brand />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
