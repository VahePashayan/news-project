import { useEffect, useRef, useState, MutableRefObject } from "react";

export default function useImageLoaded() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const ref = useRef(null) as unknown as MutableRefObject<HTMLImageElement>;

  const onLoad = (): void => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  }, [ref]);

  return { ref, loaded, onLoad };
}
