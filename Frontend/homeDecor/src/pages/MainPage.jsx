import FilterCard from "../components/ShopPage/FilterCard";

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
    },
    {
      title: "Average Rating",
      items: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
    },
  ];

  return (
    <div className="h-full w-full flex">
      <div className="w-1/4 h-full flex flex-col justify-around gap-2 items-center p-2">
        {data.map((item, idx) => {
          return <FilterCard key={idx} title={item.title} Items={item.items} />;
        })}
      </div>
      <div className="w-3/4 h-full flex border-2 border-red-500">
        <p>Showing 1-24 of 24 results</p>
      </div>
    </div>
  );
};

export default MainPage;
