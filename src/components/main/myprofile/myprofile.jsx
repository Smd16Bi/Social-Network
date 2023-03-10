import React from "react";
import style from "./myprofile.module.css";

const MyProfile = () => {
  return (
    <>
      <div className="app-main__wallpaper">
        <img
          src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg"
          alt=""
        />
      </div>
      <div className="app-main__description">
        <div className="main__description-ava">
          <img
            src="https://play-lh.googleusercontent.com/l-PdC8wj3F-NsA_ByrxXJOnW_1uOBJ9iR8aKor88vO9aUJP-CvYrXZGwp58V-WD0L40"
            alt=""
          />
        </div>
        <div className="main__description-info">description</div>
      </div>
    </>
  );
};


export default MyProfile