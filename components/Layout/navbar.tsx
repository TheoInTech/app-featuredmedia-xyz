"use client";

import { Icon, UserTypeTabs } from "@/components";
import { PATH } from "@/constants/paths";
import { useStore } from "@/store";
import { UserType } from "@/types/user-types.types";
import {
  alpha,
  IconButton as BaseIconButton,
  Stack,
  styled,
  Typography,
  TypographyProps,
  useTheme,
} from "@mui/material";
import { ConnectButton } from "arweave-wallet-kit";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IMenuLink extends TypographyProps {
  isActive?: boolean;
}

const MenuLink = styled(Typography)<IMenuLink>(
  ({ theme, isActive = false }) => ({
    ...theme.typography.body1,
    fontWeight: 600,
    color: isActive ? theme.palette.success.main : theme.palette.neutral[0],
    "&:hover": {
      color: !isActive && theme.palette.neutral[20],
    },
  })
);

const IconButton = styled(BaseIconButton)({
  padding: 0,
});

export const Navbar = () => {
  const theme = useTheme();
  const router = useRouter();
  const { setActiveUserType, activeUserType } = useStore();

  const handleToggleUserType = () => {
    setActiveUserType(
      activeUserType === UserType.BUYER ? UserType.SELLER : UserType.BUYER
    );

    router.push(
      activeUserType === UserType.BUYER
        ? PATH.marketplace
        : PATH.creatorHubDashboard
    );
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "120px",
        position: "fixed",
        top: 0,
        zIndex: 99999999,
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          padding: theme.spacing(1),
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: theme.spacing(2),
          background: theme.palette.neutral[140],
        }}
      >
        {/* Left navbar */}
        <Stack
          sx={{
            flexDirection: "row",
            columnGap: theme.spacing(2),
            alignItems: "center",
          }}
        >
          <Link href={PATH.marketplace}>
            <Image
              src="/assets/logo.png"
              alt="Featured Media Logo"
              width={981}
              height={339}
              style={{
                maxWidth: "120px",
                height: "auto",
              }}
            />
          </Link>
          <UserTypeTabs
            onChange={handleToggleUserType}
            userType={activeUserType}
          />

          {/* Buyer Menu */}
          {activeUserType === UserType.BUYER && (
            <Stack flexDirection={"row"} columnGap={3}>
              <Link href={PATH.marketplace}>
                <MenuLink>Discover</MenuLink>
              </Link>
              {/* TODO: Add more menu */}
            </Stack>
          )}

          {/* Seller Menu */}
          {activeUserType === UserType.SELLER && (
            <Stack flexDirection={"row"} columnGap={3}>
              <Link href={PATH.creatorHubDashboard}>
                <MenuLink>Dashboard</MenuLink>
              </Link>
              {/* TODO: Add more menu */}
            </Stack>
          )}
        </Stack>

        {/* Right navbar */}
        <Stack
          sx={{
            flexDirection: "row",
            columnGap: theme.spacing(2),
            alignItems: "center",
            "> button": {
              ...theme.typography.button,
              color: theme.palette.neutral[160],
              height: "40px",
              fontWeight: 700,
              background: theme.palette.gradient.primary,
            },
          }}
        >
          <ConnectButton showBalance={true} />
        </Stack>
      </Stack>

      {activeUserType === UserType.BUYER && (
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            borderBottom: `1px solid ${alpha(theme.palette.neutral[80], 0.25)}`,
            borderTop: `1px solid ${alpha(theme.palette.neutral[80], 0.25)}`,
            background: theme.palette.neutral[140],
            columnGap: theme.spacing(1),
          }}
        >
          <Stack
            sx={{
              ...theme.typography.button,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              background: theme.palette.neutral[140],
              columnGap: theme.spacing(1),
              padding: theme.spacing(1),
            }}
          >
            <Icon name="all-platforms" height={24} width={24} color="#25D9D9" />
            All Platforms
          </Stack>

          <Stack
            sx={{
              flexDirection: "row",
              columnGap: theme.spacing(1),
              alignItems: "center",
            }}
          >
            <IconButton>
              <Icon name="glow-kick" height={36} width={36} />
            </IconButton>
            <IconButton>
              <Icon name="glow-youtube" height={36} width={36} />
            </IconButton>
            <IconButton>
              <Icon name="glow-tiktok" height={36} width={36} />
            </IconButton>
            <IconButton>
              <Icon name="glow-twitter" height={36} width={36} />
            </IconButton>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
