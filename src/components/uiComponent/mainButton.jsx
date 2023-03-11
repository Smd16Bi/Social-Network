import React from "react";
import style from "./mainButton.module.css";

const MainButton = ({ slot, addPost}) => {
  return <button onClick={addPost} className={style["main-button"]}>{slot}</button>;
};

export default MainButton;
