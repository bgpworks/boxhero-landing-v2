import { useEffect, useRef } from "react";

export const usePreviousValue = (value) => {
  const valueRef = useRef();

  useEffect(() => {
    valueRef.current = value;

    return () => {
      valueRef.current = undefined;
    };
  });

  return valueRef.current;
};
