import React from "react";
import style from "./messageItem.module.css";

const MessageItem = ({ messege }) => {
  return <div className={style["messages-item"]}>{messege}</div>;
};

export default MessageItem;
