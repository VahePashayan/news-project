import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import mainReducer from "./main/mainSlice";
import newsReducer from "./news/newsSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
