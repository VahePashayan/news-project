import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyled";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderStyled>
      <Link to={"/"}>
        <h1>news application</h1>
      </Link>
      {pathname.includes("news") && (
        <Link to={"/"}>
          <h1>back to latest news</h1>
        </Link>
      )}
    </HeaderStyled>
  );
}
