import React from "react";
import style from "./dialogs.module.css";
import MessageItem from "./messageItem/messageItem";
import DialogItem from "./dialogsItem/dialogsItem";
import MainButton from "../uiComponent/mainButton";
import { actionCreateNewMessage } from "../../redux/state";

const Dialogs = ({ state, dispatch }) => {
  let dialogsData = state.dialogs;
  let messagesData = state.messages;
  let addMessage = React.createRef();
  let dialogsUI = dialogsData.map((el, index) => {
    return <DialogItem key={index} name={el.name} path={"/dialogs/" + el.id} />;
  });
  let messagessUI = messagesData.map((el, index) => {
    return <MessageItem key={index} messege={el.messege} />;
  });

  function newMessage() {
    dispatch(actionCreateNewMessage(addMessage.current.value))
    addMessage.current.value = "";
  }

  return (
    <div className={style["app-dialogs"]}>
      <div className={style["app-main_names"]}>{dialogsUI}</div>
      <div className={style["app-main_messages"]}>
        {messagessUI}
        <div className={style["app-main_messages-add"]}>
          <textarea ref={addMessage}></textarea>
          <br />
          <MainButton slot={"add"} addPost={newMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
