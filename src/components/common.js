import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ScrollContainer from "react-indiana-drag-scroll";
import PropTypes from "prop-types";
import * as styles from "./common.module.css";
import svgEye from "../images/icon-eye.svg";
import svgCircleCheck from "../images/icon-circle-check.svg";
import svgDown from "../images/down.svg";
import svgUp from "../images/up.svg";
import svgDownload from "../images/download.svg";
import {
  urlStart,
  urlDownloadApp,
  urlDownloadAppSearchAd,
  urlDownloadAppDable,
  urlDownloadAppKakao,
} from "./constants";

export const DesktopBaseContainer = ({ className, children }) => (
  <div className={`${styles.desktopBaseContainer} ${className}`}>{children}</div>
);

DesktopBaseContainer.propTypes = {
  className: PropTypes.string,
};

DesktopBaseContainer.defaultProps = {
  className: "",
};

export const MobileBaseContainer = ({ className, children }) => (
  <div className={`${styles.mobileBaseContainer} ${className}`}>{children}</div>
);

MobileBaseContainer.propTypes = {
  className: PropTypes.string,
};

MobileBaseContainer.defaultProps = {
  className: "",
};

export const ContainerCenter = ({ className, children }) => (
  <div className={`${styles.containerCenter} ${className}`}>{children}</div>
);

export const Padding = ({ x, y }) => (
  <div style={{ paddingLeft: x, height: y, minHeight: 1 }} />
);

Padding.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

Padding.defaultProps = {
  x: 0,
  y: 0,
};

const SpeechBubble = ({ text, style }) => (
  <div
    className={styles.speechBubble}
    style={style}
  >
    {text}
  </div>
);

const DEFAULT_CHATTING_COLOR_SEQUENCE = [
  { text: "#292a2f", background: "#fbc200" },
  { text: "white", background: "#50a4fa" },
  { text: "#292a2f", background: "#e0e0e3" },
  { text: "white", background: "rgba(79, 103, 255, 0.9)" },
  { text: "white", background: "rgba(60, 185, 160, 0.8)" },
  { text: "white", background: "rgba(126, 187, 64, 0.6)" },
  { text: "white", background: "rgba(251, 97, 100, 0.6)" },
];
const COLUMN_WIDTH = 72;
const GUTTER_WIDTH = 30;

export const SpeechBubbleContainer = ({
  containerGridColumns,
  speechBubbles,
  colorSequence = DEFAULT_CHATTING_COLOR_SEQUENCE,
}) => {
  const containerWidth = COLUMN_WIDTH * containerGridColumns
  + GUTTER_WIDTH * (containerGridColumns - 1);
  const colorSeqquenceIterator = (idx) => {
    const derivedIdx = idx % colorSequence.length;
    return colorSequence[derivedIdx];
  };

  return (
    <div
      className={styles.speechBubbleContainer}
      style={containerGridColumns && { width: containerWidth }}
    >
      {speechBubbles.map((bubble, index) => {
        const { text, background } = colorSeqquenceIterator(index);
        return (
          <SpeechBubble
            key={index}
            text={bubble.text}
            style={{
              color: text,
              backgroundColor: background,
              marginRight: bubble.marginRight,
              marginLeft: bubble.marginLeft,
            }}
          />
        );
      })}
    </div>
  );
};

export const MobileSimpleTop = ({ title, children }) => (
  <div>
    <Padding y={50} />
    <div className={styles.mobileSimpleTopTitle}>{title}</div>
    <Padding y={20} />
    <div className={styles.mobileSimpleTopDesc}>{children}</div>
  </div>
);

export const StartNowButton = ({ startNow, className }) => (
  <ExternalLinkWithQuery href={urlStart}>
    <button
      type="button"
      className={className}
    >
      {startNow}
    </button>
  </ExternalLinkWithQuery>
);

export const UseCaseTop = ({
  className, title, description, startNow, img,
}) => (
  <div className={className}>
    <DesktopBaseContainer
      className={styles.useCaseTopContentContainer}
    >
      <div className={styles.useCaseTopTitle}>{title}</div>
      <Padding y={16} />
      <div className={styles.useCaseTopDesc}>{description}</div>
      <Padding y={30} />
      <StartNowButton
        startNow={startNow}
        className={styles.startNowButton}
      />
      <Padding y={49} />
      <GatsbyImage
        image={img.childImageSharp.gatsbyImageData}
        alt={startNow}
      />
    </DesktopBaseContainer>
  </div>
);

