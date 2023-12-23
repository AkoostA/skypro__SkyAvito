/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  products: [],
  product: {},
  token: {},
  search: "",
};

const reducers = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    userUpdate: (state, actions) => {
      state.user = actions.payload;
    },
    productsUpdate: (state, actions) => {
      state.products = actions.payload;
    },
    productUpdate: (state, actions) => {
      state.product = actions.payload;
    },
    tokenUpdate: (state, actions) => {
      state.token = actions.payload;
    },
    searchUpdate: (state, actions) => {
      state.search = actions.payload;
    },
  },
});

export const {
  userUpdate,
  productsUpdate,
  productUpdate,
  tokenUpdate,
  searchUpdate,
} = reducers.actions;
export default reducers;
