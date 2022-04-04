import React, {
  useCallback,
  useContext, useEffect, useMemo, useState,
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

export default () => {
  const { videoId, opts, closeYoutube } = useContext(YoutubePopupContext);
  const [playerWidth, setPlayerWidth] = useState(null);
  const [playerHeight, setPlayerHeight] = useState(null);
  const [wrapperElm, setWrapperElm] = useState(null);

  const playerSizeUpdater = useCallback(() => {
    if (!wrapperElm) return;

    const { width, height } = wrapperElm.getBoundingClientRect();
    const derivedHeight = Math.min(width * 0.5625, height);

    setPlayerHeight(derivedHeight);
    setPlayerWidth(derivedHeight * 1.77);
  }, [wrapperElm]);

  useEffect(() => {
    playerSizeUpdater();
    window.addEventListener("resize", playerSizeUpdater);

    return () => {
      window.removeEventListener("resize", playerSizeUpdater);
    };
  }, [playerSizeUpdater]);

  if (!videoId) return null;

  const derivedOpts = { ...opts, ...{ width: playerWidth, height: playerHeight } };

  return (
    <RootMounted>
      <div className={styles.container}>
        <div
          ref={(elm) => setWrapperElm(elm)}
          className={styles.playerWrapper}
        >
          {(playerWidth && playerHeight) && (
            <YouTube
              videoId={videoId}
              opts={derivedOpts}
            />
          )}
        </div>
        <CloseButton onClick={closeYoutube} />
      </div>
    </RootMounted>
  );
};
