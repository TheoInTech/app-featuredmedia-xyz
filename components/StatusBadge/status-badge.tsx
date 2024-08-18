"use client";

import { Badge } from "@/components";
import { IBadge } from "@/components/Badge/badge";
import { Stack, SxProps, Typography, styled } from "@mui/material";

interface IStatusBadge {
  badgeProps: IBadge;
  status: string;
  sx?: SxProps;
}

const StatusTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.button,
}));

export const StatusBadge = ({ badgeProps, status, sx }: IStatusBadge) => {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyItems={"center"}
      columnGap={0.5}
    >
      <Badge {...badgeProps} />
      {status.length > 0 && (
        <StatusTypography sx={sx}>{status}</StatusTypography>
      )}
    </Stack>
  );
};
