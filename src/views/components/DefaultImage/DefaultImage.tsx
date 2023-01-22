import useImageLoaded from "../../../hooks/useImageLoaded";
import { useLocation } from "react-router-dom";
import loading from "../../../assets/loading.gif";

interface Props {
  image: string | null;
}

export default function DefaultImage({ image }: Props) {
  const { ref, loaded, onLoad } = useImageLoaded();
  const { pathname } = useLocation();
  return (
    <img
      src={loaded && image ? image : loading}
      alt="card_image"
      ref={ref}
      onLoad={onLoad}
      style={pathname === "/" && loaded ? {width: "100%"} : {}}
    />
  );
}
