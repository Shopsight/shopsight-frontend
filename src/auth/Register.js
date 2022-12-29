import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "", password: "", cpassword: "" });
    const handleInput = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    const { setUserEmail } = useContext(UserContext);

    const userRegister = async (e) => {
        e.preventDefault();
        try {
            const { name, email, password, cpassword } = user;
            const url = `${process.env.REACT_APP_SERVER_URL}/api/auth/register`;
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, cpassword }),
            });
            const data = await res.json();
            if (res.status === 200) {
                setUserEmail(data.email);
                localStorage.setItem("shopsight_usertoken", data.accessToken);
                navigate("/");
            } else {
                window.alert(data.error);
            }
        } catch (err) {
            window.alert("Something went wrong");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-wrapper">
                <h1 className="auth-title">REGISTER</h1>
                <form onSubmit={userRegister} className="auth-form">
                    <input
                        className="auth-input"
                        name="name"
                        type="text"
                        id="name"
                        placeholder="name"
                        value={user.name}
                        onChange={handleInput}
                    />
                    <input
                        className="auth-input"
                        name="email"
                        type="text"
                        id="email"
                        placeholder="e-mail"
                        value={user.email}
                        onChange={handleInput}
                    />
                    <input
                        className="auth-input"
                        name="password"
                        type="password"
                        id="password"
                        placeholder="password"
                        value={user.password}
                        onChange={handleInput}
                    />
                    <input
                        className="auth-input"
                        name="cpassword"
                        type="password"
                        id="cpassword"
                        placeholder="confirm password"
                        value={user.cpassword}
                        onChange={handleInput}
                    />
                    <button className="auth-button" onClick={userRegister}>
                        REGISTER
                    </button>
                    <Link to="/register" className="auth-link">
                        CREATE A NEW ACCOUNT
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
