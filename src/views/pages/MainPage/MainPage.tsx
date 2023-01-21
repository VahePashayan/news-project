import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { mainSelector } from "../../../store/main/mainSlice";
import { incrementValue, decrementValue } from "../../../store/main/operations";
import { Link } from "react-router-dom";

import { MainPageStyled } from "./MainPageStyled";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(mainSelector);
  return (
    <MainPageStyled>
      <Link to={"/news/25"}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementValue())}
        >
          Increment
        </button>
      </Link>
      <span>{value}</span>
      <Link to={"/news/25"}>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementValue())}
        >
          Decrement
        </button>
      </Link>
    </MainPageStyled>
  );
}
