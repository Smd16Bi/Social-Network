import React from "react";
import style from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, path }) => {
  return (
    <div className={style["names-item"] + " " + style["_active"]}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

const MessageItem = ({ messege }) => {
  return <div className={style["messages-item"]}>{messege}</div>;
};

let dialogsData = [
  { id: 1, name: "Anton" },
  { id: 2, name: "Oksana" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Dima" },
];
let messagesData = [
  { id: 1, messege: "Hello" },
  { id: 2, messege: "World" },
  { id: 3, messege: "My" },
  { id: 4, messege: "Name" },
];

let dialogsUI = dialogsData.map((el, index) => {
  return <DialogItem key={index} name={el.name} path={"/dialogs/" + el.id} />;
});
let messagessUI = messagesData.map((el, index) => {
  return <MessageItem key={index} messege={el.messege} />;
});

const Dialogs = () => {
  return (
    <div className={style["app-dialogs"]}>
      <div className={style["app-main_names"]}>
          {dialogsUI}
      </div>
      <div className={style["app-main_messages"]}>
        {messagessUI}
      </div>
    </div>
  );
};

export default Dialogs;
