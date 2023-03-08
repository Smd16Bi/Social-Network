import React from "react";
import style from "./nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={style["app-nav"]}>
      <ul className="app-nav_list">
        <li className={`${style["app-nav_link"]} ${style.active} `}>
          <NavLink
            className={({ isActive }) => (isActive ? style.activeNav : "")}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className={`${style["app-nav_link"]} ${style.active} `}>
          <NavLink
            className={({ isActive }) => (isActive ? style.activeNav : "")}
            to="/dialogs"
          >
            Message
          </NavLink>
        </li>
        <li className={`${style["app-nav_link"]} ${style.active} `}>
          <NavLink
            className={({ isActive }) => (isActive ? style.activeNav : "")}
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li className={`${style["app-nav_link"]} ${style.active} `}>
          <NavLink
            className={({ isActive }) => (isActive ? style.activeNav : "")}
            to="/music"
          >
            Music
          </NavLink>
        </li>
        <li className={`${style["app-nav_link"]} ${style.active} `}>
          <NavLink
            className={({ isActive }) => (isActive ? style.activeNav : "")}
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
