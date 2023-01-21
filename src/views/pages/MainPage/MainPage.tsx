import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { mainSelector } from "../../../store/main/mainSlice";
import { getNewsList } from "../../../store/main/operations";
import { INews } from "../../../interfaces/interface";
import MainCard from "../../components/MainCard/MainCard";

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
      </div>
      {/* {!!news.length &&
        news.map((card: INews) => {
          return <img src={card.image} alt="news_image" key={card.id} />;
        })} */}
    </MainPageStyled>
  );
}
