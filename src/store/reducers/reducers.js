/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    test: "test",
  },
  products: [],
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
    searchUpdate: (state, actions) => {
      state.search = actions.payload;
    },
  },
});

export const { userUpdate, productsUpdate, searchUpdate } = reducers.actions;
export default reducers;
