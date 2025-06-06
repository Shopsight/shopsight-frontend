import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Error from "../error/Error";
import NotFound from "../error/NotFound";

const BrandProduct = () => {
    const location = useLocation();
    const sizes = ["S", "M", "L", "XL"];
    const colors = ["White", "Black", "Red", "Blue"];

    const [error, setError] = useState(false);
    const [notFound, setNotFound] = useState(false);

    // 1-> Ascending order of price
    // -1 -> Descending order of price
    // 0 -> Latest Arrival
    const [filter, setFilter] = useState({ color: "", size: "", sort: "0" });

    const [products, setProducts] = useState([]);
    const [brandName, setBrandName] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleFilterChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
        setFilteredProducts(
            products.filter((product) => {
                let f1 = filter.color === "" || product["color"].includes(filter.color);
                let f2 = filter.size === "" || product["size"].includes(filter.size);
                if (e.target.name === "color") {
                    if (e.target.value === "") f1 = 1;
                    else f1 = product[e.target.name].includes(e.target.value);
                }
                if (e.target.name === "size") {
                    if (e.target.value === "") f2 = 1;
                    else f2 = product[e.target.name].includes(e.target.value);
                }
                return f1 && f2;
            })
        );
        const sortVal = e.target.name === "sort" ? e.target.value : filter.sort;
        setFilteredProducts((prev) =>
            prev.sort((a, b) => {
                if (sortVal === "1") return a.price - b.price;
                else if (sortVal === "-1") return b.price - a.price;
                return b.id - a.id;
            })
        );
    };

    const fetchProducts = async () => {
        try {
            const brandId = location.pathname.split("/")[2];
            const url = `${process.env.REACT_APP_SERVER_URL}/api/brand/products/${brandId}`;
            const res = await fetch(url);
            const data = await res.json();
            if (res.status === 200) {
                setProducts(data.products);
                setFilteredProducts(data.products);
                setBrandName(data.brandName);
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
        fetchProducts();
    }, []);

    if (error) return <Error error={error} />;
    if (notFound) return <NotFound />;
    return (
        <div>
            <h1 className="products-title">{brandName}</h1>
            <div className="filter-container">
                <div className="filter">
                    <span className="filter-text">Filter Products:</span>
                    <select name="color" onChange={handleFilterChange} className="filter-select">
                        <option selected={filter.color === ""} value="">
                            Color
                        </option>
                        {colors.map((color, index) => (
                            <option key={index} value={color} selected={filter.color === color}>
                                {color}
                            </option>
                        ))}
                    </select>
                    <select name="size" onChange={handleFilterChange} className="filter-select">
                        <option selected={filter.size === ""} value="">
                            Size
                        </option>
                        {sizes.map((size, index) => (
                            <option key={index} value={size} selected={filter.size === size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="filter">
                    <span className="filter-text">Sort Products:</span>
                    <select name="sort" onChange={handleFilterChange} className="filter-select">
                        <option value="0" selected={filter.sort === "0"}>
                            Newest
                        </option>
                        <option value="1" selected={filter.sort === "1"}>
                            Price (asc)
                        </option>
                        <option value="-1" selected={filter.sort === "-1"}>
                            Price (desc)
                        </option>
                    </select>
                </div>
            </div>
            <div>
                <div className="products-container">
                    {filteredProducts.length ? (
                        filteredProducts.map((product, index) => (
                            <ProductCard product={product} key={index} />
                        ))
                    ) : (
                        <div className="zero-products">
                            <h1>Sorry! No Products Found</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrandProduct;
