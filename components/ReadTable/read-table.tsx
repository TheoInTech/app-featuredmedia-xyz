"use client";

import { Box, Stack, SxProps, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface IReadTableHeader {
  children: ReactNode;
  sx?: SxProps;
}

export const ReadTableHeader = ({ children, sx }: IReadTableHeader) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderTopLeftRadius: theme.spacing(2),
        borderTopRightRadius: theme.spacing(2),
        border: `1px solid ${theme.palette.neutral[100]}`,
        borderBottom: "none",
        padding: theme.spacing(2),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

interface IReadTableContent {
  children: ReactNode;
  sx?: SxProps;
}

export const ReadTableContent = ({ children, sx }: IReadTableContent) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderBottomLeftRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        border: `1px solid ${theme.palette.neutral[100]}`,
        padding: theme.spacing(2),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

interface IReadTable {
  children: ReactNode;
  sx?: SxProps;
}

export const ReadTable = ({ children, sx }: IReadTable) => {
  return (
    <Stack
      sx={{
        width: "100%",
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
};
