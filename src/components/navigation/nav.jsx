import React from "react";
import style from "./nav.module.css";

console.log(style);

const Nav = () => {
  return (
    <nav className={style["app-nav"]}>
      <ul className="app-nav_list">
        <li className="app-nav_item">
          <a className={`${style["app-nav_link"]} ${style.active} `} href="/profile">
            Profile
          </a>
        </li>
        <li>
          <a className={style["app-nav_link"]} href="/dialogs">
            Message
          </a>
        </li>
        <li>
          <a className={style["app-nav_link"]} href="/news">
            News
          </a>
        </li>
        <li>
          <a className={style["app-nav_link"]} href="/music">
            Music
          </a>
        </li>
        <li>
          <a className={style["app-nav_link"]} href="/settings">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
