"use client";

import { compactNumber } from "@/lib/utils";
import { SellerCategory } from "@/types/categories.types";
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
  username: string;
  totalFollowerCount: number;
  category: SellerCategory;
  views: number;
  viewTimeframe: ETimeframe;
}

export const SellerCard = ({
  imageUrl,
  username,
  totalFollowerCount,
  category,
  views,
  viewTimeframe,
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
          title={username}
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
          {username}
        </Typography>

        <Grid container>
          <PropItem item xs={6}>
            <PropLabel>Category</PropLabel>
            <PropValue>{category}</PropValue>
          </PropItem>
          <PropItem item xs={3}>
            <PropLabel>Followers</PropLabel>
            <PropValue component={"div"}>
              {compactNumber(totalFollowerCount)}
            </PropValue>
          </PropItem>
          <PropItem item xs={3}>
            <PropLabel>{viewTimeframe} Views</PropLabel>
            <PropValue>{compactNumber(views)}</PropValue>
          </PropItem>
        </Grid>
      </CardContent>
    </Card>
  );
};
