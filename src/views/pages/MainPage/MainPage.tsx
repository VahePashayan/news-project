import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { mainSelector } from "../../../store/main/mainSlice";
import { getNewsList } from "../../../store/main/operations";
import { INews } from "../../../interfaces/interface";
import MainCard from "../../components/MainCard/MainCard";
import SmallCard from "../../components/SmallCard/SmallCard";

import { MainPageStyled } from "./MainPageStyled";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const { news } = useAppSelector(mainSelector);

  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  return (
    <MainPageStyled>
      <h1>Latest news</h1>
      <div className="cards-container">
        <div className="mainCard-container">
          <MainCard />
        </div>
        <div className="smallCards-container d-flex">
          {!!news.length &&
            news.map((card: INews) => {
              return <SmallCard card={card} key={card.id} />;
            })}
        </div>
      </div>
    </MainPageStyled>
  );
}
