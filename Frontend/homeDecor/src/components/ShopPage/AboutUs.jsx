import { Link } from "react-router";
import teamImage from "../../assets/team.jpeg";

const AboutUs = () => {
  return (
    <div className="h-full w-[85%] m-auto relative">
      <Link
        to="/shop"
        className="bg-blue-500 p-2 text-white rounded-md absolute right-0 top-[-1.5rem] hover:bg-blue-600 transition-colors"
      >
        Go Back
      </Link>
      <div>
        <p className="text-2xl font-bold text-center mt-10 mb-5">
          Welcome to HomeDecor - Where Style Meets Simplicity
        </p>
        <p className="text-lg text-center mb-10">
          At TrendNest, we blend timeless fashion with modern flair to bring you
          products that feel as good as they look.
        </p>
        <p className="text-2xl font-bold text-center mb-5">Our Story</p>
        <p className="border-l-3 border-gray-500 text-center ml-2 text-lg mb-10">
          Founded in 2019, TrendNest started as a humble home-based project in
          Bangalore with just five products and one dream: to make everyday
          fashion accessible to everyone.
        </p>
        <p className="text-center mb-10 tracking-wide">
          Our founders <span className="font-bold">Hemanth</span>, was
          passionate about creating furniture that not only looked great but
          were ethically produced and environmentally conscious. With a growing
          community of customers who care about sustainability,
          <span className="font-bold">HomeDecor</span> has expanded from a tiny
          Shopify store to a global lifestyle brand.
        </p>
        <p>
          <img
            src={teamImage}
            alt="teamImage"
            className="h-100 m-auto my-4 rounded-md"
          />
        </p>
        <p className="mb-10 border-l-2 border-gray-500 w-[80%] m-auto p-4">
          <span className="ml-5 flex flex-col gap-2">
            <span className="text-2xl font-bold">Mission & Core Values</span>
            <span className="text-xl font-semibold">Our Mission:</span>
            <span className="text-lg font-light">
              To inspire confidence through products that fits your Home, your
              values, and your lifestyle.
            </span>
            <span className="text-xl font-semibold">Our Values:</span>
            <span className="font-light">
              <li>✅ Ethical Sourcing</li>
              <li>✅ Eco-Friendly Packaging</li>
              <li>✅ Affordable Everyday Luxury</li>
              <li>✅ Inclusivity and Representation</li>
            </span>
            <span className="text-xl font-semibold">
              What Makes Us Different
            </span>
            <span className="font-light">
              <li>📦 Recycled Packaging</li>
              <li>⏱️ Fast, Free Shipping</li>
              <li>💬 24/7 Customer Support</li>
              <li>🪡 Handcrafted Details</li>
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
