import React from "react";

import styles from "./mobile-marketing.module.css";
import Img from "gatsby-image";

import { AppDownloadLink } from "../components/common";

const MobileMarketing = ({ data }) => {

  return (
    <div className={styles.container}>
      <Img fluid={data.mobile1.childImageSharp.fluid} />
      <AppDownloadLink>
        <Img fluid={data.mobile2.childImageSharp.fluid} />

      </AppDownloadLink>
      <Img fluid={data.mobile3.childImageSharp.fluid} />

      <a href="https://www.boxhero-app.com/ko/">
        <Img fluid={data.mobile4.childImageSharp.fluid} />
      </a>

      <Img fluid={data.mobile5.childImageSharp.fluid} />
      <AppDownloadLink>
        <Img fluid={data.mobile6.childImageSharp.fluid} />
      </AppDownloadLink>


    </div>
  );
};

export default MobileMarketing;
