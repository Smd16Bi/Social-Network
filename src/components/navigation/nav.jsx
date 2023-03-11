import React from "react";
import style from "./nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = ({ state }) => {
  let friends = state.friends.map((el) => {
    return (
      <div
        className={`${style["app-nav_friend"]} ${
          el.isActive ? style["friend_online"] : style["friend_offline"]
        }`}
        key={el.id}
      >
        <img src={el.img} alt="avatar" />
        <span className={style["friend_name"]}>{el.name}</span>
      </div>
    );
  });

  let links = state.sideBar.map((el) => {
    return (
      <li key={el.id} className={`${style["app-nav_link"]} ${style.active} `}>
        <NavLink
          className={({ isActive }) => (isActive ? style.activeNav : "")}
          to={el.path}
        >
          {el.link}
        </NavLink>
      </li>
    );
  });
  return (
    <nav className={style["app-nav"]}>
      <ul className={style["app-nav_list"]}>{links}</ul>
      <div className={style["app-nav_friends"]}>{friends}</div>
    </nav>
  );
};

export default Nav;
