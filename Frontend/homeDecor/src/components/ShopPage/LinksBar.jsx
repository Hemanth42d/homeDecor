import { Link } from "react-router-dom";

const LinksBar = () => {
  return (
    <>
      <div className="h-15 flex flex-col justify-start items-center border-b-1 bg-zinc-100">
        <div className="h-full w-full flex justify-around items-center">
          <p className="w-full flex justify-center items-center">
            <a href="">
              <span>
                <i className="fa-solid fa-bars text-black text-sm mr-2"></i>
              </span>
              <span>Shop By Categories</span>
            </a>
          </p>
          <p className="w-full flex justify-around items-center">
            <Link to="/shop">Shop</Link>
            <a href="">Categories</a>
            <a href="">Products</a>
            <a href="">Top Deals</a>
          </p>
          <p className="w-full flex justify-center items-center">
            <a href="">
              <span className="h-full">
                <i className="fa-solid fa-tags mr-1"></i>
              </span>
              <span> Today Deals</span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LinksBar;
