import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopIndex from "../components/desktop-index";
import MobileIndex from "../components/mobile-index";
import { useHelpscout } from "../components/helpscout";

const IndexPage = ({ data, location }) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEOHelmet
        lang={language}
        title={t("index:pageTitle")}
        description={t("index:pageDescription")}
        path={location.pathname}
      />

      <Media at="xs">
        <MobileIndex
          data={data}
          language={language}
          t={t}
        />
      </Media>

      <Media greaterThan="xs">
        <DesktopIndex
          data={data}
          language={language}
          t={t}
        />
      </Media>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    homeTopRight: file(
      relativeDirectory: { eq: $language }
      base: { eq: "home-top-right.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 685
          quality: 100
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    feature1CustomProducts: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-custom-products.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 581
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    feature1PrintLabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-print-label.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 581
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    feature1ProductList: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-product-list.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 581
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    feature1ImportExcel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-import-excel.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 581
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    feature2SelectProduct: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-select-product.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 581
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    feature2ScanBarcode: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-scan-barcode.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 581
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    feature2History: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-history.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 581
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    feature2ConnectExcel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-connect-excel.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 581
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    feature3Analysis: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-analysis.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 581
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    feature3GroupList: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-group-list.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 581
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    feature3EmailReport: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-email-report.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 581
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    feature3Dashboard: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-dashboard.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 581
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    featureTransaction: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-transaction.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 828
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    featureOut: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-out.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 826
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    featureSalesAnalysis: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-sales-analysis.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 826
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
          layout: FIXED
        )
      }
    }
    teamPlay: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-team.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 786
          height: 612
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
          }
          placeholder: TRACED_SVG
          transformOptions: { cropFocus: NORTH }
          layout: FIXED
        )
      }
    }
    book: file(relativePath: { eq: "emoji-book.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    box: file(relativePath: { eq: "emoji-box.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    truck: file(relativePath: { eq: "emoji-truck.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    bag: file(relativePath: { eq: "emoji-bag.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    coat: file(relativePath: { eq: "emoji-coat.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    teeth: file(relativePath: { eq: "emoji-teeth.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    car: file(relativePath: { eq: "emoji-car.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    pinkT: file(relativePath: { eq: "emoji-pink-t.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    heel: file(relativePath: { eq: "emoji-heel.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    thermometer: file(relativePath: { eq: "emoji-thermometer.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    dress: file(relativePath: { eq: "emoji-dress.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    bag2: file(relativePath: { eq: "emoji-bag-2.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    mobile: file(relativePath: { eq: "emoji-mobile.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    lipstick: file(relativePath: { eq: "emoji-lipstick.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    burger: file(relativePath: { eq: "emoji-burger.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    bolt: file(relativePath: { eq: "emoji-bolt.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    brick: file(relativePath: { eq: "emoji-brick.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    ring: file(relativePath: { eq: "emoji-ring.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    coffeeSmall: file(relativePath: { eq: "emoji-coffee.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    tip: file(relativePath: { eq: "emoji-tip.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    icecream: file(relativePath: { eq: "emoji-icecream.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    lip: file(relativePath: { eq: "emoji-lip.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    cart: file(relativePath: { eq: "emoji-cart.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    chair: file(relativePath: { eq: "emoji-chair.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    tea: file(relativePath: { eq: "emoji-tea.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    pill: file(relativePath: { eq: "emoji-pill.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    movie: file(relativePath: { eq: "emoji-movie.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    tv: file(relativePath: { eq: "emoji-tv.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    puzzle: file(relativePath: { eq: "emoji-puzzle.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    camera: file(relativePath: { eq: "emoji-camera.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    electronic: file(relativePath: { eq: "emoji-electronic.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    wheelchair: file(relativePath: { eq: "emoji-wheelchair.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    hammer: file(relativePath: { eq: "emoji-hammer.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    bed: file(relativePath: { eq: "emoji-bed.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    meat: file(relativePath: { eq: "emoji-meat.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          height: 24
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    coffee: file(relativePath: { eq: "emoji-coffee.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 72
          height: 72
          transformOptions: { fit: FILL }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    featureLowstock: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-lowstock.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 495
          height: 360
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    featureBarcodeLabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-barcode-label.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 495
          height: 360
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    featureSummary: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-summary.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 495
          height: 360
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    featureViewPastQuantity: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-view-past-quantity.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 495
          height: 360
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    featureLocation: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-location.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 495
          height: 360
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileHomeTopRight: file(
      relativeDirectory: { eq: $language }
      base: { eq: "home-top-right.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          tracedSVGOptions: {
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
            turnPolicy: TURNPOLICY_MAJORITY
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeature1CustomProducts: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-custom-products.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeature1PrintLabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-print-label.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeature1ProductList: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-product-list.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeature1ImportExcel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-import-excel.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeature2SelectProduct: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-select-product.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeature2ScanBarcode: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-scan-barcode.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeature2History: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-history.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeature2ConnectExcel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-connect-excel.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeature3Analysis: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-analysis.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeature3GroupList: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-group-list.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeature3EmailReport: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-email-report.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeature3Dashboard: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-dashboard.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeatureTransaction: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-transaction.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeatureOut: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-out.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileFeatureSalesAnalysis: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-sales-analysis.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            alphaMax: 1
            color: "#f0f0f3"
            threshold: 160
          }
          placeholder: TRACED_SVG
        )
      }
    }
    mobileTeamPlay: file(
      relativeDirectory: { eq: $language }
      base: { eq: "img-team.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 335
          height: 261
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
          }
          placeholder: TRACED_SVG
          transformOptions: { cropFocus: NORTH }
        )
      }
    }
    mobileCoffee: file(relativePath: { eq: "emoji-coffee.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 36
          height: 36
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileFeatureLowstock: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-lowstock.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 280
          height: 204
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
        )
      }
    }
    mobileFeatureBarcodeLabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-barcode-label.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 280
          height: 204
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
        )
      }
    }
    mobileFeatureSummary: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-summary.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 280
          height: 204
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
        )
      }
    }
    mobileFeatureViewPastQuantity: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-view-past-quantity.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 280
          height: 204
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
        )
      }
    }
    mobileFeatureLocation: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-location.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 280
          height: 204
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
        )
      }
    }
    homeStartNow: file(relativePath: { eq: "home-start-now.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 307
          height: 200
          quality: 100
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
          }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
          layout: FIXED
        )
      }
    }
    mobileHomeStartNow: file(relativePath: { eq: "home-start-now.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 307
          height: 200
          tracedSVGOptions: {
            turnPolicy: TURNPOLICY_MAJORITY
            turdSize: 1
            color: "#f0f0f31f"
            threshold: 160
            alphaMax: 1
          }
          placeholder: TRACED_SVG
          transformOptions: { fit: FILL }
        )
      }
    }
  }
`;
