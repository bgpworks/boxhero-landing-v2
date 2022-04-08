import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

const calcConstrainedSize = (containerWidth, containerHeight, wRatio, hRatio) => {
  const constrainedHeight = Math.min(containerWidth * (hRatio / wRatio), containerHeight);

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

    const { width, height } = containerRef.current.getBoundingClientRect();
    const constrainedSize = calcConstrainedSize(width, height, wRatio, hRatio);

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
