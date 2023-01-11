import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { ExternalLinkWithQuery, OnlyKorean } from "./common";
import svgIconFacebook from "../images/icon-facebook.svg";
import svgIconNaverBlog from "../images/icon-naverblog.svg";
import svgIconYoutube from "../images/icon-youtube.svg";
import svgIconTwitter from "../images/icon-twitter.svg";
import svgIconInstagram from "../images/icon-instagram.svg";
import svgIconLinkedin from "../images/icon-linkedin.svg";
import {
  socialLinkListContainer,
  socialLinkWrapper,
  socialLink,
} from "./social-link-list.module.css";
import constants from "./constants";

const SocialLink = ({ link, icon }) => (
  <li className={socialLinkWrapper}>
    <ExternalLinkWithQuery
      href={link}
      className={socialLink}
      target="_blank"
      rel="noreferrer"
    >
      <img
        width={36}
        height={36}
        src={icon}
        alt={link}
      />
    </ExternalLinkWithQuery>
  </li>
);

export default function SocialLinkList() {
  const { t } = useI18next();

  return (
    <ul className={socialLinkListContainer}>
      <OnlyKorean>
        <SocialLink
          icon={svgIconNaverBlog}
          link={t("url:naverblog")}
        />
        <SocialLink
          icon={svgIconInstagram}
          link={constants.urlInstagram}
        />
      </OnlyKorean>
      <SocialLink
        icon={svgIconYoutube}
        link={t("url:youtube")}
      />
      <SocialLink
        icon={svgIconFacebook}
        link={t("url:facebook")}
      />
      <SocialLink
        icon={svgIconTwitter}
        link={t("url:twitter")}
      />
      <SocialLink
        icon={svgIconLinkedin}
        link={t("url:linkedin")}
      />
    </ul>
  );
}
