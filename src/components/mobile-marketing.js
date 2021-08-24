import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./mobile-marketing.module.css";

import { AppDownloadLink } from "./common";

const MobileMarketing = ({ data }) => (
  <div className={styles.container}>
    <GatsbyImage image={data.mobile1.childImageSharp.gatsbyImageData} />
    <AppDownloadLink>
      <GatsbyImage image={data.mobile2.childImageSharp.gatsbyImageData} />
    </AppDownloadLink>
    <GatsbyImage image={data.mobile3.childImageSharp.gatsbyImageData} />

    <a href="/">
      <GatsbyImage image={data.mobile4.childImageSharp.gatsbyImageData} />
    </a>

    <GatsbyImage image={data.mobile5.childImageSharp.gatsbyImageData} />
    <AppDownloadLink>
      <GatsbyImage image={data.mobile6.childImageSharp.gatsbyImageData} />
    </AppDownloadLink>
  </div>
);

export default MobileMarketing;
