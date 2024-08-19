"use client";

import { PATH } from "@/constants/paths";
import { Stack } from "@mui/material";
import { redirect } from "next/navigation";
import { useEffect } from "react";

// This page cannot be accessed directly, it's a pass-through for the creator ID page
const CreatorPage = () => {
  useEffect(() => {
    redirect(PATH.marketplace);
  }, []);

  return (
    <Stack
      sx={(theme) => ({
        ...theme.typography.base.lg,
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      })}
    >
      Redirecting you to marketplace...
    </Stack>
  );
};

export default CreatorPage;
