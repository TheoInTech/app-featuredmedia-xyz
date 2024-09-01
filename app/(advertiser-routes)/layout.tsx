import { Box } from "@mui/material";
import { ReactNode } from "react";

const AdvertiserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box position={"relative"}>
      <Box sx={{ height: "88px" }} />
      {children}
    </Box>
  );
};

export default AdvertiserLayout;
