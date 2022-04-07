import { useEffect, useRef } from "react";

export const usePreviousValue = (value) => {
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef.current;
};
