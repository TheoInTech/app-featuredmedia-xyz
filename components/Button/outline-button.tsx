"use client";

import { Button, ButtonProps, styled, useTheme } from "@mui/material";
import { ReactNode } from "react";

type OutlineButtonColor = "gray" | "white";

const ColorButton = styled(Button)<
  ButtonProps & { preset: OutlineButtonColor }
>(({ theme, preset }) => {
  switch (preset) {
    case "white":
    default:
      return {
        color: theme.palette.neutral[0],
        border: `1px solid ${theme.palette.neutral[100]}`,
        background: "transparent",
        "&:hover:not(:disabled)": {
          background: "transparent",
          color: theme.palette.neutral[0],
          border: `1px solid ${theme.palette.neutral[80]}`,
        },
        "&:active:not(:disabled)": {
          background: "transparent",
          color: theme.palette.neutral[0],
          border: `1px solid ${theme.palette.neutral[120]}`,
        },
        "&:disabled": {
          opacity: 0.5,
          background: "transparent",
          color: theme.palette.neutral[0],
          border: `1px solid ${theme.palette.neutral[100]}`,
        },
      };
  }
});

interface IOutlineButton extends ButtonProps {
  children: ReactNode;
  preset?: OutlineButtonColor;
  rounded?: boolean;
}

export const OutlineButton = ({
  children,
  preset = "white",
  rounded = false,
  ...rest
}: IOutlineButton) => {
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
