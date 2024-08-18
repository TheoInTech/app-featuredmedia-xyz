"use client";

import { StatusBadge } from "@/components";
import { Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

interface ILiveCountdown {
  endDate: number; // Assuming endDate is a timestamp
  showSeconds?: boolean;
}

export const LiveCountdown = ({
  endDate,
  showSeconds = true,
}: ILiveCountdown) => {
  const theme = useTheme();

  const calculateTimeLeft = () => {
    const now = Math.floor(new Date().getTime() / 1000); // Convert now to seconds
    const difference = endDate - now; // Both endDate and now are in seconds

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (60 * 60 * 24)),
        hours: Math.floor((difference / (60 * 60)) % 24),
        minutes: Math.floor((difference / 60) % 60),
        seconds: Math.floor(difference % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const formatTimeLeft = () => {
    const padded = (unit: number) => unit.toString().padStart(2, "0");
    return `${padded(timeLeft.days)}d ${padded(timeLeft.hours)}h ${padded(
      timeLeft.minutes
    )}m ${showSeconds ? padded(timeLeft.seconds) + "s" : ""}`;
  };

  return (
    <Stack
      sx={{
        flexDirection: "row",
        columnGap: theme.spacing(2),
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBadge
        status="Live"
        badgeProps={{
          variant: "success",
        }}
        sx={{
          color: theme.palette.success.main,
        }}
      />
      <Stack flexDirection={"row"} columnGap={1}>
        <Typography variant="button" color={theme.palette.neutral[60]}>
          ends:
        </Typography>
        <Typography variant="button" color={theme.palette.neutral[0]}>
          {formatTimeLeft()}
        </Typography>
      </Stack>
    </Stack>
  );
};