export const MobileUseCaseTop = ({
  className, title, description, appDownload, img,
}) => (
  <section className={className}>
    <MobileBaseContainer
      className={styles.mobileUseCaseTopContentContainer}
    >
      <h2 className={styles.mobileUseCaseTopTitle}>{title}</h2>
      <Padding y={16} />
      <p className={styles.mobileUseCaseTopDesc}>{description}</p>
      <Padding y={40} />
      <AppDownloadLink>
        <button
          type="button"
          className={styles.appDownloadButton}
        >
          <img
            className={styles.appDownloadIcon}
            src={svgDownload}
            alt={appDownload}
          />
          {appDownload}
        </button>
      </AppDownloadLink>
      <Padding y={40} />
      <GatsbyImage
        image={img.childImageSharp.gatsbyImageData}
        alt={title}
      />
    </MobileBaseContainer>
  </section>
);

const UseCaseFeatureRightDesc = ({ icon, text }) => (
  <div className={styles.useCaseFeatureRightDesc}>
    <img
      src={icon}
      alt={text}
    />
    <Padding x={8} />
    {text}
  </div>
);

export const UseCaseFeature = ({
  title,
  speechBubbles,
  bubleColorSequence,
  img,
  leftDescription,
  rightDescriptions,
  children,
}) => (
  <DesktopBaseContainer
    className={styles.useCaseFeatureContentContainer}
  >
    <div className={styles.useCaseFeatureTitle}>{title}</div>
    <Padding y={50} />
    <SpeechBubbleContainer
      containerGridColumns={6}
      colorSequence={bubleColorSequence}
      speechBubbles={speechBubbles}
    />
    <Padding y={50} />
    <GatsbyImage
      image={img.childImageSharp.gatsbyImageData}
      alt={title}
    />
    <Padding y={50} />
    <div className={styles.useCaseFeatureDescContainer}>
      <div className={styles.useCaseFeatureLeftDesc}>
        <span className={styles.textUnderline}>
          {leftDescription}
        </span>
      </div>
      <Padding x={30} />
      <div className={styles.useCaseFeatureRightDescContainer}>
        {rightDescriptions.map((rightDescription, index) => {
          const isLastChild = () => index === rightDescriptions.length - 1;
          return (
            <UseCaseFeatureRightDesc
              key={index}
              icon={isLastChild() ? svgEye : svgCircleCheck}
              text={rightDescription}
            />
          );
        })}
      </div>
    </div>
    {children}
  </DesktopBaseContainer>
);

const MobileUseCaseFeatureDesc = ({ icon, text }) => (
  <li className={styles.mobileUseCaseFeatureDesc}>
    <img
      src={icon}
      alt={text}
    />
    <Padding x={8} />
    {text}
  </li>
);

export const MobileUseCaseFeature = ({
  title,
  speechBubbles,
  bubleColorSequence,
  img,
  descriptions,
  children,
}) => (
  <>
    <MobileBaseContainer
      className={styles.mobileUseCaseFeatureTopContainer}
    >
      <h2 className={styles.mobileUseCaseFeatureTitle}>{title}</h2>
      <Padding y={40} />
      <article className={styles.mobileSpeechBubbleContainer}>
        <SpeechBubbleContainer
          colorSequence={bubleColorSequence}
          speechBubbles={speechBubbles}
        />
      </article>
    </MobileBaseContainer>

    <Padding y={40} />
    <ScrollContainer
      vertical={false}
      horizontal
      hideScrollbars
      className={styles.mobileUseCaseFeatureImageContainer}
    >
      <GatsbyImage
        className={styles.mobileUseCaseFeatureImage}
        image={img.childImageSharp.gatsbyImageData}
        alt={title}
      />
    </ScrollContainer>
    <Padding y={16} />

    <MobileBaseContainer
      className={styles.mobileUseCaseFeatureBottomContainer}
    >
      <ul className={styles.mobileUseCaseFeatureDescContainer}>
        {descriptions.map((description, index) => {
          const isLastChild = index === descriptions.length - 1;
          return (
            <MobileUseCaseFeatureDesc
              key={index}
              icon={isLastChild ? svgEye : svgCircleCheck}
              text={description}
            />
          );
        })}
      </ul>
      {children}
    </MobileBaseContainer>
  </>
);

