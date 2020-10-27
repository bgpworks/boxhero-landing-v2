import React from "react";
import { MediaContextProvider } from "./media";

export const Boot = ({ element }) => {
  return <MediaContextProvider>{element}</MediaContextProvider>;
};
