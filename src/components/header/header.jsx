import React from "react";
import style from "./header.module.css"

const Header = () => {
  return (
    <header className={style["app-header"]}>
      <img
        src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
        alt="logo"
      />
    </header>
  );
};

export default Header;
