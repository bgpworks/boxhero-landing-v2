import React, { useState } from "react";
import { graphql } from "gatsby";
// js
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container1024, Padding, SimpleTop, DropDownQNA } from "../components/common";
// css
import styles from "./pricing.module.css";
// img
import svgCard from "../images/card.svg";
import svgCheck from "../images/check.svg";

const PriceTable = ({data}) => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <Container1024>
      <table className={styles.pricingTable}>
        <thead>
          <tr>
            <th> </th>
            <th>
              <strong>개인 플랜</strong>
              <br/>
              <small>For Personal</small>
            </th>
            <th>
              <strong>비즈니스 플랜</strong>
              <br/>
              <small>For Business & Team</small>
            </th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
            </td>
            <td>
              <div className={styles.price}>무료</div>
              <small>개인/1개월</small>
            </td>
            <td className={styles.priceWrapper}>
              <div className={`${styles.ribbon} ${styles.ribbonTopLeft}`}>
                <span>추천 플랜</span>
              </div>
              <div className={styles.price}>{isYearly ? "$16.6" : "$20"}</div>
              <small>팀/1개월{isYearly ? "(연간 결제)" : "(월간 결제)"}</small>
            </td>
          </tr>

          <tr>
            <td>
              <img src={svgCard} alt="카드" />
            </td>
            <td>
              <strong>혼자서 하는<br/>가벼운 재고관리</strong>
            </td>
            <td>
              <strong>팀원과 함께하는<br/>여유로운 재고관리</strong>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.switchContainer}>
                <button
                  className={`${styles.billingCycleButton} ${isYearly ? "" : styles.active}`}
                  onClick={() => setIsYearly(false)}
                >
                  월간 결제
                </button>
                <div className={styles.switch}>
                  <input
                    id="switch1"
                    type="checkbox"
                    className={styles.switchInput}
                    checked={isYearly}
                    onChange={(evt) => setIsYearly(evt.target.checked)}
                  />
                  <label
                    htmlFor="switch1"
                    className={styles.switchLabel}>
                  </label>
                </div>
                <button
                  className={`${styles.billingCycleButton} ${isYearly ? styles.active : ""}`}
                  onClick={() => setIsYearly(true)}
                >
                  연간 결제
                </button>
              </div>
            </td>
            <td>
              <button
                className={styles.startButton}>
                지금 시작하기
              </button>
            </td>
            <td>
              <button
                className={styles.startButton}>
                1달 무료 체험하기
              </button>
            </td>
          </tr>

          <tr className={styles.sectionTr}>
            <td>
              <Padding y={53}/>
              이용한도
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>팀 맴버</td>
            <td>1명(개인)</td>
            <td>10명</td>
          </tr>
          <tr>
            <td>제품 등록</td>
            <td>100개</td>
            <td>2,000개</td>
          </tr>
          <tr>
            <td className={styles.thinHeight}>
              위치 등록<br/>
              <small>(위치모드 사용시)</small>
            </td>
            <td>3개</td>
            <td>10개</td>
          </tr>

          <tr className={styles.sectionTr}>
            <td>
              <Padding y={43}/>
              팀플레이
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>멤버 초대</td>
            <td>-</td>
            <td><img src={svgCheck} alt="OK" /></td>
          </tr>
          <tr>
            <td>멤버 동시 사용</td>
            <td>-</td>
            <td><img src={svgCheck} alt="OK" /></td>
          </tr>
          <tr>
            <td>상세 권한 설정</td>
            <td>-</td>
            <td><img src={svgCheck} alt="OK" /></td>
          </tr>
          <tr>
            <td>멤버별 사용기록</td>
            <td>-</td>
            <td><img src={svgCheck} alt="OK" /></td>
          </tr>

          <tr className={styles.sectionTr}>
            <td>
              <Padding y={63}/>
              확장
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>팀 멤버</td>
            <td>-</td>
            <td className={styles.thinHeight}>
              최대 100명<br />
              <small>(추가 멤버 1인당 월 $5)</small>
            </td>
          </tr>
          <tr>
            <td>제품 등록</td>
            <td>-</td>
            <td className={styles.thinHeight}>
              최대 50,000명<br />
              <small>(추가 제품 1,000개당 월 $10)</small>
            </td>
          </tr>
          <tr>
            <td className={styles.thinHeight}>
              위치 등록<br/>
              <small>(위치모드 사용시)</small>
            </td>
            <td>-</td>
            <td className={styles.thinHeight}>
              최대 100개<br />
              <small>(추가 위치 10개당 월 $10)</small>
            </td>
          </tr>

        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>*팀원 초대와 제품을 100개 이상 등록하기 위해서는<br/>비즈니스 플랜을 사용해야합니다.</td>
            <td>
              *플랜 추가 확장은 연간 구매 할인 혜택이<br/>적용되지 않습니다.<br/><br/>
              *모드 별로 제품 수를 측정하는 방법이<br/>상이할 수 있습니다.</td>
          </tr>
        </tfoot>
      </table>
    </Container1024>
  );
}

