import React from "react";
import style from "./main.module.css";
import MyPosts from "./myposts/myposts";
import MyProfile from "./myprofile/myprofile";

const Main = ({ state, dispatch, profile }) => {
  return (
    <div className={style["app-main"]}>
      <MyProfile profile={profile} />
      <MyPosts state={state.post} dispatch={dispatch} />
    </div>
  );
};

export default Main;
