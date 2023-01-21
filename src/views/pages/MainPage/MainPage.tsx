import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { mainSelector } from "../../../store/main/mainSlice";
import { getNewsList } from "../../../store/main/operations";

import { MainPageStyled } from "./MainPageStyled";
import { INews } from "../../../interfaces/interface";
import MainCard from "../../components/MainCard/MainCard";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const { news } = useAppSelector(mainSelector);

  useEffect(() => {
    dispatch(getNewsList());
  }, []);
  return (
    <MainPageStyled>
      <h1>Latest news</h1>
      <div className="main-card">
        <MainCard />
      </div>
      {!!news.length &&
        news.map((card: INews) => {
          return <img src={card.image} alt="news_image" key={card.id} />;
        })}
    </MainPageStyled>
  );
}
