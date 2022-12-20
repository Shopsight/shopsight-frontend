import { brands } from "../../data";
import BrandItem from "./BrandItem";

const Brands = () => {
    return (
        <div className="brands-container">
            {brands.map((item) => (
                <BrandItem item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Brands;
