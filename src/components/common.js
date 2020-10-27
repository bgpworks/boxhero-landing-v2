import React, { useState, useContext, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CarouselContext } from "pure-react-carousel";
import PropTypes from "prop-types";
import {
  urlDownloadApp,
  urlDownloadAppSearchAd,
} from "../components/constants";
import styles from "./common.module.css";
import svgDown from "../images/down.svg";
import svgUp from "../images/up.svg";

export const Container1024 = ({ className, children }) => (
  <div className={`${styles.container1024} ${className}`}>{children}</div>
);

Container1024.propTypes = {
  className: PropTypes.string,
};

Container1024.defaultProps = {
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

export const SimpleTop = ({ title, desc }) => (
  <div>
    <Padding y={100} />
    <div className={styles.simpleTopTitle}>{title}</div>
    <Padding y={30} />
    <div className={styles.simpleTopDesc}>{desc}</div>
  </div>
);

export const MobileSimpleTop = ({ title, desc }) => (
  <div>
    <Padding y={50} />
    <div className={styles.mobileSimpleTopTitle}>{title}</div>
    <Padding y={20} />
    <div className={styles.mobileSimpleTopDesc}>{desc}</div>
  </div>
);

export const DropDownQNA = ({
  isFirst,
  title,
  content,
  children,
  titleClassName,
  bodyClassName,
}) => {
  const [isShow, setShow] = useState(false);

  return (
    <div className={styles.dropDownQNA}>
      <div
        role="presentation"
        className={`${styles.dropDownQNATitle} ${titleClassName}`}
        onClick={() => setShow(!isShow)}
      >
        <span className={isShow ? styles.open : ""}>{title}</span>
        <img src={isShow ? svgUp : svgDown} alt="자세히 보기" />
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
    `
  );
  const email = data.site.siteMetadata.email;
  return <a href={`mailto:${email}`}>{email}</a>;
};

export const Switch = ({ isActive, onChange }) => {
  const id = Math.random().toString();
  return (
    <div className={styles.switch}>
      <input
        id={id}
        type="checkbox"
        className={styles.switchInput}
        checked={isActive}
        onChange={(evt) => onChange(evt.target.checked)}
      />
      <label htmlFor={id} className={styles.switchLabel}> </label>
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
    carouselContext.state.currentSlide
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
export class ExternalLinkWithQuery extends React.Component {
  state = {
    search: null,
  };

  componentDidMount() {
    this.setState({ search: localStorage.getItem("search_param") });
  }

  render() {
    const href =
      this.state.search == null
        ? this.props.href
        : this.props.href + this.state.search;

    return (
      <a {...this.props} href={href}>
        {this.props.children}
      </a>
    );
  }
}

// query param에 키워드 광고 파라메터가 있으면 다른 앱다운로드 링크를 건다.
export class AppDownloadLink extends React.Component {
  state = {
    searchAD: false,
  };

  parseQuery(search) {
    var ret = {};
    if (!search) {
      return ret;
    }

    var query = search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      ret[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return ret;
  }

  componentDidMount() {
    const param = this.parseQuery(localStorage.getItem("search_param"));

    // google : gclid
    // naver : n_media
    this.setState({ searchAD: param["gclid"] || param["n_media"] });
  }

  render() {
    const href = this.state.searchAD ? urlDownloadAppSearchAd : urlDownloadApp;

    return (
      <a
        {...this.props}
        href={href}
        data-link-type={this.state.searchAD ? "searchAd" : "organic"}
      >
        {this.props.children}
      </a>
    );
  }
}
