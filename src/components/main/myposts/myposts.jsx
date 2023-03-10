import React from "react";
import style from "./myposts.module.css";
import Post from "./post/post";

let postsData = [
  { id: 1, message: "Hello world", like: 25 },
  { id: 2, message: "First post", like: 15 },
];

let postsUi = postsData.map((el, index) => {
  return <Post key={el.id} message={el.message} like={el.like} />;
});
const MyPosts = () => {
  return (
    <div className={style["app-main__posts"]}>
      <textarea cols="30" rows="10"></textarea>
      <button>add</button>
      <button>remove</button>
      <div className={style["main__posts-post"]}>{postsUi}</div>
    </div>
  );
};

export default MyPosts;
