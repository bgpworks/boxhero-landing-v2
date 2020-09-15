import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
// js
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container1024, Padding } from "../components/common";
import BackgroundImage from "gatsby-background-image";
// css
import styles from "./about.module.css";
// img
import iconAddProduct from "../images/feature-addproduct.svg";
import iconBulkAdd from "../images/feature-bulkadd.svg";
import iconCounting from "../images/feature-counting.svg";
import iconGraph from "../images/feature-graph.svg";
import iconImage from "../images/feature-image.svg";
import iconPartner from "../images/feature-partner.svg";
import iconBasicmode from "../images/feature-basicmode.svg";
import iconCategory from "../images/feature-category.svg";
import iconDashboard from "../images/feature-dashboard.svg";
import iconHistory from "../images/feature-history.svg";
import iconMobilescan from "../images/feature-mobilescan.svg";
import iconUppdown from "../images/feature-uppdown.svg";

const Top = ({data}) => (
  <BackgroundImage
    Tag="section"
    className={styles.topContainer}
    fluid={data.topBg.childImageSharp.fluid}
    backgroundColor="#6159F5"
  >
    <Container1024 className={styles.topContentContainer}>
      <div className={styles.topLeftContainer}>
        재고관리,<br />
        왜 박스히어로를<br />
        사용해야 할까요?<br />
      </div>
      <div className={styles.topRightContainer}>
        <Img fixed={data.topLogo.childImageSharp.fixed}
        />
      </div>
    </Container1024>
  </BackgroundImage>
);

const StrongPoints = ({data}) => (
  <>
    <Container1024 className={styles.section}>
      <div className={styles.half}>
        <Img
          fixed={data.easy.childImageSharp.fixed}
          style={{
            position: "absolute",
            top: 152,
            right: 67,
          }}
        />
      </div>
      <div className={styles.half}>
        <Padding y={271} />
        <span className={styles.title}>
          <strong>박스히어로</strong>는<br/>
          쉽고 편리합니다
        </span>
        <div className={styles.desc}>
          재고관리 프로그램을 사용하기 위해 공부할 필요가 전혀 없습니다.<br/>
          박스히어로는 재고관리를 처음 접하는 고객도 어려움없이 재고를<br/>
          관리할 수 있도록 쉽고 편리하게 만들어졌습니다.
        </div>
      </div>
    </Container1024>

    <Container1024 className={styles.section}>
      <div className={styles.half}>
        <Padding y={253} />
        <span className={styles.title}>
          <strong>박스히어로</strong>는<br/>
          재고관리에<br/>
          충실합니다.
        </span>
        <div className={styles.desc}>
          평소에 사용하지 않는 복잡한 기능은 덜어내고 재고관리에<br/>
          필요한 기능만을 담았습니다.<br/>
          박스히어로가 제공하는 다양한 편의 기능을 활용하면<br/>
          완벽한 재고관리가 가능합니다.<br/>
        </div>
      </div>
      <div className={styles.half}>
        <Img
          fixed={data.great.childImageSharp.fixed}
          style={{
            position: "absolute",
            top: 137,
          }}
        />
      </div>
    </Container1024>

    <Container1024 className={styles.section}>
      <div className={styles.half}>
        <Img
          fixed={data.mobile.childImageSharp.fixed}
          style={{
            position: "absolute",
            top: 190,
            right: 109,
          }}
        />
      </div>
      <div className={styles.half}>
        <Padding y={271} />
        <span className={styles.title}>
          <strong>박스히어로</strong>는<br/>
          강력한 모바일 서비스를<br/>
          제공합니다.
        </span>
        <div className={styles.desc}>
          모바일 서비스를 부가적으로 제공하는 다른 프로그램과는 다릅니다.<br/>
          PC와 완벽하게 연동되는 최적화된 모바일 서비스를 통해<br/>
          언제 어디서든 효율적으로 재고를 관리할 수 있습니다.
        </div>
      </div>
    </Container1024>
  </>
);

const FeatureCard = ({img, title, content}) => (
  <div className={styles.featureCard}>
    <img
      className={styles.featureIcon}
      src={img}
      alt={title}
    />
    <Padding y={10} />
    <div className={styles.featureCardTitle}>
      {title}
    </div>
    <Padding y={15} />
    <div className={styles.featureCardContent}>
      {content}
    </div>
  </div>
);

