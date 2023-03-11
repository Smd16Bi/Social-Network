import React from "react";
import style from "./myposts.module.css";
import Post from "./post/post";

const MyPosts = ({ state }) => {
  let postsData = state;
  let postsUi = postsData.map((el, index) => {
    return <Post key={el.id} message={el.message} like={el.like} />;
  });
  return (
    <div className={style["app-main__posts"]}>
      <div className={style["app-main__posts-create"]}>
          <textarea cols="30" rows="10"></textarea>
          <button className={style["app-main__posts-add"]}>add</button>
          <button className={style["app-main__posts-remove"]}>remove</button>
      </div>
      <div className={style["main__posts-post"]}>{postsUi}</div>
    </div>
  );
};

export default MyPosts;
