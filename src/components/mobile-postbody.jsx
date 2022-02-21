import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import Blocks from "editorjs-blocks-react-renderer";
import pngTipIcon from "../images/tip-icon.png";
import pngCautionIcon from "../images/caution-icon.png";
import pngNoticeIcon from "../images/notice-icon.png";
import {
  boxWrapper,
  postBodyView,
  boxIcon,
  tipBox,
  cautionBox,
  noticeBox,
  boxBody,
  grayText,
  grayBox,
  boxTitle,
  innerFigureWrapper,
  backgroundFilled,
  isStretched,
  bordered,
} from "./mobile-postbody.module.css";

const Box = ({ className, icon, children }) => (
  <div className={cn(boxWrapper, className)}>
    <img
      className={boxIcon}
      src={icon}
      alt="box-decorator"
    />
    <div
      className={boxBody}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  </div>
);

const TipBox = ({ data: { text } }) => (
  <Box
    className={tipBox}
    icon={pngTipIcon}
  >
    {text}
  </Box>
);

const NoticeBox = ({ data: { text } }) => (
  <Box
    className={noticeBox}
    icon={pngNoticeIcon}
  >
    {text}
  </Box>
);

const CautionBox = ({ data: { text } }) => (
  <Box
    className={cautionBox}
    icon={pngCautionIcon}
  >
    {text}
  </Box>
);

const GrayText = ({ data: { text } }) => <span className={grayText}>{text}</span>;

const GrayBox = ({ data: { title, text } }) => (
  <div className={grayBox}>
    {title && (
      <span
        className={boxTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    )}
    <div dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);

const GhostElement = ({ data: { text } }) => (
  <div
    style={{
      top: "-100vh",
      position: "absolute",
      zIndex: -999999,
    }}
  >
    {text}
  </div>
);

const InternalLink = ({ to, text }) => <Link to={to}>{text}</Link>;

const SubTitle = ({ data: { text } }) => (
  <p>
    <span className={grayText}>
      <strong>{text}</strong>
    </span>
  </p>
);

const InnerFigureWrapper = ({
  withBackground, stretched, withBorder, children,
}) => (
  <div className={cn(innerFigureWrapper, {
    [isStretched]: stretched,
    [backgroundFilled]: withBackground,
    [bordered]: withBorder,
  })}
  >
    {children}
  </div>
);

const FigureWrapper = ({
  caption,
  withBackground,
  stretched,
  withBorder,
  children,
}) => (
  <figure>
    <InnerFigureWrapper
      withBackground={withBackground}
      stretched={stretched}
      withBorder={withBorder}
    >
      {children}
    </InnerFigureWrapper>
    {caption && caption.length > 0 && <figcaption>{caption}</figcaption>}
  </figure>
);

const VideoRenderer = ({ data }) => {
  const videoUrl = data && data.file && data.file.url;
  const {
    caption, withBackground, stretched, withBorder,
  } = data;

  if (!videoUrl) return null;

  return (
    <FigureWrapper
      withBorder={withBorder}
      withBackground={withBackground}
      stretched={stretched}
      caption={caption}
    >
      <video
        src={videoUrl}
        muted
        autoPlay
        loop
        playsinline
      />
    </FigureWrapper>
  );
};

const ImageRenderer = ({ data }) => {
  const imageUrl = data && data.file && data.file.url;
  const {
    caption, withBackground, stretched, withBorder,
  } = data;

  if (!imageUrl) return null;

  return (
    <FigureWrapper
      caption={caption}
      withBackground={withBackground}
      stretched={stretched}
      withBorder={withBorder}
    >
      <img
        src={imageUrl}
        alt={caption || imageUrl}
      />
    </FigureWrapper>
  );
};

const PostBody = ({ postBlocksContent }) => (
  <section className={postBodyView}>
    <Blocks
      data={postBlocksContent}
      renderers={{
        tipBox: TipBox,
        noticeBox: NoticeBox,
        cautionBox: CautionBox,
        grayText: GrayText,
        grayBox: GrayBox,
        internalLink: InternalLink,
        invisible: GhostElement,
        video: VideoRenderer,
        image: ImageRenderer,
        subTitle: SubTitle,
        hr: () => <hr />,
        br: () => <br />,
      }}
    />
  </section>
);

export default PostBody;
