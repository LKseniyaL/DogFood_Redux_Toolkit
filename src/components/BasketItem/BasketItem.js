import React from "react";
import s from "./style.module.css";
import { product_inc, product_dec } from "../../store/slice/basketSlice";
import { useDispatch } from "react-redux";
import { remove_product_item } from "../../store/slice/basketSlice";

export default function BasketItem({id, basketCount, price, quantity, img, decription}) {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <img src={img} alt="" />
      <div className={s.info}>
        <p>{decription}</p>
        <p className={s.subtitle}>{quantity} штука</p>
      </div>
      <div className={s.counter}>
        <button onClick={() => dispatch(product_dec(id))}>-</button>
        <p>{basketCount}</p>
        <button onClick={() => dispatch(product_inc(id))}>+</button>
      </div>
      <div className={s.price_block}>
        <p>{price}</p>
      </div>
      <button
        className={s.remove_product_item}
        onClick={() => dispatch(remove_product_item(id))}
      >
        X
      </button>
    </div>
  );
}
