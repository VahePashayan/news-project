import { AppDispatch } from "../store";
import axios from "axios";
import { setCard, setComments } from "./newsSlice";

export const getNewsCard = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const cardData = await axios.get(
      `https://63c652e7dcdc478e15bf1f66.mockapi.io/news/${id}`
    );
    if (cardData.status === 200) {
      dispatch(setCard(cardData.data));
    }
  } catch (e) {
    console.log("error: can't get news card", e);
  }
};

export const getCardComments =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      const cardCommentsData = await axios.get(
        `https://63c652e7dcdc478e15bf1f66.mockapi.io/news/${id}/comments`
      );
      if (cardCommentsData.status === 200) {
        dispatch(setComments(cardCommentsData.data));
      }
    } catch (e) {
      console.log("error: can't get comments", e);
    }
  };
