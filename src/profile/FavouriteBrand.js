import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FavouriteBrand = () => {
    const [user, setUser] = useState({ email: "", favourites: "" });
    const navigate = useNavigate();

    const fetchUserInfo = async () => {
        const token = localStorage.getItem("shopsight_usertoken");
        if (!token) {
            navigate("/");
            return;
        }
        try {
            const url = `${process.env.REACT_APP_SERVER_URL}/api/user/favourites-brand`;
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
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
                    <h1>Welcome back {user.name}</h1>
                </div>
            </div>
            <div>
                {user.favourites && user.favourites.length ? (
                    <>
                        <h1 className="products-title">Your Favourite Brands</h1>
                        <div className="products-container">
                            {user.favourites &&
                                user.favourites.map((brand) => (
                                    <div className="brand-card-container">
                                        <Link
                                            to={`/brand/${brand[0].brandId}`}
                                            className="brand-card-image"
                                        >
                                            <img src={brand[0].logo} alt={brand[0].name} />
                                        </Link>
                                        <div className="brand-card-info">
                                            <div className="brand-card-brand">{brand[0].name}</div>
                                        </div>
                                        <div className="brand-card-info">
                                            <div className="brand-card-brand">
                                                Saved products: {brand.length}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </>
                ) : (
                    <div className="user-empty-wishlist">
                        <h1>Your wishlist is empty!!</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FavouriteBrand;
