import { Link } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyled";

export default function Header() {
  return (
    <HeaderStyled>
      <Link to={"/"}>
        <h1>news application</h1>
      </Link>
    </HeaderStyled>
  );
}
