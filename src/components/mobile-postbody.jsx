import React from "react";
import cn from "classnames";
import rehypeReact from "rehype-react";
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

const Box = ({ className, icon, children }) => {
  return (
    <span className={cn(boxWrapper, className)}>
      <img className={boxIcon} src={icon} alt="box-decorator" />
      <span className={boxBody}>{children}</span>
    </span>
  );
};

const TipBox = ({ children }) => {
  return (
    <Box className={tipBox} icon={pngTipIcon}>
      {children}
    </Box>
  );
};

const NoticeBox = ({ children }) => {
  return (
    <Box className={noticeBox} icon={pngNoticeIcon}>
      {children}
    </Box>
  );
};

const CautionBox = ({ children }) => {
  return (
    <Box className={cautionBox} icon={pngCautionIcon}>
      {children}
    </Box>
  );
};

const GrayText = ({ children }) => {
  return <span className={grayText}>{children}</span>;
};

const GrayBox = ({ title, children }) => {
  return (
    <span className={grayBox}>
      {title && <span className={boxTitle}>{title}</span>}
      {children}
    </span>
  );
};

const GhostElement = ({ children }) => {
  return (
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
};

const renderAST = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    "tip-box": TipBox,
    "notice-box": NoticeBox,
    "caution-box": CautionBox,
    "gray-text": GrayText,
    "gray-box": GrayBox,
    invisible: GhostElement,
  },
}).Compiler;

const PostBody = ({ postContentHTMLAst }) => {
  return (
    <section className={postBodyView}>{renderAST(postContentHTMLAst)}</section>
  );
};

export default PostBody;
