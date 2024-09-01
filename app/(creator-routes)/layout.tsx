import { CreatorSidebar } from "@/components";
import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";

const CreatorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box position={"relative"}>
      <Box sx={{ height: "88px" }} />
      <CreatorSidebar />
      <Stack
        sx={{
          padding: "16px 16px 16px 288px",
        }}
      >
        {children}
      </Stack>
    </Box>
  );
};

export default CreatorLayout;
