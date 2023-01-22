import { useAppSelector } from "../../../store/hooks";
import { mainSelector } from "../../../store/main/mainSlice";
import moment from "moment";
import { Link } from "react-router-dom";
import DefaultImage from "../DefaultImage/DefaultImage";

import { MainCardStyled } from "./MainCardStyled";

export default function MainCard() {
  const { mainCard } = useAppSelector(mainSelector);
  return (
    <MainCardStyled>
      <Link to={`/news/${mainCard?.id}`}>
        <DefaultImage  image={mainCard?.image || null}/>
        <div className="card-description d-flex flex-column">
          <h3>{mainCard?.name}</h3>
          <p>{mainCard?.text}</p>
          <h4>{moment(mainCard?.createdAt).format("llll")}</h4>
        </div>
      </Link>
    </MainCardStyled>
  );
}
