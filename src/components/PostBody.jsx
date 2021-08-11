import React from "react";
import { postBodyView } from "./PostBody.module.css";

const PostBody = ({ postContentInHTML }) => {
  return (
    <section
      className={postBodyView}
      dangerouslySetInnerHTML={{ __html: postContentInHTML }}
    />
  );
};

export default PostBody;
