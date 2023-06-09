import React from "react";
import s from "./style.module.css";
import image from "../../media/logo1.svg";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.block_image}>
          <img src={image} alt="" />
          <div className={s.paragraf}>© «Интернет-магазин DogFood.ru»</div>
        </div>
        <div className={s.block_menu}>
          <a href="">Каталог</a>
          <a href="">Акции</a>
          <a href="">Новости</a>
          <a href="">Отзывы</a>
        </div>
        <div className={s.block_menu_2}>
          <a href="">Оплата и доставка</a>
          <a href="">Часто спрашивают</a>
          <a href="">Обратная связь</a>
          <a href="">Контакты</a>
        </div>
        <div className={s.contact}>
          <h2>Мы на связи</h2>
          <div className={s.tel}>8 (999) 00-00-00</div>
          <a href={`mailto:dogfood.ru@gmail.com`} className={s.mail}>
            {" "}
            dogfood.ru@gmail.com
          </a>
          <div className={s.icon}>
            <span>&#x1F4E9;</span>
            <span>&#x1F4F1;</span>
            <span>&#x0412;&#x041A;</span>
            <span>&#x1F3F7;</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
