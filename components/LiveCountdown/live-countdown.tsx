"use client";

import { StatusBadge } from "@/components";
import { AdStatus } from "@/types/ad-slots.types";
import { Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

interface ILiveCountdown {
  endDate: number; // Assuming endDate is a timestamp
  showSeconds?: boolean;
  status?: AdStatus;
}

export const LiveCountdown = ({
  endDate,
  showSeconds = true,
  status,
}: ILiveCountdown) => {
  const theme = useTheme();
  const currentTime = new Date().getTime() / 1000; // in seconds
  const hasEnded = currentTime >= endDate;

  const calculateTimeLeft = () => {
    const difference = endDate - currentTime; // Both endDate and now are in seconds

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
        status={
          status
            ? `${status} ${hasEnded ? "Ended" : "Live"}`
            : `${hasEnded ? "Ended" : "Live"}`
        }
        badgeProps={{
          variant: hasEnded ? "danger" : "success",
          shouldAnimate: !hasEnded,
        }}
        sx={{
          color: hasEnded
            ? theme.palette.danger.main
            : theme.palette.success.main,
        }}
      />
      {!hasEnded && (
        <Stack flexDirection={"row"} columnGap={1}>
          <Typography variant="button" color={theme.palette.neutral[60]}>
            ends:
          </Typography>
          <Typography variant="button" color={theme.palette.neutral[0]}>
            {formatTimeLeft()}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};
