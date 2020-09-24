import React from "react";
import MobileLayout from "../components/mobile-layout"
import { Container320, Padding } from "../components/common";

const MobileFeatures = ({ data, language, t }) => {
  return (
    <MobileLayout
      isFloatMenu={false}
      closingEmoji={data.mobileDinosaur}
      closingMsg={t("features:closingMsg")}
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

export default MobileFeatures;
