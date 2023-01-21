import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { INews } from "../../interfaces/interface";
import { PayloadAction } from "@reduxjs/toolkit";

export interface MainState {
  value: number;
  news: INews[];
}

const initialState: MainState = {
  value: 0,
  news: [],
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
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
  },
});

export const { increment, decrement, setNews } = mainSlice.actions;
export const mainSelector = (state: RootState) => state.main;

export default mainSlice.reducer;
