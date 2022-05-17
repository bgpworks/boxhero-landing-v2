import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { ExternalLinkWithQuery } from "./common";
import svgIconFacebook from "../images/icon-facebook.svg";
import svgIconMedium from "../images/icon-medium.svg";
import svgIconNaverBlog from "../images/icon-naverblog.svg";
import svgIconYoutube from "../images/icon-youtube.svg";
import svgIconTwitter from "../images/icon-twitter.svg";
import {
  socialLinkListContainer,
  socialLinkWrapper,
  socialLink,
} from "./social-link-list.module.css";

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
  const { t, language } = useI18next();

  return (
    <ul className={socialLinkListContainer}>
      <SocialLink
        icon={svgIconMedium}
        link={t("url:medium")}
      />
      {language === "ko" && (
        <SocialLink
          icon={svgIconNaverBlog}
          link={t("url:naverblog")}
        />
      )}
      <SocialLink
        icon={svgIconTwitter}
        link={t("url:twitter")}
      />
      <SocialLink
        icon={svgIconFacebook}
        link={t("url:facebook")}
      />
      <SocialLink
        icon={svgIconYoutube}
        link={t("url:youtube")}
      />
    </ul>
  );
}
