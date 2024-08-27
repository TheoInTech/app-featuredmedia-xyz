"use client";

import { LiveCountdown } from "@/components";
import { compactNumber, formatDuration } from "@/lib/utils";
import { AdStatus, AdType } from "@/types/ad-slots.types";
import { PricingType } from "@/types/pricing-types.types";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  styled,
  Typography,
  TypographyProps,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const PropItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(0.5),
}));

const PropLabel = styled(Typography)(({ theme }) => ({
  ...theme.typography.base.xs,
  color: theme.palette.neutral[60],
}));

const PropValue = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.button,
  color: theme.palette.neutral[0],
  display: "flex",
  alignItems: "center",
  columnGap: theme.spacing(0.25),
}));

interface IAdSlotCard {
  imageUrl: string;
  title: string;
  adType: AdType;
  adDuration: number;
  basePriceInUsd: number;
  pricingType: PricingType;
  biddingStartDate: number;
  biddingEndDate: number;
  tradingStartDate: number;
  tradingEndDate: number;
  contentStartDate: number;
  contentEndDate: number;
}

export const AdSlotCard = ({
  imageUrl,
  title,
  adType,
  adDuration,
  basePriceInUsd,
  pricingType,
  biddingStartDate,
  biddingEndDate,
  tradingStartDate,
  tradingEndDate,
  contentStartDate,
  contentEndDate,
}: IAdSlotCard) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const currentTime = new Date().getTime() / 1000; // in seconds
  const adStatus =
    currentTime < biddingEndDate
      ? AdStatus.BIDDING
      : currentTime < tradingEndDate
      ? AdStatus.TRADING
      : currentTime < contentEndDate
      ? AdStatus.CONTENT
      : undefined;
  const endDate =
    adStatus === AdStatus.BIDDING
      ? biddingEndDate
      : adStatus === AdStatus.TRADING
      ? tradingEndDate
      : contentEndDate;

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Card
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{
        height: "100%",
        color: theme.palette.neutral[0],
        background: theme.palette.neutral[100],
        borderRadius: theme.spacing(2),
        rowGap: theme.spacing(4),

        "&:hover .MuiCardMedia-root": {
          transition: "transform ease 0.3s",
          transform: "scale(1.05)",
        },
      }}
    >
      <Box sx={{ height: 200 }}>
        <CardMedia
          sx={{
            height: "100%",
          }}
          image={imageUrl}
          title={title}
        />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: theme.spacing(3),
        }}
      >
        <Typography sx={theme.typography.base.md} component="div">
          {title}
        </Typography>

        <Grid container>
          <PropItem item xs={6}>
            <PropLabel>Base Price</PropLabel>
            <PropValue>${compactNumber(basePriceInUsd)}</PropValue>
          </PropItem>
          <PropItem item xs={3}>
            <PropLabel>Ad Type</PropLabel>
            <PropValue component={"div"}>{adType}</PropValue>
          </PropItem>
          <PropItem item xs={3}>
            <PropLabel>Ad Duration</PropLabel>
            <PropValue>{formatDuration(adDuration)}</PropValue>
          </PropItem>
        </Grid>

        {!!adStatus && (
          <Box
            sx={{
              width: "100%",
              borderRadius: theme.spacing(1),
              background: theme.palette.neutral[120],
              padding: theme.spacing(2),
              alignSelf: "center",
            }}
          >
            <LiveCountdown
              endDate={endDate}
              showSeconds={false}
              status={adStatus}
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
