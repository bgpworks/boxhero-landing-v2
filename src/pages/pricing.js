import React, { useState } from "react";
import { graphql } from "gatsby";
// js
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container1024, Padding, SimpleTop, DropDownQNA, SupportEmail } from "../components/common";
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
        title={`모바일 앱에서 결제하려면 어떻게 하나요?`}
      >
        모바일 인앱(In-app) 결제는 지원하지 않습니다. 박스히어로는 팀
        별로 결제하는 방식이라, 개인 구매자에게 특화되어 있는 애플이나
        구글의 인앱 결제 방식으로는 구현에 어려움이 있습니다.
        <br />
        <br />
        PC로 박스히어로 웹앱 &#40;
        <a href="https://www.boxhero-app.com">https://www.boxhero-app.com</a>
        &#41;으로 접속하신 후 사용하시는 팀으로 로그인 후 설정 &gt; 결제 설정
        메뉴에서 결제하실 수 있습니다. 곧 모바일에서도 손쉽게 결제하실
        수 있도록 개선할 예정입니다.
      </DropDownQNA>
      <DropDownQNA
        title={`"제품 등록수"는 재고 수량인가요?`}
      >
        제품 수는 재고 수량이 아닙니다. 제품 품목 수이며, 유닛 모드의
        경우 유닛의 개수입니다. 현재 팀의 품목수는 팀 선택 화면에서
        확인하실 수 있습니다.
      </DropDownQNA>
      <DropDownQNA
        title={`제품 등록수나 멤버 수 한도가 넘으면 어떻게 되나요?`}
      >
        한도가 넘으면 더 이상 제품을 수정하거나 입/출고를 하실 수
        없습니다. 기입력된 데이터는 계속 확인하실 수 있습니다. 사용하지
        않는 제품이나 멤버를 삭제하여 가용 제품 수를 확보하실 수
        있습니다.
      </DropDownQNA>
      <DropDownQNA
        title={`해외 결제 가능한 신용카드가 없습니다.`}
      >
        다양한 결제 방식을 지원하기 위해 준비 중입니다. 그전까지는
        계좌이체로 결제 가능합니다. &nbsp;
        <a href="https://forms.gle/odumtazRgMNxRhy29">
          https://forms.gle/odumtazRgMNxRhy29
        </a> &nbsp;에 정보를 입력해 주시면 연락드리겠습니다. 추가 문의 사항은
        <SupportEmail /> 으로 문의 바랍니다.
      </DropDownQNA>
      <DropDownQNA
        title={`Lite 플랜을 사용하다가 Pro 플랜으로 바꾸려면 어떻게 하나요?`}
      >
        언제라도 플랜은 변경 가능합니다. 결제 설정에서 플랜 변경 버튼을
        눌러서 Lite 플랜이나 Pro 플랜으로 변경하실 수 있습니다. 요금은
        기존 플랜과 새로운 플랜을 사용한 시간만큼 계산되어 청구됩니다.
      </DropDownQNA>
      <DropDownQNA
        title={`결제 플랜을 취소하면 어떻게 되나요?`}
      >
        다음 결제일 전까지 서비스를 동일하게 사용하실 수 있으며, 다음
        결제일부터 서비스가 중지되고 더 이상 요금이 청구되지 않습니다.
        결제 플랜을 취소한 이후로 데이터는 3개월까지 보관해 드립니다.
      </DropDownQNA>
      <DropDownQNA
        title={`결제 플랜을 취소했다가 나중에 다시 결제하면 기존 데이터가 유지되어 있나요?`}
      >
        결제 플랜을 취소하신 시점 부터 최소 3개월은 데이터를 유지해
        드립니다. 데이터가 유지되어 있는 동안에는 언제든지 결제 플랜을
        등록하신 후 그대로 이어서 사용하실 수 있습니다. 3개월이 지나서
        데이터가 보이지 않는 경우에는 <SupportEmail /> 으로 문의
        바랍니다.
      </DropDownQNA>
      <DropDownQNA
        title={`카드 유효기한 만료 등으로 결제가 실패하면 어떻게 되나요?`}
      >
        최대 한 달 동안 4번까지 결제를 자동으로 재시도하며, 결제가
        실패할 때 마다 등록하신 이메일로 알람을 보내드립니다. 결제가
        모두 실패하면 결제 플랜이 자동으로 취소됩니다.
      </DropDownQNA>
      <DropDownQNA
        title={`결제 수단을 도중에 변경할 수 있나요?`}
      >
        결제 설정 메뉴에서 언제든지 결제 수단을 변경하실 수 있습니다.
      </DropDownQNA>
      <DropDownQNA
        title={`환불 가능한가요?`}
      >
        환불은 제공하지 않습니다.
      </DropDownQNA>
      <DropDownQNA
        title={`관리하려는 제품수가 5,000개가 넘어가면 어떻게 하나요?`}
      >
        <SupportEmail /> 으로 문의 바랍니다.
      </DropDownQNA>
      <DropDownQNA
        title={`멤버가 30명을 넘어가면 어떻게 하나요?`}
      >
        <SupportEmail /> 으로 문의 바랍니다.
      </DropDownQNA>
      <DropDownQNA
        title={`멤버가 여러명인 경우는 각자 결제 해야 하나요?`}
      >
        팀 관리자 중 한명만 결제하시면 됩니다.
      </DropDownQNA>
      <DropDownQNA
        title={`체험기간 중 신용카드 정보를 넣으면 바로 결제 되나요?`}
      >
        무료 체험기간이 끝난 후 결제됩니다.
      </DropDownQNA>
      <DropDownQNA
        title={`결제 정보는 안전하게 보관되나요?`}
      >
        박스히어로는 자체적으로 결제 정보를 일체 저장하지 않으며, 결제는
        모두 Stripe라는 믿을 수 있는 서비스를 통해 이루어집니다.
        Stripe는 최고의 보안 수준을 제공하고 있으며 많은 기업체(트위터,
        Lyft, 유니세프 등)에서 도입하여 사용하고 있는 서비스로 시장에서
        안전성이 검증되었기 때문에, 안심하셔도 됩니다.
      </DropDownQNA>
      <DropDownQNA
        title={`1달러가 결제 되었습니다. 왜 1달러 결제 된건가요?`}
      >
        신용카드가 정상적인지 체크하는 절차에 따라 자동으로 1달러가
        결제됩니다. 해당 결제는 자동으로 청구서에서 제거되어 실제 청구
        되지 않습니다. 보통 10일이내에 제거되며, 정확한 제거 시점은
        신용카드사에 문의바랍니다.
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
