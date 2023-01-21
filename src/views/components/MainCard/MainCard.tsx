import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { mainSelector } from "../../../store/main/mainSlice";
import moment from "moment";
import { Link } from "react-router-dom";

import { MainCardStyled } from "./MainCardStyled";

export default function MainCard() {
  const dispatch = useAppDispatch();
  const { mainCard } = useAppSelector(mainSelector);
  console.log(mainCard?.createdAt && new Date(mainCard?.createdAt));
  return (
    <MainCardStyled>
      <Link to={`/news/${mainCard?.id}`}>
        <img src={mainCard?.image} alt="main_image" />
        <div className="card-description d-flex flex-column">
          <h3>{mainCard?.name}</h3>
          <p>{mainCard?.text}</p>
          <h4>{moment(mainCard?.createdAt).format("llll")}</h4>
        </div>
      </Link>
    </MainCardStyled>
  );
}
