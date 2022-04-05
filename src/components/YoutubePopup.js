import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import YouTube from "react-youtube";
import RootMounted from "./RootMounted";
import svgClose from "../images/icon-close.svg";
import * as styles from "./YoutubePopup.module.css";

export const YoutubePopupContext = React.createContext({
  videoId: null,
  opts: null,
  openYoutube: () => null,
  closeYoutube: () => null,
});

export const YoutubePopupProvider = ({ children }) => {
  const [youtubeParams, setYoutubeParams] = useState(null);

  const ctxValue = useMemo(() => ({
    ...youtubeParams,
    openYoutube: (videoId, opts = {}) => {
      setYoutubeParams({ videoId, opts });
    },
    closeYoutube: () => {
      setYoutubeParams(null);
    },
  }), [youtubeParams]);

  return (
    <YoutubePopupContext.Provider value={ctxValue}>
      {children}
    </YoutubePopupContext.Provider>
  );
};

const CloseButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    <img
      src={svgClose}
      className={styles.closeButton}
      alt="close-btn"
    />
  </button>
);

const Popup = () => {
  const { videoId, opts, closeYoutube } = useContext(YoutubePopupContext);
  const [playerSize, setPlayerSize] = useState(null);
  const wrapperRef = useRef(null);

  const playerSizeUpdater = useCallback(() => {
    if (!wrapperRef.current) return;

    const { width, height } = wrapperRef.current.getBoundingClientRect();
    const derivedHeight = Math.min(width * 0.5625, height);

    setPlayerSize({
      width: derivedHeight * 1.77,
      height: derivedHeight,
    });
  }, []);

  useEffect(() => {
    playerSizeUpdater();
    window.addEventListener("resize", playerSizeUpdater);

    return () => {
      window.removeEventListener("resize", playerSizeUpdater);
    };
  }, [playerSizeUpdater]);

  const derivedOpts = { ...opts, ...playerSize };

  return (
    <div className={styles.container}>
      <div
        ref={wrapperRef}
        className={styles.playerWrapper}
      >
        {playerSize && (
          <YouTube
            videoId={videoId}
            opts={derivedOpts}
            onReady={(evt) => {
              evt.target.mute();
              evt.target.playVideo();
            }}
          />
        )}
      </div>
      <CloseButton onClick={closeYoutube} />
    </div>
  );
};

export default () => {
  const { videoId } = useContext(YoutubePopupContext);

  if (!videoId) return null;

  return (
    <RootMounted>
      <Popup />
    </RootMounted>
  );
};
