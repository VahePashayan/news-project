import { AppDispatch } from "../store";
import { increment, decrement } from "./mainSlice";

export const incrementValue = () => (dispatch: AppDispatch) => {
  dispatch(increment());
};

export const decrementValue = () => (dispatch: AppDispatch) => {
  dispatch(decrement());
};
