import React from "react";
import s from "./style.module.css";

export default function BasketCalculation({ totalCount, list }) {
  const totalSum = list.reduce((acc, { basketCount, price }) => acc + basketCount * price, 0);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Ваша корзина</h2>
      <div className={s.product_block}>
        <p className={s.p_product}>Товары {totalCount}</p>
        <p className={s.price}>{totalSum}</p>
      </div>
      <div className={s.strip}></div>
      <div className={s.price_info}>
        <div className={s.totalCount_block}>
          <p className={s.totalCoun_pgh}>Общая стоимость</p>
          <p className={s.totalSum}>{totalSum}</p>
        </div>
        <button className={s.checkout}>Оформить заказ</button>
      </div>
    </div>
  );
}
