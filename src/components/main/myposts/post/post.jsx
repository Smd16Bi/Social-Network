import React from "react";
import style from "./post.module.css"

const Post = ({message, like}) => {
    return (
        <div className={style["app-nav_link"]}>

            <div className={style["app-post_img"]}>
                <img src="https://pbs.twimg.com/media/FkKORoyUcAErPlB.jpg:large" alt="" />
            </div>
            <div className={style["app-post_text"]}>
                {message}
            </div>
            <div className={style["app-post_buttons"]}>
                <span> {like}</span>
                <button>like</button>
                <button>dislike</button>
            </div>
        </div>
    )
}

export default Post