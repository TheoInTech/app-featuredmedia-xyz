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
        transition: "all 0.3s ease-in-out",
        "&:hover:not(:disabled)": {
          filter: "brightness(1.1)",
          color: theme.palette.neutral[100],
          background: theme.palette.gradient.primary,
        },
        "&:active:not(:disabled)": {
          filter: "brightness(0.95)",
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
