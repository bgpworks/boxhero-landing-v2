import { graphql } from 'gatsby';

export const localeFragment = graphql`
  fragment LocaleFragment on LocaleConnection {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
`;
