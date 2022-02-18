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
} from "./desktop-postbody.module.css";

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
    <p dangerouslySetInnerHTML={{ __html: text }} />
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

const VideoRenderer = ({ data }) => {
  const videoUrl = data && data.file && data.file.url;
  const caption = data && data.caption;

  if (!videoUrl) return null;

  return (
    <figure>
      <video
        src={videoUrl}
        style={{ width: "100%" }}
        muted
        autoPlay
        loop
        playsinline
      />
      {caption && caption.length > 0 && <figcaption>{caption}</figcaption>}
    </figure>
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
        subTitle: SubTitle,
        video: VideoRenderer,
      }}
    />
  </section>
);

export default PostBody;
