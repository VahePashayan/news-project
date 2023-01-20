import React from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { mainSelector } from "./store/main/mainSlice";
import { incrementValue, decrementValue } from "./store/main/operations";

import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(mainSelector);
  return (
    <div className="App">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(incrementValue())}
      >
        Increment
      </button>
      <span>{value}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrementValue())}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
