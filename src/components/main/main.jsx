import React from "react";
import style from "./main.module.css";
import MyPosts from "./myposts/myposts";
import MyProfile from "./myprofile/myprofile";

const Main = () => {
  return (
    <div className={style["app-main"]}>
      <MyProfile />
      <MyPosts />
    </div>
  );
};

export default Main;
