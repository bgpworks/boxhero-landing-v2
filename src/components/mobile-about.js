import React from "react";
import MobileLayout from "../components/mobile-layout"
import { Container320, Padding } from "../components/common";

const MobileAbout = ({ data, language, t }) => {
  return (
    <MobileLayout
      isFloatMenu={true}
      closingEmoji={data.mobileLight}
      closingMsg={t("about:closingMsg")}
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

export default MobileAbout;
