import React from "react";
import MobileLayout from "../components/mobile-layout"
import { Container320, Padding } from "../components/common";

const MobilePricing = ({ data, language, t }) => {
  return (
    <MobileLayout
      isFloatMenu={false}
      closingEmoji={data.mobileBox}
      closingMsg={t("pricing:closingMsg")}
    >
      <div style={{backgroundColor: "black"}}>
        <Padding y={100} />
        <Container320>
          "TDB"
        </Container320>
      </div>
    </MobileLayout>
  );
};

export default MobilePricing;
