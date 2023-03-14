import React from "react";
import { actionCreateAddPost } from "../../../redux/state";
import MainButton from "../../uiComponent/mainButton";
import style from "./myposts.module.css";
import Post from "./post/post";


const MyPosts = ({ state, dispatch }) => {
  let postsData = state;

  let newPostElement = React.createRef();

  let text = () => {
    let bodyText = newPostElement.current.value
    dispatch(actionCreateAddPost(bodyText));
    newPostElement.current.value = "";
  }

  let postsUi = postsData.map((el, index) => {
    return <Post key={el.id} message={el.message} like={el.like} />;
  });

  return (
    <div className={style["app-main__posts"]}>
      <div className={style["app-main__posts-create"]}>
        <textarea ref={newPostElement} cols="30" rows="10"></textarea>
        <MainButton slot="Add" addPost={text} />
      </div>
      <div className={style["main__posts-post"]}>{postsUi}</div>
    </div>
  );
};

export default MyPosts;
