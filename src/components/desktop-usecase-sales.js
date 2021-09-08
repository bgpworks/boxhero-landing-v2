import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { UsecaseTop } from "./common";
// js
import DesktopLayout from "./desktop-layout";
import DesktopUsecaseFooter from "./desktop-usecase-footer";
// css
import * as styles from "./desktop-usecase-sales.module.css";

const DesktopUsecaseSales = ({ data, t }) => (
  <DesktopLayout
    isFloatMenu={false}
    closingEmoji={data.finger}
    closingMsg={t("usecase:closingMsg")}
  >
    <div className={styles.usecaseTopContainer}>
      <UsecaseTop
        title={<Trans i18nKey="usecase:salesTopTitle" />}
        description={<Trans i18nKey="usecase:salesTopDesc" />}
        startNow={t("usecase:startNowButton")}
        img={data.allInOne}
      />
    </div>
    <DesktopUsecaseFooter />
  </DesktopLayout>
);

export default DesktopUsecaseSales;
