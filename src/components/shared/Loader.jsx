import React from "react";
import "./Loader.css";
import Logo from "../../assets/intro_web.gif";

const Loader = () => {
  return (
    <div>
      <div className="loader-container">
        <img
          src={Logo}
          alt="something"
          className="flex object-cover h-200 w-200"
        />
      </div>
      {/* <img
        src="https://ask.libreoffice.org/uploads/asklibo/original/3X/0/d/0de586544bba6cc70466cd97b45686d5dcbca532.gif"
        alt="something"
        className="loader-image"
      /> */}
    </div>
  );
};

export default Loader;
