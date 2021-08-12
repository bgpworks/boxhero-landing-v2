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
  caption,
} from "./PostBody.module.css";

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

const Caption = ({ children }) => {
  return <span className={caption}>{children}</span>;
};

const renderAST = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    "tip-box": TipBox,
    "notice-box": NoticeBox,
    "caution-box": CautionBox,
    "caption-text": Caption,
  },
}).Compiler;

const PostBody = ({ postContentHTMLAst }) => {
  return (
    <section className={postBodyView}>{renderAST(postContentHTMLAst)}</section>
  );
};

export default PostBody;
