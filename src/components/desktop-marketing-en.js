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
        x="234px"
        y="2460px"
        width="391px"
        height="100px"
      />
      <Link
        href="/"
        x="240px"
        y="3673px"
        width="382px"
        height="100px"
      />
      <Link
        href={constants.urlStart}
        x="231px"
        y="4024px"
        width="400px"
        height="100px"
      />

      <Link
        href="mailto:support+boxhero@bgpworks.com"
        x="184px"
        y="3542px"
        width="367px"
        height="43px"
      />
    </div>
  </div>
);

export default DesktopMarketing;
