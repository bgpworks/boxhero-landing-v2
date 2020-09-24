import React, {useContext, useState, useEffect} from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot, CarouselContext } from 'pure-react-carousel';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Link, Trans } from 'gatsby-plugin-react-i18next';
// js
import MobileLayout from "../components/mobile-layout"
import { Container1024, Padding } from "../components/common";
import * as constants from "../components/constants";
// css
import styles from "./desktop-index.module.css";
// img
import svgVolt from "../images/volt.svg";
import svgAddProduct from "../images/addproduct.svg";
import svgCounting from "../images/counting.svg";
import svgDashboard from "../images/dashboard.svg";
import svgSmallRightBlue from "../images/smallright-blue.svg";
import svgSmallRight from "../images/smallright.svg";
import svgSwipeLeft from "../images/swipeleft.svg";
import svgSwipeRight from "../images/swiperight.svg";

const MobileIndex = ({ data, language, t }) => {
  return (
    <MobileLayout
      isFloatMenu={true}
      closingEmoji={data.mobileCoffee}
      closingMsg={t("index:closingMsg")}
    >
      <div style={{backgroundColor: "black"}}>
        <Padding y={300} />
        "index"
      </div>
    </MobileLayout>
  );
};

export default MobileIndex;
