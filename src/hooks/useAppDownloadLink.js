import { useState, useEffect } from "react";
import {
  urlDownloadApp,
  urlDownloadAppSearchAd,
  urlDownloadAppDable,
  urlDownloadAppKakao,
} from "../components/constants";

function parseQuery(search) {
  var ret = {};
  if (!search) {
    return ret;
  }

  var query = search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    ret[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return ret;
}

export const useAppDownloadLink = () => {
  const [trackingUrl, setTrackingUrl] = useState(null);

  useEffect(() => {
    const param = parseQuery(localStorage.getItem("search_param"));

    if (param["n_media"]) {
      // 네이버
      setTrackingUrl(urlDownloadAppSearchAd);
    } else if (param["gclid"] || param["utm_source"] === "google") {
      // 구글
      setTrackingUrl(urlDownloadAppSearchAd);
    } else if (param["utm_source"] === "dable") {
      // 데이블
      setTrackingUrl(urlDownloadAppDable);
    } else if (param["utm_source"] === "kakao") {
      // 카카오 비즈보드
      setTrackingUrl(urlDownloadAppKakao);
    }
  }, []);

  const appDownloadLink = trackingUrl != null ? trackingUrl : urlDownloadApp;
  const linkType = trackingUrl != null ? "searchAd" : "organic";

  return { appDownloadLink, linkType };
};
