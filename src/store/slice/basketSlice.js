import { createSlice } from "@reduxjs/toolkit";

const write = (data) => {
  localStorage.setItem("basket", JSON.stringify(data));
};

const read = () => {
  return JSON.parse(localStorage.getItem("basket"));
};

const initialState = read() ?? { list: [] };

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add(state, { payload }) {
      const target = state.list.find(({ id }) => id === payload);
      if (target) {
        target.basketCount++;
      } else {
        state.list.push({ id: payload, basketCount: 1 });
      }
      write(state);
    },
    product_inc(state, { payload }) {
      const target = state.list.find(({ id }) => id === payload);
      if (target.basketCount) {
        target.basketCount++;
      }
      write(state);
    },
    product_dec(state, { payload }) {
      const target = state.list.find(({ id }) => id === payload);
      if (target.basketCount > 1) {
        target.basketCount--;
      } else {
        state.list = state.list.filter(({ id }) => id !== payload);
      }
      write(state);
    },
    remove_product_item(state, { payload }) {
      state.list = state.list.filter(({ id }) => id !== payload);
      // write(state);
    },
  },
});

export default basketSlice.reducer;
export const { add, product_inc, product_dec, remove_product_item } =
  basketSlice.actions;
