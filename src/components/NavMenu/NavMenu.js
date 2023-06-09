import React from "react";
import { Link } from "react-router-dom";
import image from "../../media/logo1.svg";
import s from "./style.module.css";

export default function NavMenu() {
  return (
    <div className={s.container}>
      <Link to="/">
        <img src={image} alt="" />
      </Link>
      <div className={s.inputAndBtn}>
        <input type="text" name="title" placeholder="роги" />
        <button className={s.search}>x</button>
      </div>
      <div className={s.icons}>
        <p>&#x2661;</p>
        <Link to="/basket">
          <p>&#x1F4BC;</p>
        </Link>
        <p>&#x1F436;</p>
      </div>
    </div>
  );
}
