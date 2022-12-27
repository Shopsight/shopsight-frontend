import BrandItem from "./BrandItem";

const Brands = () => {
    const topBrands = [
        {
            id: 1,
            name: "Raymond",
            logo: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            id: 2,
            name: "Puma",
            logo: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            id: 3,
            name: "Nike",
            logo: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
    ];

    return (
        <div className="brands-container">
            {topBrands.map((brand, index) => (
                <BrandItem brand={brand} key={index} />
            ))}
        </div>
    );
};

export default Brands;
