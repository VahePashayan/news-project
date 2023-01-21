import { useParams } from "react-router-dom";
import { NewsPageStyled } from "./NewsPageStyled";

export default function NewsPage() {
  const { id } = useParams();
  return <NewsPageStyled></NewsPageStyled>;
}
