import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUpRegister from "./components/LandingPage/SignUpRegisterPage";
import { Routes, Route } from "react-router";
import ShopPage from "./pages/ShopPage";
import Login from "./components/LandingPage/Login";
import Signup from "./components/LandingPage/Signup";

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
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
