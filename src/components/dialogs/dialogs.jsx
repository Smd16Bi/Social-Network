import React from "react";
import style from "./dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={style["app-dialogs"]}>
            <div className={style["app-main_names"]}>
                <div className={style["names-item"] + " " + style["_active"] }>
                    Anton
                </div>
                <div className={style["names-item"]}>
                    Anton
                </div>
                <div className={style["names-item"]}>
                    Anton
                </div>
                <div className={style["names-item"]}>
                    Anton
                </div>
                <div className={style["names-item"]}>
                    Anton
                </div>
                <div className={style["names-item"]}>
                    Anton
                </div>
                <div className={style["names-item"]}>
                    Anton
                </div>
                <div className={style["names-item"]}>
                    Anton
                </div>
            </div>
            <div className={style["app-main_messages"]}>
                <div className={style["messages-item"]}>
                    1
                </div>
                <div className={style["messages-item"]}>
                    1
                </div>
                <div className={style["messages-item"]}>
                    1
                </div>
                <div className={style["messages-item"]}>
                    1
                </div>
                <div className={style["messages-item"]}>
                    1
                </div>
                <div className={style["messages-item"]}>
                    1
                </div>
                <div className={style["messages-item"]}>
                    1
                </div>
                <div className={style["messages-item"]}>
                    1
                </div>
                <div className={style["messages-item"]}>
                    1
                </div>
                <div className={style["messages-item"]}>
                    1
                </div>
            </div>
        </div>
    )
}

export default Dialogs