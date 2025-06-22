import ProductCard from "../ShopPage/ProductCard";
import img from "../../assets/lamp.jpg";
import rating from "../../assets/rating.png";

const RelatedProducts = () => {
  const relatedProducts = [
    {
      id: 101,
      img: img,
      title: "Related Lamp",
      price: 1200,
      rating: rating,
    },
    // Add more related products as needed
  ];

  return (
    <>
      <div className="flex justify-around items-center w-[85%] m-auto border-b-1 border-gray-700 mt-2 p-2 h-full">
        {relatedProducts.map((product) => (
          <>
            <div className="max-h-[400px] w-[300px] p-2 flex items-center">
              <ProductCard key={product.id} productData={product} />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default RelatedProducts;
