"use client";

import {
  IconButton as Base,
  ButtonProps,
  SxProps,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";

interface IIconButton extends ButtonProps {
  children: ReactNode;
  sx?: SxProps;
}

export const IconButton = ({ children, sx, ...rest }: IIconButton) => {
  const theme = useTheme();
  return (
    <Base
      sx={{
        padding: 0,
        borderRadius: "12px",
        color: theme.palette.neutral[40],
        "&:hover": {
          background: "transparent",
          "&.MuiButton-text": {
            color: theme.palette.neutral[80],
          },
          "& path": {
            fill: theme.palette.neutral[80],
          },
        },
        "&:focus": {
          "&.MuiButton-text": {
            color: theme.palette.neutral[120],
          },
          background: "transparent",

          "& path": {
            fill: theme.palette.neutral[120],
          },
        },
        "&:disabled": {
          color: theme.palette.neutral[60],
          opacity: 0.5,
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Base>
  );
};
