"use client";

import { AdSlotCard } from "@/components";
import { PATH, replacePathKeys } from "@/constants/paths";
import { useCreatorAdSlots } from "@/hooks/creators/useCreatorAdSlots";
import { useStore } from "@/store";
import { IAdSlot } from "@/types/ad-slots.types";
import {
  Tab as BaseTab,
  Tabs as BaseTabs,
  Box,
  Grid,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const Tabs = styled(BaseTabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.neutral[0],
  },

  "& .Mui-selected": {
    color: `${theme.palette.neutral[0]} !important`,
  },
}));

const Tab = styled(BaseTab)(({ theme }) => ({
  ...theme.typography.base.md,
  color: theme.palette.neutral[60],
  padding: theme.spacing(3, 0),
  margin: theme.spacing(0, 2),
}));

export const CreatorContent = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const { creator } = useStore();
  const { creatorAdSlots } = useCreatorAdSlots(creator?.id || "");

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        justifyContent: "center",
        marginTop: theme.spacing(2),
        padding: theme.spacing(4),
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          borderBottom: `1px solid ${theme.palette.neutral[120]}`,
        }}
      >
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Ad Placements" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
          <Tab label="Analytics" {...a11yProps(2)} />
          <Tab label="Social Feed" {...a11yProps(3)} />
          <Tab label="Promo Codes" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={selectedTab} index={0}>
        <Stack alignItems={"center"}>
          {creatorAdSlots.length > 0 && !!creator ? (
            <Grid container spacing={3} columns={12} width={"100%"}>
              {creatorAdSlots.map((ad: IAdSlot) => (
                <Grid key={`ad-${ad.id}`} item xs={10} md={6} lg={3}>
                  <Link
                    href={replacePathKeys(PATH.creatorItem, {
                      creatorId: creator.id,
                      itemId: ad.id,
                    })}
                  >
                    <AdSlotCard
                      imageUrl={ad.image_url}
                      title={ad.title}
                      adType={ad.ad_type}
                      adDuration={ad.ad_duration}
                      basePriceInUsd={ad.base_price_in_usd}
                      pricingType={ad.pricing_type}
                      biddingStartDate={ad.bidding_start_date}
                      biddingEndDate={ad.bidding_end_date}
                      tradingStartDate={ad.trading_start_date}
                      tradingEndDate={ad.trading_end_date}
                      contentStartDate={ad.content_start_date}
                      contentEndDate={ad.content_end_date}
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
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        Profile
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        Analytics
      </TabPanel>
      <TabPanel value={selectedTab} index={3}>
        Social Feed
      </TabPanel>
      <TabPanel value={selectedTab} index={4}>
        Promo Codes
      </TabPanel>
    </Stack>
  );
};
