import React from "react";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
// js
import SEOHelmet from "../components/SEOHelmet";
import { Media } from "../media";
import DesktopIndex from "../components/desktop-index";
import MobileIndex from "../components/mobile-index";
import { useHelpscout } from "../components/helpscout";
import YoutubePopup, { YoutubePopupProvider } from "../components/YoutubePopup";

const IndexPage = ({ data, location }) => {
  const { language, t } = useI18next();
  useHelpscout();

  return (
    <YoutubePopupProvider>
      <SEOHelmet
        lang={language}
        title={t("index:pageTitle")}
        description={t("index:pageDescription")}
        path={location.pathname}
      />

      <Media at="xs">
        <MobileIndex data={data} />
      </Media>

      <Media greaterThan="xs">
        <DesktopIndex data={data} />
      </Media>
      <YoutubePopup />
    </YoutubePopupProvider>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LocaleFragment
    }
    main: file(
      relativeDirectory: { eq: $language }
      base: { eq: "main.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureDevices: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-devices.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureHistory: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-history.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureSettingRole: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-setting-role.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureMove: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-move.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureOut: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-out.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureTransaction: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-transaction.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureScanBarcode: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-scan-barcode.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featurePrintLabel: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-print-label.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureOutDetail: file(
      relativeDirectory: { eq: $language }
      base: { eq: "out-detail.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureAllInOne: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-all-in-one.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureQuantity: file(
      relativeDirectory: { eq: $language }
      base: { eq: "history-card.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureIntegration: file(
      relativeDirectory: { eq: $language }
      base: { eq: "order-log.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
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
    featureLocation: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-location.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureSummary: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-summary.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureViewPastQuantity: file(
      relativeDirectory: { eq: $language }
      base: { eq: "index-feature-view-past-quantity.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureSettingMembers: file(
      relativeDirectory: { eq: $language }
      base: { eq: "members.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    featureAnalysis: file(
      relativeDirectory: { eq: $language }
      base: { eq: "feature-analysis.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    kakaoventures: file(relativePath: { eq: "kakaoventures.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    tips: file(relativePath: { eq: "tips.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED
          transformOptions: {fit: COVER}
        )
      }
    }
    koCustomers: allFile(
      filter: {relativeDirectory: {eq: "ko/customers"}}
      sort: {fields: name, order: ASC}
      ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED,
            placeholder: BLURRED
            transformOptions: {fit: COVER}
            )
          }
        }
      }
      enCustomers: allFile(
        filter: {relativeDirectory: {eq: "en/customers"}}
        sort: {fields: name, order: ASC}
        ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED,
            placeholder: BLURRED
            transformOptions: {fit: COVER}
            )
          }
        }
      }
  }
`;
