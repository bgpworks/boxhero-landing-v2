import React from "react";
import { ExternalLinkWithQuery } from "./common";
import * as constants from "./constants";
import svgIconFacebook from "../images/icon-facebook.svg";
import svgIconInstagram from "../images/icon-instagram.svg";
import svgIconMedium from "../images/icon-medium.svg";
import svgIconNaverBlog from "../images/icon-naverblog.svg";
import {
  socialLinkListContainer,
  socialLinkWrapper,
  socialLink,
} from "./social-link-list.module.css";

const SocialLink = ({ link, icon }) => {
  return (
    <li className={socialLinkWrapper}>
      <ExternalLinkWithQuery href={link} className={socialLink} target="_blank">
        <img width={36} height={36} src={icon} alt={link} />
      </ExternalLinkWithQuery>
    </li>
  );
};

export default () => {
  return (
    <ul className={socialLinkListContainer}>
      <SocialLink icon={svgIconMedium} link={constants.urlMedium} />
      <SocialLink icon={svgIconNaverBlog} link={constants.urlNaverBlog} />
      <SocialLink icon={svgIconFacebook} link={constants.urlFacebook} />
      <SocialLink icon={svgIconInstagram} link={constants.urlInstagram} />
    </ul>
  );
};
