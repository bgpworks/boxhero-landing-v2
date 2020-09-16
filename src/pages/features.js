import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
// js
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container1024, Padding, SimpleTop } from "../components/common";
import * as constants from "../components/constants";
// css
import styles from "./features.module.css";
// img
import iconMenuExpiry from "../images/features-menu-expiry.svg";
import iconMenuEmpty from "../images/features-menu-empty.svg";
import iconMenuCustomization from "../images/features-menu-customization.svg";
import iconMenuSummary from "../images/features-menu-summary.svg";
import iconMenuStatus from "../images/features-menu-status.svg";
import iconMenuLocationmode from "../images/features-menu-locationmode.svg";

const bgOrange = "rgba(245, 166, 35, 0.2)";
const barOrange = "#f5a623";
const bgGreen = "rgba(74, 208, 81, 0.2)";
const barGreen = "#3cb9a0";
const bgBlue= "#f7f9fc";
const barBlue = "#50a4fa";

const MenuItem = ({to, icon, label, title}) => (
  <AnchorLink
    to={`/features/${to}`}
    title={title}
    className={styles.menuItem}>
    <div>
    <img
      src={icon}
      alt={label}
    />
  </div>
    <Padding y={13} />
    <div className={styles.menuItemLabel}>
      {label}
    </div>
  </AnchorLink>
);

const Menu = () => (
  <Container1024 className={styles.menuContainer}>
    <MenuItem
      to={`#${constants.idFeatureExpiry}`}
      icon={iconMenuExpiry}
      label="유통기한 관리"
      title="유통기한 관리"
    />
    <MenuItem
      to={`#${constants.idFeatureLowstock}`}
      icon={iconMenuEmpty}
      label="안전재고"
      title="안전재고"
    />
    <MenuItem
      to={`#${constants.idFeatureBarcodelabel}`}
      icon={iconMenuCustomization}
      label={<>바코드<br/>커스터마이징</>}
      title="바코드 커스터마이징"
    />
    <MenuItem
      to={`#${constants.idFeatureSummary}`}
      icon={iconMenuSummary}
      label="입출고 요약"
      title="입출고 요약"
    />
    <MenuItem
      to={`#${constants.idFeatureStatus}`}
      icon={iconMenuStatus}
      label="상태 관리"
      title="상태 관리"
    />
    <MenuItem
      to={`#${constants.idFeatureLocation}`}
      icon={iconMenuLocationmode}
      label="위치 관리"
      title="위치 관리"
    />
  </Container1024>
);

const DemoTemplate = ({barColor, icon, title, desc}) => (
  <div
    className={styles.demoTemplate}
    style={{
      borderLeftColor: barColor,
    }}
  >
    <div>
      <Img fixed={icon}/>
      <span className={styles.demoTitle}>
        - {title} -
      </span>
    </div>
    <Padding y={20} />
    <div className={styles.demoDesc}>
      {desc}
    </div>
    <button
      className={styles.demoButton}
    >
      체험하기
    </button>
  </div>
);