const FeatureRow = ({title, columns}) => (
  <div className={styles.featureRow}>
    <div className={styles.featureRowTitle}>
      {title}
    </div>
    <Padding y={32} />
    <div className={styles.featureContainer}>
      {columns.map((column, index) => (
        <FeatureCard
          key={index}
          img={column.img}
          title={column.title}
          content={column.content}
        />
      ))}
    </div>
  </div>
);

const OtherFeatures = ({data}) => (
  <BackgroundImage
    Tag="div"
    fluid={data.featureBg.childImageSharp.fluid}
    backgroundColor="#6159F5"
  >
    <Container1024 className={styles.featureContentContainer}>
      <div className={styles.featureTitle}>
        박스히어로는 어떤 기능이 있나요?
      </div>
      <Padding y={40} />
      <div className={styles.featureDesc}>
        제품 등록부터 입출고, 재고확인까지 효율적인 재고관리 프로세스를 위한<br/>
        핵심적인 기능을 제공합니다.
      </div>
      <FeatureRow
        title="제품 등록"
        columns={[
          {
            img: iconCategory,
            title: "속성선택",
            content: "제품에 필요한 속성을 추천 속성에서 선택하거나 추가해 사용할 수 있습니다.",
          },
          {
            img: iconAddProduct,
            title: "바코드 등록",
            content: "바코드를 스캔해 제품을 등록하거나 새로운 바코드를 생성할 수 있습니다.",
          },
          {
            img: iconImage,
            title: "제품 이미지 등록",
            content: "제품 별로 이미지를 등록해 관리할 수 있습니다.",
          },
          {
            img: iconBulkAdd,
            title: "엑셀 대량 추가",
            content: "기존의 엑셀파일에 저장된 제품을 불러올 수 있습니다.",
          },
        ]}
      />
      <FeatureRow
        title="입출고"
        columns={[
          {
            img: iconMobilescan,
            title: "모바일 스캐너",
            content: "모바일을 바코드 스캐너로 활용해 스캔 한 번으로 입출고할 수 있습니다.",
          },
          {
            img: iconPartner,
            title: "거래처 관리",
            content: "거래처 정보를 등록해 편리하게 활용할 수 있습니다.",
          },
          {
            img: iconHistory,
            title: "히스토리",
            content: "팀원들의 입출고 기록을 다양한 옵션으로 검색할 수 있습니다.",
          },
          {
            img: iconUppdown,
            title: "엑셀 연동",
            content: "엑셀 파일을 가져오거나 내보낼 수 있습니다.",
          },
        ]}
      />
      <FeatureRow
        title="재고확인"
        columns={[
          {
            img: iconBasicmode,
            title: "제품 목록",
            content: "원하는 속성 별로 제품을 묶어 재고를 확인할 수 있습니다.",
          },
          {
            img: iconCounting,
            title: "바코드 스캔",
            content: "바코드 스캔 한 번으로 재고를 파악할 수 있습니다. ",
          },
          {
            img: iconGraph,
            title: "재고 변동",
            content: "재고 변동 내역을 제품 별로 한 눈에 확인할 수 있습니다.",
          },
          {
            img: iconDashboard,
            title: "대시 보드",
            content: "다양하게 제공되는 재고 분석을 활용할 수 있습니다.",
          },
        ]}
      />
    </Container1024>
  </BackgroundImage>
);

const AboutPage = ({data}) => (
  <Layout
    isFloatMenu={true}
    closingEmoji={data.light}
    closingMsg="더 이상의 재고 손실은 없다."
  >
    <SEO
      lang="ko"
      title="박스히어로는?"
    />

    <Top data={data} />

    <StrongPoints data={data} />

    <OtherFeatures data={data} />
  </Layout>
);

export default AboutPage;

export const query = graphql`
  query {
    topBg: file(relativePath: { eq: "about-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    topLogo: file(relativePath: { eq: "about-top.png" }) {
      childImageSharp {
        fixed(width: 697,
          traceSVG: {
            color: "#6159F5"
            optTolerance: 0.2,
            turdSize: 100,
            turnPolicy: TURNPOLICY_MINORITY
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    light: file(relativePath: { eq: "emoji-light.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    easy: file(relativePath: { eq: "img-easy-ko.png" }) {
      childImageSharp {
        fixed(width: 673) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    great: file(relativePath: { eq: "img-great-ko.png" }) {
      childImageSharp {
        fixed(width: 660) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobile: file(relativePath: { eq: "img-mobile-ko.png" }) {
      childImageSharp {
        fixed(width: 463) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureBg: file(relativePath: { eq: "about-feature-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
