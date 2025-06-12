import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUpRegister from "./components/LandingPage/SignUpRegisterPage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import Login from "./components/LandingPage/Login";
import Signup from "./components/LandingPage/Signup";
import ProductDetails from "./components/ShopPage/ProductDetails";
import MainPage from "./pages/MainPage";

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
