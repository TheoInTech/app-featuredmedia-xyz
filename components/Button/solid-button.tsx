"use client";

import { Button, ButtonProps, styled, useTheme } from "@mui/material";
import { ReactNode } from "react";

type SolidButtonColor = "gray" | "white";

const ColorButton = styled(Button)<ButtonProps & { preset: SolidButtonColor }>(
  ({ theme, preset }) => {
    switch (preset) {
      case "white":
        return {
          color: theme.palette.neutral[140],
          background: theme.palette.neutral[0],
          "&:hover:not(:disabled)": {
            color: theme.palette.neutral[120],
            background: theme.palette.neutral[0],
          },
          "&:active:not(:disabled)": {
            color: theme.palette.neutral[140],
            background: theme.palette.neutral[0],
          },
          "&:disabled": {
            opacity: 0.5,
            color: theme.palette.neutral[140],
            background: theme.palette.neutral[0],
          },
        };

      case "gray":
      default:
        return {
          color: theme.palette.neutral[0],
          background: theme.palette.neutral[100],
          "&:hover:not(:disabled)": {
            color: theme.palette.neutral[0],
            background: theme.palette.neutral[80],
          },
          "&:active:not(:disabled)": {
            color: theme.palette.neutral[0],
            background: theme.palette.neutral[120],
          },
          "&:disabled": {
            opacity: 0.5,
            color: theme.palette.neutral[0],
            background: theme.palette.neutral[100],
          },
        };
    }
  }
);

interface ISolidButton extends ButtonProps {
  children: ReactNode;
  preset?: SolidButtonColor;
  rounded?: boolean;
}

export const SolidButton = ({
  children,
  preset = "white",
  rounded = false,
  ...rest
}: ISolidButton) => {
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
