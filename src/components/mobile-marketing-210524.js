import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-plugin-react-i18next';

const APP_DOWNLOAD_LINK = 'https://redirect.appmetrica.yandex.com/serve/603693493260452581';

const MobileMarketing = ({ data }) => (
  <div>
    <GatsbyImage image={data.mobile1.childImageSharp.gatsbyImageData} />
    <a href={APP_DOWNLOAD_LINK}>
      <GatsbyImage image={data.mobile2.childImageSharp.gatsbyImageData} />
    </a>
    <GatsbyImage image={data.mobile3.childImageSharp.gatsbyImageData} />

    <Link to="/">
      <GatsbyImage image={data.mobile4.childImageSharp.gatsbyImageData} />
    </Link>
  </div>
);

export default MobileMarketing;
