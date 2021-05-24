import React from "react";
import Img from "gatsby-image";

import { AppDownloadLink } from "../components/common";

const MobileMarketing = ({ data }) => {
  return (
    <div>
      <Img fluid={data.mobile1.childImageSharp.fluid} />
      <AppDownloadLink>
        <Img fluid={data.mobile2.childImageSharp.fluid} />
      </AppDownloadLink>
      <Img fluid={data.mobile3.childImageSharp.fluid} />

      <a href="/">
        <Img fluid={data.mobile4.childImageSharp.fluid} />
      </a>

      <Img fluid={data.mobile5.childImageSharp.fluid} />
    </div>
  );
};

export default MobileMarketing;
