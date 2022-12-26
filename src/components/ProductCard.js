import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
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
    return (
        <div className="product-card-container">
            <Link to={`/product/${product.id}`} className="product-card-image">
                <img src={product.imageLink} alt={product.name} />
            </Link>
            <div className="product-card-info">
                <div className="product-card-info-left">
                    <div className="product-card-brand">Raymond</div>
                    <div className="product-card-name">{product.name}</div>
                    <div className="product-card-price">Rs. {product.price}</div>
                </div>
                <div className="product-card-right">
                    <BsHeartFill />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
