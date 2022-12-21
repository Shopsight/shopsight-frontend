import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "./Product.css";

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

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
    });

    const fetchProductInfo = async () => {
        try {
            const url = `${process.env.REACT_APP_SERVER_URL}/api/product/${productId}`;
            const res = await fetch(url);
            const data = await res.json();
            if (res.status === 200) {
                setProduct(data.product);
            }
        } catch (err) {
            // setProduct({});
        }
    };

    useEffect(() => {
        fetchProductInfo();
    }, []);

    return (
        <div>
            <div className="product-wrapper">
                <div className="product-image-container">
                    <img src={product.imageLink} alt={product.name} className="product-image" />
                </div>
                <div className="product-info-container">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-description">{product.description}</p>
                    <span className="product-price">$ {product.price}</span>
                    <div className="product-filter-container">
                        <div className="product-filter">
                            <div className="product-filter-title">Color</div>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </div>
                        <div className="product-filter">
                            <div className="product-filter-title">Size</div>
                            <select className="product-filter-size">
                                {JSON.parse(product.size).map((size, index) => (
                                    <option key={index} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
