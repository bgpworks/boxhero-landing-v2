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

const ImageWrapper = ({ src, alt }) => (
  <figure>
    <img
      src={src}
      alt={alt}
    />
    <figcaption>{alt}</figcaption>
  </figure>
);

const SubTitle = ({ data: { text } }) => (
  <p>
    <span className={grayText}>
      <strong>{text}</strong>
    </span>
  </p>
);

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
        img: ImageWrapper,
        subTitle: SubTitle,
      }}
    />
  </section>
);

export default PostBody;
