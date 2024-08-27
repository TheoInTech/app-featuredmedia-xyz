"use client";

import { PATH, replacePathKeys } from "@/constants/paths";
import { Stack } from "@mui/material";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

// This page cannot be accessed directly, it's a pass-through for the creator ID page
const ItemPage = () => {
  const pathname = usePathname();
  const creatorId = pathname.split("/")[2];

  useEffect(() => {
    redirect(
      replacePathKeys(PATH.marketplace, {
        creatorId,
      })
    );
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
      Redirecting you to creator&apos;s page...
    </Stack>
  );
};

export default ItemPage;
