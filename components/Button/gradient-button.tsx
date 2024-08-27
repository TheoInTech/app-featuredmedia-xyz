"use client";

import { Button, ButtonProps, styled, useTheme } from "@mui/material";
import { ReactNode } from "react";

type GradientButtonColor = "primary";

const ColorButton = styled(Button)<
  ButtonProps & { preset: GradientButtonColor }
>(({ theme, preset }) => {
  switch (preset) {
    case "primary":
    default:
      return {
        color: theme.palette.neutral[160],
        background: theme.palette.gradient.primary,
        "&:hover:not(:disabled)": {
          opacity: 1.05,
          color: theme.palette.neutral[100],
          background: theme.palette.gradient.primary,
        },
        "&:active:not(:disabled)": {
          opacity: 0.95,
          color: theme.palette.neutral[180],
          background: theme.palette.gradient.primary,
        },
        "&:disabled": {
          opacity: 0.5,
          color: theme.palette.neutral[160],
          background: theme.palette.gradient.primary,
        },
      };
  }
});

interface IGradientButton extends ButtonProps {
  children: ReactNode;
  preset?: GradientButtonColor;
  rounded?: boolean;
}

export const GradientButton = ({
  children,
  preset = "primary",
  rounded = false,
  ...rest
}: IGradientButton) => {
  const theme = useTheme();
  return (
    <ColorButton
      variant="contained"
      preset={preset}
      sx={{
        borderRadius: rounded ? theme.spacing(4) : theme.spacing(1),
        padding: theme.spacing(1, 2.5),
      }}
      {...rest}
    >
      {children}
    </ColorButton>
  );
};
