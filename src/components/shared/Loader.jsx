import { useEffect } from "react";
import "./Loader.css";
import Logo from "../../assets/intro_web.gif";
import HeroImage from "../../assets/heroImage.png"; // Import the hero image

const Loader = () => {
  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.src = HeroImage;
    // You can also add an onload handler if you want to track when it's loaded
    img.onload = () => {
      console.log("Hero image preloaded successfully");
    };
  }, []);

  return (
    <div>
      <div className="loader-container">
        <img
          src={Logo}
          alt="Loading animation"
          className="flex object-cover h-200 w-200"
        />
      </div>
      {/* Hidden image for preloading - this is an alternative approach */}
      <img src={HeroImage} alt="preload" style={{ display: "none" }} />
    </div>
  );
};

export default Loader;
