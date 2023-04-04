import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navigation = ({ userEmail, setUserEmail }) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("shopsight_usertoken");
        setUserEmail(null);
        navigate("/");
    };

    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <Link to="/" className="navbar-menu-item">
                        HOME
                    </Link>
                    <Link to="/brands" className="navbar-menu-item">
                        BRANDS
                    </Link>
                    <Link to="/favourites" className="navbar-menu-item">
                        FAVOURITES
                    </Link>
                </div>
                <div className="navbar-center">
                    <Link to="/" className="navbar-logo">
                        SHOPSIGHT.
                    </Link>
                </div>
                <div className="navbar-right">
                    {userEmail ? (
                        <>
                            <Link to="/dashboard" className="navbar-menu-item">
                                DASHBOARD
                            </Link>
                            <div onClick={logout} className="navbar-menu-item">
                                LOGOUT
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/register" className="navbar-menu-item">
                                REGISTER
                            </Link>
                            <Link to="/login" className="navbar-menu-item">
                                SIGN IN
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
