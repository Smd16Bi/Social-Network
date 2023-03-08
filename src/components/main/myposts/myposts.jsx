import React from "react";
import style from "./myposts.module.css";
import Post from "./post/post";
const MyPosts = () => {
  return (
    <div className={style["app-main__posts"]}>
      <textarea cols="30" rows="10"></textarea>
      <button>add</button>
      <button>remove</button>
      <div className={style["main__posts-post"]}>
        <Post message="Hello world" like="15"/>
        <Post message="First post" like="25"/>
      </div>
    </div>
  );
};

export default MyPosts;
