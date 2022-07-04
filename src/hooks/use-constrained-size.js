import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

const calcConstrainedSize = (containerWidth, wRatio, hRatio) => {
  const constrainedHeight = containerWidth * (hRatio / wRatio);

  return {
    width: constrainedHeight * (wRatio / hRatio),
    height: constrainedHeight,
  };
};

export const useConstrainedSize = (wRatio, hRatio) => {
  const [size, setSize] = useState(null);
  const containerRef = useRef(null);

  const updateSize = useCallback(() => {
    if (!containerRef.current) return;

    const { width } = containerRef.current.getBoundingClientRect();
    const constrainedSize = calcConstrainedSize(width, wRatio, hRatio);

    setSize(constrainedSize);
  }, [hRatio, wRatio]);

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [updateSize]);

  return {
    constrainedSize: size,
    containerRef,
  };
};
