import { FaSearch } from "react-icons/fa";

const Product = ({ item }) => {
    return (
        <div className="brand-product-container">
            <div className="brand-product-circle" />
            <img src={item.img} alt="product-img" className="brand-product-image" />
            <div className="brand-product-info">
                <div className="brand-product-icon">
                    <FaSearch />
                </div>
            </div>
        </div>
    );
};

export default Product;
