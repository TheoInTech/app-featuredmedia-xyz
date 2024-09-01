"use client";

import { HelperLink as BaseHelperLink, IHelperLink } from "@/components";
import { PATH } from "@/constants/paths";
import { alpha, Stack, styled, Typography, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";

const HelperLink = styled(BaseHelperLink)<IHelperLink & { isActive: boolean }>(
  ({ theme, isActive }) => ({
    ...theme.typography.base.sm,
    justifyContent: "flex-start",
    fontWeight: 600,
    color: isActive ? theme.palette.neutral[20] : theme.palette.neutral[60],
    background: isActive ? theme.palette.neutral[140] : "transparent",
    padding: theme.spacing(2, 4),
    borderRadius: theme.spacing(4),
    width: "100%",

    "&:focus, &:active": {
      color: isActive ? theme.palette.neutral[20] : theme.palette.neutral[60],
      background: isActive ? theme.palette.neutral[140] : "transparent",
    },
  })
);

export const CreatorSidebar = () => {
  const theme = useTheme();
  const pathname = usePathname();

  return (
    <Stack
      sx={{
        position: "fixed",
        top: theme.spacing(11),
        left: theme.spacing(2),
        padding: theme.spacing(4, 2, 4, 0),
        rowGap: theme.spacing(2),
        background: alpha(theme.palette.neutral[140], 0.5),
        borderRadius: theme.spacing(2),
        width: "fit-content",
      }}
    >
      <Typography
        sx={{
          ...theme.typography.button,
          color: theme.palette.neutral[80],
          padding: theme.spacing(0, 4),
        }}
      >
        Manage Listings
      </Typography>
      <Stack
        sx={{
          rowGap: theme.spacing(2),
          padding: theme.spacing(0, 4),
        }}
      >
        <HelperLink
          href={PATH.creatorHubDashboard}
          isActive={pathname.includes("dashboard")}
        >
          Dashboard
        </HelperLink>
        <HelperLink
          href={PATH.creatorHubListings}
          isActive={pathname.includes("listings")}
        >
          Your Listings
        </HelperLink>
        <HelperLink
          href={PATH.creatorHubPoints}
          isActive={pathname.includes("points")}
        >
          VIP Points
        </HelperLink>
        <HelperLink
          href={PATH.creatorHubPayouts}
          isActive={pathname.includes("payouts")}
        >
          Payouts
        </HelperLink>
      </Stack>
      <Typography
        sx={{
          ...theme.typography.button,
          color: theme.palette.neutral[80],
          padding: theme.spacing(0, 4),
        }}
      >
        Profile settings
      </Typography>
      <Stack
        sx={{
          rowGap: theme.spacing(2),
          padding: theme.spacing(0, 4),
        }}
      >
        <HelperLink
          href={PATH.creatorHubAccountDetails}
          isActive={pathname.includes("account-details")}
        >
          Account Details
        </HelperLink>
        <HelperLink
          href={PATH.creatorHubSocials}
          isActive={pathname.includes("socials")}
        >
          Socials
        </HelperLink>
        <HelperLink
          href={PATH.creatorHubSecurity}
          isActive={pathname.includes("security")}
        >
          Security
        </HelperLink>
      </Stack>
    </Stack>
  );
};
