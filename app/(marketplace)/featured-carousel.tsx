"use client";

import { LiveCountdown } from "@/components";
import {
  alpha,
  Box,
  Button,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

const FeaturedTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.neutral["0"],
}));

const ImageGradient = styled(Box)(({ theme }) => ({
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(180deg, ${alpha(
      theme.palette.neutral[60],
      0
    )} 0%, ${alpha(theme.palette.neutral[60], 0.8)} 80%, ${alpha(
      theme.palette.neutral[60],
      0.9
    )} 90%, ${alpha(theme.palette.neutral[60], 1)} 100%)`,
  },
}));

const FeaturedContent = styled(Stack)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(0),
  left: theme.spacing(0),
  width: "100%",
  padding: theme.spacing(8, 8, 4, 8),
  zIndex: 10,
  rowGap: theme.spacing(2),
}));

export const FeaturedCarousel = () => {
  const theme = useTheme();

  /**
   * TODO:
   * 1. Add the carousel
   * 2. Add animation to the carousel so it blurs in and out from content to content
   * */

  return (
    <Stack
      sx={{
        position: "relative",
      }}
    >
      <ImageGradient>
        <FeaturedContent>
          <FeaturedTitle>Juicy Slots Gaming Stream</FeaturedTitle>
          <Box
            sx={{
              width: "fit-content",
              borderRadius: theme.spacing(4),
              backgroundColor: "#66567633",
              padding: theme.spacing(2, 2.5, 2, 2),
              boxShadow: `0px 0px 16px 4px rgba(0, 0, 0, 0.25)`,
            }}
          >
            <LiveCountdown endDate={new Date().getTime() + 100000000} />
          </Box>
          <Typography sx={theme.typography.base.md} maxWidth={"500px"}>
            Get your Casino promoted on our stream twice per week with social
            media posts, Youtube stream, and Kick stream.
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: theme.spacing(4),
              width: "fit-content",
              padding: theme.spacing(2, 4),
              background: theme.palette.gradient.primary,
            }}
          >
            Join Auction
          </Button>
        </FeaturedContent>
        <img
          src="/assets/featured/1.png"
          alt="featured"
          style={{ height: "70vh", width: "100%", objectFit: "cover" }}
        />
      </ImageGradient>
    </Stack>
  );
};
