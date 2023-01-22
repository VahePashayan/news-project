import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { newsSelector } from "../../../store/news/newsSlice";
import { getNewsCard, getCardComments } from "../../../store/news/operations";
import moment from "moment";
import CommentContainer from "../../components/CommentContainer/CommentContainer";
import { IComment } from "../../../interfaces/interface";
import DefaultImage from "../../components/DefaultImage/DefaultImage";

import { NewsPageStyled } from "./NewsPageStyled";

export default function NewsPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { card, comments } = useAppSelector(newsSelector);

  useEffect(() => {
    if (id) {
      dispatch(getNewsCard(id));
      dispatch(getCardComments(id));
    }
  }, [id, dispatch]);

  return (
    <NewsPageStyled>
      <div className="card-info d-flex">
        <div className="image-container d-flex justify-center align-center">
          <DefaultImage image={card?.image || null} />
        </div>
        <div className="info-container">
          <h2>{card?.name}</h2>
          <div className="author">
            <span className="bold">Author:</span>
            <span>{card?.author}</span>
          </div>
          <div className="views">
            <span className="bold">Views:</span>
            <span>{card?.views}</span>
          </div>
          <h4>{moment(card?.createdAt).format("llll")}</h4>
          <p>{card?.text}</p>
        </div>
      </div>
      <div className="card-comments">
        <h2>Comments</h2>
        <div className="comments-container">
          {!!comments?.length &&
            comments.map((comment: IComment) => {
              return <CommentContainer comment={comment} key={comment?.id} />;
            })}
        </div>
      </div>
    </NewsPageStyled>
  );
}
