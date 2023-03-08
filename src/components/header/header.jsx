import React from "react";
import style from "./header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className={style["app-header"]}>
      <div className={style["app-header_logo"]}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style["app-header_text"]}>
          <h1>Social network</h1>
      </div>
    </div>
  );
};

export default Header;
