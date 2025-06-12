import FilterCard from "../components/ShopPage/FilterCard";
import ProductCard from "../components/ShopPage/ProductCard";

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
        "Under $50",
        "$50 - $100",
        "$100 - $200",
        "$200 - $500",
        "Above $500",
      ],
      idx: 3,
    },
    {
      title: "Average Rating",
      items: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
      idx: 4,
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
          <p className="border-1 p-1 px-8 border-gray-800 rounded-md">
            Default Sorting
          </p>
        </div>
        <div className="p-5 flex flex-wrap justify-between items-center gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
