import { useEffect, useState } from "react";
import BrandItem from "./BrandItem";

const Brands = () => {
    const brandCount = 3;
    const [topBrands, setTopBrands] = useState([]);

    const fetchTopBrands = async () => {
        try {
            const url = `${process.env.REACT_APP_SERVER_URL}/api/brand/top/${brandCount}`;
            const res = await fetch(url);
            const data = await res.json();
            setTopBrands(data.topBrands);
        } catch (err) {
            setTopBrands([]);
        }
    };

    useEffect(() => {
        fetchTopBrands();
    }, []);

    return (
        <div className="brands-container">
            {topBrands.map((brand, index) => (
                <BrandItem brand={brand} key={index} />
            ))}
        </div>
    );
};

export default Brands;
