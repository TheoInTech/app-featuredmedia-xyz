"use client";

import { Button, ButtonProps, SxProps, styled } from "@mui/material";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

const HelperLinkButton = styled(Button)(({ theme }) => ({
  ...theme.typography.base.link,
  padding: 0,
  color: theme.palette.neutral[40],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(0.5),
  background: "transparent !important",
  textDecoration: "none",

  "&:hover": {
    color: theme.palette.neutral[80],
    background: "transparent",
    textDecoration: "none",
    "& path": {
      fill: theme.palette.neutral[80],
    },
  },
  "&:focus": {
    color: theme.palette.neutral[120],
    background: "transparent",
    textDecoration: "none",

    "& path": {
      fill: theme.palette.neutral[120],
    },
  },
}));

interface IHelperLink extends ButtonProps {
  children: ReactNode;
  href: string;
  target?: string;
  linkProps?: LinkProps;
  sx?: SxProps;
}

export const HelperLink = ({
  href,
  linkProps,
  children,
  target,
  sx,
  ...rest
}: IHelperLink) => {
  return (
    <Link {...linkProps} href={href} target={target}>
      <HelperLinkButton variant="text" sx={sx} {...rest}>
        {children}
      </HelperLinkButton>
    </Link>
  );
};
