import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { UserContext } from "../context/UserContext";
import "./ProductCard.css";

// const ProductCard = ({ product }) => {
//     return (
//         <Link to={`/product/${product.id}`} className="product-card-container">
//             <div className="product-card-circle" />
//             <img src={product.imageLink} alt={product.name} className="product-card-image" />
//             <div className="product-card-info">
//                 <div className="product-card-icon">{product.brandName}</div>
//             </div>
//             <div className="product-card-details">
//                 <div className="product-card-name">{product.name}</div>
//                 <div className="product-card-price">$ {product.price}</div>
//             </div>
//         </Link>
//     );
// };

const ProductCard = ({ product }) => {
    const { favourites, userEmail, setFavourites } = useContext(UserContext);
    const [favourite, setFavourite] = useState(false);
    const removeFavourite = async () => {
        const token = localStorage.getItem("shopsight_usertoken");
        if (!token) {
            return;
        }
        try {
            let fav = favourites;
            fav.delete(String(product.id));
            if (fav.size === 0) {
                fav = null;
            } else {
                fav = JSON.stringify(Array.from(fav));
            }
            const url = `${process.env.REACT_APP_SERVER_URL}/api/user/favourites`;
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ fav }),
            });
            const data = await res.json();
            if (res.status === 200) {
                if (fav === null) setFavourites(null);
                else setFavourites(new Set(JSON.parse(fav)));
                setFavourite(false);
            } else {
                window.alert(data.error);
            }
        } catch (err) {
            window.alert("Something went wrong");
        }
    };

    const addFavourite = async () => {
        const token = localStorage.getItem("shopsight_usertoken");
        if (!token) {
            return;
        }
        try {
            let fav;
            if (favourites === null) fav = new Set(String(product.id));
            else {
                fav = favourites;
                fav.add(String(product.id));
            }
            fav = JSON.stringify(Array.from(fav));
            const url = `${process.env.REACT_APP_SERVER_URL}/api/user/favourites`;
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ fav }),
            });
            const data = await res.json();
            if (res.status === 200) {
                setFavourites(new Set(JSON.parse(fav)));
                setFavourite(true);
            } else {
                window.alert(data.error);
            }
        } catch (err) {
            window.alert("Something went wrong");
        }
    };

    return (
        <div className="product-card-container">
            <Link to={`/product/${product.id}`} className="product-card-image">
                <img src={product.imageLink} alt={product.name} />
            </Link>
            <div className="product-card-info">
                <div className="product-card-info-left">
                    <div className="product-card-brand">{product.brandName}</div>
                    <div className="product-card-name">{product.name}</div>
                    <div className="product-card-price">Rs. {product.price}</div>
                </div>
                <div className="product-card-right">
                    {userEmail ? (
                        <>
                            {favourite || (favourites && favourites.has(String(product.id))) ? (
                                <BsHeartFill onClick={removeFavourite} />
                            ) : (
                                <BsHeart onClick={addFavourite} />
                            )}
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
