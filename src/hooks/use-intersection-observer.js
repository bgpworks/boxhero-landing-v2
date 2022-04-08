import React, {
  useLayoutEffect,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useContext,
  useState,
} from "react";

const IntersectionObserverContext = React.createContext({
  observe(_elm, _callback) { return null; },
  unobserve(_elm) { return null; },
});

export const IntersectionObserverProvider = ({
  root = null,
  rootMargin = "0px",
  threshold = 1.0,
  children,
}) => {
  const observerRef = useRef(null);
  const callbackByElmMapRef = useRef(new WeakMap());

  const observerCallback = useCallback((entries) => {
    const callbackByElmMap = callbackByElmMapRef.current;

    // eslint-disable-next-line no-restricted-syntax
    for (const entry of entries) {
      const { target } = entry;
      if (!callbackByElmMap.has(target)) continue;

      const callback = callbackByElmMap.get(target);
      callback(entry);
    }
  }, []);

  useLayoutEffect(() => {
    if (!IntersectionObserver) return;

    const options = {
      root,
      rootMargin,
      threshold,
    };
    const observer = new IntersectionObserver(observerCallback, options);
    observerRef.current = observer;

    return () => observer.disconnect();
  }, [observerCallback, root, rootMargin, threshold]);

  const observe = useCallback((elm, callback) => {
    const observer = observerRef.current;

    if (!observer) return;

    const callbackByElmMap = callbackByElmMapRef.current;
    callbackByElmMap.set(elm, callback);
    observer.observe(elm);
  }, []);

  const unobserve = useCallback((elm) => {
    const observer = observerRef.current;

    if (!observer) return;

    const callbackByElmMap = callbackByElmMapRef.current;
    callbackByElmMap.delete(elm);
    observer.unobserve(elm);
  }, []);

  const contextValue = useMemo(() => ({ observe, unobserve }), [observe, unobserve]);

  return (
    <IntersectionObserverContext.Provider value={contextValue}>
      {children}
    </IntersectionObserverContext.Provider>
  );
};

export const useIntersectionObserver = () => {
  const nodeRef = useRef(null);
  const everVisibleRef = useRef(false);
  const { observe, unobserve } = useContext(IntersectionObserverContext);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const targetElm = nodeRef.current;

    if (!targetElm) return;

    observe(targetElm, (entry) => {
      if (entry.isIntersecting) {
        setVisible(true);
        everVisibleRef.current = true;
        return;
      }

      setVisible(false);
    });

    return () => unobserve(targetElm);
  }, [observe, unobserve]);

  return {
    nodeRef,
    isVisible,
    everVisible: everVisibleRef.current,
  };
};
