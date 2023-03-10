import React from "react";
import { NavLink } from "react-router-dom";
import style from "./dialogsItem.module.css";

const DialogItem = ({ name, path }) => {
  return (
    <div className={style["names-item"] + " " + style["_active"]}>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeNav : "")}
        to={path}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
