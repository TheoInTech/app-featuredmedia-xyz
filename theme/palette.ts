"use client";

import { PaletteOptions } from "@mui/material/styles/createPalette";

interface PaletteColorVariants {
  0: string;
  40: string;
  60: string;
  80: string;
  100: string;
  120: string;
  140: string;
  160: string;
}

interface NeutralColorVariants {
  0: string;
  20: string;
  40: string;
  60: string;
  80: string;
  100: string;
  120: string;
  140: string;
  160: string;
}

interface GradientVariants {
  primary: string;
  dark: string;
  light: string;
  focus: string;
}

interface TransparentVariants {
  small: string;
  big: string;
}

interface NftVariants {
  bold: {
    silver: string;
    amber: string;
    mint: string;
    copper: string;
  };
  subtle: {
    teal: string;
    silver: string;
    amber: string;
    mint: string;
  };
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    yellow: string;
    green: string;
    purple: string;
    blue: string;
    orange: string;
    red: string;
    neutral: string;
    success: string;
    warning: string;
    warning2: string;
    danger: string;
    info: string;
    accentPurple: string;
    accentCyan: string;
    gradient: string;
    transparent: string;
  }

  interface Palette {
    yellow: PaletteColorVariants;
    green: PaletteColorVariants;
    purple: PaletteColorVariants;
    blue: PaletteColorVariants;
    orange: PaletteColorVariants;
    red: PaletteColorVariants;
    neutral: NeutralColorVariants;
    success: PaletteColor;
    warning: PaletteColor;
    warning2: PaletteColor;
    danger: PaletteColor;
    info: PaletteColor;
    accentPurple: PaletteColor;
    accentCyan: PaletteColor;
    gradient: GradientVariants;
    transparent: TransparentVariants;
    nft: NftVariants;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    yellow: PaletteColorVariants;
    green: PaletteColorVariants;
    purple: PaletteColorVariants;
    blue: PaletteColorVariants;
    orange: PaletteColorVariants;
    red: PaletteColorVariants;
    neutral: NeutralColorVariants;
    success?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    warning2?: PaletteColorOptions;
    danger: PaletteColorOptions;
    info?: PaletteColorOptions;
    accentPurple: PaletteColorOptions;
    accentCyan: PaletteColorOptions;
    gradient: GradientVariants;
    transparent: TransparentVariants;
    nft: NftVariants;
  }
}

declare module "@mui/material" {
  interface Color {
    yellow: true;
    green: true;
    purple: true;
    blue: true;
    orange: true;
    red: true;
    success: true;
    warning: true;
    warning2: true;
    danger: true;
    info: true;
    accentPurple: true;
    accentCyan: true;
    gradient: true;
    transparent: true;
  }
}

const yellow: PaletteColorVariants = {
  0: "",
  40: "#FAF6E5",
  60: "#FAE9A5",
  80: "#F2CE3F",
  100: "#E8BA00",
  120: "#AC8C0C",
  140: "#7E6501",
  160: "#1F1900",
};

const green: PaletteColorVariants = {
  0: "",
  40: "#E8FCF5",
  60: "#C3FAE5",
  80: "#79F2C4",
  100: "#46EBAC",
  120: "#15C17F",
  140: "#00945B",
  160: "#062218",
};

const purple: PaletteColorVariants = {
  0: "#5F0E82",
  40: "#FAF0FF",
  60: "#F2DEFA",
  80: "#E0B6F2",
  100: "#D299EB",
  120: "#A76DC0",
  140: "#764B91",
  160: "#260C31",
};

const blue: PaletteColorVariants = {
  0: "#3AB2E6",
  40: "#EBF9FF",
  60: "#D2EEFA",
  80: "#9BD8F2",
  100: "#76C8EB",
  120: "#38A0CC",
  140: "#197AA3",
  160: "#00202E",
};

const orange: PaletteColorVariants = {
  0: "#EA8543",
  40: "",
  60: "",
  80: "",
  100: "",
  120: "",
  140: "",
  160: "",
};

const red: PaletteColorVariants = {
  0: "",
  40: "#FFF2F2",
  60: "#FAE1E1",
  80: "#F2B8B8",
  100: "#EB9B9B",
  120: "#C36969",
  140: "#8F4D4D",
  160: "#2E0F0F",
};

const neutral: NeutralColorVariants = {
  0: "#FAFCFB",
  20: "#EBF0ED",
  40: "#C9D1CD",
  60: "#8B948F",
  80: "#505753",
  100: "#1A201E",
  120: "#0E1713",
  140: "#0C1210",
  160: "#070D0A",
};

const success = { main: "#46EB80" };
const warning = { main: "#EBCA47" };
const warning2 = { main: "#EB9147" };
const danger = { main: "#EB4646" };
const info = { main: "#46BAEB" };
const accentPurple = { main: "#5F0E82" };
const accentCyan = { main: "#2BFFFF", dark: "#1A9999" };

const gradient: GradientVariants = {
  primary: "linear-gradient(180deg, #2BFFFF 0%, #1A9999 100%)",
  dark: "linear-gradient(99.78deg, #220030 0%, rgba(0, 32, 46, 0.5) 100%)",
  light: "linear-gradient(99.78deg, #EDDEF3 0%, #D8EFF9 100%)",
  focus: "linear-gradient(99.78deg, #00FF9E 0%, #B200FF 100%)",
};

const transparent: TransparentVariants = {
  small: "#070D0AE5",
  big: "#EBF0ED54",
};

const nft: NftVariants = {
  bold: {
    silver: "#AAB9BF",
    amber: "#E5BE00",
    mint: "#4EEBAF",
    copper: "#c88f5a",
  },
  subtle: {
    teal: "#E5FDFF",
    silver: "#EBFAFF",
    amber: "#FAF7E5",
    mint: "#E8FCF5",
  },
};

const palette: PaletteOptions = {
  yellow,
  green,
  purple,
  blue,
  orange,
  red,
  neutral,
  success,
  warning,
  warning2,
  danger,
  info,
  accentPurple,
  accentCyan,
  gradient,
  transparent,
  nft,
} as const;

export default palette;
