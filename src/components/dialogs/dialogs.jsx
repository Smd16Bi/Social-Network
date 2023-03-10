import React from "react";
import style from "./dialogs.module.css";
import MessageItem from "./messageItem/messageItem";
import DialogItem from "./dialogsItem/dialogsItem";

const Dialogs = ({ state }) => {
  let dialogsData = state.dataDialogs.dialogs;
  let messagesData = state.dataDialogs.messages;

  let dialogsUI = dialogsData.map((el, index) => {
    return <DialogItem key={index} name={el.name} path={"/dialogs/" + el.id} />;
  });
  let messagessUI = messagesData.map((el, index) => {
    return <MessageItem key={index} messege={el.messege} />;
  });

  return (
    <div className={style["app-dialogs"]}>
      <div className={style["app-main_names"]}>{dialogsUI}</div>
      <div className={style["app-main_messages"]}>{messagessUI}</div>
    </div>
  );
};

export default Dialogs;
