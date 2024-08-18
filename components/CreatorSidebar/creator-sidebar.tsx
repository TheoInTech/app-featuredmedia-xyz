"use client";

import { PATH } from "@/constants/paths";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";

export const CreatorSidebar = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        padding: theme.spacing(2),
      }}
    >
      <Typography
        sx={{
          ...theme.typography.button,
          color: theme.palette.neutral[20],
          padding: theme.spacing(0, 2),
        }}
      >
        Manage Listings
      </Typography>
      <Link href={PATH.creatorHubDashboard}>
        <Button>Dashboard</Button>
      </Link>
      CreatorSidebar
    </Stack>
  );
};
