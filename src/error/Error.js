import React from "react";
import "./Error.css";

const Error = ({ error }) => {
    return (
        <div className="error-container">
            <h1>{error}</h1>
        </div>
    );
};

export default Error;
