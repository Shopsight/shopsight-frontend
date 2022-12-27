import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    const [user, setUser] = useState({ email: "", favourites: "" });
    const navigate = useNavigate();

    const fetchUserInfo = async () => {
        const token = localStorage.getItem("shopsight_usertoken");
        if (!token) {
            navigate("/");
            return;
        }
        try {
            const url = `${process.env.REACT_APP_SERVER_URL}/api/user/favourites`;
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            console.log(data);
            setUser(data);
        } catch (err) {
            // window.alert("Something went wrong");
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    return (
        <div>
            <div className="user-info-container">
                <div className="user-info-type">
                    <h3>Email</h3>
                    <h2>{user.email}</h2>
                </div>
                <div className="user-info-type">
                    <h3>Name</h3>
                    <h2>{user.name}</h2>
                </div>
            </div>
            <div>
                <h1 className="products-title">Your Wishlist</h1>
                <div className="products-container">
                    {user.favourites &&
                        user.favourites.map((product) => (
                            <div className="product-card-container">
                                <Link to={`/product/${product.id}`} className="product-card-image">
                                    <img src={product.imageLink} alt={product.name} />
                                </Link>
                                <div className="product-card-info">
                                    <div className="product-card-info-left">
                                        <div className="product-card-brand">Raymond</div>
                                        <div className="product-card-name">{product.name}</div>
                                        <div className="product-card-price">
                                            Rs. {product.price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
