import React from "react";
import style from "./myprofile.module.css";

const MyProfile = ({ profile }) => {
  let name = profile.name;
  let surname = profile.surname;
  let city = profile.city;
  let age = profile.age;
  return (
    <>
      <div className={style["app-main__wallpaper"]}>
        <img
          src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg"
          alt=""
        />
      </div>
      <div className={style["app-main__description"]}>
        <div className={style["main__description-ava"]}>
          <img
            src="https://play-lh.googleusercontent.com/l-PdC8wj3F-NsA_ByrxXJOnW_1uOBJ9iR8aKor88vO9aUJP-CvYrXZGwp58V-WD0L40"
            alt=""
          />
        </div>
        <div className={style["main__description-info"]}>
          <p>Name: {name} </p>
          <p>Surname: {surname} </p>
          <p>City: {city} </p>
          <p>Age: {age} </p>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
