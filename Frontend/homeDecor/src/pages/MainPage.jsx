import FilterCard from "../components/ShopPage/FilterCard";
import ProductCard from "../components/ShopPage/ProductCard";
import img from "../assets/lamp.jpg";
import img2 from "../assets/garden.jpg";
import img3 from "../assets/furniture.jpg";
import rating from "../assets/rating.png";

const MainPage = () => {
  const data = [
    {
      title: "Shop by Categories",
      items: [
        "Home Decoration",
        "Light Decor",
        "Kitchen and Dining",
        "Home Furniture",
        "Game and Outdoor",
      ],
      idx: 1,
    },
    {
      title: "Highlight",
      items: [
        "All Products",
        "New Arrivals",
        "Best Sellers",
        "Discounts",
        "Trending",
      ],
      idx: 2,
    },
    {
      title: "Price Range",
      items: [
        "Under ₹500",
        "₹500 - ₹1000",
        "₹1000 - ₹2000",
        "₹2000 - ₹5000",
        "Above ₹5000",
      ],
      idx: 3,
    },
    {
      title: "Average Rating",
      items: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
      idx: 4,
    },
  ];

  const ProductsData = [
    {
      id: 1,
      img: img,
      title: "Lamp for the ceiling of the house",
      price: 1500,
      rating: rating,
    },
    {
      id: 2,
      img: img2,
      title: "Gradening Tool",
      price: 1000,
      rating: rating,
    },
    {
      id: 3,
      img: img3,
      title: "Wooden furniture for the Living Room",
      price: 2500,
      rating: rating,
    },
  ];

  return (
    <div className="h-full w-full flex">
      <div className="w-1/4 h-full flex flex-col justify-around gap-2 items-center p-2">
        {data.map((item, idx) => {
          return <FilterCard key={idx} title={item.title} Items={item.items} />;
        })}
      </div>
      <div className="w-3/4 h-full flex flex-col p-2 gap-3">
        <div className="flex justify-between items-center w-full pr-20">
          <p>Showing 1-24 of 24 results</p>
          <p className="p-1 px-8 border-gray-800 rounded-md">Default Sorting</p>
        </div>
        <div className="p-2 grid grid-cols-3 gap-2 h-full">
          {ProductsData.map((productData) => (
            <ProductCard key={productData.id} productData={productData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
