import React from "react";
import rehypeReact from "rehype-react";
import { postBodyView } from "./PostBody.module.css";

const TipBox = ({ children }) => {
  return <mark>{children}</mark>;
};

const NoticeBox = ({ children }) => {
  return <span>{children}</span>;
};

const CautionBox = ({ children }) => {
  return <span>{children}</span>;
};

const renderAST = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    "tip-box": TipBox,
    "notice-box": NoticeBox,
    "caution-box": CautionBox,
  },
}).Compiler;

const PostBody = ({ postContentHTMLAst }) => {
  return (
    <section className={postBodyView}>{renderAST(postContentHTMLAst)}</section>
  );
};

export default PostBody;
