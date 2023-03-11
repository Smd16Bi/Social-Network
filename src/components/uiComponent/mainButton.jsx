import React from "react";
import style from "./mainButton.module.css";

const MainButton = ({slot}) => {
    return  <button className={style["main-button"]}>{slot}</button>

}

export default MainButton
