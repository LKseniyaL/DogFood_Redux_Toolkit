import React from "react";
import s from "./style.module.css";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";

export default function Main() {
  const products = useSelector((state) => state.products.list);

  return (
    <div className={s.container}>
      {products.map((el) => (<ProductItem key={el.id} {...el} />))}
    </div>
  );
}
