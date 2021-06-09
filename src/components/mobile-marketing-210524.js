import React from "react";
import Img from "gatsby-image";

const MobileMarketing = ({ data }) => {
  return (
    <div>
      <Img fluid={data.mobile1.childImageSharp.fluid} />
      <a href="https://redirect.appmetrica.yandex.com/serve/603693493260452581">
        <Img fluid={data.mobile2.childImageSharp.fluid} />
      </a>
      <Img fluid={data.mobile3.childImageSharp.fluid} />

      <a href="/">
        <Img fluid={data.mobile4.childImageSharp.fluid} />
      </a>
    </div>
  );
};

export default MobileMarketing;