const FAQ = () => (
  <div className={styles.faqContainer}>
    <div className={styles.faqTitle}>
      자주 묻는 질문
    </div>

    <Padding y={50} />

    <div className={styles.faqContentContainer}>
      <DropDownQNA
        title="개인플랜과 비즈니스플랜의 차이는 무엇인가요?"
      >
        <p>
          가장 큰 차이점은 팀원 초대 기능과 사용량입니다. 개인 플랜은 팀원을 초대할 수 없고 혼자서 서비스 이용이 가능하며 제품은 100개, 위치는 3개까지 등록할 수 있고 사용량 확장이 불가능합니다.
        </p>
        <p>
          비즈니스 플랜은 멤버 10명까지 함께 이용할 수 있어 팀플레이가 가능하며 제품은 2,000개, 위치는 10개까지 등록할 수 있어 더욱 여유롭게 서비스를 이용할 수 있습니다. 또한, 추가 결제를 통해 사용량 확장이 가능해 더 많은 제품, 팀원, 위치를 등록해 함께 사용할 수 있습니다.
        </p>
      </DropDownQNA>
      <DropDownQNA
        title="개인 플랜으로 시작해도 비즈니스 플랜 1개월 무료체험을 할 수 있나요?"
      >
        <p>
          최초 서비스 가입시 개인 플랜을 선택한 고객님이 박스히어로를 완벽하게 활용해볼 수 있도록 1개월간 비즈니스 플랜을 무료로 제공합니다. 무료 체험이 끝나기 전에 비즈니스 플랜 결제가 되지 않았을 경우 개인 플랜으로 자동 전환됩니다. 이 경우 현재 사용량을 개인 플랜에서 제공하는 한도에 맞춰 조정해야 서비스 이용이 가능합니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="무료체험기간이 끝나면 어떻게 되나요?"
      >
        <p>
          무료체험기간이 끝나면 박스히어로에서 무료로 제공하는 개인 플랜으로 자동전환됩니다. 전환 이후 현재 사용량을 개인 플랜에서 제공하는 한도에 맞춰 조정해야 서비스 이용이 가능합니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="중간에 모드를 변경할 수 있나요?"
      >
        <p>
          모드를 한 번 선택하면 다른 모드로 변경이 불가능합니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="초대받은 팀원도 결제를 해야하나요?"
      >
        <p>
          박스히어로는 팀 단위로 결제가 이루어지기 때문에 초대받은 팀원은 결제할 필요가 전혀 없습니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="제품 등록 수는 재고 수량인가요?"
      >
        <p>
          제품 수는 재고 수량이 아닙니다. 제품 품목 수이며, 유닛 모드의 경우 유닛의 개수입니다. 따라서 재고 수량이 늘어나도 플랜 한도에는 영향이 없습니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="플랜에서 제공하는 기본 한도를 넘으면 어떻게 되나요?"
      >
        <p>
          기본 한도를 넘을 경우 서비스를 정상적으로 사용할 수 없습니다. 개인 플랜을 사용할 경우 비즈니스 플랜으로 업그레이드가 필요하며 비즈니스 플랜을 사용할 경우 한도를 확장시켜야 합니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="기본 한도 확장은 어떻게 할 수 있나요?"
      >
        <p>
          개인 플랜을 사용할 경우 한도 확장을 지원하지 않아 비즈니스 플랜으로 업그레이드가 필요합니다. 비즈니스 플랜을 사용할 경우 결제 및 설정 메뉴의 결제설정 탭에서 자유롭게 한도를 확장할 수 있습니다. 한도를 확장할 경우 페이지에서 안내된 추가 요금이 별도로 청구됩니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="개인플랜에서 비즈니스 플랜으로 변경할 수 있나요?"
      >
        <p>
          언제든지 결제 및 설정 메뉴에서 플랜을 변경할 수 있습니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="비즈니스 플랜은 어떻게 결제하나요?"
      >
        <p>
          결제를 위해서는 PC로 박스히어로 웹앱(<a href="https://web.boxhero-app.com">https://web.boxhero-app.com/</a>)으로 접속하신 다음 사용하는 팀으로 로그인 후 결제 및 설정 &gt; 결제 설정 메뉴에서 결제할 수 있습니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="모바일 앱에서 결제하려면 어떻게 해야하나요?"
      >
        <p>
          모바일 인앱(In-app) 결제는 아직 지원하지 않습니다. 박스히어로는 팀 별로 결제하는 방식으로 개인 구매자에 특화된 애플이나 구글의 인앱 결제 방식으로는 구현에 어려움이 있습니다.
        </p>
        <p>
          결제를 위해서는 PC로 박스히어로 웹앱(<a href="https://web.boxhero-app.com">https://web.boxhero-app.com/</a>)으로 접속하신 다음 사용하는 팀으로 로그인 후 결제 및 설정 &gt; 결제 설정 메뉴에서 결제할 수 있습니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="결제 수단은 어떻게 되나요?"
      >
        <p>
          박스히어로는 원활한 서비스 제공을 위해 세계적으로 안전성이 검증된 Stripe와의 연계로 해외 결제가 가능한 카드(VISA, Master 등)로 결제할 수 있습니다. 이 외에 사용자의 편의를 위해 국내전용 카드와 계좌이체를 통해 1년 단위의 연간 플랜 결제를 받고 있습니다(자세한 내용은 <a href="https://docs-ko.boxhero.io/docs/pricing#%EA%B5%AD%EB%82%B4-%EC%B9%B4%EB%93%9C-%EB%B0%8F-%EA%B3%84%EC%A2%8C%EC%9D%B4%EC%B2%B4-%EA%B2%B0%EC%A0%9C-%EB%B0%A9%EB%B2%95">여기</a>를 눌러 확인하세요).
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="무료체험기간 중 비즈니스 플랜을 등록하면 바로 결제 되나요?"
      >
        <p>
          무료체험기간이 끝난 후 결제가 이루어집니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="1달러가 결제되었습니다. 왜 1달러가 결제된건가요?"
      >
        <p>
          신용카드가 정상적인지 체크하는 절차에 따라 자동으로 1달러가 결제됩니다. 해당 결제는 자동으로 청구서에서 제거되어 실제 청구 되지 않습니다. 보통 10일이내에 제거되며, 정확한 제거 시점은 신용카드사에 문의바랍니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="결제 플랜을 취소하면 어떻게 되나요?"
      >
        <p>
          다음 결제일 전까지 서비스를 동일하게 사용하실 수 있으며 다음 결제일부터 무료 서비스인 개인 플랜으로 자동전환됩니다. 이 경우 현재 사용량을 개인 플랜에서 제공하는 한도에 맞춰 조정해야 서비스 이용이 가능합니다.
        </p>
      </DropDownQNA>

      <DropDownQNA
        title="결제 취소와 환불은 어떻게 하나요?"
      >
        <p>
          결제 및 설정 메뉴의 결제설정 탭에서 유료 구독 해지 버튼을 클릭해 예약할 수 있으며 다음 결제일부터 결제가 이루어지지 않고 무료로 제공되는 개인 플랜으로 전환됩니다. 구독 해지 예약은 다음 결제일 전에 언제든지 취소가 가능합니다. 이미 결제한 내역에 대한 환불은 제공되지 않습니다.
        </p>
      </DropDownQNA>
    </div>

    <Padding y={50} />

    <a href="https://docs-ko.boxhero-app.com/docs/pricing">
      <button className={styles.buttonShowMore}>
        더보기
      </button>
    </a>
  </div>
);

const DirectContact = ({email}) => (
  <div className={styles.directContactContainer}>
    <div className={styles.directContactTitle}>
      도움이 필요하세요?
    </div>

    <Padding y={10} />

    <div className={styles.directContactDesc}>
      박스히어로의 고객센터는 언제나 열려있습니다.
    </div>

    <Padding y={50} />

    <a href={`mailto:${email}`}>
      <button className={styles.directContactButton}>
        1:1 문의하기
      </button>
    </a>
  </div>
);

export const PricingPage = ({data}) => (
  <Layout
    isFloatMenu={false}
    curMenu="pricing"
    closingEmoji={data.box}
    closingMsg="비용절감의 시작은 재고관리부터."
  >
    <SEO title="요금안내" />

    <SimpleTop
      title="요금안내"
      desc={<>결제 한번으로 팀원 전체가 사용할 수 있는 박스히어로!<br/>이제 재고관리는 합리적인 가격으로 쉽고 빠르고 편리하게</>}
    />

    <Padding y={80}/>

    <PriceTable data={data} />

    <Padding y={100}/>

    <FAQ />

    <DirectContact email={data.site.siteMetadata.email} />

  </Layout>
);

export default PricingPage;

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
    box: file(relativePath: { eq: "emoji-box.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    site {
      siteMetadata {
        email
      }
    }
  }
`;
