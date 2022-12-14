import { UserContext } from "./context/UserContext";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Error from "./error/Error";

import "./App.css";

function App() {
    const { userName, setUserName } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const token = localStorage.getItem("shopsight_usertoken");
        if (!token) {
            setUserName(null);
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
            setUserName(data.user.username);
        } else {
            setUserName(null);
        }
        setLoading(false);
    };
    useEffect(() => {
        // fetchData();
    }, [userName]);

    return (
        <div className="App">
            <Router>
                <Navbar userName={userName} />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
