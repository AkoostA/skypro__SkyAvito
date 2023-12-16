/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    test: "test",
  },
  products: [],
  product: null,
  search: "",
};

const reducers = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    userUpdate: (state) => {
      state.user = true;
    },
    productsUpdate: (state, actions) => {
      state.products = actions.payload;
    },
    productUpdate: (state, actions) => {
      state.product = actions.payload;
    },
    searchUpdate: (state, actions) => {
      state.search = actions.payload;
    },
  },
});

export const { userUpdate, productsUpdate, productUpdate, searchUpdate } =
  reducers.actions;
export default reducers;
