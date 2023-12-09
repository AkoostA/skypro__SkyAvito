/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    test: "test"
  },
};

const reducers = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    userUpdate: (state) => {
      state.user = true;
    },
  },
});

export const { userUpdate } = reducers.actions;
export default reducers;
