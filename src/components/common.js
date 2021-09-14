import React, { useState, useContext, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { CarouselContext } from "pure-react-carousel";
import PropTypes from "prop-types";
import * as styles from "./common.module.css";
import svgEye from "../images/icon-eye.svg";
import svgCircleCheck from "../images/icon-circle-check.svg";
import svgDown from "../images/down.svg";
import svgUp from "../images/up.svg";
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

export const Container320 = ({ className, children }) => (
  <div className={`${styles.container320} ${className}`}>{children}</div>
);

Container320.propTypes = {
  className: PropTypes.string,
};

Container320.defaultProps = {
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

const SpeechBubble = ({
  text, alignRight, style,
}) => (
  <div
    className={[
      styles.speechBubble,
      alignRight ? styles.speechBubbleRight : styles.speechBubbleLeft,
    ].join(" ")}
    style={style}
  >
    {text}
  </div>
);

export const SpeechBubbleContainer = ({ containerGridColumns, speechBubbles }) => {
  const COLUMN_WIDTH = 72;
  const GUTTER_WIDTH = 30;
  const containerWidth = COLUMN_WIDTH * containerGridColumns
  + GUTTER_WIDTH * (containerGridColumns - 1);
  const isEvenNumber = (index) => index % 2 === 0;

  return (
    <div
      className={styles.speechBubbleContainer}
      style={{ width: containerWidth }}
    >
      {speechBubbles.map((bubble, index) => (
        <SpeechBubble
          key={index}
          text={bubble.text}
          alignRight={isEvenNumber(index + 1)}
          style={{
            color: bubble.color,
            backgroundColor: bubble.backgroundColor,
            marginRight: bubble.marginRight,
            marginLeft: bubble.marginLeft,
          }}
        />
      ))}
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
      speechBubbles={speechBubbles}
      columnGap={10}
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

export const WithCurrentSlide = ({ children }) => {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide,
  );
  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);
  if (children && children instanceof Function) {
    return children(currentSlide);
  }
  return "";
};

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
