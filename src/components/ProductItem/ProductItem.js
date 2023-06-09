import React from "react";
import s from "./style.module.css";
import { add } from "../../store/slice/basketSlice";
import { useDispatch } from "react-redux";

export default function ProductItem({ id, price, decription, quantity, img }) {
  const dispatch = useDispatch();
  return (
    <main className={s.main}>
      <div className={s.imgs}>
        <img src={img} alt="" />
      </div>
      <div className={s.info}>
        <p className={s.price}>{price}</p>
        <p className={s.quantity}>{quantity}</p>
        <p className={s.decription}>{decription}</p>
      </div>
      <button onClick={() => dispatch(add(id))} className={s.btn}>
        В корзину
      </button>
    </main>
  );
}
