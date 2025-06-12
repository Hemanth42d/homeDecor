import ProductCard from "../ShopPage/ProductCard";

const RelatedProducts = () => {
  return (
    <>
      <div className="flex justify-around items-center w-[85%] m-auto border-b-1 border-gray-700 mt-2 p-2 h-full">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default RelatedProducts;
