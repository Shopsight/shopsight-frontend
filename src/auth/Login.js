import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Auth.css";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const handleInput = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    const { setUserEmail } = useContext(UserContext);

    const userLogin = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = user;
            const url = `${process.env.REACT_APP_SERVER_URL}/api/auth/login`;
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (res.status === 200) {
                setUserEmail(user.email);
                localStorage.setItem("shopsight_usertoken", data.accessToken);
                navigate("/");
            } else {
                window.alert(data.error);
            }
        } catch (err) {
            window.alert("Something went wrong");
        }
    };

    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus();
        }
    }, []);

    return (
        <div className="auth-container">
            <div className="auth-wrapper">
                <h1 className="auth-title">SIGN IN</h1>
                <form onSubmit={userLogin} className="auth-form">
                    <input
                        className="auth-input"
                        name="email"
                        type="text"
                        id="email"
                        placeholder="e-mail"
                        value={user.email}
                        onChange={handleInput}
                        ref={emailRef}
                    />
                    <input
                        className="auth-input"
                        name="password"
                        type="password"
                        id="password"
                        placeholder="password"
                        value={user.password}
                        onChange={handleInput}
                        ref={passwordRef}
                    />
                    <button className="auth-button" onClick={userLogin}>
                        LOGIN
                    </button>
                    <Link to="/register" className="auth-link">
                        CREATE A NEW ACCOUNT
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
