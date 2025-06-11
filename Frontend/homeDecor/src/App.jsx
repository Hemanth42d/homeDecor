import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUpRegister from "./components/LandingPage/SignUpRegisterPage";
import { Routes, Route } from "react-router";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<SignUpRegister />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
