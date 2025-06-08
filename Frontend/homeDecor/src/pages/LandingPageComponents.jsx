import LandingPageOddCard from "../components/LandingPage/LandingPageOddCard";
import LandingPageEvenCard from "../components/LandingPage/LandingPageEvenCard";
import homeDecor from "../assets/homedecor.jpg";
import LightDecor from "../assets/lamp.jpg";
import Kitchen from "../assets/kitchen.jpg";
import furniture from "../assets/furniture.jpg";
import garden from "../assets/garden.jpg";

const data = [
  {
    image: homeDecor,
    title: "Home Decoration",
    description:
      "Transform your space with style, comfort, and elegance. Discover handpicked collections designed to make your house feel like home.",
  },
  {
    image: LightDecor,
    title: "Light Decors",
    description:
      "Explore our exquisite range of furniture that combines functionality with timeless design, perfect for any living space.",
  },
  {
    image: Kitchen,
    title: "Kitchen and Dining",
    description:
      "Add the finishing touches to your home with our curated selection of accessories that reflect your unique style.",
  },
  {
    image: furniture,
    title: "Home Furniture",
    description:
      "Experience comfort like never before with our luxurious textiles, designed to enhance the warmth and beauty of your home.",
  },
  {
    image: garden,
    title: "Garden and Outdoor",
    description:
      "Experience comfort like never before with our luxurious textiles, designed to enhance the warmth and beauty of your home.",
  },
];

const LandingPageComponents = () => {
  return (
    <div className="h-full flex flex-col last:mb-10">
      {data.map((item, idx) => {
        return idx % 2 === 0 ? (
          <LandingPageEvenCard
            key={idx}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ) : (
          <LandingPageOddCard
            key={idx}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default LandingPageComponents;
