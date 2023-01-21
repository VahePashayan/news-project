import { AppDispatch } from "../store";
import axios from "axios";
import { increment, decrement, setNews } from "./mainSlice";

export const incrementValue = () => (dispatch: AppDispatch) => {
  dispatch(increment());
};

export const decrementValue = () => (dispatch: AppDispatch) => {
  dispatch(decrement());
};

export const getNewsList = () => async (dispatch: AppDispatch) => {
  try {
    const data = await axios.get(
      "https://63c652e7dcdc478e15bf1f66.mockapi.io/news?sortBy=createdAt&order=desc"
    );
    if(data.status === 200) {
      dispatch(setNews(data.data));
    }
  } catch (e) {
    console.log("error", e);
  }
};
