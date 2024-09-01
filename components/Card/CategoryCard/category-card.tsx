"use client";

import { SellerCategory } from "@/types/categories.types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface ICategoryCard {
  title: string;
  colored: string;
  onClick: (category: SellerCategory) => void;
  selected: boolean;
}

export const CategoryCard = ({
  title,
  colored,
  selected,
  onClick,
}: ICategoryCard) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    onClick(title as SellerCategory);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "256px",
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        ":hover": {
          transform: "scale(1.02)",
          transition: "transform 0.6s",
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      onClick={handleClick}
    >
      <Image
        src={colored}
        alt="category streamer colored"
        style={{
          height: "256px",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          transition: "filter 0.6s",
          filter: selected
            ? "none"
            : !isHovered
            ? "grayscale(100%) brightness(60%)"
            : "grayscale(100%) brightness(100%)",
        }}
      />
      <Typography
        sx={(theme) => ({
          ...theme.typography.base.md,
          position: "absolute",
          bottom: theme.spacing(2),
          left: 0,
          right: 0,
          textAlign: "center",
          color: theme.palette.neutral[0],
        })}
      >
        {title}
      </Typography>
    </Box>
  );
};
