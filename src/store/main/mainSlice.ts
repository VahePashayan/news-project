import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { INews } from "../../interfaces/interface";
import { PayloadAction } from "@reduxjs/toolkit";

export interface MainState {
  value: number;
  news: INews[];
  mainCard: INews | null;
}

const initialState: MainState = {
  value: 0,
  news: [],
  mainCard: null,
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
      let newsArray = action.payload;
      state.mainCard = action.payload[0];
      newsArray.shift();
      state.news = newsArray;
    },
  },
});

export const { increment, decrement, setNews } = mainSlice.actions;
export const mainSelector = (state: RootState) => state.main;

export default mainSlice.reducer;
