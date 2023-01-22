import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { INews, IComments } from "../../interfaces/interface";
import { PayloadAction } from "@reduxjs/toolkit";

export interface NewsState {
  card: INews | null;
  comments: IComments[] | null;
}

const initialState: NewsState = {
  card: null,
  comments: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<INews>) => {
      state.card = action.payload;
    },
    setComments: (state, action: PayloadAction<IComments[]>) => {
      state.comments = action.payload;
    },
  },
});

export const { setCard, setComments } = newsSlice.actions;
export const newsSelector = (state: RootState) => state.news;

export default newsSlice.reducer;
