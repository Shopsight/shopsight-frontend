import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="product-card-container">
            <div className="product-card-circle" />
            <img src={product.imageLink} alt={product.name} className="product-card-image" />
            <div className="product-card-info">
                <div className="product-card-icon">
                    <FaSearch />
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
