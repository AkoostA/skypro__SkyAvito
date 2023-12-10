/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    test: "test",
  },
  products: [],
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
  },
});

export const { userUpdate, productsUpdate } = reducers.actions;
export default reducers;
