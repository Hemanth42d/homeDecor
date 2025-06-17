import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUpRegister from "./components/LandingPage/SignUpRegisterPage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import Login from "./components/LandingPage/Login";
import Signup from "./components/LandingPage/Signup";
import ProductDetails from "./components/ShopPage/ProductDetails";
import MainPage from "./pages/MainPage";
import AccountDetails from "./components/ShopPage/AccountDetails";
import Cart from "./components/ShopPage/Cart";
import AboutUs from "./components/ShopPage/AboutUs";
import ContactUs from "./components/ShopPage/ContactUs";
import Whishlist from "./components/ShopPage/Whishlist";
import Faqs from "./components/ShopPage/Faqs";
import MyOrders from "./components/ShopPage/MyOrders";
import TopDeals from "./components/ShopPage/TopDeals";
import OwnerPage from "./pages/OwnerPage";
import OwnerTopBar from "./components/OwnerComponents/OwnerTopBar";
import OwnerSettings from "./components/OwnerComponents/OwnerSettings";
import OwnerSideBar from "./components/OwnerComponents/OwnerSideBar";
import OwnerDashboard from "./components/OwnerComponents/OwnerDashboard";
import OwnerAddProduct from "./components/OwnerComponents/OwnerAddProduct";
import OwnerOrders from "./components/OwnerComponents/OwnerOrders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/account" element={<SignUpRegister />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/shop" element={<ShopPage />}>
          <Route index element={<MainPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="account" element={<AccountDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="whishlist" element={<Whishlist />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="topdeals" element={<TopDeals />} />
        </Route>
        <Route path="/owner" element={<OwnerPage />}>
          <Route index element={<OwnerDashboard />} />
          <Route path="addproduct" element={<OwnerAddProduct />} />
          <Route path="orders" element={<OwnerOrders />} />
          <Route path="settings" element={<OwnerSettings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
