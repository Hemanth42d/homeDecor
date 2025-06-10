import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUpRegister from "./components/LandingPage/SignUpRegisterPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<SignUpRegister />} />
      </Routes>
    </>
  );
}

export default App;
