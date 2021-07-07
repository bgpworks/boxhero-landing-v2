import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby-plugin-react-i18next";

const APP_DOWNLOAD_LINK =
  "https://redirect.appmetrica.yandex.com/serve/603693493260452581";

const MobileMarketing = ({ data }) => {
  return (
    <div>
      <Img fluid={data.mobile1.childImageSharp.fluid} />
      <a href={APP_DOWNLOAD_LINK}>
        <Img fluid={data.mobile2.childImageSharp.fluid} />
      </a>
      <Img fluid={data.mobile3.childImageSharp.fluid} />

      <Link to="/">
        <Img fluid={data.mobile4.childImageSharp.fluid} />
      </Link>
    </div>
  );
};

export default MobileMarketing;
