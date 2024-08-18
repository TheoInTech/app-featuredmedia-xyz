"use client";

import { Box, keyframes, styled, useTheme } from "@mui/material";

export type BadgeVariant =
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "neutral";

const InnerCircle = styled(Box)(() => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  margin: "auto",
}));

const OuterCircle = styled(Box)(() => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  margin: "auto",
}));

const PulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    transform: scale(2);
    opacity: 0.4;
  }
  75% {
    opacity: 0.25;
  }
  100% {
    transform: scale(1.25);
    opacity: 0;
  }
`;

export interface IBadge {
  variant?: BadgeVariant;
  shouldAnimate?: boolean;
  badgeColor?: string;
}

export const Badge = ({
  variant,
  shouldAnimate = true,
  badgeColor,
}: IBadge) => {
  const theme = useTheme();

  let bgcolor;
  switch (variant) {
    case "info":
      bgcolor = theme.palette.info.main;
      break;
    case "success":
      bgcolor = theme.palette.success.main;
      break;
    case "warning":
      bgcolor = theme.palette.warning.main;
      break;
    case "danger":
      bgcolor = theme.palette.danger.main;
      break;
    case "neutral":
    default:
      bgcolor = theme.palette.neutral[0];
      break;
  }

  return (
    <Box sx={{ position: "relative", width: "16px", height: "16px" }}>
      <OuterCircle
        sx={{
          bgcolor: badgeColor || bgcolor,
          animation: shouldAnimate ? `${PulseAnimation} 1.5s infinite` : null,
          animationDelay: 0,
        }}
      ></OuterCircle>
      <InnerCircle sx={{ bgcolor: badgeColor || bgcolor }} />
    </Box>
  );
};
