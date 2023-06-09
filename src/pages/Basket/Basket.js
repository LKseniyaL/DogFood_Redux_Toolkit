import React from "react";
import { useSelector } from "react-redux";
import BasketList from "../../components/BasketList/BasketList";
import BasketCalculation from "../../components/BasketCalculation/BasketCalculation";
import s from "./style.module.css";

export default function Basket() {
  const basket = useSelector((state) => state.basket.list);
  const products = useSelector((state) => state.products.list);

  const list = basket.map((el) => {
    const product = products.find(({ id }) => id === el.id);
    return { ...product, ...el };
  });
  const totalCount = list.reduce(
    (acc, { basketCount }) => acc + basketCount,
    0
  );

  return (
    <div>
      <div className={s.container}>
        {totalCount === 0 ? (
          <h2 style={{ margin: "30px" }}>Товаров нет!</h2>
        ) : (
          <h2>
            {totalCount} товара <i>в корзине </i>
          </h2>
        )}
      </div>
      <div className={s.contant}>
        <BasketList list={list} />
        <BasketCalculation totalCount={totalCount} list={list} />
      </div>
    </div>
  );
}
