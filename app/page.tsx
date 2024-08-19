"use client";

import { SellerCard } from "@/components";
import { PATH, replacePathKeys } from "@/constants/paths";
import { useMarketplaceFilters } from "@/hooks/useMarketplaceFilters";
import { IExtendedAdSlot } from "@/types/ad-slots.types";
import { CATEGORIES, SellerCategory } from "@/types/categories.types";
import { ETimeframe } from "@/types/timeframe.types";
import { Close as CloseIcon } from "@mui/icons-material";
import {
  ButtonBase,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";

export const FilterButton = styled(ButtonBase)(({ theme }) => ({
  ...theme.typography.button,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.spacing(4),
  border: `1px solid ${theme.palette.neutral[100]}`,
  color: theme.palette.neutral[20],
  minWidth: "100px",
  padding: theme.spacing(1, 3),

  "&:hover": {
    backgroundColor: theme.palette.neutral[100],
    color: theme.palette.neutral[20],
  },
}));

const MarketplacePage = () => {
  const theme = useTheme();

  const { adSlots, selectedSellerCategory, setSelectedSellerCategory } =
    useMarketplaceFilters();

  const handleCategoryClick = (category: SellerCategory) => {
    setSelectedSellerCategory(category);
  };

  const handleClearFilters = () => {
    setSelectedSellerCategory(undefined);
  };

  return (
    <Stack rowGap={6} padding={8}>
      <Stack rowGap={4}>
        <Typography sx={theme.typography.display.heading}>
          Explore Creators
        </Typography>

        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* Filters */}
          <Stack flexDirection={"row"} columnGap={1}>
            {CATEGORIES.map((category) => (
              <FilterButton
                key={category.title}
                onClick={() =>
                  handleCategoryClick(category.title as SellerCategory)
                }
                sx={{
                  background:
                    selectedSellerCategory === category.title
                      ? theme.palette.gradient.primary
                      : theme.palette.neutral[100],
                  color:
                    selectedSellerCategory === category.title
                      ? theme.palette.neutral[160]
                      : theme.palette.neutral[20],
                  "&:hover": {
                    background:
                      selectedSellerCategory === category.title
                        ? theme.palette.gradient.primary
                        : theme.palette.neutral[80],
                    color:
                      selectedSellerCategory === category.title
                        ? theme.palette.neutral[160]
                        : theme.palette.neutral[20],
                  },
                }}
              >
                {category.title}
              </FilterButton>
            ))}

            {selectedSellerCategory && (
              <IconButton
                aria-label="toast-close"
                size="small"
                onClick={handleClearFilters}
              >
                <CloseIcon
                  sx={{
                    width: 16,
                    height: 16,
                    color: theme.palette.neutral[60],
                    marginLeft: theme.spacing(1),
                  }}
                />
              </IconButton>
            )}
          </Stack>

          {/* Sorting */}
          <FilterButton>Latest</FilterButton>
        </Stack>
      </Stack>

      <Stack gap={6}>
        {adSlots.length > 0 ? (
          <Grid container spacing={3} columns={12} width={"100%"}>
            {adSlots.map((ad: IExtendedAdSlot) => (
              <Grid key={`ad-${ad.id}`} item xs={10} md={6} lg={3}>
                <Link
                  href={replacePathKeys(PATH.creatorId, {
                    creatorId: ad.id,
                  })}
                >
                  <SellerCard
                    imageUrl={ad.image_url}
                    title={ad.title}
                    priceInUsd={ad.base_price_in_usd}
                    adTypeInSeconds={ad.ad_duration}
                    views={ad.analytics?.views_daily ?? 0}
                    viewTimeframe={ETimeframe.DAILY}
                    endDate={ad.bidding_end_date}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography sx={theme.typography.base.lg}>
            No ad placements found.
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default MarketplacePage;
