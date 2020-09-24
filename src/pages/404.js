import React from "react";
import { graphql } from "gatsby";

import DesktopLayout from "../components/desktop-layout";
import SEO from "../components/seo";

const NotFoundPage = ({data}) => (
  <DesktopLayout
    isFloatMenu={false}
    closingEmoji={data.dinosaur}
    closingMsg="박스히어로는 오늘도 진화 중."
  >
    <SEO title="404: Not found" />
    <h1 style={{margin: 50, textAlign: "center"}}>NOT FOUND</h1>
    <p style={{margin: 50, textAlign: "center"}}>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </DesktopLayout>
);

export default NotFoundPage;

export const query = graphql`
  query {
    dinosaur: file(relativePath: { eq: "emoji-dinosaur.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
