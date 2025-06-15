import { Outlet } from "react-router-dom";
import LinksBar from "../components/ShopPage/LinksBAr";
import ShopNavBar from "../components/ShopPage/ShopNavBar";
import ShopPageFooter from "../components/ShopPage/ShopPageFooter";
import ProductFooter from "../components/Product/ProductFooter";
import ScrollToTop from "../components/ShopPage/ScrollToTop";

const ShopPage = () => {
  return (
    <div>
      <ShopNavBar />
      <LinksBar />
      <Outlet />
      <ScrollToTop />
      <ProductFooter />
      <ShopPageFooter />
    </div>
  );
};

export default ShopPage;
