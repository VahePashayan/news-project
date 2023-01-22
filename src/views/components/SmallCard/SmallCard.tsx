import moment from "moment";
import { INews } from "../../../interfaces/interface";
import { Link } from "react-router-dom";
import DefaultImage from "../DefaultImage/DefaultImage";

import { SmallCardStyled } from "./SmallCardStyled";

interface Props {
  card: INews;
}

export default function SmallCard({ card }: Props) {
  return (
    <SmallCardStyled>
      <Link to={`/news/${card.id}`}>
        <DefaultImage  image={card?.image || null}/>
        <h2>{card.name}</h2>
        <h4>{moment(card?.createdAt).format("llll")}</h4>
      </Link>
    </SmallCardStyled>
  );
}
