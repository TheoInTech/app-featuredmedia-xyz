import { Stack, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  sx?: SxProps;
}

export const Container = ({ children, sx }: IContainer) => {
  return (
    <Stack
      component="main"
      sx={{
        display: "flex",
        margin: "0 auto",
        width: { xs: "100%" },
        boxSizing: "border-box",
        position: "relative",
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
};
