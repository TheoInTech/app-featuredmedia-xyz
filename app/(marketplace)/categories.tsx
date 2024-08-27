"use client";

import { CategoryCard } from "@/components";
import { useMarketplace } from "@/hooks/useMarketplace";
import { CATEGORIES, SellerCategory } from "@/types/categories.types";
import { Stack, useTheme } from "@mui/material";

export const Categories = () => {
  const theme = useTheme();
  const { selectedSellerCategory, setSelectedSellerCategory } =
    useMarketplace();

  const handleCategoryClick = (category: SellerCategory) => {
    setSelectedSellerCategory(category);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        flexDirection: "row",
        columnGap: theme.spacing(4),
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {CATEGORIES.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          colored={category.colored}
          selected={selectedSellerCategory === category.title}
          onClick={handleCategoryClick}
        />
      ))}
    </Stack>
  );
};
