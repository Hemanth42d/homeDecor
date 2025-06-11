import LinksBar from "../components/ShopPage/LinksBAr";
import ShopNavBar from "../components/ShopPage/ShopNavBar";
import ShopPageFooter from "../components/ShopPage/ShopPageFooter";
import MainPage from "./MainPage";

const ShopPage = () => {
  return (
    <div>
      <ShopNavBar />
      <LinksBar />
      <MainPage />
      <ShopPageFooter />
    </div>
  );
};

export default ShopPage;
