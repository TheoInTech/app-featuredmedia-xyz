import {
  CSSProperties,
  Typography,
} from "@mui/material/styles/createTypography";
import React from "react";

// Inter
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

const FONT_BASE = "Inter";

interface TypographyDisplayVariants {
  title: React.CSSProperties;
  heading: React.CSSProperties;
  body: React.CSSProperties;
}

interface TypographyBaseVariants {
  mono: React.CSSProperties;
  tag: React.CSSProperties;
  link: React.CSSProperties;
  xxs: React.CSSProperties;
  xs: React.CSSProperties;
  sm: React.CSSProperties;
  md: React.CSSProperties;
  lg: React.CSSProperties;
  xl: React.CSSProperties;
  xxl: React.CSSProperties;
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    display: TypographyDisplayVariants;
    base: TypographyBaseVariants;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    display?: TypographyDisplayVariants;
    base?: TypographyBaseVariants;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display: true;
    base: true;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    caption: false;
    overline: false;
  }
}

const display: TypographyDisplayVariants = {
  title: {
    fontFamily: FONT_BASE,
    fontSize: "56px",
    fontWeight: 600,
    lineHeight: "64.96px",
    textAlign: "left",
    textTransform: "none",
    letterSpacing: "0",
  },
  heading: {
    fontFamily: FONT_BASE,
    fontSize: "42px",
    fontWeight: 600,
    lineHeight: "37.12px",
    textAlign: "left",
    textTransform: "none",
    letterSpacing: "0",
  },
  body: {
    fontFamily: FONT_BASE,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "29px",
    textAlign: "left",
    textTransform: "none",
    letterSpacing: "0",
  },
};

const base: TypographyBaseVariants = {
  mono: {
    fontFamily: FONT_BASE,
    fontSize: "10px",
    fontWeight: 700,
    lineHeight: "13.19px",
    textAlign: "left",
    textTransform: "none",
    letterSpacing: "normal",
  },
  tag: {
    fontFamily: FONT_BASE,
    fontSize: "10px",
    fontWeight: 600,
    lineHeight: "15px",
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },
  link: {
    fontFamily: FONT_BASE,
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "16.8px",
    textAlign: "left",
    textTransform: "none",
    letterSpacing: "0",
  },
  xxs: {
    fontFamily: FONT_BASE,
    fontSize: "10px",
    fontWeight: 500,
    lineHeight: "16.8px",
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  xs: {
    fontFamily: FONT_BASE,
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "16.8px",
    textAlign: "left",
    textTransform: "none",
    letterSpacing: "normal",
  },
  sm: {
    fontFamily: FONT_BASE,
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20.3px",
    textAlign: "left",
    textTransform: "none",
    letterSpacing: "normal",
  },
  md: {
    fontFamily: FONT_BASE,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "left",
    textTransform: "none",
    letterSpacing: "normal",
  },
  lg: {
    fontFamily: FONT_BASE,
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
    textAlign: "left",
    textTransform: "none",
    letterSpacing: "0",
  },
  xl: {
    fontFamily: FONT_BASE,
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "27px",
    textAlign: "left",
    textTransform: "none",
    letterSpacing: "0",
  },
  xxl: {
    fontFamily: FONT_BASE,
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "27px",
    textAlign: "left",
    textTransform: "none",
    letterSpacing: "0",
  },
};

const heading: CSSProperties = {
  fontFamily: FONT_BASE,
  fontWeight: 600,
  textAlign: "left",
  textTransform: "none",
};

const subtitle: CSSProperties = {
  fontFamily: FONT_BASE,
  fontWeight: 400,
  textAlign: "left",
  textTransform: "none",
};

const body: CSSProperties = {
  fontFamily: FONT_BASE,
  fontWeight: 400,
  textAlign: "left",
  textTransform: "none",
};

const caption: CSSProperties = {
  fontFamily: FONT_BASE,
  fontWeight: 400,
  textAlign: "left",
  textTransform: "none",
};

const overline: CSSProperties = {
  fontFamily: FONT_BASE,
  fontWeight: 400,
  textAlign: "left",
  textTransform: "none",
};

export const pxToRem = (value: number) => `${value / 16}rem`;

const typography: Typography = {
  fontFamily: [FONT_BASE].join(","),
  display,
  base,
  button: {
    textTransform: "none",
  },
  h1: heading,
  h2: heading,
  h3: heading,
  h4: heading,
  h5: heading,
  h6: heading,
  subtitle1: subtitle,
  subtitle2: subtitle,
  body1: body,
  body2: body,
  caption: caption,
  overline: overline,
  fontSize: 16,
  fontWeightLight: 400,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  htmlFontSize: 16,
  pxToRem,
};

export default typography;
