"use client";

import { LiveCountdown } from "@/components";
import { compactNumber, formatDuration } from "@/lib/utils";
import { ETimeframe } from "@/types/timeframe.types";
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

interface ISellerCard {
  imageUrl: string;
  title: string;
  priceInUsd: number;
  adTypeInSeconds: number;
  views: number;
  viewTimeframe: ETimeframe;
  endDate: number;
}

export const SellerCard = ({
  imageUrl,
  title,
  priceInUsd,
  adTypeInSeconds,
  views,
  viewTimeframe,
  endDate,
}: ISellerCard) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
          <PropItem item xs={5}>
            <PropLabel>Price</PropLabel>
            <PropValue component={"div"}>
              ${priceInUsd}
              <Typography
                variant="button"
                component={"span"}
                color={theme.palette.neutral[20]}
              >
                USD
              </Typography>
            </PropValue>
          </PropItem>
          <PropItem item xs={3.5}>
            <PropLabel>Ad Type</PropLabel>
            <PropValue>{formatDuration(adTypeInSeconds)}</PropValue>
          </PropItem>
          <PropItem item xs={3.5}>
            <PropLabel>{viewTimeframe} Views</PropLabel>
            <PropValue>{compactNumber(views)}</PropValue>
          </PropItem>
        </Grid>

        {endDate > 0 && (
          <Box
            sx={{
              width: "100%",
              borderRadius: theme.spacing(1),
              background: theme.palette.neutral[120],
              padding: theme.spacing(2),
              alignSelf: "center",
            }}
          >
            <LiveCountdown endDate={endDate} showSeconds={false} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
