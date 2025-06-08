import BackGroundImage from "../components/BackGroundImage";
import LandingPageFooter from "../components/LandingPage/LandingPageFooter";
import NavBarLandingPage from "../components/LandingPage/NavBarLandingPage";
import LandingPageComponents from "./LandingPageComponents";

const LandingPage = () => {
  return (
    <div>
      <NavBarLandingPage />
      <BackGroundImage />
      <LandingPageComponents />
      <LandingPageFooter />
    </div>
  );
};

export default LandingPage;
