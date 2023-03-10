import { IComment } from "../../../interfaces/interface";
import DefaultImage from "../DefaultImage/DefaultImage";
import moment from "moment";

import { CommentContainerStyled } from "./CommentContainerStyled";

interface Props {
  comment: IComment;
}

export default function CommentContainer({ comment }: Props) {
  return (
    <CommentContainerStyled>
      <div className="avatar">
        <div className="avatar-container">
          <DefaultImage image={comment?.avatar || null} />
        </div>
      </div>
      <div className="name-text">
        <div className="d-flex justify-between">
          <h4>{comment?.author}</h4>
          <p className="createdAt">
            {moment(comment?.createdAt).format("llll")}
          </p>
        </div>
        <p>{comment?.text}</p>
      </div>
    </CommentContainerStyled>
  );
}