function FeatureTemplate(props) {
  return (
    <div
      id={props.id}
      className={styles.featureTemplate}
      style={{backgroundColor: props.bgColor}}
    >
      <Container1024>
        <div className={styles.halfContainer}>
          <div>
            <div
              className={styles.featureTemplateTitle}
              data-sal="slide-up-10"
              data-sal-duration="500"
              data-sal-easing="easeOutQuint"
            >
              {props.title}
            </div>
            <Padding y={35}/>
            <div
              className={styles.featureTemplateDesc}
              data-sal="slide-up-10"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="easeOutQuint"
            >
              {props.desc}
            </div>
          </div>
          <div
            className={styles.featureTemplateFigureContainer}
            data-sal="slide-up-10"
            data-sal-duration="500"
            data-sal-easing="easeOutQuint"
          >
            <Img
              fixed={props.figure}
              style={props.figureStyle}
              alt={props.title}
            />
          </div>
        </div>
        <Padding y={50}/>
        <div
          className={styles.halfContainer}
          data-sal="slide-up-10"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="easeOutQuint">
          {props.demoData.slice(0, 2).map((data, index) => (
            <DemoTemplate
              key={index}
              barColor={props.barColor}
              icon={data.icon}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
      </Container1024>
    </div>
  );
}

const FeatureExpiry = (props) => (
  <FeatureTemplate
    id={constants.idFeatureExpiry}
    bgColor={bgOrange}
    title="유통기한 관리"
    figure={props.data.expiryFig.childImageSharp.fixed}
    figureStyle={{
    }}
    desc={<>제품에 유통기한을 설정해 관리할 수 있습니다.<br/>같은 제품도 유통기한을 다르게 설정해 한 번에 재고를 파악할<br />수 있으며 유통기한이 임박한 재고에 대해 푸시 알림을 받을 수<br/> 있습니다.</>}
    barColor={barOrange}
    demoData={[
      {
        icon: props.data.expiryDemo1.childImageSharp.fixed,
        title: "럭키식품마트",
        desc: (<>“같은 식품을 유통기한 별로 나눠 관리할 수 있고 유통기한이<br/>임박한 식품은 푸시 알림을 받아 할인행사를 진행해 폐기를<br/>줄이고 있어요.”</>),
      },
      {
        icon: props.data.expiryDemo2.childImageSharp.fixed,
        title: "별다방카페",
        desc: (<>“음료를 제조할 때 필요한 원두, 유제품, 과일 등의 제품에<br/>유통기한 정보를 등록해 재고를 효율적으로 관리하고 있습니다.”</>),
      },
    ]}
  />
);

const FeatureLowstock = (props) => (
  <FeatureTemplate
    id={constants.idFeatureLowstock}
    bgColor={bgGreen}
    title="안전재고"
    figure={props.data.lowstockFig.childImageSharp.fixed}
    figureStyle={{
    }}
    desc={<>재고로 보유하고 있어야 할 최소 수량을 제품 별로 입력할 수<br/>있습니다. 제품 별로 부족한 수량을 쉽게 확인할 수 있으며<br/>매일 아침 9시에 부족한 제품에 대해 푸시 알림을 받을 수 있습<br/>니다.</>}
    barColor={barGreen}
    demoData={[
      {
        icon: props.data.lowstockDemo1.childImageSharp.fixed,
        title: "튼튼타일",
        desc: (<>“자재 별로 꼭 있어야 할 최소 수량을 설정하고 알림을 통해<br/>재고량을 항상 일정 수준 이상으로 유지할 수 있어 자재가<br/>부족해 발생하는 문제를 최소화했습니다.”</>),
      },
      {
        icon: props.data.lowstockDemo2.childImageSharp.fixed,
        title: "대박식당",
        desc: (<>“음식점을 운영하는 데 꼭 필요한 식용유, 휴지와 같은 물품이<br/>전부 소진되기 전에 알림을 받을 수 있어 필요한 물품을 놓치지<br/>않고 주문하고 있습니다.”</>),
      },
    ]}
  />
);

const FeatureBarcodelabel = (props) => (
  <FeatureTemplate
    id={constants.idFeatureBarcodelabel}
    bgColor={bgBlue}
    title="바코드 커스터마이징"
    figure={props.data.barcodelabelFig.childImageSharp.fixed}
    figureStyle={{
    }}
    desc={<>나에게 맞는 바코드를 쉽게 만들 수 있습니다.<br/>다양한 바코드 템플릿을 제공하며 원하는 템플릿이 없을 경우<br/>세부 설정을 통해 원하는 정보를 모두 담은 바코드를 만들어<br/>프린터 연동을 통해 인쇄할 수 있습니다.</>}
    barColor={barBlue}
    demoData={[
      {
        icon: props.data.barcodelabelDemo1.childImageSharp.fixed,
        title: "핸드메이드제이",
        desc: (<>“바코드가 없는 수제로 만든 악세서리에 바코드를 생성하고<br/>바코드 커스터마이징을 통해 제품 재질 정보를 바코드와 함께<br/>인쇄한 뒤 제품에 부착해 재고를 효율적으로 관리하고 있어요.”</>),
      },
      {
        icon: props.data.barcodelabelDemo2.childImageSharp.fixed,
        title: "인조이프라모델",
        desc: (<>“기존 제품의 바코드를 활용해 스캔 한 번으로 제품을 등록할<br/>수 있고 재고를 검색할 때도 바코드 스캔을 활용해 해당 제품의<br/>재고 내역을 빠르게 찾아볼 수 있습니다.”</>),
      },
    ]}
  />
);

const FeatureSummary = (props) => (
  <FeatureTemplate
    id={constants.idFeatureSummary}
    bgColor={bgOrange}
    title="입출고 요약"
    figure={props.data.summaryFig.childImageSharp.fixed}
    figureStyle={{
    }}
    desc={<>특정 기간의 입출고 내역을 한 눈에 확인할 수 있습니다.<br/>설정한 기간 내에서 제품 이름 뿐만 아니라<br/>다양한 속성을 검색해 원하는 정보만 쉽게 필터링할 수 있고<br/>요약 결과를 엑셀로 다운로드할 수 있습니다.</>}
    barColor={barOrange}
    demoData={[
      {
        icon: props.data.summaryDemo1.childImageSharp.fixed,
        title: "지피타이어",
        desc: (<>“수많은 내역 중에서 내가 원하는 기간과 제품 유형을 선택해<br/>입출고 내역을 요약해서 볼 수 있어 필요한 정보를 얻는 데<br/>걸리는 시간을 크게 줄였습니다.”</>),
      },
      {
        icon: props.data.summaryDemo2.childImageSharp.fixed,
        title: "더뷰티샵",
        desc: (<>“기간 별로 어떤 제품이 얼마나 입고되고 출고되었는지 한 눈에<br/>파악할 수 있고 필요한 경우 엑셀파일로 추출할 수 있어 편리하게<br/>입출고 내역을 확인하고 있어요.”</>),
      },
    ]}
  />
);

const FeatureStatus = (props) => (
  <FeatureTemplate
    id={constants.idFeatureStatus}
    bgColor={bgGreen}
    title="상태 관리"
    figure={props.data.statusFig.childImageSharp.fixed}
    figureStyle={{
    }}
    desc={<>유닛 모드를 사용해 동일한 제품에 유통기한, 품질 등 각자 다른<br/>상태 값을 부여할 수 있습니다.<br/>모든 정보를 입력할 필요없이 상태 값만 입력하면 해당 제품이<br/>추가되고 같은 상태 값끼리 묶어 재고를 관리할 수 있습니다.</>}
    barColor={barGreen}
    demoData={[
      {
        icon: props.data.statusDemo1.childImageSharp.fixed,
        title: "언니네옷가게",
        desc: (<>“유닛모드를 사용해 같은 제품이지만 불량인 제품을 따로 저장<br/>하고 상태값 정보를 모두 담고 있는 QR코드를 붙여 효율적으로<br/>관리하고 있어요.”</>),
      },
      {
        icon: props.data.statusDemo2.childImageSharp.fixed,
        title: "건강한약국",
        desc: (<>“같은 의약품이더라도 다른 값을 가지고 있는 유통기한,<br/>보관위치, 제조번호 등을 각각의 의약품마다 따로 저장해<br/>편리하게 의약품 재고를 관리하고 있습니다.”</>),
      },
    ]}
  />
);

const FeatureLocation = (props) => (
  <FeatureTemplate
    id={constants.idFeatureLocation}
    bgColor={bgBlue}
    title="위치 관리"
    figure={props.data.locationFig.childImageSharp.fixed}
    figureStyle={{
    }}
    desc={<>위치모드를 사용해 동일한 제품을 위치에 따라 관리할 수 있습<br/>니다. 위치를 기반으로 제품이 등록되고 입출고가 이루어져<br/>여러 창고를 효율적으로 관리할 수 있습니다.</>}
    barColor={barBlue}
    demoData={[
      {
        icon: props.data.locationDemo1.childImageSharp.fixed,
        title: "패밀리가전가구",
        desc: (<>“같은 제품을 여러 창고에서 관리하고 있는데 위치 모드를<br/>활용해 제품을 위치 별로 기록할 수 있고 이동하기 기능을<br/>통해 재고 위치를 쉽게 변경할 수 있어 재고를 놓치는 문제를<br/>최소화했습니다.”</>),
      },
      {
        icon: props.data.locationDemo2.childImageSharp.fixed,
        title: "비지피웍스",
        desc: (<>“층, 사무실 등 위치 별로 비품을 관리할 수 있고 새로운 곳에서<br/>같은 비품을 사용할 때 위치만 추가하면 제품을 입고처리할 수<br/>있어 효율적인 재고관리가 가능합니다.”</>),
      },
    ]}
  />
);

export const FeaturesPage = ({data}) => (
  <Layout
    isFloatMenu={false}
    closingEmoji={data.dinosaur}
    closingMsg="박스히어로는 오늘도 진화 중."
  >
    <SEO title="편의기능" />

    <SimpleTop
      title="편의기능"
      desc="다양한 편의기능을 활용해 빈틈없이 재고관리하세요"
    />

    <Padding y={62}/>

    <Menu />

    <Padding y={100}/>

    <FeatureExpiry data={data} />
    <FeatureLowstock data={data} />
    <FeatureBarcodelabel data={data} />
    <FeatureSummary data={data} />
    <FeatureStatus data={data} />
    <FeatureLocation data={data} />
  </Layout>
);

export default FeaturesPage;

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
        fixed(width: 697) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    dinosaur: file(relativePath: { eq: "emoji-dinosaur.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    expiryFig: file(relativePath: { eq: "feature-expiry-fig.png" }) {
      childImageSharp {
        fixed(width: 378) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    expiryDemo1: file(relativePath: { eq: "feature-expiry-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    expiryDemo2: file(relativePath: { eq: "feature-expiry-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    lowstockFig: file(relativePath: { eq: "feature-lowstock-fig.png" }) {
      childImageSharp {
        fixed(width: 378) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    lowstockDemo1: file(relativePath: { eq: "feature-lowstock-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    lowstockDemo2: file(relativePath: { eq: "feature-lowstock-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    barcodelabelFig: file(relativePath: { eq: "feature-barcodelabel-fig.png" }) {
      childImageSharp {
        fixed(width: 470) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    barcodelabelDemo1: file(relativePath: { eq: "feature-barcodelabel-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    barcodelabelDemo2: file(relativePath: { eq: "feature-barcodelabel-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    summaryFig: file(relativePath: { eq: "feature-summary-fig.png" }) {
      childImageSharp {
        fixed(width: 575) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    summaryDemo1: file(relativePath: { eq: "feature-summary-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    summaryDemo2: file(relativePath: { eq: "feature-summary-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    statusFig: file(relativePath: { eq: "feature-status-fig.png" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    statusDemo1: file(relativePath: { eq: "feature-status-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    statusDemo2: file(relativePath: { eq: "feature-status-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    locationFig: file(relativePath: { eq: "feature-location-fig.png" }) {
      childImageSharp {
        fixed(width: 518) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    locationDemo1: file(relativePath: { eq: "feature-location-demo1.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    locationDemo2: file(relativePath: { eq: "feature-location-demo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
