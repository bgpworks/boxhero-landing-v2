import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';
import { ExternalLinkWithQuery } from './common';
import * as constants from './constants';

import * as styles from './desktop-marketing.module.css';

const Link = ({
  href, x, y, width, height,
}) => (
  <ExternalLinkWithQuery
    href={href}
    className={styles.link}
    style={{
      left: x,
      top: y,
      width,
      height,
    }}
  />
);

const DesktopMarketing = ({ data }) => (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <GatsbyImage image={data.web.childImageSharp.gatsbyImageData} />

      <Link
        href={constants.urlStart}
        x="240px"
        y="2610px"
        width="400px"
        height="100px"
      />
      <Link
        href="/"
        x="240px"
        y="3770px"
        width="400px"
        height="100px"
      />
      <Link
        href={constants.urlStart}
        x="240px"
        y="4170px"
        width="400px"
        height="100px"
      />

      <Link
        href="mailto:support+boxhero@bgpworks.com"
        x="261px"
        y="3628px"
        width="354px"
        height="43px"
      />
      <Link
        href="https://pf.kakao.com/_rHxgpxl"
        x="512px"
        y="3673px"
        width="119px"
        height="30px"
      />
    </div>
  </div>
);

export default DesktopMarketing;
