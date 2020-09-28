import { useEffect } from "react";
import { useI18next } from 'gatsby-plugin-react-i18next';

// helpscout init은 gatsby-browser에서 한번하고,
// 번역은 helpscout beacon api의 localize 를 쓰는게 맞는 것 같은데.
export const useHelpscout = () => {
  const { language } = useI18next();
  useEffect(() => {
    // script tag는 gatsby-ssr 에서 추가함.
    // 스크립트 로드 실패를 대비한 방어 코드.
    if ("Beacon" in window) {
      const beaconId = language === "ko"
          ? "ca3bc2e0-de9e-4680-bb05-ceb9ea2535a4"
          : "870b4827-57f0-437b-9e0b-5077cd29f127";
      window.Beacon('init', beaconId);
      window.Beacon('config', {
        hideFABOnMobile : true,
      });
    }
    // unmount시 destroy. helpscout 새로운 init을 하기 위해서는 반드시 destroy를 먼저 해야 한다.
    // destroy / init이 semaphore처럼 동작해서, 무조건 destroy를 미리 불러도 안되고, 짝을 맞춰서 불러야 한다.
    return () => {
      if ("Beacon" in window) {
        window.Beacon('destroy');
      }
    };
  }, [language]);
};
