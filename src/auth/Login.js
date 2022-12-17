import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { UserContext } from "../context/UserContext";
import "./Auth.css";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const submitRef = useRef(null);
    const handleLoginInput = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    const { setUserEmail } = useContext(UserContext);

    function emailKeyDown(e) {
        if (e.keyCode === 13) {
            userLogin();
        }
    }

    function passwordKeyDown(e) {
        if (e.keyCode === 13) {
            userLogin();
        }
    }

    const userLogin = async () => {
        try {
            const { email, password } = user;
            const url = `${process.env.REACT_APP_SERVER_URL}/api/auth/login`;
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            console.log(data);
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
        <div className="auth__container">
            <div className="form-container">
                <div className="form-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div id="login" method="POST">
                    <div className="form-fields">
                        <input
                            name="email"
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="E-mail"
                            value={user.email}
                            onChange={handleLoginInput}
                            ref={emailRef}
                            onKeyDown={emailKeyDown}
                        />
                    </div>
                    <div className="form-fields">
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleLoginInput}
                            ref={passwordRef}
                            onKeyDown={passwordKeyDown}
                        />
                    </div>
                </div>
                <button className="btn-account" onClick={userLogin} ref={submitRef}>
                    Submit
                </button>
                <div className="account-toggle">
                    <p>No account?</p>
                    <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
