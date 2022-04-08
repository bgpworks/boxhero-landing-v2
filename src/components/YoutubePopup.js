import React, {
  useContext,
  useMemo,
  useState,
} from "react";
import YouTube from "react-youtube";
import RootMounted from "./RootMounted";
import svgClose from "../images/icon-close.svg";
import * as styles from "./YoutubePopup.module.css";
import { useConstrainedSize } from "../hooks/use-constrained-size";

const DEFAULT_RATIO = "16:9";
const RATIO_REGEX = /(\d*\.?\d*):(\d*\.?\d*)/;

const isValidRatio = (maybeRatio) => RATIO_REGEX.test(maybeRatio);
const parseRatio = (ratio) => {
  const matched = RATIO_REGEX.exec(ratio);
  if (!matched) return null;

  return {
    w: matched[1],
    h: matched[2],
  };
};

export const YoutubePopupContext = React.createContext({
  videoId: null,
  opts: null,
  ratio: {
    w: 16,
    h: 9,
  },
  openYoutube: () => null,
  closeYoutube: () => null,
});

export const YoutubePopupProvider = ({ children }) => {
  const [youtubeParams, setYoutubeParams] = useState(null);

  const ctxValue = useMemo(() => ({
    ...youtubeParams,
    openYoutube: (videoId, opts = {}, ratio = DEFAULT_RATIO) => {
      const derivedRatio = isValidRatio(ratio) ? ratio : DEFAULT_RATIO;
      setYoutubeParams({ videoId, opts, ratio: parseRatio(derivedRatio) });
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
  const {
    videoId,
    ratio,
    opts,
    closeYoutube,
  } = useContext(YoutubePopupContext);

  const {
    constrainedSize,
    containerRef,
  } = useConstrainedSize(ratio.w, ratio.h);

  const derivedOpts = { ...opts, ...constrainedSize };

  return (
    <div className={styles.container}>
      <div
        ref={containerRef}
        className={styles.playerWrapper}
      >
        {constrainedSize && (
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
