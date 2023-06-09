import { createSlice } from "@reduxjs/toolkit";
import image from "../../media/media/image.png";
import image1 from "../../media/media/image1.png";
import image2 from "../../media/media/image2.png";

const initialState = {
  list: [
    {
      id: 1,
      price: "10$",
      decription: "Рога оленя для собак весом до 3кг. Размер XS",
      quantity: "1шт",
      img: image,
    },
    {
      id: 2,
      price: "20$",
      decription: "Рога оленя для собак весом от 3 до 5 кг. Размер S",
      quantity: "1шт",
      img: image,
    },
    {
      id: 3,
      price: "30$",
      decription: "Рога оленя для собак весом от 5 до 10 кг. Размер M",
      quantity: "1шт",
      img: image,
    },
    {
      id: 4,
      price: "30$",
      decription: "Рога оленя для собак весом от 10 до 30 кг. Размер L",
      quantity: "1шт",
      img: image1,
    },
    {
      id: 5,
      price: "40$",
      decription: "Рога оленя для собак весом от 30 кг. Размер XL",
      quantity: "1шт",
      img: image1,
    },
    {
      id: 6,
      price: "100$",
      decription: "Рога северного оленя для собак",
      quantity: "1шт",
      img: image2,
    },
    {
      id: 7,
      price: "80$",
      decription: "Рога оленя для собак весом до 3кг. Размер XS",
      quantity: "1шт",
      img: image2,
    },
    {
      id: 8,
      price: "90$",
      decription: "Рога козьи",
      quantity: "1шт",
      img: image2,
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const { action } = productsSlice;
export default productsSlice.reducer;
