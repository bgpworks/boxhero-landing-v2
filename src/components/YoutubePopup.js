import React, {
  useCallback,
  useContext, useEffect, useMemo, useState,
} from "react";
import YouTube from "react-youtube";
import RootMounted from "./RootMounted";
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

export default () => {
  const { videoId, opts } = useContext(YoutubePopupContext);
  const [playerSize, setPlayerSize] = useState(null);
  const [wrapperElm, setWrapperElm] = useState(null);

  const playerSizeUpdater = useCallback(() => {
    if (!wrapperElm) return;

    const { width, height } = wrapperElm.getBoundingClientRect();
    const derivedHeight = Math.min(width * 0.5625, height);

    setPlayerSize({ width: derivedHeight * 1.77, height: derivedHeight });
  }, [wrapperElm]);

  useEffect(() => {
    playerSizeUpdater();
    window.addEventListener("resize", playerSizeUpdater);

    return () => {
      window.removeEventListener("resize", playerSizeUpdater);
    };
  }, [playerSizeUpdater]);

  if (!videoId) return null;

  const derivedOpts = { ...opts, ...playerSize };
  const { autoPlay } = derivedOpts?.playerVars ?? {};

  return (
    <RootMounted>
      <div className={styles.container}>
        <div
          ref={(elm) => setWrapperElm(elm)}
          className={styles.playerWrapper}
        >
          {playerSize && (
            <YouTube
              videoId={videoId}
              opts={derivedOpts}
              onReady={(evt) => {
                if (autoPlay === 1) {
                  evt.target.playVideo();
                }
              }}
            />
          )}
        </div>
      </div>
    </RootMounted>
  );
};
