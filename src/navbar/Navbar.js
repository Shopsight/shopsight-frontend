import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";

const Navigation = ({ userEmail }) => {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <div className="navbar-search-container">
                        <input className="navbar-input" placeholder="Search" />
                        <FaSearch style={{ color: "gray", fontSize: 11 }} />
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/" className="navbar-logo">
                        SHOPSIGHT.
                    </Link>
                </div>
                <div className="navbar-right">
                    {userEmail ? (
                        <div className="navbar-menu-item">LOGOUT</div>
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
