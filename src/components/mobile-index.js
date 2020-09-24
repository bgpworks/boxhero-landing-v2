import React from "react"
// js
import MobileLayout from "../components/mobile-layout"
import { Padding } from "../components/common";

const MobileIndex = ({ data, language, t }) => {
  return (
    <MobileLayout
      isFloatMenu={true}
      closingEmoji={data.mobileCoffee}
      closingMsg={t("index:closingMsg")}
    >
      <div style={{backgroundColor: "black"}}>
        <Padding y={300} />
        "index"
      </div>
    </MobileLayout>
  );
};

export default MobileIndex;
