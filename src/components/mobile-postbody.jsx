import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import Markdown from "markdown-to-jsx";
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
} from "./mobile-postbody.module.css";

const Box = ({ className, icon, children }) => (
  <div className={cn(boxWrapper, className)}>
    <img
      className={boxIcon}
      src={icon}
      alt="box-decorator"
    />
    <div className={boxBody}>{children}</div>
  </div>
);

const TipBox = ({ children }) => (
  <Box
    className={tipBox}
    icon={pngTipIcon}
  >
    {children}
  </Box>
);

const NoticeBox = ({ children }) => (
  <Box
    className={noticeBox}
    icon={pngNoticeIcon}
  >
    {children}
  </Box>
);

const CautionBox = ({ children }) => (
  <Box
    className={cautionBox}
    icon={pngCautionIcon}
  >
    {children}
  </Box>
);

const GrayText = ({ children }) => <span className={grayText}>{children}</span>;

const GrayBox = ({ title, children }) => (
  <div className={grayBox}>
    {title && <span className={boxTitle}>{title}</span>}
    <p>{children}</p>
  </div>
);

const GhostElement = ({ children }) => (
  <div
    style={{
      top: "-100vh",
      position: "absolute",
      zIndex: -999999,
    }}
  >
    {children}
  </div>
);

const InternalLink = ({ to, children }) => <Link to={to}>{children}</Link>;

const ImageWrapper = ({ src, alt }) => (
  <figure>
    <img
      src={src}
      alt={alt}
    />
    <figcaption>{alt}</figcaption>
  </figure>
);

const SubTitle = ({ children }) => (
  <p>
    <span className={grayText}>
      <strong>{children}</strong>
    </span>
  </p>
);

const PostBody = ({ postMarkdownContent }) => (
  <section className={postBodyView}>
    <Markdown
      options={{
        wrapper: React.Fragment,
        overrides: {
          "tip-box": TipBox,
          "notice-box": NoticeBox,
          "caution-box": CautionBox,
          "gray-text": GrayText,
          "gray-box": GrayBox,
          "internal-link": InternalLink,
          invisible: GhostElement,
          img: ImageWrapper,
          "sub-title": SubTitle,
        },
      }}
    >
      {postMarkdownContent}
    </Markdown>
  </section>
);

export default PostBody;
