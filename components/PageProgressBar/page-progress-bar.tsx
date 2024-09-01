"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const PageProgressBar = () => {
  return (
    <ProgressBar height="4px" color="#2BFFFF" options={{ showSpinner: true }} />
  );
};