export const DropDownQNA = ({
  title,
  children,
  titleClassName,
  bodyClassName,
}) => {
  const [isShow, setShow] = useState(false);

  return (
    <div className={styles.dropDownQNA}>
      <div
        role="presentation"
        className={[styles.dropDownQNATitle, titleClassName].join(" ")}
        onClick={() => setShow(!isShow)}
      >
        <span className={isShow ? styles.open : ""}>{title}</span>
        <img
          src={isShow ? svgUp : svgDown}
          alt="자세히 보기"
        />
      </div>
      {isShow && (
        <div className={`${styles.dropDownQNABody} ${bodyClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export const SupportEmail = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
          }
        }
      }
    `,
  );
  const { email } = data.site.siteMetadata;
  return <a href={`mailto:${email}`}>{email}</a>;
};

export const Switch = ({ isActive, onChange }) => {
  const id = Math.random().toString();
  return (
    <div className={styles.switchComp}>
      <input
        id={id}
        type="checkbox"
        className={styles.switchInput}
        checked={isActive}
        onChange={(evt) => onChange(evt.target.checked)}
      />
      <label
        htmlFor={id}
        className={styles.switchLabel}
      >
        {" "}
      </label>
    </div>
  );
};

export const Ribbon = ({ className, children }) => (
  <div
    className={`${styles.ribbon} ${styles.ribbonTopLeft} ${className || ""}`}
  >
    <span>{children}</span>
  </div>
);

// query param을 유지하면서 a href를 사용한다.
// 광고 트래킹을 위해 사용되며, 첫 진입시 query param을 붙여서 나간다.
export const ExternalLinkWithQuery = ({ href, children, ...props }) => {
  const [search, setSearch] = useState(null);
  useEffect(() => {
    setSearch(localStorage.getItem("search_param"));
  }, []);

  const hrefWithSearch = search == null ? href : href + search;

  return (
    <a
      {...props}
      href={hrefWithSearch}
    >
      {children}
    </a>
  );
};

function parseQuery(search) {
  const ret = {};
  if (!search) {
    return ret;
  }

  const query = search.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split("=");
    ret[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return ret;
}

// query param에 키워드 광고 파라메터가 있으면 다른 앱다운로드 링크를 건다.
export const AppDownloadLink = ({ children, ...props }) => {
  const [trackingUrl, setTrackingUrl] = useState(null);

  useEffect(() => {
    const param = parseQuery(localStorage.getItem("search_param"));

    if (param.n_media) {
      // 네이버
      setTrackingUrl(urlDownloadAppSearchAd);
    } else if (param.gclid || param.utm_source === "google") {
      // 구글
      setTrackingUrl(urlDownloadAppSearchAd);
    } else if (param.utm_source === "dable") {
      // 데이블
      setTrackingUrl(urlDownloadAppDable);
    } else if (param.utm_source === "kakao") {
      // 카카오 비즈보드
      setTrackingUrl(urlDownloadAppKakao);
    }
  }, []);

  const appDownloadLink = trackingUrl != null ? trackingUrl : urlDownloadApp;
  const linkType = trackingUrl != null ? "searchAd" : "organic";

  return (
    <a
      {...props}
      href={appDownloadLink}
      data-link-type={linkType}
    >
      {children}
    </a>
  );
};

export const GradientBG = ({
  children,
  colorSet,
  backgroundColor,
  className,
}) => (
  <div
    className={[className, styles.gradientBG].join(" ")}
    style={{
      backgroundColor,
      backgroundImage: `linear-gradient(240deg, ${colorSet.join(",")})`,
    }}
  >
    {children}
  </div>
);

const CATEGORY_STYLES = [
  { backgroundColor: "#599fe0", color: "white" },
  { backgroundColor: "#51baa5", color: "white" },
  { backgroundColor: "#e57678", color: "white" },
  { backgroundColor: "#ea9b18", color: "white" },
  { backgroundColor: "#6e7fe8", color: "white" },
  { backgroundColor: "#75b534", color: "white" },
  { backgroundColor: "#d38457", color: "white" },
];

const getCategories = (postsNodes) => {
  const valueSet = new Set();
  postsNodes.forEach((node) => valueSet.add(node.frontmatter.category));

  return [...valueSet];
};

export const genCategoryStyleMap = (postsNodes) => {
  const categories = getCategories(postsNodes);
  return categories.reduce((acc, category, idx) => ({
    ...acc,
    [category]: CATEGORY_STYLES[idx % CATEGORY_STYLES.length],
  }), {});
};
