"use client";

import { Icon, PageProgressBar, UserTypeTabs } from "@/components";
import { PATH } from "@/constants/paths";
import { useStore } from "@/store";
import { UserType } from "@/types/user-types.types";
import { AddCircle as AddCircleIcon } from "@mui/icons-material";
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
import { usePathname, useRouter } from "next/navigation";
import { SyntheticEvent, useEffect } from "react";

interface IMenuLink extends TypographyProps {
  isActive?: boolean;
}

const MenuLink = styled(Typography)<IMenuLink>(
  ({ theme, isActive = false }) => ({
    ...theme.typography.body1,
    fontWeight: 600,
    color: isActive ? theme.palette.success.main : theme.palette.neutral[0],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: theme.spacing(0.5),
    "&:hover": {
      color: !isActive && theme.palette.neutral[40],
    },
  })
);

const IconButton = styled(BaseIconButton)({
  padding: 0,
});

export const Navbar = () => {
  const theme = useTheme();
  const router = useRouter();
  const currentPath = usePathname();
  const { setActiveUserType, activeUserType } = useStore();

  const handleToggleUserType = (event: SyntheticEvent, newValue: UserType) => {
    event.preventDefault();
    router.push(
      newValue === UserType.SELLER ? PATH.creatorHubDashboard : PATH.marketplace
    );
  };

  useEffect(() => {
    if (!currentPath) return;

    currentPath.includes(PATH.creatorHub)
      ? setActiveUserType(UserType.SELLER)
      : setActiveUserType(UserType.BUYER);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

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
      <Stack position="relative">
        <Stack
          sx={{
            flexDirection: "row",
            padding: theme.spacing(1),
            alignItems: "center",
            justifyContent: "space-between",
            columnGap: theme.spacing(2),
            background: theme.palette.neutral[160],
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
          </Stack>

          {/* Buyer Menu */}
          {activeUserType === UserType.BUYER && (
            <Stack flexDirection={"row"} columnGap={3}>
              <Link href={PATH.marketplace}>
                <MenuLink isActive={currentPath === PATH.marketplace}>
                  Discover
                </MenuLink>
              </Link>
              <Link href={PATH.topCreators}>
                <MenuLink isActive={currentPath === PATH.topCreators}>
                  Top Creators
                </MenuLink>
              </Link>
              {/* TODO: Add more menu */}
            </Stack>
          )}

          {/* Seller Menu */}
          {activeUserType === UserType.SELLER && (
            <Stack
              sx={{
                flexDirection: "row",
                columnGap: theme.spacing(3),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link href={PATH.creatorHubListings}>
                <MenuLink component={"div"}>
                  <AddCircleIcon
                    sx={{
                      height: 16,
                      width: 16,
                    }}
                  />
                  Create Ad Slot
                </MenuLink>
              </Link>
              {/* TODO: Add more menu */}
            </Stack>
          )}

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
              borderBottom: `1px solid ${alpha(
                theme.palette.neutral[80],
                0.25
              )}`,
              borderTop: `1px solid ${alpha(theme.palette.neutral[80], 0.25)}`,
              background: theme.palette.neutral[160],
              columnGap: theme.spacing(1),
            }}
          >
            <Stack
              sx={{
                ...theme.typography.button,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                background: theme.palette.neutral[160],
                columnGap: theme.spacing(1),
                padding: theme.spacing(1),
              }}
            >
              <Icon
                name="all-platforms"
                height={24}
                width={24}
                color="#25D9D9"
              />
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
        <PageProgressBar />
      </Stack>
    </Stack>
  );
};
