import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Product.css";
import Error from "../error/Error";
import NotFound from "../error/NotFound";

const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [product, setProduct] = useState({
        name: "",
        description: "",
        imageLink: "",
        price: "",
        size: "[]",
        color: "[]",
        location: "",
        mallName: "",
    });

    const [error, setError] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const fetchProductInfo = async () => {
        try {
            const url = `${process.env.REACT_APP_SERVER_URL}/api/product/${productId}`;
            const res = await fetch(url);
            const data = await res.json();
            if (res.status === 200) {
                setProduct(data.product);
                console.log(data.product);
            } else if (res.status === 404) {
                setNotFound(true);
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError("Something went wrong! Please try again");
        }
    };

    useEffect(() => {
        fetchProductInfo();
    }, []);

    if (error) return <Error error={error} />;
    if (notFound) return <NotFound />;
    return (
        <div>
            <div className="product-wrapper">
                <div className="product-image-container">
                    <img src={product.imageLink} alt={product.name} className="product-image" />
                </div>
                <div className="product-info-container">
                    <h1 className="product-brand-title">{product.brandName}</h1>
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-description">{product.description}</p>
                    <span className="product-price">Rs. {product.price}</span>
                    <div className="product-filter-container">
                        <div className="product-filter">
                            <div className="product-filter-title">Available Sizes</div>
                            <select className="product-filter-size">
                                {JSON.parse(product.size).map((size, index) => (
                                    <option key={index} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="product-location-container">
                        <div className="product-location-title">Available here</div>
                        <div className="product-location-main">
                            {product.mallName} at {product.location}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
