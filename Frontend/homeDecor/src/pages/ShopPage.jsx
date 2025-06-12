import { Outlet } from "react-router-dom";
import LinksBar from "../components/ShopPage/LinksBAr";
import ShopNavBar from "../components/ShopPage/ShopNavBar";
import ShopPageFooter from "../components/ShopPage/ShopPageFooter";

const ShopPage = () => {
  return (
    <div>
      <ShopNavBar />
      <LinksBar />
      <Outlet />
      <ShopPageFooter />
    </div>
  );
};

export default ShopPage;
