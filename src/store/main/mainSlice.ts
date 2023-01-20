import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface MainState {
  value: number;
}

const initialState: MainState = {
  value: 0,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = mainSlice.actions;
export const mainSelector = (state: RootState) => state.main;

export default mainSlice.reducer;
