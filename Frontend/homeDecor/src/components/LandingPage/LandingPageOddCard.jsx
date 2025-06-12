import homeDecor from "../../assets/homedecor.jpg";
import Button from "./Button";

const LandingPageOddCard = ({ image, title, description }) => {
  return (
    <div className=" mt-10 w-[90%] m-auto rounded-md bg-[#F2E8BB] flex">
      <div className="w-2/6 flex justify-center items-center">
        <img src={image} alt="img" className="rounded-3xl h-[90%]" />
      </div>
      <div className="w-4/6 h-[100%] flex flex-col px-30 py-8 relative">
        <p className="text-4xl font-semibold">{title}</p>
        <p className="text-xl px-20 mt-6 mb-6">{description}</p>
        <span className="absolute bottom-0 right-1/2">
          <Button />
        </span>
      </div>
    </div>
  );
};

export default LandingPageOddCard;
